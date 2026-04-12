export const ProgressBar = {
  template: `
    <div>
      <div class="progress-bar">
        <div class="progress-bar-fill" :class="{ complete: percent >= 100 }"
          :style="{ width: percent + '%' }"></div>
      </div>
      <div v-if="showText" class="progress-text">{{ t('progressBar.completed', { pct: Math.round(percent) }) }}</div>
    </div>
  `,

  inject: ['t'],

  props: {
    percent: { type: Number, default: 0 },
    showText: { type: Boolean, default: false },
  },
};
