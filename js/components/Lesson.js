import { units } from '../data/units.js';
import { AudioButton } from './AudioButton.js';
import { ProgressBar } from './ProgressBar.js';
import { loadUnitContent, applyContentOverlay } from '../i18n/index.js';

export const Lesson = {
  template: `
    <div v-if="unit">
      <div class="lesson-header">
        <div class="lesson-breadcrumb">
          <router-link to="/">{{ t('lesson.breadcrumbHome') }}</router-link> / {{ t('lesson.unit', { id: unit.id }) }}
        </div>
        <h1>{{ unit.title }}</h1>
        <p class="text-muted">{{ unit.description }}</p>
      </div>

      <div class="lesson-tabs">
        <button class="lesson-tab" :class="{ active: tab === 'theory' }" @click="tab = 'theory'">{{ t('lesson.tab.theory') }}</button>
        <button class="lesson-tab" :class="{ active: tab === 'exercises' }" @click="tab = 'exercises'">{{ t('lesson.tab.exercises') }}</button>
        <button class="lesson-tab" :class="{ active: tab === 'vocabulary' }" @click="tab = 'vocabulary'">{{ t('lesson.tab.vocabulary') }}</button>
        <button class="lesson-tab" :class="{ active: tab === 'flashcards' }" @click="tab = 'flashcards'">{{ t('lesson.tab.flashcards') }}</button>
      </div>

      <!-- Theory Tab -->
      <div v-if="tab === 'theory'" class="theory-content">
        <div v-for="(section, i) in unit.theory" :key="i">
          <h3 v-if="section.heading">{{ section.heading }}</h3>
          <p v-if="section.text" v-html="section.text"></p>

          <div v-if="section.note" class="grammar-note">{{ section.note }}</div>

          <div v-if="section.table" class="grammar-table-wrap">
            <table class="grammar-table">
              <thead>
                <tr><th v-for="h in section.table.headers" :key="h">{{ h }}</th></tr>
              </thead>
              <tbody>
                <tr v-for="(row, ri) in section.table.rows" :key="ri">
                  <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="section.examples" v-for="(ex, ei) in section.examples" :key="ei" class="example-sentence">
            <audio-button :text="ex.pt"></audio-button>
            <div>
              <div class="example-pt">{{ ex.pt }}</div>
              <div class="example-ru">{{ ex.ru }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Exercises Tab -->
      <div v-if="tab === 'exercises'">
        <div v-if="!exerciseStarted" class="text-center" style="padding:2rem 0">
          <p v-html="t('lesson.exerciseCount', { count: unit.exercises.length })"></p>
          <progress-bar :percent="exercisePercent" :show-text="true" class="mt-1 mb-2"></progress-bar>
          <button class="btn btn-primary btn-lg" @click="startExercises">
            {{ exercisePercent > 0 && exercisePercent < 100 ? t('lesson.continue') : exercisePercent >= 100 ? t('lesson.retry') : t('lesson.start') }}
          </button>
        </div>

        <div v-else-if="currentExercise">
          <div class="exercise-counter">
            {{ t('lesson.question', { current: currentExerciseIdx + 1, total: unit.exercises.length }) }}
          </div>
          <progress-bar :percent="((currentExerciseIdx) / unit.exercises.length) * 100"></progress-bar>

          <!-- Multiple Choice -->
          <div v-if="currentExercise.type === 'choice'" class="exercise-container">
            <div class="exercise-question" v-html="currentExercise.question"></div>
            <div class="choice-grid">
              <button v-for="(opt, oi) in currentExercise.options" :key="oi"
                class="choice-btn"
                :class="{
                  correct: answered && oi === currentExercise.correct,
                  wrong: answered && selectedAnswer === oi && oi !== currentExercise.correct,
                  disabled: answered
                }"
                @click="answerChoice(oi)">
                {{ opt }}
              </button>
            </div>
          </div>

          <!-- Fill in the blank -->
          <div v-if="currentExercise.type === 'fill'" class="exercise-container">
            <div class="exercise-question" v-html="currentExercise.question"></div>
            <div class="exercise-input-row">
              <input class="input" v-model="textAnswer" @keyup.enter="answerFill"
                :disabled="answered" :placeholder="t('lesson.enterAnswer')" ref="fillInput"
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
              <button class="btn btn-primary" @click="answerFill" :disabled="answered || !textAnswer.trim()">
                {{ t('lesson.check') }}
              </button>
            </div>
          </div>

          <!-- Match -->
          <div v-if="currentExercise.type === 'match'" class="exercise-container">
            <div class="exercise-question" v-html="currentExercise.question"></div>
            <div class="match-grid">
              <div class="match-column">
                <button v-for="(item, li) in matchLeft" :key="'l'+li"
                  class="match-item"
                  :class="{
                    selected: matchSelectedLeft === li,
                    matched: matchPairs[li] !== undefined,
                    correct: answered && matchPairs[li] !== undefined && isMatchPairCorrect(li),
                    wrong: answered && matchPairs[li] !== undefined && !isMatchPairCorrect(li)
                  }"
                  @click="selectMatchLeft(li)" :disabled="answered">
                  {{ item }}
                </button>
              </div>
              <div class="match-column">
                <button v-for="(item, ri) in matchRight" :key="'r'+ri"
                  class="match-item"
                  :class="{
                    selected: matchSelectedRight === ri,
                    matched: matchRightUsed[ri],
                    correct: answered && matchRightUsed[ri] && isMatchRightCorrect(ri),
                    wrong: answered && matchRightUsed[ri] && !isMatchRightCorrect(ri)
                  }"
                  @click="selectMatchRight(ri)" :disabled="answered">
                  {{ item }}
                </button>
              </div>
            </div>
            <button v-if="Object.keys(matchPairs).length === (currentExercise.pairs || []).length && !answered"
              class="btn btn-primary mt-1" @click="answerMatch">
              {{ t('lesson.check') }}
            </button>
          </div>

          <!-- Order -->
          <div v-if="currentExercise.type === 'order'" class="exercise-container">
            <div class="exercise-question" v-html="currentExercise.question"></div>
            <div class="order-answer" :class="{ empty: !orderedWords.length }">
              <span v-if="!orderedWords.length" class="text-muted">{{ t('lesson.clickWords') }}</span>
              <button v-for="(word, wi) in orderedWords" :key="'o'+wi"
                class="order-word placed" @click="removeOrderWord(wi)" :disabled="answered">
                {{ word }}
              </button>
            </div>
            <div class="order-bank">
              <button v-for="(word, wi) in orderBank" :key="'b'+wi"
                class="order-word"
                :class="{ used: orderUsed[wi] }"
                @click="placeOrderWord(wi)" :disabled="answered || orderUsed[wi]">
                {{ word }}
              </button>
            </div>
            <button v-if="orderedWords.length === (orderBank || []).length && !answered"
              class="btn btn-primary mt-1" @click="answerOrder">
              {{ t('lesson.check') }}
            </button>
          </div>

          <!-- Translation -->
          <div v-if="currentExercise.type === 'translate'" class="exercise-container">
            <div class="exercise-question">
              {{ t('lesson.translatePrompt') }} <strong>{{ currentExercise.source }}</strong>
              <audio-button :text="currentExercise.direction === 'pt-ru' ? currentExercise.source : ''" v-if="currentExercise.direction === 'pt-ru'"></audio-button>
            </div>
            <div class="exercise-input-row">
              <input class="input" v-model="textAnswer" @keyup.enter="answerTranslate"
                :disabled="answered" :placeholder="currentExercise.direction === 'pt-ru' ? t('lesson.translateToRu') : t('lesson.translateToPt')" ref="translateInput"
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
              <button class="btn btn-primary" @click="answerTranslate" :disabled="answered || !textAnswer.trim()">
                {{ t('lesson.check') }}
              </button>
            </div>
          </div>

          <!-- Feedback -->
          <div v-if="answered" class="exercise-feedback" :class="lastCorrect ? 'correct' : 'wrong'">
            <template v-if="lastCorrect">{{ t('lesson.correct') }}</template>
            <template v-else>
              {{ t('lesson.wrong') }} <strong>{{ correctAnswer }}</strong>
              <div v-if="currentExercise.explanation" style="margin-top:.25rem;font-size:.8125rem">
                {{ currentExercise.explanation }}
              </div>
            </template>
          </div>

          <div v-if="answered" class="mt-2">
            <button class="btn btn-primary" @click="nextExercise">
              {{ currentExerciseIdx + 1 < unit.exercises.length ? t('lesson.next') : t('lesson.results') }}
            </button>
          </div>
        </div>

        <!-- Results -->
        <div v-else-if="exerciseFinished" class="exercise-results card">
          <div class="results-score">{{ Math.round((correctCount / unit.exercises.length) * 100) }}%</div>
          <div class="results-label">{{ resultMessage }}</div>
          <div class="results-detail">
            {{ t('lesson.correctCount', { correct: correctCount, total: unit.exercises.length }) }}
          </div>
          <div class="flex gap-1" style="justify-content:center">
            <button class="btn btn-outline" @click="startExercises">{{ t('lesson.retry') }}</button>
            <button class="btn btn-primary" @click="tab = 'flashcards'">{{ t('lesson.toFlashcards') }}</button>
          </div>
        </div>
      </div>

      <!-- Vocabulary Tab -->
      <div v-if="tab === 'vocabulary'">
        <h2 class="mb-2">{{ t('lesson.vocabTitle', { id: unit.id }) }}</h2>
        <ul class="vocab-list">
          <li v-for="(word, wi) in unit.vocabulary" :key="wi" class="vocab-item">
            <audio-button :text="word.pt"></audio-button>
            <span class="vocab-pt">{{ word.pt }}</span>
            <span class="vocab-ru">{{ word.ru }}</span>
          </li>
        </ul>
      </div>

      <!-- Flashcards Tab -->
      <div v-if="tab === 'flashcards'">
        <p class="text-muted mb-2">{{ t('lesson.flashcardsHint') }}</p>
        <div class="text-center mb-2">
          <router-link to="/flashcards" class="btn btn-outline btn-sm">{{ t('lesson.allFlashcards') }}</router-link>
        </div>
        <div class="flashcard-container" v-if="unit.flashcards && unit.flashcards.length">
          <div class="flashcard-stats">
            <span>{{ t('lesson.cardCount', { current: fcIndex + 1, total: unit.flashcards.length }) }}</span>
          </div>
          <div class="flashcard-wrapper" @click="fcFlipped = !fcFlipped">
            <div class="flashcard" :class="{ flipped: fcFlipped }">
              <div class="flashcard-face flashcard-front">
                <audio-button :text="currentFlashcard.pt" @click.stop></audio-button>
                <div class="flashcard-word mt-1">{{ currentFlashcard.pt }}</div>
                <div class="flashcard-hint" v-if="currentFlashcard.hint">{{ currentFlashcard.hint }}</div>
              </div>
              <div class="flashcard-face flashcard-back">
                <div class="flashcard-translation">{{ currentFlashcard.ru }}</div>
                <div class="flashcard-example" v-if="currentFlashcard.example">{{ currentFlashcard.example }}</div>
              </div>
            </div>
          </div>
          <div v-if="fcFlipped" class="flashcard-rating">
            <button class="rating-btn again" @click="rateCard(0)">{{ t('rating.again') }}</button>
            <button class="rating-btn hard" @click="rateCard(1)">{{ t('rating.hard') }}</button>
            <button class="rating-btn good" @click="rateCard(2)">{{ t('rating.good') }}</button>
            <button class="rating-btn easy" @click="rateCard(3)">{{ t('rating.easy') }}</button>
          </div>
        </div>
        <div v-else class="flashcard-empty">
          <p>{{ t('lesson.noFlashcards') }}</p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="lesson-nav">
        <router-link v-if="unit.id > 1" :to="'/lesson/' + (unit.id - 1)" class="btn btn-outline btn-sm">
          &larr; {{ t('lesson.prevUnit', { id: unit.id - 1 }) }}
        </router-link>
        <span v-else></span>
        <router-link v-if="unit.id < 20" :to="'/lesson/' + (unit.id + 1)" class="btn btn-outline btn-sm">
          {{ t('lesson.nextUnit', { id: unit.id + 1 }) }} &rarr;
        </router-link>
      </div>
    </div>
    <div v-else class="text-center mt-3">
      <p>{{ t('lesson.notFound') }}</p>
      <router-link to="/" class="btn btn-primary mt-2">{{ t('lesson.back') }}</router-link>
    </div>
  `,

  components: { AudioButton, ProgressBar },

  inject: ['t', 'lang'],

  props: {
    user: Object,
    progress: Object,
  },

  emits: ['update-progress'],

  data() {
    return {
      translatedUnit: null,
      tab: 'theory',
      // Exercises
      exerciseStarted: false,
      exerciseFinished: false,
      currentExerciseIdx: 0,
      selectedAnswer: null,
      textAnswer: '',
      answered: false,
      lastCorrect: false,
      correctAnswer: '',
      correctCount: 0,
      // Match exercise
      matchSelectedLeft: null,
      matchSelectedRight: null,
      matchPairs: {},
      matchLeft: [],
      matchRight: [],
      matchRightMap: {},
      // Order exercise
      orderedWords: [],
      orderBank: [],
      orderUsed: {},
      // Flashcards
      fcIndex: 0,
      fcFlipped: false,
    };
  },

  computed: {
    unit() {
      return this.translatedUnit;
    },
    currentExercise() {
      if (!this.unit || !this.exerciseStarted || this.exerciseFinished) return null;
      return this.unit.exercises[this.currentExerciseIdx] || null;
    },
    exercisePercent() {
      const p = (this.progress || {})[this.unit && this.unit.id];
      if (!p || !p.exercisesTotal) return 0;
      return Math.round((p.exercisesCompleted / p.exercisesTotal) * 100);
    },
    currentFlashcard() {
      if (!this.unit || !this.unit.flashcards || !this.unit.flashcards.length) return {};
      return this.unit.flashcards[this.fcIndex] || {};
    },
    matchRightUsed() {
      const used = {};
      for (const r of Object.values(this.matchPairs)) {
        used[r] = true;
      }
      return used;
    },
    resultMessage() {
      const pct = (this.correctCount / this.unit.exercises.length) * 100;
      if (pct >= 90) return this.t('result.excellent');
      if (pct >= 70) return this.t('result.good');
      if (pct >= 50) return this.t('result.ok');
      return this.t('result.poor');
    },
  },

  watch: {
    '$route.params.id'() {
      this.resetState();
      this.loadTranslatedUnit();
    },
  },

  async created() {
    await this.loadTranslatedUnit();
  },

  methods: {
    async loadTranslatedUnit() {
      const id = parseInt(this.$route.params.id);
      const baseUnit = units.find(u => u.id === id) || null;
      if (!baseUnit) {
        this.translatedUnit = null;
        return;
      }
      const currentLang = this.lang();
      const overlay = await loadUnitContent(currentLang, id);
      this.translatedUnit = applyContentOverlay(baseUnit, overlay);
    },

    resetState() {
      this.tab = 'theory';
      this.exerciseStarted = false;
      this.exerciseFinished = false;
      this.currentExerciseIdx = 0;
      this.correctCount = 0;
      this.answered = false;
      this.fcIndex = 0;
      this.fcFlipped = false;
    },

    startExercises() {
      this.exerciseStarted = true;
      this.exerciseFinished = false;
      this.currentExerciseIdx = 0;
      this.correctCount = 0;
      this.answered = false;
      this.selectedAnswer = null;
      this.textAnswer = '';
      this.resetMatchOrder();
      this.initExerciseType();
    },

    resetMatchOrder() {
      this.matchSelectedLeft = null;
      this.matchSelectedRight = null;
      this.matchPairs = {};
      this.matchLeft = [];
      this.matchRight = [];
      this.matchRightMap = {};
      this.orderedWords = [];
      this.orderBank = [];
      this.orderUsed = {};
    },

    initExerciseType() {
      const ex = this.unit.exercises[this.currentExerciseIdx];
      if (!ex) return;
      if (ex.type === 'match' && ex.pairs) {
        this.matchLeft = ex.pairs.map(p => p.left);
        const rights = ex.pairs.map(p => p.right);
        // Shuffle right column
        const shuffled = [...rights];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        this.matchRight = shuffled;
        // Map: shuffled index -> original index
        this.matchRightMap = {};
        shuffled.forEach((val, si) => {
          const origIdx = rights.indexOf(val);
          this.matchRightMap[si] = origIdx;
        });
      }
      if (ex.type === 'order' && ex.words) {
        const shuffled = [...ex.words];
        // Ensure shuffled differs from correct order
        let attempts = 0;
        do {
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          attempts++;
        } while (shuffled.join(' ') === ex.words.join(' ') && attempts < 10);
        this.orderBank = shuffled;
        this.orderUsed = {};
        this.orderedWords = [];
      }
    },

    answerChoice(idx) {
      if (this.answered) return;
      this.selectedAnswer = idx;
      this.answered = true;
      this.lastCorrect = idx === this.currentExercise.correct;
      this.correctAnswer = this.currentExercise.options[this.currentExercise.correct];
      if (this.lastCorrect) this.correctCount++;
    },

    answerFill() {
      if (this.answered || !this.textAnswer.trim()) return;
      this.answered = true;
      const userAnswer = this.textAnswer.trim().toLowerCase();
      const accepts = Array.isArray(this.currentExercise.answer)
        ? this.currentExercise.answer
        : [this.currentExercise.answer];
      this.lastCorrect = accepts.some(a => this.normalize(a) === this.normalize(userAnswer));
      this.correctAnswer = accepts[0];
      if (this.lastCorrect) this.correctCount++;
    },

    answerTranslate() {
      if (this.answered || !this.textAnswer.trim()) return;
      this.answered = true;
      const userAnswer = this.textAnswer.trim().toLowerCase();
      const accepts = Array.isArray(this.currentExercise.answer)
        ? this.currentExercise.answer
        : [this.currentExercise.answer];
      this.lastCorrect = accepts.some(a => this.normalize(a) === this.normalize(userAnswer));
      this.correctAnswer = accepts[0];
      if (this.lastCorrect) this.correctCount++;
    },

    // Match methods
    selectMatchLeft(idx) {
      if (this.answered || this.matchPairs[idx] !== undefined) return;
      this.matchSelectedLeft = idx;
      if (this.matchSelectedRight !== null) this.createMatchPair();
    },

    selectMatchRight(idx) {
      if (this.answered || this.matchRightUsed[idx]) return;
      this.matchSelectedRight = idx;
      if (this.matchSelectedLeft !== null) this.createMatchPair();
    },

    createMatchPair() {
      const l = this.matchSelectedLeft;
      const r = this.matchSelectedRight;
      if (l === null || r === null) return;
      this.matchPairs = { ...this.matchPairs, [l]: r };
      this.matchSelectedLeft = null;
      this.matchSelectedRight = null;
    },

    isMatchPairCorrect(leftIdx) {
      const rightIdx = this.matchPairs[leftIdx];
      if (rightIdx === undefined) return false;
      return this.matchRightMap[rightIdx] === leftIdx;
    },

    isMatchRightCorrect(rightIdx) {
      for (const [l, r] of Object.entries(this.matchPairs)) {
        if (parseInt(r) === rightIdx) return this.matchRightMap[rightIdx] === parseInt(l);
      }
      return false;
    },

    answerMatch() {
      if (this.answered) return;
      this.answered = true;
      let allCorrect = true;
      for (let i = 0; i < this.matchLeft.length; i++) {
        if (!this.isMatchPairCorrect(i)) { allCorrect = false; break; }
      }
      this.lastCorrect = allCorrect;
      this.correctAnswer = this.currentExercise.pairs.map(p => p.left + ' \u2192 ' + p.right).join(', ');
      if (this.lastCorrect) this.correctCount++;
    },

    // Order methods
    placeOrderWord(bankIdx) {
      if (this.answered || this.orderUsed[bankIdx]) return;
      this.orderedWords = [...this.orderedWords, this.orderBank[bankIdx]];
      this.orderUsed = { ...this.orderUsed, [bankIdx]: true };
    },

    removeOrderWord(answerIdx) {
      if (this.answered) return;
      const word = this.orderedWords[answerIdx];
      // Find the bank index for this word
      const bankIdx = this.orderBank.findIndex((w, i) => w === word && this.orderUsed[i]);
      if (bankIdx !== -1) {
        const newUsed = { ...this.orderUsed };
        delete newUsed[bankIdx];
        this.orderUsed = newUsed;
      }
      this.orderedWords = this.orderedWords.filter((_, i) => i !== answerIdx);
    },

    answerOrder() {
      if (this.answered) return;
      this.answered = true;
      const userAnswer = this.orderedWords.join(' ');
      const accepts = Array.isArray(this.currentExercise.answer)
        ? this.currentExercise.answer
        : [this.currentExercise.answer];
      this.lastCorrect = accepts.some(a => this.normalize(a) === this.normalize(userAnswer));
      this.correctAnswer = accepts[0];
      if (this.lastCorrect) this.correctCount++;
    },

    normalize(str) {
      return str.toLowerCase().trim()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, '').replace(/\s+/g, ' ');
    },

    nextExercise() {
      if (this.currentExerciseIdx + 1 < this.unit.exercises.length) {
        this.currentExerciseIdx++;
        this.answered = false;
        this.selectedAnswer = null;
        this.textAnswer = '';
        this.resetMatchOrder();
        this.$nextTick(() => {
          this.initExerciseType();
          const input = this.$refs.fillInput || this.$refs.translateInput;
          if (input) input.focus();
        });
      } else {
        this.exerciseFinished = true;
        this.exerciseStarted = false;
        this.$emit('update-progress', {
          unitNumber: this.unit.id,
          data: {
            exercisesCompleted: this.correctCount,
            exercisesTotal: this.unit.exercises.length,
            score: Math.round((this.correctCount / this.unit.exercises.length) * 100),
            completed: (this.correctCount / this.unit.exercises.length) >= 0.7,
          },
        });
      }
    },

    rateCard(quality) {
      this.fcFlipped = false;
      if (this.fcIndex + 1 < this.unit.flashcards.length) {
        this.fcIndex++;
      } else {
        this.fcIndex = 0;
      }
    },
  },
};
