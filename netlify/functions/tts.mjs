import { EdgeTTS } from 'node-edge-tts';
import { readFile, unlink } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export default async function handler(request) {
  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  var url = new URL(request.url);
  var text = url.searchParams.get('text');

  if (!text || text.length > 500) {
    return new Response(JSON.stringify({ error: 'Missing or too long text (max 500 chars)' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Convert rate float (0.9) to Edge TTS format ("-10%")
  var rateParam = parseFloat(url.searchParams.get('rate') || '0.9');
  var ratePercent = Math.round((rateParam - 1) * 100);
  var rateStr = (ratePercent >= 0 ? '+' : '') + ratePercent + '%';

  var tmpPath = join(tmpdir(), 'tts-' + randomUUID() + '.mp3');

  try {
    var tts = new EdgeTTS({
      voice: 'pt-PT-RaquelNeural',
      lang: 'pt-PT',
      rate: rateStr,
      outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
    });

    await tts.ttsPromise(text, tmpPath);
    var buffer = await readFile(tmpPath);
    unlink(tmpPath).catch(function() {});

    return new Response(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=604800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    unlink(tmpPath).catch(function() {});
    console.error('Edge TTS error:', err.message || err);
    return new Response(JSON.stringify({ error: 'TTS synthesis failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export var config = {
  path: '/api/tts',
};
