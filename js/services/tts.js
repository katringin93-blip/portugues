// TTS for European Portuguese (pt-PT)
// Primary: Edge TTS via Netlify Function (neural pt-PT-RaquelNeural voice)
// Fallback: Web Speech API (system voices)

var webVoice = null;
var anyPtVoice = null;
var hasPtPTVoice = false;

// In-memory audio cache: "text|rate" → blobURL
var audioCache = {};

// ---- Web Speech API setup ----

function loadVoices() {
  return new Promise(function(resolve) {
    var voices = speechSynthesis.getVoices();
    if (voices.length) {
      resolve(voices);
      return;
    }
    var resolved = false;
    var timer = setTimeout(function() {
      if (!resolved) {
        resolved = true;
        resolve(speechSynthesis.getVoices());
      }
    }, 3000);
    speechSynthesis.onvoiceschanged = function() {
      if (!resolved) {
        resolved = true;
        clearTimeout(timer);
        resolve(speechSynthesis.getVoices());
      }
    };
  });
}

export async function initTTS() {
  if ('speechSynthesis' in window) {
    var voices = await loadVoices();

    // Best: pt-PT voice
    var ptPT = voices.filter(function(v) { return v.lang === 'pt-PT'; });
    var ptName = voices.filter(function(v) {
      return v.lang.startsWith('pt') && /portugal|european|portugu.s.*europeu/i.test(v.name);
    });
    webVoice = ptPT[0] || ptName[0] || null;
    hasPtPTVoice = !!webVoice;

    // Any Portuguese voice (including pt-BR) as last-resort fallback
    if (!webVoice) {
      anyPtVoice = voices.find(function(v) { return v.lang.startsWith('pt'); }) || null;
    }

    console.log('TTS:', hasPtPTVoice ? 'pt-PT voice: ' + webVoice.name : 'no pt-PT system voice',
      anyPtVoice ? ', fallback: ' + anyPtVoice.name + ' (' + anyPtVoice.lang + ')' : '');
  }
  return true;
}

// ---- Edge TTS via Netlify Function ----

function speakWithEdgeTTS(text, rate) {
  return new Promise(function(resolve, reject) {
    var cacheKey = text + '|' + rate;

    function playBlob(blobUrl) {
      var audio = new Audio(blobUrl);
      var done = false;
      function finish() { if (!done) { done = true; resolve(); } }
      function fail(e) { if (!done) { done = true; reject(e); } }
      audio.onended = finish;
      audio.onerror = fail;
      audio.play().catch(fail);
      setTimeout(finish, 15000);
    }

    // Serve from cache if available
    if (audioCache[cacheKey]) {
      playBlob(audioCache[cacheKey]);
      return;
    }

    // Fetch from Cloudflare Pages Function (relative URL works on any host)
    var apiUrl = '/api/tts?text=' + encodeURIComponent(text.substring(0, 300)) + '&rate=' + rate;

    fetch(apiUrl).then(function(res) {
      if (!res.ok) throw new Error('TTS API ' + res.status);
      return res.blob();
    }).then(function(blob) {
      if (blob.size < 100) throw new Error('TTS response too small');
      var blobUrl = URL.createObjectURL(blob);
      audioCache[cacheKey] = blobUrl;
      playBlob(blobUrl);
    }).catch(function(err) {
      console.warn('Edge TTS failed:', err.message);
      reject(err);
    });
  });
}

// ---- Web Speech API ----

function speakWithWebAPI(text, rate, voice) {
  return new Promise(function(resolve) {
    speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = 'pt-PT';
    utterance.rate = rate || 0.9;
    utterance.pitch = 1;
    utterance.onend = function() { clearInterval(resumeTimer); resolve(); };
    utterance.onerror = function() { clearInterval(resumeTimer); resolve(); };
    speechSynthesis.speak(utterance);

    // iOS Safari workaround
    var resumeTimer = setInterval(function() {
      if (!speechSynthesis.speaking) {
        clearInterval(resumeTimer);
      } else {
        speechSynthesis.resume();
      }
    }, 5000);

    setTimeout(function() { clearInterval(resumeTimer); resolve(); }, 15000);
  });
}

// ---- Public API ----

export function speak(text, rate) {
  if (rate === undefined || rate === null) rate = 0.9;
  if (!text) return Promise.resolve();

  // 1. Always try Edge TTS first (pt-PT-RaquelNeural — guaranteed European Portuguese)
  // 2. If Edge TTS fails — fall back to system pt-PT voice, then any Portuguese voice
  return speakWithEdgeTTS(text, rate).catch(function() {
    var fallback = webVoice || anyPtVoice;
    if (fallback) {
      console.log('TTS: falling back to Web Speech API:', fallback.name);
      return speakWithWebAPI(text, rate, fallback);
    }
  });
}

export function isTTSAvailable() {
  return true;
}
