import { units } from '../data/units.js';
import { AudioButton } from './AudioButton.js';
import { sm2, loadFlashcardStates, saveFlashcardState, getDueCards } from '../services/flashcard-engine.js';
import { loadUnitContent, applyContentOverlay } from '../i18n/index.js';

export const Flashcards = {
  template: `
    <div>
      <h1>{{ t('flashcards.title') }}</h1>
      <p class="text-muted mb-2">{{ t('flashcards.subtitle') }}</p>

      <div class="dashboard-stats mb-2">
        <div class="stat-card">
          <div class="stat-value">{{ dueCards.length }}</div>
          <div class="stat-label">{{ t('flashcards.due') }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ reviewedToday }}</div>
          <div class="stat-label">{{ t('flashcards.reviewedToday') }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ allCards.length }}</div>
          <div class="stat-label">{{ t('flashcards.totalCards') }}</div>
        </div>
      </div>

      <!-- Unit filter -->
      <div class="mb-2">
        <label class="form-label">{{ t('flashcards.filterLabel') }}</label>
        <select class="select" v-model="selectedUnit" style="max-width:300px">
          <option value="all">{{ t('flashcards.allUnits') }}</option>
          <option v-for="u in unitOptions" :key="u.id" :value="u.id">{{ t('flashcards.unitLabel', { id: u.id, title: u.title }) }}</option>
        </select>
      </div>

      <div v-if="dueCards.length > 0" class="flashcard-container">
        <div class="flashcard-stats">
          <span>{{ t('flashcards.dueCount', { current: currentIdx + 1, total: dueCards.length }) }}</span>
        </div>

        <div class="flashcard-wrapper" @click="flipped = !flipped">
          <div class="flashcard" :class="{ flipped }">
            <div class="flashcard-face flashcard-front">
              <audio-button :text="currentCard.pt" @click.stop></audio-button>
              <div class="flashcard-word mt-1">{{ currentCard.pt }}</div>
              <div class="flashcard-hint" v-if="currentCard.hint">{{ currentCard.hint }}</div>
            </div>
            <div class="flashcard-face flashcard-back">
              <div class="flashcard-translation">{{ currentCard.ru }}</div>
              <div class="flashcard-example" v-if="currentCard.example">{{ currentCard.example }}</div>
            </div>
          </div>
        </div>

        <div v-if="flipped" class="flashcard-rating">
          <button class="rating-btn again" @click="rate(0)">{{ t('rating.again') }}</button>
          <button class="rating-btn hard" @click="rate(1)">{{ t('rating.hard') }}</button>
          <button class="rating-btn good" @click="rate(2)">{{ t('rating.good') }}</button>
          <button class="rating-btn easy" @click="rate(3)">{{ t('rating.easy') }}</button>
        </div>
      </div>

      <div v-else class="flashcard-empty card">
        <h3>{{ t('flashcards.allDone') }}</h3>
        <p class="text-muted mt-1">{{ t('flashcards.comeback') }}</p>
        <router-link to="/" class="btn btn-primary mt-2">{{ t('flashcards.toLessons') }}</router-link>
      </div>
    </div>
  `,

  components: { AudioButton },

  inject: ['t', 'lang'],

  props: {
    user: Object,
  },

  data() {
    return {
      translatedUnits: [],
      states: {},
      currentIdx: 0,
      flipped: false,
      selectedUnit: 'all',
      reviewedToday: 0,
    };
  },

  computed: {
    unitOptions() {
      const src = this.translatedUnits.length ? this.translatedUnits : units;
      return src.map(u => ({ id: u.id, title: u.title }));
    },
    allCards() {
      const base = this.translatedUnits.length ? this.translatedUnits : units;
      const src = this.selectedUnit === 'all'
        ? base
        : base.filter(u => u.id === this.selectedUnit);
      const cards = [];
      for (const unit of src) {
        if (unit.flashcards) {
          for (const fc of unit.flashcards) {
            cards.push({ ...fc, unitId: unit.id });
          }
        }
      }
      return cards;
    },
    dueCards() {
      return getDueCards(this.allCards, this.states);
    },
    currentCard() {
      return this.dueCards[this.currentIdx] || {};
    },
  },

  watch: {
    selectedUnit() {
      this.currentIdx = 0;
      this.flipped = false;
    },
  },

  async created() {
    await this.loadTranslatedUnits();
    if (this.user) {
      this.states = await loadFlashcardStates(this.user.id);
    }
  },

  methods: {
    async loadTranslatedUnits() {
      const currentLang = this.lang();
      if (currentLang === 'ru') {
        this.translatedUnits = units;
        return;
      }
      const overlays = await Promise.all(
        units.map(u => loadUnitContent(currentLang, u.id))
      );
      this.translatedUnits = units.map((u, i) => applyContentOverlay(u, overlays[i]));
    },

    async rate(quality) {
      const card = this.currentCard;
      if (!card.id) return;

      const prev = this.states[card.id] || {};
      const next = sm2(prev, quality);
      this.states[card.id] = next;
      this.reviewedToday++;

      if (this.user) {
        await saveFlashcardState(this.user.id, card.id, next);
      }

      this.flipped = false;
      if (this.currentIdx + 1 < this.dueCards.length) {
        this.currentIdx++;
      } else {
        this.currentIdx = 0;
      }
    },
  },
};
