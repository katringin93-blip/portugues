#!/usr/bin/env node
// Content linter for Portuguese course exercises
// Checks: hint leaks, Cyrillic in EN/UK, direction metadata, overlay completeness
// Run: node validate-exercises.js

import { exercises as ex1 } from './js/data/exercises/unit1.js';
import { exercises as ex2 } from './js/data/exercises/unit2.js';
import { exercises as ex3 } from './js/data/exercises/unit3.js';
import { exercises as ex4 } from './js/data/exercises/unit4.js';
import { exercises as ex5 } from './js/data/exercises/unit5.js';
import { exercises as ex6 } from './js/data/exercises/unit6.js';
import { exercises as ex7 } from './js/data/exercises/unit7.js';
import { exercises as ex8 } from './js/data/exercises/unit8.js';
import { exercises as ex9 } from './js/data/exercises/unit9.js';
import { exercises as ex10 } from './js/data/exercises/unit10.js';
import { exercises as ex11 } from './js/data/exercises/unit11.js';
import { exercises as ex12 } from './js/data/exercises/unit12.js';
import { exercises as ex13 } from './js/data/exercises/unit13.js';
import { exercises as ex14 } from './js/data/exercises/unit14.js';
import { exercises as ex15 } from './js/data/exercises/unit15.js';
import { exercises as ex16 } from './js/data/exercises/unit16.js';
import { exercises as ex17 } from './js/data/exercises/unit17.js';
import { exercises as ex18 } from './js/data/exercises/unit18.js';
import { exercises as ex19 } from './js/data/exercises/unit19.js';
import { exercises as ex20 } from './js/data/exercises/unit20.js';

const baseExercises = [ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9, ex10,
  ex11, ex12, ex13, ex14, ex15, ex16, ex17, ex18, ex19, ex20];

// Dynamic import for overlays
async function loadOverlay(lang, unit) {
  try {
    const mod = await import(`./js/i18n/content/${lang}/unit${unit}.js`);
    return mod.default;
  } catch { return null; }
}

function applyOverlay(base, overlay) {
  if (!overlay || !overlay.exercises) return base;
  return base.map((ex, i) => {
    const over = overlay.exercises[i];
    if (!over) return ex;
    return Object.assign({}, ex, over);
  });
}

// --- Checks ---

