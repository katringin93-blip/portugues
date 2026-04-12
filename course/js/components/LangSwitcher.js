export const LangSwitcher = {
  template: `
    <div class="lang-switcher">
      <button v-for="l in langs" :key="l.code"
        class="lang-btn" :class="{ active: l.code === currentLang }"
        @click="switchLang(l.code)"
        :title="l.name">
        {{ l.label }}
      </button>
    </div>
  `,

  inject: ['lang', 'setLang'],

  computed: {
    langs() {
      return [
        { code: 'uk', label: 'УК', name: 'Українська' },
        { code: 'ru', label: 'РУ', name: 'Русский' },
        { code: 'en', label: 'EN', name: 'English' },
      ];
    },
    currentLang() {
      return this.lang();
    },
  },

  methods: {
    switchLang(code) {
      this.setLang(code);
    },
  },
};
