import { units } from '../data/units.js';
import { ProgressBar } from './ProgressBar.js';
import { loadUnitContent, applyContentOverlay } from '../i18n/index.js';

export const Progress = {
  template: `
    <div class="progress-page">
      <h1>{{ t('progress.title') }}</h1>

      <div class="dashboard-stats mb-2">
        <div class="stat-card">
          <div class="stat-value">{{ completedCount }} / {{ unitList.length }}</div>
          <div class="stat-label">{{ t('progress.lessonsCompleted') }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ avgScore }}%</div>
          <div class="stat-label">{{ t('progress.avgScore') }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ totalExercises }}</div>
          <div class="stat-label">{{ t('progress.exercisesDone') }}</div>
        </div>
      </div>

      <progress-bar :percent="overallPercent" :show-text="true" class="mb-2"></progress-bar>

      <div class="progress-grid">
        <div v-for="unit in unitList" :key="unit.id" class="progress-unit-card"
          @click="$router.push('/lesson/' + unit.id)" style="cursor:pointer">
          <div class="progress-unit-header">
            <span class="progress-unit-title">{{ t('progress.unitLabel', { id: unit.id, title: unit.title }) }}</span>
            <span class="progress-badge" :class="badgeClass(unit.id)">{{ badgeText(unit.id) }}</span>
          </div>
          <progress-bar :percent="unitPercent(unit.id)"></progress-bar>
          <div class="text-muted" style="font-size:.8125rem;margin-top:.25rem">
            <template v-if="getProgress(unit.id).exercisesTotal">
              {{ t('progress.result', { score: getProgress(unit.id).score }) }}
              ({{ getProgress(unit.id).exercisesCompleted }}/{{ getProgress(unit.id).exercisesTotal }})
            </template>
            <template v-else>{{ t('progress.notStarted') }}</template>
          </div>
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
    };
  },

  async created() {
    await this.loadTranslatedUnits();
  },

  computed: {
    unitList() {
      const src = this.translatedUnits.length ? this.translatedUnits : units;
      return src.map(u => ({ id: u.id, title: u.title }));
    },
    completedCount() {
      return Object.values(this.progress || {}).filter(p => p.completed).length;
    },
    avgScore() {
      const scores = Object.values(this.progress || {}).filter(p => p.score > 0).map(p => p.score);
      if (!scores.length) return 0;
      return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    },
    totalExercises() {
      return Object.values(this.progress || {}).reduce((sum, p) => sum + (p.exercisesCompleted || 0), 0);
    },
    overallPercent() {
      if (!this.unitList.length) return 0;
      return Math.round((this.completedCount / this.unitList.length) * 100);
    },
  },

  methods: {
    getProgress(unitId) {
      return (this.progress || {})[unitId] || {};
    },
    unitPercent(unitId) {
      const p = this.getProgress(unitId);
      if (!p.exercisesTotal) return 0;
      return Math.round((p.exercisesCompleted / p.exercisesTotal) * 100);
    },
    badgeClass(unitId) {
      const p = this.getProgress(unitId);
      if (p.completed) return 'done';
      if (p.exercisesCompleted > 0) return 'started';
      return 'new';
    },
    badgeText(unitId) {
      const p = this.getProgress(unitId);
      if (p.completed) return this.t('progress.badgeDone');
      if (p.exercisesCompleted > 0) return this.t('progress.badgeInProgress');
      return this.t('progress.badgeNew');
    },

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
  },
};