const CYRILLIC = /[а-яА-ЯёЁ]/;
const UKRAINIAN_ONLY = /[іІїЇєЄґҐ]/;
const HINT_PARENS = /\([^)]*[\u0400-\u04FF][^)]*\)/; // Parenthetical with Cyrillic
const PT_IN_PARENS = /\([^)]*(o |a |os |as )[a-záàâãéêíóôõúç]+\)/i; // Portuguese article+word in parens
const GRAMMAR_LABEL_HINT = /\((comparativ|superlativ|proclise|ênclise|proclítica|enclítica|проклиз|энклиз|comparativo|superlativo)/i;

const issues = [];

function addIssue(severity, unit, idx, lang, field, message, value) {
  issues.push({ severity, unit, idx, lang, field, message, snippet: String(value).substring(0, 80) });
}

function checkHintLeak(value, unit, idx, lang, field) {
  if (!value || typeof value !== 'string') return;
  if (PT_IN_PARENS.test(value)) {
    addIssue('WARN', unit, idx, lang, field, 'Portuguese word in parentheses (possible hint)', value);
  }
  if (GRAMMAR_LABEL_HINT.test(value)) {
    addIssue('ERROR', unit, idx, lang, field, 'Grammar label hint in answer field', value);
  }
}

function checkCyrillicInLang(value, unit, idx, lang, field) {
  if (!value || typeof value !== 'string') return;
  if (lang === 'en' && CYRILLIC.test(value)) {
    addIssue('ERROR', unit, idx, lang, field, 'Cyrillic text in EN content', value);
  }
  if (lang === 'uk' && CYRILLIC.test(value) && !UKRAINIAN_ONLY.test(value)) {
    // Has Cyrillic but no Ukrainian-specific letters — likely Russian
    // Only flag if the whole string looks Russian (no Ukrainian letters at all)
    const hasUkLetters = UKRAINIAN_ONLY.test(value);
    if (!hasUkLetters && value.length > 3) {
      addIssue('WARN', unit, idx, lang, field, 'Possibly Russian (no Ukrainian letters) in UK content', value);
    }
  }
}

function checkExercise(ex, unit, idx, lang) {
  // Check answer-bearing fields for hint leaks
  if (ex.options) {
    ex.options.forEach((opt, oi) => {
      checkHintLeak(opt, unit, idx, lang, `options[${oi}]`);
    });
  }
  if (ex.pairs) {
    (Array.isArray(ex.pairs) ? ex.pairs : []).forEach((p, pi) => {
      if (p && p.right) checkHintLeak(p.right, unit, idx, lang, `pairs[${pi}].right`);
      if (p && p.left) checkHintLeak(p.left, unit, idx, lang, `pairs[${pi}].left`);
    });
  }

  // Check Cyrillic in non-RU content
  if (lang !== 'ru') {
    checkCyrillicInLang(ex.question, unit, idx, lang, 'question');
    checkCyrillicInLang(ex.explanation, unit, idx, lang, 'explanation');
    checkCyrillicInLang(ex.source, unit, idx, lang, 'source');
    if (ex.options) {
      ex.options.forEach((opt, oi) => {
        checkCyrillicInLang(opt, unit, idx, lang, `options[${oi}]`);
      });
    }
  }

  // Check match pairs format (should be {left, right}, not array)
  if (ex.type === 'match' && ex.pairs) {
    ex.pairs.forEach((p, pi) => {
      if (Array.isArray(p)) {
        addIssue('WARN', unit, idx, lang, `pairs[${pi}]`, 'Match pair is array instead of {left, right}', JSON.stringify(p));
      }
    });
  }
}

async function main() {
  console.log('=== Portuguese Course Content Linter ===\n');

  let totalExercises = 0;

  for (let u = 0; u < 20; u++) {
    const unitNum = u + 1;
    const base = baseExercises[u];
    totalExercises += base.length;

    // Check base (RU)
    base.forEach((ex, idx) => checkExercise(ex, unitNum, idx, 'ru'));

    // Check EN overlay
    const enOverlay = await loadOverlay('en', unitNum);
    if (!enOverlay || !enOverlay.exercises) {
      addIssue('ERROR', unitNum, -1, 'en', 'exercises', 'Missing exercises array in EN overlay', '');
    } else {
      if (enOverlay.exercises.length !== base.length) {
        addIssue('ERROR', unitNum, -1, 'en', 'exercises.length',
          `EN overlay has ${enOverlay.exercises.length} exercises, base has ${base.length}`, '');
      }
      const merged = applyOverlay(base, enOverlay);
      merged.forEach((ex, idx) => checkExercise(ex, unitNum, idx, 'en'));

      // Check for null overlay entries (no translation)
      enOverlay.exercises.forEach((entry, idx) => {
        if (entry === null || entry === undefined) {
          addIssue('INFO', unitNum, idx, 'en', 'overlay', 'Null overlay entry (falls back to RU base)', '');
        }
      });
    }

    // Check UK overlay
    const ukOverlay = await loadOverlay('uk', unitNum);
    if (!ukOverlay || !ukOverlay.exercises) {
      addIssue('ERROR', unitNum, -1, 'uk', 'exercises', 'Missing exercises array in UK overlay', '');
    } else {
      if (ukOverlay.exercises.length !== base.length) {
        addIssue('ERROR', unitNum, -1, 'uk', 'exercises.length',
          `UK overlay has ${ukOverlay.exercises.length} exercises, base has ${base.length}`, '');
      }
      const merged = applyOverlay(base, ukOverlay);
      merged.forEach((ex, idx) => checkExercise(ex, unitNum, idx, 'uk'));

      ukOverlay.exercises.forEach((entry, idx) => {
        if (entry === null || entry === undefined) {
          addIssue('INFO', unitNum, idx, 'uk', 'overlay', 'Null overlay entry (falls back to RU base)', '');
        }
      });
    }
  }

  // --- Report ---
  const errors = issues.filter(i => i.severity === 'ERROR');
  const warnings = issues.filter(i => i.severity === 'WARN');
  const infos = issues.filter(i => i.severity === 'INFO');

  console.log(`Scanned: ${totalExercises} exercises × 3 languages (RU/EN/UK)\n`);

  if (errors.length) {
    console.log(`\x1b[31m✗ ERRORS: ${errors.length}\x1b[0m`);
    errors.forEach(i => {
      console.log(`  [ERROR] Unit ${i.unit}, #${i.idx}, ${i.lang}, ${i.field}: ${i.message}`);
      if (i.snippet) console.log(`          "${i.snippet}"`);
    });
    console.log();
  }

  if (warnings.length) {
    console.log(`\x1b[33m⚠ WARNINGS: ${warnings.length}\x1b[0m`);
    warnings.forEach(i => {
      console.log(`  [WARN]  Unit ${i.unit}, #${i.idx}, ${i.lang}, ${i.field}: ${i.message}`);
      if (i.snippet) console.log(`          "${i.snippet}"`);
    });
    console.log();
  }

  if (infos.length) {
    console.log(`ℹ INFO: ${infos.length} (null overlay entries — expected for Portuguese-only exercises)`);
    console.log();
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('\x1b[32m✓ All checks passed!\x1b[0m\n');
  }

  console.log(`Summary: ${errors.length} errors, ${warnings.length} warnings, ${infos.length} info`);
  process.exit(errors.length > 0 ? 1 : 0);
}

main().catch(err => { console.error(err); process.exit(2); });
