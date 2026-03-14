import { units } from '../data/units.js';
import { AudioButton } from './AudioButton.js';
import { ProgressBar } from './ProgressBar.js';
import { loadUnitContent, applyContentOverlay } from '../i18n/index.js';
import { loadFlashcardStates, saveFlashcardState, sm2 } from '../services/flashcard-engine.js';

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
        <button class="lesson-tab" :class="{ active: tab === 'practice' }" @click="tab = 'practice'">{{ t('lesson.tab.practice') }}</button>
      </div>

      <!-- Theory Tab -->
      <div v-if="tab === 'theory'" class="lesson-body">
        <div class="lesson-main">
          <div class="theory-content">
            <div v-if="unit.lessons && unit.lessons.length > 1" class="sub-lesson-nav">
              <button v-for="(lesson, li) in unit.lessons" :key="li"
                class="sub-lesson-btn" :class="{ active: currentLesson === li }"
                @click="currentLesson = li">
                {{ lesson.title }}
              </button>
            </div>
            <div v-for="(section, i) in displayedTheory" :key="i">
              <h3 v-if="section.heading">{{ section.heading }}</h3>
              <p v-if="section.text" v-html="section.text"></p>
              <div v-if="section.note" class="grammar-note">{{ section.note }}</div>
              <div v-if="section.table" class="grammar-table-wrap">
                <table :class="['grammar-table', section.table.equalCols ? 'equal-cols' : '']">
                  <thead>
                    <tr><th v-for="(h, hi) in section.table.headers" :key="hi">{{ h }}</th></tr>
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

          <!-- Collapsible Vocabulary -->
          <div v-if="unit.vocabulary && unit.vocabulary.length" class="vocab-collapse">
            <button class="vocab-collapse-header" @click="vocabExpanded = !vocabExpanded"
              :aria-expanded="vocabExpanded" aria-controls="vocab-body">
              <span>{{ t('lesson.vocabInline', { count: vocabCount }) }}</span>
              <span class="vocab-collapse-icon" :class="{ expanded: vocabExpanded }">&#9660;</span>
            </button>
            <div v-if="vocabExpanded" id="vocab-body" class="vocab-collapse-body">
              <ul class="vocab-list">
                <li v-for="(word, wi) in unit.vocabulary" :key="wi" class="vocab-item">
                  <audio-button :text="word.pt"></audio-button>
                  <span class="vocab-pt">{{ word.pt }}</span>
                  <span class="vocab-ru">{{ word.ru }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- CTA: Go to Practice -->
          <div class="theory-cta">
            <button class="btn btn-primary btn-lg" @click="goToPractice">{{ t('lesson.goToPractice') }}</button>
          </div>
        </div>

        <!-- Desktop Sidebar -->
        <aside class="lesson-sidebar">
          <div class="sidebar-card">
            <div class="sidebar-title">{{ t('lesson.progressSidebar') }}</div>
            <div class="sidebar-progress">
              <div class="sidebar-progress-item">
                <div class="sidebar-progress-label">
                  <span>{{ t('lesson.tab.theory') }}</span>
                  <span v-if="theoryRead" class="sidebar-progress-check">&#10003;</span>
                </div>
                <progress-bar :percent="theoryRead ? 100 : 0"></progress-bar>
              </div>
              <div class="sidebar-progress-item">
                <div class="sidebar-progress-label">
                  <span>{{ t('lesson.tab.exercises') }}</span>
                  <span class="sidebar-progress-detail">{{ exercisesCompleted }} / {{ exerciseCount }}</span>
                </div>
                <progress-bar :percent="exercisePercent"></progress-bar>
              </div>
              <div class="sidebar-progress-item">
                <div class="sidebar-progress-label">
                  <span>{{ t('lesson.flashcardsSidebar') }}</span>
                  <span class="sidebar-progress-detail">{{ flashcardsLearnedCount }} / {{ flashcardCount }}</span>
                </div>
                <progress-bar :percent="flashcardPercent"></progress-bar>
              </div>
            </div>
            <button class="sidebar-cta btn btn-primary" @click="goToPractice">{{ t('lesson.goToPractice') }}</button>
          </div>
          <div v-if="unit.vocabulary && unit.vocabulary.length" class="sidebar-card">
            <div class="sidebar-title">{{ t('lesson.vocabInline', { count: vocabCount }) }}</div>
            <ul class="vocab-list" style="margin:0;padding:0">
              <li v-for="(word, wi) in unit.vocabulary.slice(0, vocabPreviewCount)" :key="wi" class="vocab-item" style="padding:.25rem 0;border:none">
                <span class="vocab-pt">{{ word.pt }}</span>
                <span class="vocab-ru">{{ word.ru }}</span>
              </li>
            </ul>
            <button v-if="unit.vocabulary.length > vocabPreviewCount" class="btn btn-outline btn-sm mt-1"
              @click="showAllVocab">
              {{ t('lesson.vocabShowAll') }}
            </button>
          </div>
        </aside>
      </div>

      <!-- Practice Tab -->
      <div v-if="tab === 'practice'">

        <!-- Practice Hub -->
        <div v-if="practiceView === 'hub'" class="practice-hub">
          <div class="practice-card" @click="practiceView = 'exercises'">
            <div class="practice-card-icon">&#128221;</div>
            <div class="practice-card-body">
              <div class="practice-card-title">{{ t('lesson.tab.exercises') }}</div>
              <div class="text-muted" style="font-size:.8125rem">{{ t('lesson.exerciseHubCount', { done: exercisesCompleted, total: exerciseCount }) }}</div>
              <progress-bar :percent="exercisePercent" style="margin-top:.5rem"></progress-bar>
            </div>
            <div class="practice-card-action">
              <span class="btn btn-primary btn-sm">{{ t('lesson.start') }}</span>
            </div>
          </div>
          <div class="practice-card" @click="startFlashcards" v-if="unit.flashcards && unit.flashcards.length">
            <div class="practice-card-icon">&#127183;</div>
            <div class="practice-card-body">
              <div class="practice-card-title">{{ t('lesson.flashcardsSidebar') }}</div>
              <div class="text-muted" style="font-size:.8125rem">{{ flashcardsLearnedCount }} / {{ flashcardCount }}</div>
              <progress-bar :percent="flashcardPercent" style="margin-top:.5rem"></progress-bar>
            </div>
            <div class="practice-card-action">
              <span class="btn btn-outline btn-sm">{{ t('lesson.startReview') }}</span>
            </div>
          </div>
        </div>

        <!-- Exercises View -->
        <div v-if="practiceView === 'exercises'">
          <button class="btn btn-outline btn-sm mb-2" @click="backToHub" v-if="!exerciseStarted">
            &larr; {{ t('lesson.backToHub') }}
          </button>

          <!-- Exercise start screen -->
          <div v-if="!exerciseStarted && !exerciseFinished" class="text-center" style="padding:2rem 0">
            <p v-html="t('lesson.exerciseCount', { count: exerciseCount })"></p>
            <p v-if="totalBatches > 1" class="text-muted" style="font-size:.875rem">
              {{ t('lesson.batchLabel', { current: nextBatchNumber, total: totalBatches }) }}
            </p>
            <progress-bar :percent="exercisePercent" :show-text="true" class="mt-1 mb-2"></progress-bar>
            <div class="flex gap-1" style="justify-content:center">
              <button v-if="exercisePercent > 0 && exercisePercent < 100" class="btn btn-primary btn-lg" @click="continueExercises">
                {{ t('lesson.continue') }}
              </button>
              <button class="btn btn-lg" :class="exercisePercent > 0 && exercisePercent < 100 ? 'btn-outline' : 'btn-primary'" @click="startExercises">
                {{ exercisePercent > 0 ? t('lesson.retry') : t('lesson.start') }}
              </button>
            </div>
          </div>

          <!-- Active exercise -->
          <div v-else-if="currentBatchExercise && !batchFinished">
            <div v-if="totalBatches > 1" class="batch-label mb-1">
              {{ t('lesson.batchLabel', { current: currentBatch + 1, total: totalBatches }) }}
            </div>
            <div class="exercise-counter">
              {{ t('lesson.overallQuestion', { current: overallExerciseIdx + 1, total: exerciseCount }) }}
            </div>
            <progress-bar :percent="((overallExerciseIdx) / exerciseCount) * 100"></progress-bar>

            <!-- Multiple Choice -->
            <div v-if="currentBatchExercise.type === 'choice'" class="exercise-container">
              <div class="exercise-question" v-html="currentBatchExercise.question"></div>
              <div class="choice-grid">
                <button v-for="(opt, oi) in currentBatchExercise.options" :key="oi"
                  class="choice-btn"
                  :class="{
                    correct: answered && oi === currentBatchExercise.correct,
                    wrong: answered && selectedAnswer === oi && oi !== currentBatchExercise.correct,
                    disabled: answered
                  }"
                  @click="answerChoice(oi)">
                  {{ opt }}
                </button>
              </div>
            </div>

            <!-- Fill in the blank -->
            <div v-if="currentBatchExercise.type === 'fill'" class="exercise-container">
              <div class="exercise-question" v-html="currentBatchExercise.question"></div>
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
            <div v-if="currentBatchExercise.type === 'match'" class="exercise-container">
              <div class="exercise-question" v-html="currentBatchExercise.question"></div>
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
              <button v-if="Object.keys(matchPairs).length === (currentBatchExercise.pairs || []).length && !answered"
                class="btn btn-primary mt-1" @click="answerMatch">
                {{ t('lesson.check') }}
              </button>
            </div>

            <!-- Order -->
            <div v-if="currentBatchExercise.type === 'order'" class="exercise-container">
              <div class="exercise-question" v-html="currentBatchExercise.question"></div>
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
            <div v-if="currentBatchExercise.type === 'translate'" class="exercise-container">
              <div class="exercise-question">
                {{ t('lesson.translatePrompt') }} <strong>{{ currentBatchExercise.source }}</strong>
                <audio-button :text="currentBatchExercise.direction === 'pt-ru' ? currentBatchExercise.source : ''" v-if="currentBatchExercise.direction === 'pt-ru'"></audio-button>
              </div>
              <div class="exercise-input-row">
                <input class="input" v-model="textAnswer" @keyup.enter="answerTranslate"
                  :disabled="answered" :placeholder="currentBatchExercise.direction === 'pt-ru' ? t('lesson.translateToSupport') : t('lesson.translateToPt')" ref="translateInput"
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
                <div v-if="currentBatchExercise && currentBatchExercise.explanation" style="margin-top:.25rem;font-size:.8125rem">
                  {{ currentBatchExercise.explanation }}
                </div>
              </template>
            </div>

            <div v-if="answered" class="mt-2">
              <button class="btn btn-primary" @click="nextExercise">
                {{ overallExerciseIdx + 1 >= exerciseCount ? t('lesson.results') : t('lesson.next') }}
              </button>
            </div>
          </div>

          <!-- Batch Complete (intermediate results) -->
          <div v-else-if="batchFinished && !exerciseFinished" class="batch-complete card">
            <h3>{{ t('lesson.batchComplete') }}</h3>
            <div class="results-score">{{ batchExercises.length > 0 ? Math.round((batchCorrectCount / batchExercises.length) * 100) : 0 }}%</div>
            <p class="text-muted">
              {{ t('lesson.batchScore', { correct: batchCorrectCount, total: batchExercises.length }) }}
            </p>
            <div class="flex gap-1" style="justify-content:center">
              <button v-if="currentBatch + 1 < totalBatches" class="btn btn-primary" @click="nextBatch">
                {{ t('lesson.batchNext', { next: currentBatch + 2 }) }}
              </button>
              <button class="btn btn-outline" @click="finishExercises">
                {{ currentBatch + 1 >= totalBatches ? t('lesson.results') : t('lesson.batchFinish') }}
              </button>
            </div>
          </div>

          <!-- Final Results -->
          <div v-else-if="exerciseFinished" class="exercise-results card">
            <div class="results-score">{{ attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0 }}%</div>
            <div class="results-label">{{ resultMessage }}</div>
            <div class="results-detail">
              {{ t('lesson.correctCount', { correct: correctCount, total: attemptedCount }) }}
            </div>
            <div class="flex gap-1" style="justify-content:center">
              <button class="btn btn-outline" @click="startExercises">{{ t('lesson.retry') }}</button>
              <button class="btn btn-primary" @click="startFlashcards" v-if="unit.flashcards && unit.flashcards.length">{{ t('lesson.toFlashcards') }}</button>
            </div>
          </div>
        </div>

        <!-- Flashcards View -->
        <div v-if="practiceView === 'flashcards'">
          <button class="btn btn-outline btn-sm mb-2" @click="backToHub">
            &larr; {{ t('lesson.backToHub') }}
          </button>
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
            <p v-if="!fcFlipped" class="flashcard-tap-hint">{{ t('lesson.flashcardsHint') }}</p>
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
      currentLesson: 0,
      vocabExpanded: false,
      vocabPreviewCount: 5,
      practiceView: 'hub',
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
      attemptedCount: 0,
      // Batching
      batchSize: 10,
      currentBatch: 0,
      batchFinished: false,
      batchCorrectCount: 0,
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
      flashcardStates: {},
      visitedLessons: {},
    };
  },

  computed: {
    unit() {
      return this.translatedUnit;
    },
    displayedTheory() {
      if (!this.unit) return [];
      if (this.unit.lessons && this.unit.lessons.length > 1) {
        var lesson = this.unit.lessons[this.currentLesson];
        if (lesson && lesson.theoryRange) {
          return this.unit.theory.slice(lesson.theoryRange[0], lesson.theoryRange[1]);
        }
      }
      return this.unit.theory;
    },
    exerciseCount() {
      return this.unit && this.unit.exercises ? this.unit.exercises.length : 0;
    },
    vocabCount() {
      return this.unit && this.unit.vocabulary ? this.unit.vocabulary.length : 0;
    },
    flashcardCount() {
      return this.unit && this.unit.flashcards ? this.unit.flashcards.length : 0;
    },
    exercisesCompleted() {
      const p = (this.progress || {})[this.unit && this.unit.id];
      return p ? (p.exercisesCompleted || 0) : 0;
    },
    theoryRead() {
      // Check saved progress first
      const p = (this.progress || {})[this.unit && this.unit.id];
      if (p && p.theoryRead) return true;
      // Check if all sub-lessons visited in this session
      const totalLessons = (this.unit && this.unit.lessons && this.unit.lessons.length > 1)
        ? this.unit.lessons.length : 1;
      let visited = 0;
      for (let k in this.visitedLessons) {
        if (this.visitedLessons[k]) visited++;
      }
      return visited >= totalLessons;
    },
    totalBatches() {
      if (!this.exerciseCount) return 0;
      return Math.ceil(this.exerciseCount / this.batchSize);
    },
    nextBatchNumber() {
      var done = this.exercisesCompleted;
      if (done <= 0 || done >= this.exerciseCount) return 1;
      return Math.floor(done / this.batchSize) + 1;
    },
    batchExercises() {
      if (!this.unit || !this.unit.exercises) return [];
      return this.unit.exercises.slice(
        this.currentBatch * this.batchSize,
        (this.currentBatch + 1) * this.batchSize
      );
    },
    batchStartIdx() {
      return this.currentBatch * this.batchSize;
    },
    overallExerciseIdx() {
      return this.batchStartIdx + this.currentExerciseIdx;
    },
    currentBatchExercise() {
      if (!this.unit || !this.exerciseStarted || this.exerciseFinished || this.batchFinished) return null;
      return this.batchExercises[this.currentExerciseIdx] || null;
    },
    exercisePercent() {
      const p = (this.progress || {})[this.unit && this.unit.id];
      if (!p || !p.exercisesTotal) return 0;
      return Math.round((p.exercisesCompleted / p.exercisesTotal) * 100);
    },
    flashcardsLearnedCount() {
      if (!this.unit || !this.unit.flashcards) return 0;
      var count = 0;
      for (var i = 0; i < this.unit.flashcards.length; i++) {
        var state = this.flashcardStates[this.unit.flashcards[i].id];
        if (state && state.repetitions > 0) count++;
      }
      return count;
    },
    flashcardPercent() {
      if (!this.flashcardCount) return 0;
      return Math.round((this.flashcardsLearnedCount / this.flashcardCount) * 100);
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
      if (!this.attemptedCount) return '';
      const pct = (this.correctCount / this.attemptedCount) * 100;
      if (pct >= 90) return this.t('result.excellent');
      if (pct >= 70) return this.t('result.good');
      if (pct >= 50) return this.t('result.ok');
      return this.t('result.poor');
    },
  },

  watch: {
    async '$route.params.id'() {
      this.resetState();
      await this.loadTranslatedUnit();
      this.markLessonVisited(this.currentLesson);
    },
    tab() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    currentLesson(val) {
      this.markLessonVisited(val);
    },
    theoryRead(val) {
      if (val) this.saveTheoryRead();
    },
  },

  beforeRouteLeave(to, from, next) {
    if (this.exerciseStarted && !this.exerciseFinished) {
      if (confirm(this.t('lesson.leaveConfirm'))) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },

  async created() {
    await this.loadTranslatedUnit();
    if (this.user && this.user.id) {
      this.flashcardStates = await loadFlashcardStates(this.user.id);
    }
    // Mark initial sub-lesson as visited after unit is loaded
    this.markLessonVisited(this.currentLesson);
  },

  methods: {
    markLessonVisited(idx) {
      if (!this.visitedLessons[idx]) {
        this.visitedLessons = Object.assign({}, this.visitedLessons, { [idx]: true });
      }
    },

    saveTheoryRead() {
      if (!this.unit) return;
      var p = (this.progress || {})[this.unit.id] || {};
      this.$emit('update-progress', {
        unitNumber: this.unit.id,
        data: Object.assign({}, p, { theoryRead: true }),
      });
    },

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
      this.currentLesson = 0;
      this.visitedLessons = {};
      this.vocabExpanded = false;
      this.practiceView = 'hub';
      this.exerciseStarted = false;
      this.exerciseFinished = false;
      this.currentExerciseIdx = 0;
      this.correctCount = 0;
      this.attemptedCount = 0;
      this.answered = false;
      this.currentBatch = 0;
      this.batchFinished = false;
      this.batchCorrectCount = 0;
      this.fcIndex = 0;
      this.fcFlipped = false;
    },

    goToPractice() {
      this.tab = 'practice';
      this.practiceView = 'hub';
    },

    startFlashcards() {
      this.practiceView = 'flashcards';
      this.fcIndex = 0;
      this.fcFlipped = false;
    },

    backToHub() {
      this.practiceView = 'hub';
      this.exerciseFinished = false;
      this.batchFinished = false;
    },

    showAllVocab() {
      this.vocabExpanded = true;
      this.$nextTick(() => {
        const el = document.querySelector('.vocab-collapse');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    },

    startExercises() {
      this.practiceView = 'exercises';
      this.exerciseStarted = true;
      this.exerciseFinished = false;
      this.batchFinished = false;
      this.answered = false;
      this.selectedAnswer = null;
      this.textAnswer = '';
      this.resetMatchOrder();

      // Always start fresh
      this.currentBatch = 0;
      this.currentExerciseIdx = 0;
      this.correctCount = 0;
      this.attemptedCount = 0;
      this.batchCorrectCount = 0;

      this.initExerciseType();
    },

    continueExercises() {
      this.practiceView = 'exercises';
      this.exerciseStarted = true;
      this.exerciseFinished = false;
      this.batchFinished = false;
      this.answered = false;
      this.selectedAnswer = null;
      this.textAnswer = '';
      this.resetMatchOrder();

      // Resume from saved progress
      var p = (this.progress || {})[this.unit && this.unit.id];
      var done = p ? (p.exercisesCompleted || 0) : 0;
      this.currentBatch = Math.floor(done / this.batchSize);
      this.currentExerciseIdx = done % this.batchSize;
      var score = p.score || 0;
      this.correctCount = Math.round(score * done / 100);
      this.attemptedCount = done;
      this.batchCorrectCount = 0;

      this.initExerciseType();
    },

    nextBatch() {
      this.currentBatch++;
      this.currentExerciseIdx = 0;
      this.batchFinished = false;
      this.batchCorrectCount = 0;
      this.answered = false;
      this.selectedAnswer = null;
      this.textAnswer = '';
      this.resetMatchOrder();
      // Save progress so resuming works if user leaves mid-batch
      this.saveCurrentProgress(false);
      this.$nextTick(() => {
        this.initExerciseType();
      });
    },

    finishExercises() {
      this.attemptedCount = this.currentBatch * this.batchSize + this.batchExercises.length;
      this.exerciseFinished = true;
      this.exerciseStarted = false;
      this.batchFinished = false;
      this.saveCurrentProgress(true);
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
      const ex = this.batchExercises[this.currentExerciseIdx];
      if (!ex) return;
      if (ex.type === 'match' && ex.pairs) {
        this.matchLeft = ex.pairs.map(function(p) { return Array.isArray(p) ? p[0] : p.left; });
        var rights = ex.pairs.map(function(p) { return Array.isArray(p) ? p[1] : p.right; });
        var shuffled = [].concat(rights);
        for (var i = shuffled.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
        }
        this.matchRight = shuffled;
        this.matchRightMap = {};
        var usedOrigIndices = {};
        shuffled.forEach(function(val, si) {
          var origIdx = -1;
          for (var k = 0; k < rights.length; k++) {
            if (rights[k] === val && !usedOrigIndices[k]) { origIdx = k; break; }
          }
          usedOrigIndices[origIdx] = true;
          this.matchRightMap[si] = origIdx;
        }.bind(this));
      }
      if (ex.type === 'order' && ex.words) {
        const shuffled = [...ex.words];
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
      this.lastCorrect = idx === this.currentBatchExercise.correct;
      this.correctAnswer = this.currentBatchExercise.options[this.currentBatchExercise.correct];
      if (this.lastCorrect) {
        this.correctCount++;
        this.batchCorrectCount++;
      }
    },

    answerFill() {
      if (this.answered || !this.textAnswer.trim()) return;
      this.answered = true;
      const userAnswer = this.textAnswer.trim().toLowerCase();
      const answer = this.currentBatchExercise.answer;
      const accepts = Array.isArray(answer) ? answer : [answer];
      const joined = Array.isArray(answer) ? answer.join(' ') : null;
      this.lastCorrect = accepts.some(a => this.normalize(a) === this.normalize(userAnswer))
        || (joined && this.normalize(joined) === this.normalize(userAnswer));
      this.correctAnswer = joined || accepts[0];
      if (this.lastCorrect) {
        this.correctCount++;
        this.batchCorrectCount++;
      }
    },

    answerTranslate() {
      if (this.answered || !this.textAnswer.trim()) return;
      this.answered = true;
      const userAnswer = this.textAnswer.trim().toLowerCase();
      const answer = this.currentBatchExercise.answer;
      const accepts = Array.isArray(answer) ? answer : [answer];
      const joined = Array.isArray(answer) ? answer.join(' ') : null;
      this.lastCorrect = accepts.some(a => this.normalize(a) === this.normalize(userAnswer))
        || (joined && this.normalize(joined) === this.normalize(userAnswer));
      this.correctAnswer = joined || accepts[0];
      if (this.lastCorrect) {
        this.correctCount++;
        this.batchCorrectCount++;
      }
    },

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
      var rightIdx = this.matchPairs[leftIdx];
      if (rightIdx === undefined) return false;
      var selectedRight = this.matchRight[rightIdx];
      var pair = this.currentBatchExercise.pairs[leftIdx];
      var correctRight = Array.isArray(pair) ? pair[1] : pair.right;
      return selectedRight === correctRight;
    },

    isMatchRightCorrect(rightIdx) {
      for (var l in this.matchPairs) {
        if (parseInt(this.matchPairs[l]) === rightIdx) return this.isMatchPairCorrect(parseInt(l));
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
      this.correctAnswer = this.currentBatchExercise.pairs.map(function(p) {
        var l = Array.isArray(p) ? p[0] : p.left;
        var r = Array.isArray(p) ? p[1] : p.right;
        return l + ' \u2192 ' + r;
      }).join(', ');
      if (this.lastCorrect) {
        this.correctCount++;
        this.batchCorrectCount++;
      }
    },

    placeOrderWord(bankIdx) {
      if (this.answered || this.orderUsed[bankIdx]) return;
      this.orderedWords = [...this.orderedWords, this.orderBank[bankIdx]];
      this.orderUsed = { ...this.orderUsed, [bankIdx]: true };
    },

    removeOrderWord(answerIdx) {
      if (this.answered) return;
      const word = this.orderedWords[answerIdx];
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
      const accepts = Array.isArray(this.currentBatchExercise.answer)
        ? this.currentBatchExercise.answer
        : [this.currentBatchExercise.answer];
      this.lastCorrect = accepts.some(a => this.normalize(a) === this.normalize(userAnswer));
      this.correctAnswer = accepts[0];
      if (this.lastCorrect) {
        this.correctCount++;
        this.batchCorrectCount++;
      }
    },

    normalize(str) {
      return str.toLowerCase().trim()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, '').replace(/\s+/g, ' ').trim();
    },

    saveCurrentProgress(finished) {
      var attempted;
      if (this.exerciseFinished) {
        // Final save — use attemptedCount set by finishExercises/nextExercise
        attempted = this.attemptedCount;
      } else {
        attempted = this.overallExerciseIdx + (this.answered ? 1 : 0);
      }
      var total = this.unit.exercises.length;
      var score = attempted > 0 ? Math.round((this.correctCount / attempted) * 100) : 0;
      this.$emit('update-progress', {
        unitNumber: this.unit.id,
        data: {
          exercisesCompleted: attempted,
          exercisesTotal: total,
          score: score,
          completed: finished && (this.correctCount / total) >= 0.7,
        },
      });
    },

    nextExercise() {
      this.saveCurrentProgress(false);

      if (this.currentExerciseIdx + 1 < this.batchExercises.length) {
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
        // End of batch
        if (this.totalBatches <= 1 || this.currentBatch + 1 >= this.totalBatches) {
          // Last batch or single batch — final results
          this.attemptedCount = this.exerciseCount;
          this.exerciseFinished = true;
          this.exerciseStarted = false;
          this.saveCurrentProgress(true);
        } else {
          // Show batch summary
          this.batchFinished = true;
        }
      }
    },

    async rateCard(quality) {
      var card = this.currentFlashcard;
      if (card && card.id && this.user && this.user.id) {
        var current = this.flashcardStates[card.id] || {};
        var next = sm2(current, quality);
        this.flashcardStates = Object.assign({}, this.flashcardStates, { [card.id]: next });
        await saveFlashcardState(this.user.id, card.id, next);
      }
      this.fcFlipped = false;
      if (this.fcIndex + 1 < this.unit.flashcards.length) {
        this.fcIndex++;
      } else {
        this.fcIndex = 0;
      }
    },
  },
};
