// Web Speech API TTS wrapper for European Portuguese (pt-PT)

let ptVoice = null;
let voicesLoaded = false;

function loadVoices() {
  return new Promise(function(resolve) {
    var voices = speechSynthesis.getVoices();
    if (voices.length) {
      resolve(voices);
      return;
    }
    // Some browsers (especially iOS Safari) may not fire voiceschanged,
    // so add a timeout to prevent hanging forever
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
  if (!('speechSynthesis' in window)) {
    console.warn('Web Speech API not supported');
    return false;
  }

  const voices = await loadVoices();
  voicesLoaded = true;

  // Prefer pt-PT, fall back to any Portuguese voice
  ptVoice = voices.find(v => v.lang === 'pt-PT')
    || voices.find(v => v.lang.startsWith('pt-'))
    || voices.find(v => v.lang.startsWith('pt'))
    || null;

  if (ptVoice) {
    console.log('TTS voice:', ptVoice.name, ptVoice.lang);
  } else {
    console.warn('No Portuguese voice found. Available:', voices.map(v => v.lang));
  }
  return !!ptVoice;
}

export function speak(text, rate) {
  if (rate === undefined || rate === null) rate = 0.9;
  if (!voicesLoaded || !ptVoice) {
    console.warn('TTS not ready');
    return Promise.resolve();
  }

  return new Promise(function(resolve) {
    speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = ptVoice;
    utterance.lang = ptVoice.lang;
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.onend = function() { clearInterval(resumeTimer); resolve(); };
    utterance.onerror = function() { clearInterval(resumeTimer); resolve(); };
    speechSynthesis.speak(utterance);

    // iOS Safari workaround: speechSynthesis can pause unexpectedly.
    // Periodically call resume() to keep it going.
    var resumeTimer = setInterval(function() {
      if (!speechSynthesis.speaking) {
        clearInterval(resumeTimer);
      } else {
        speechSynthesis.resume();
      }
    }, 5000);

    // Safety timeout: resolve after 15s even if onend/onerror never fires
    setTimeout(function() { clearInterval(resumeTimer); resolve(); }, 15000);
  });
}

export function isTTSAvailable() {
  return voicesLoaded && !!ptVoice;
}
