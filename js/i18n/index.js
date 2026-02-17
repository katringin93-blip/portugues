/**
 * Lightweight i18n service for the Portuguese course.
 * No build tools — pure ES module with dynamic imports.
 */

const LANG_KEY = 'pt_course_lang';
const SUPPORTED = ['uk', 'ru', 'en'];
const DEFAULT = 'ru';

let currentLang = DEFAULT;
let uiStrings = {};
const contentCache = {};

export function getStoredLang() {
  try {
    const lang = localStorage.getItem(LANG_KEY);
    return SUPPORTED.includes(lang) ? lang : DEFAULT;
  } catch (e) {
    return DEFAULT;
  }
}

export function setLang(lang) {
  if (!SUPPORTED.includes(lang)) return;
  currentLang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
}

export function getLang() {
  return currentLang;
}

export async function loadUIStrings(lang) {
  try {
    const mod = await import('./ui/' + lang + '.js');
    uiStrings = mod.default || mod.strings;
    currentLang = lang;
  } catch (e) {
    console.warn('Failed to load UI strings for', lang, '— falling back to ru');
    if (lang !== DEFAULT) {
      await loadUIStrings(DEFAULT);
    }
  }
}

/**
 * Translate a UI string key with optional parameter interpolation.
 * t('lesson.question', { current: 3, total: 10 }) → "Вопрос 3 из 10"
 */
export function t(key, params) {
  let str = uiStrings[key];
  if (str === undefined) return key;
  if (params) {
    Object.keys(params).forEach(function(k) {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
    });
  }
  return str;
}

/**
 * Load content translation overlay for a specific unit.
 * Returns null for Russian (content is already embedded in units.js).
 */
export async function loadUnitContent(lang, unitId) {
  if (lang === 'ru') return null; // Russian is the default in units.js
  const cacheKey = lang + '_' + unitId;
  if (contentCache[cacheKey]) return contentCache[cacheKey];
  try {
    const mod = await import('./content/' + lang + '/unit' + unitId + '.js');
    contentCache[cacheKey] = mod.default || mod.content;
    return contentCache[cacheKey];
  } catch (e) {
    console.warn('Content translation not found for ' + lang + '/unit' + unitId);
    return null;
  }
}

/**
 * Apply a content translation overlay onto a base unit object.
 * Only replaces fields that exist in the overlay.
 */
export function applyContentOverlay(unit, overlay) {
  if (!overlay) return unit;
  var result = Object.assign({}, unit);

  if (overlay.title) result.title = overlay.title;
  if (overlay.description) result.description = overlay.description;

  // Theory overlay
  if (overlay.theory && unit.theory) {
    result.theory = unit.theory.map(function(section, i) {
      var over = overlay.theory[i];
      if (!over) return section;
      var s = Object.assign({}, section);
      if (over.heading) s.heading = over.heading;
      if (over.text) s.text = over.text;
      if (over.note) s.note = over.note;
      if (over.table && section.table) {
        s.table = Object.assign({}, section.table);
        if (over.table.headers) s.table.headers = over.table.headers;
        if (over.table.rows) s.table.rows = over.table.rows;
      }
      if (over.examples && section.examples) {
        s.examples = section.examples.map(function(ex, ei) {
          var oe = over.examples[ei];
          if (!oe) return ex;
          return Object.assign({}, ex, oe);
        });
      }
      return s;
    });
  }

  // Exercise overlay (question, explanation, source text)
  if (overlay.exercises && unit.exercises) {
    result.exercises = unit.exercises.map(function(ex, i) {
      var over = overlay.exercises[i];
      if (!over) return ex;
      return Object.assign({}, ex, over);
    });
  }

  // Vocabulary overlay (translations)
  if (overlay.vocabulary && unit.vocabulary) {
    result.vocabulary = unit.vocabulary.map(function(word, i) {
      var over = overlay.vocabulary[i];
      if (!over) return word;
      return Object.assign({}, word, over);
    });
  }

  // Flashcard overlay (translations, hints)
  if (overlay.flashcards && unit.flashcards) {
    result.flashcards = unit.flashcards.map(function(card, i) {
      var over = overlay.flashcards[i];
      if (!over) return card;
      return Object.assign({}, card, over);
    });
  }

  return result;
}

export { SUPPORTED as SUPPORTED_LANGS };
