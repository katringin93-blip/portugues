// Cloudflare Pages Function — Edge TTS proxy
// Voice: pt-PT-RaquelNeural (Microsoft neural, European Portuguese)
// Endpoint: GET /api/tts?text=...&rate=0.9
//
// Implements the Edge TTS WebSocket protocol directly (no npm packages needed).
// Cloudflare Workers use fetch() with Upgrade:websocket for outgoing WS connections.

export async function onRequest(context) {
  var request = context.request;

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
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  // Convert rate float (0.9) to Edge TTS format ("-10%")
  var rateParam = parseFloat(url.searchParams.get('rate') || '0.9');
  var ratePercent = Math.round((rateParam - 1) * 100);
  var rateStr = (ratePercent >= 0 ? '+' : '') + ratePercent + '%';

  try {
    var audioBuffer = await synthesizeEdgeTTS(text.substring(0, 300), rateStr);
    return new Response(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=604800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error('Edge TTS error:', err.message || err);
    return new Response(JSON.stringify({ error: err.message || 'TTS synthesis failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}

// ---- Edge TTS WebSocket protocol ----
// Docs: https://github.com/rany2/edge-tts (Python reference implementation)

var EDGE_TTS_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
var EDGE_TTS_VOICE = 'pt-PT-RaquelNeural';
var OUTPUT_FORMAT = 'audio-24khz-48kbitrate-mono-mp3';

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function uuid() {
  return crypto.randomUUID().replace(/-/g, '');
}

function buildSpeechConfig() {
  var headers =
    'X-Timestamp:' + new Date().toISOString() + '\r\n' +
    'Content-Type:application/json; charset=utf-8\r\n' +
    'Path:speech.config\r\n\r\n';
  var body = JSON.stringify({
    context: {
      synthesis: {
        audio: {
          metadataoptions: {
            sentenceBoundaryEnabled: 'false',
            wordBoundaryEnabled: 'true',
          },
          outputFormat: OUTPUT_FORMAT,
        },
      },
    },
  });
  return headers + body;
}

function buildSsmlMessage(text, rate) {
  var ssml =
    "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='pt-PT'>" +
    "<voice name='" + EDGE_TTS_VOICE + "'>" +
    "<prosody rate='" + rate + "'>" + escapeXml(text) + '</prosody>' +
    '</voice></speak>';

  var headers =
    'X-RequestId:' + uuid() + '\r\n' +
    'Content-Type:application/ssml+xml\r\n' +
    'X-Timestamp:' + new Date().toISOString() + '\r\n' +
    'Path:ssml\r\n\r\n';

  return headers + ssml;
}

async function synthesizeEdgeTTS(text, rate) {
  var connectionId = uuid();
  var wsUrl =
    'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1' +
    '?TrustedClientToken=' + EDGE_TTS_TOKEN +
    '&ConnectionId=' + connectionId;

  // In Cloudflare Workers, outgoing WebSocket connections use fetch() with Upgrade header.
  // Edge TTS requires browser-like headers (Origin + User-Agent) or it rejects the connection.
  var resp = await fetch(wsUrl, {
    headers: {
      'Upgrade': 'websocket',
      'Origin': 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
    },
  });

  if (resp.status !== 101) {
    throw new Error('WebSocket upgrade failed: status=' + resp.status);
  }

  var ws = resp.webSocket;
  if (!ws) {
    throw new Error('WebSocket object is null after upgrade');
  }
  ws.accept();

  return new Promise(function(resolve, reject) {
    var audioChunks = [];
    var done = false;

    var timeout = setTimeout(function() {
      if (!done) {
        done = true;
        try { ws.close(); } catch (e) {}
        reject(new Error('TTS timeout after 15s'));
      }
    }, 15000);

    ws.addEventListener('message', function(event) {
      if (done) return;

      if (typeof event.data === 'string') {
        // Text frame — check for end-of-turn signal
        if (event.data.includes('Path:turn.end')) {
          done = true;
          clearTimeout(timeout);
          try { ws.close(); } catch (e) {}

          if (audioChunks.length === 0) {
            reject(new Error('No audio data received'));
            return;
          }

          // Concatenate all audio chunks into a single ArrayBuffer
          var totalLen = audioChunks.reduce(function(sum, c) { return sum + c.byteLength; }, 0);
          var result = new Uint8Array(totalLen);
          var offset = 0;
          audioChunks.forEach(function(chunk) {
            result.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
          });
          resolve(result.buffer);
        }
        // Other text frames (turn.start, response, metadata) — ignore
      } else {
        // Binary frame: [2 bytes header length][header bytes][audio data]
        // Only collect frames with Path:audio header (skip metadata frames)
        var data = event.data; // ArrayBuffer
        if (data.byteLength < 2) return;
        var view = new DataView(data);
        var headerLen = view.getUint16(0); // big-endian uint16 big-endian
        if (2 + headerLen > data.byteLength) return;
        var headerStr = new TextDecoder().decode(new Uint8Array(data, 2, headerLen));
        if (!headerStr.includes('Path:audio')) return; // skip non-audio frames
        var audioStart = 2 + headerLen;
        if (audioStart < data.byteLength) {
          audioChunks.push(data.slice(audioStart));
        }
      }
    });

    ws.addEventListener('error', function(err) {
      if (!done) {
        done = true;
        clearTimeout(timeout);
        var msg = (err && err.message) ? err.message : 'WebSocket connection error';
        console.error('Edge TTS WebSocket error:', msg);
        reject(new Error(msg));
      }
    });

    ws.addEventListener('close', function(event) {
      if (!done) {
        done = true;
        clearTimeout(timeout);
        if (audioChunks.length > 0) {
          // Got audio but no turn.end — still resolve with what we have
          var totalLen = audioChunks.reduce(function(sum, c) { return sum + c.byteLength; }, 0);
          var result = new Uint8Array(totalLen);
          var offset = 0;
          audioChunks.forEach(function(chunk) {
            result.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
          });
          resolve(result.buffer);
        } else {
          var reason = 'WebSocket closed without audio (code=' + event.code + ')';
          console.error('Edge TTS:', reason);
          reject(new Error(reason));
        }
      }
    });

    // Send messages after attaching listeners
    ws.send(buildSpeechConfig());
    ws.send(buildSsmlMessage(text, rate));
  });
}
