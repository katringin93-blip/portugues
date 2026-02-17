import { units } from '../data/units.js';
import { ProgressBar } from './ProgressBar.js';
import { loadUnitContent, applyContentOverlay } from '../i18n/index.js';
import { loadFlashcardStates, getDueCards } from '../services/flashcard-engine.js';
import { loadStreak } from '../services/progress.js';

export const Dashboard = {
  template: `
    <div>
      <div class="dashboard-header">
        <h1>Curso de Portugues Europeu</h1>
        <p class="text-muted">{{ t('dashboard.subtitle') }}</p>
      </div>

      <div class="dashboard-stats">
        <div class="stat-card">
          <div class="stat-value">{{ completedCount }}</div>
          <div class="stat-label">{{ t('dashboard.lessonsCompleted') }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ totalScore }}%</div>
          <div class="stat-label">{{ t('dashboard.avgScore') }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ dueCards }}</div>
          <div class="stat-label">{{ t('dashboard.dueCards') }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ streakDays }}</div>
          <div class="stat-label">{{ t('dashboard.streakDays') }}</div>
        </div>
      </div>

      <h2 class="mb-2">{{ t('dashboard.lessons') }}</h2>
      <div class="unit-grid">
        <div v-for="unit in unitList" :key="unit.id"
          class="unit-card" :class="unitStatus(unit.id)"
          @click="$router.push('/lesson/' + unit.id)">
          <div class="unit-number">{{ t('dashboard.lesson', { id: unit.id }) }}</div>
          <div class="unit-title">{{ unit.title }}</div>
          <div class="unit-desc">{{ unit.description }}</div>
          <progress-bar :percent="unitPercent(unit.id)"></progress-bar>
        </div>
      </div>
    </div>
  `,

  components: { ProgressBar },

  inject: ['t', 'lang'],

  props: {
    user: Object,
    progress: Object,
  },

  data() {
    return {
      translatedUnits: [],
      flashcardStates: {},
      streak: { count: 0, lastDate: null },
    };
  },

  async created() {
    await this.loadTranslatedUnits();
    this.streak = loadStreak();
    if (this.user) {
      this.flashcardStates = await loadFlashcardStates(this.user.id);
    }
  },

  computed: {
    unitList() {
      const src = this.translatedUnits.length ? this.translatedUnits : units;
      return src.map(u => ({ id: u.id, title: u.title, description: u.description }));
    },
    completedCount() {
      return Object.values(this.progress || {}).filter(p => p.completed).length;
    },
    totalScore() {
      const scores = Object.values(this.progress || {}).filter(p => p.score > 0).map(p => p.score);
      if (!scores.length) return 0;
      return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    },
    dueCards() {
      var allCards = [];
      for (var i = 0; i < units.length; i++) {
        var u = units[i];
        if (u.flashcards) {
          for (var j = 0; j < u.flashcards.length; j++) {
            allCards.push(Object.assign({}, u.flashcards[j], { unitId: u.id }));
          }
        }
      }
      return getDueCards(allCards, this.flashcardStates).length;
    },
    streakDays() {
      return this.streak.count;
    },
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

    unitPercent(unitId) {
      const p = (this.progress || {})[unitId];
      if (!p || !p.exercisesTotal) return 0;
      return Math.round((p.exercisesCompleted / p.exercisesTotal) * 100);
    },
    unitStatus(unitId) {
      const p = (this.progress || {})[unitId];
      if (!p) return '';
      if (p.completed) return 'completed';
      if (p.exercisesCompleted > 0) return 'in-progress';
      return '';
    },
  },
};
