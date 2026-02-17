import { initSupabase } from './services/supabase.js';
import { getSession, logout as doLogout } from './services/auth.js';
import { loadProgress, saveUnitProgress, updateStreak } from './services/progress.js';
import { initTTS } from './services/tts.js';
import { getStoredLang, loadUIStrings, t as _t, setLang as _setLang, getLang, SUPPORTED_LANGS } from './i18n/index.js';
import { Auth } from './components/Auth.js';
import { Dashboard } from './components/Dashboard.js';
import { Lesson } from './components/Lesson.js';
import { Flashcards } from './components/Flashcards.js';
import { Progress } from './components/Progress.js';
import { LangSwitcher } from './components/LangSwitcher.js';

const { createApp: vueCreateApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const routes = [
  { path: '/', component: Dashboard },
  { path: '/lesson/:id', component: Lesson },
  { path: '/flashcards', component: Flashcards },
  { path: '/progress', component: Progress },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 }; },
});

function getInitialTheme() {
  try {
    var stored = localStorage.getItem('pt_course_theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (e) { /* ignore */ }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export async function createApp() {
  // Load i18n before mounting
  const initialLang = getStoredLang();
  await loadUIStrings(initialLang);

  // Apply theme before mount to avoid flash
  var initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  const app = vueCreateApp({
    data() {
      return {
        user: null,
        progress: {},
        loading: true,
        mobileMenuOpen: false,
        lang: initialLang,
        langVersion: 0,
        theme: initialTheme,
      };
    },

    provide() {
      return {
        t: (key, params) => { this.langVersion; return _t(key, params); },
        lang: () => this.lang,
        setLang: this.changeLang,
        supportedLangs: SUPPORTED_LANGS,
        theme: () => this.theme,
        toggleTheme: this.toggleTheme,
      };
    },

    async created() {
      initSupabase();
      initTTS();

      const session = await getSession();
      if (session) {
        this.user = session;
        this.progress = await loadProgress(session.id);
      }
      this.loading = false;
    },

    methods: {
      async onLogin(user) {
        this.user = user;
        this.progress = await loadProgress(user.id);
      },

      async logout() {
        await doLogout();
        this.user = null;
        this.progress = {};
        this.mobileMenuOpen = false;
      },

      async saveProgress({ unitNumber, data }) {
        if (!this.user) return;
        this.progress = { ...this.progress, [unitNumber]: data };
        await saveUnitProgress(this.user.id, unitNumber, data);
        updateStreak();
      },

      async changeLang(newLang) {
        this.lang = newLang;
        _setLang(newLang);
        await loadUIStrings(newLang);
        this.langVersion++;
      },

      toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        applyTheme(this.theme);
        try { localStorage.setItem('pt_course_theme', this.theme); } catch (e) { /* ignore */ }
      },

      t(key, params) {
        this.langVersion; // reactive dependency
        return _t(key, params);
      },
    },

    template: `
      <div v-if="loading" class="loading-page"><div class="spinner"></div></div>
      <template v-else>
        <template v-if="!user">
          <Auth @login="onLogin" />
        </template>
        <template v-else>
          <header class="app-header">
            <div class="header-inner">
              <router-link to="/" class="logo">Portugues</router-link>
              <nav class="main-nav">
                <router-link to="/">{{ t('nav.lessons') }}</router-link>
                <router-link to="/flashcards">{{ t('nav.flashcards') }}</router-link>
                <router-link to="/progress">{{ t('nav.progress') }}</router-link>
              </nav>
              <div class="user-menu">
                <button class="theme-btn" @click="toggleTheme" :aria-label="t('nav.theme')">{{ theme === 'dark' ? '\u2600' : '\u263E' }}</button>
                <lang-switcher></lang-switcher>
                <span class="user-name">{{ user.email }}</span>
                <button class="btn btn-sm btn-outline" @click="logout">{{ t('nav.logout') }}</button>
              </div>
              <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen"
                :aria-label="t('nav.menu')" :aria-expanded="mobileMenuOpen ? 'true' : 'false'">
                <span></span><span></span><span></span>
              </button>
            </div>
            <nav class="mobile-nav" :class="{ open: mobileMenuOpen }" @click="mobileMenuOpen = false" role="navigation" :aria-label="t('nav.mobileMenu')">
              <router-link to="/">{{ t('nav.lessons') }}</router-link>
              <router-link to="/flashcards">{{ t('nav.flashcards') }}</router-link>
              <router-link to="/progress">{{ t('nav.progress') }}</router-link>
              <lang-switcher></lang-switcher>
              <button class="theme-btn" @click.stop="toggleTheme" :aria-label="t('nav.theme')" style="align-self:center">{{ theme === 'dark' ? '\u2600' : '\u263E' }}</button>
              <button class="btn btn-sm" @click="logout">{{ t('nav.logout') }}</button>
            </nav>
          </header>
          <main class="app-main">
            <router-view :key="lang" :user="user" :progress="progress" @update-progress="saveProgress"></router-view>
          </main>
        </template>
      </template>
    `,
  });

  app.component('Auth', Auth);
  app.component('LangSwitcher', LangSwitcher);
  app.use(router);
  app.mount('#app');
}
