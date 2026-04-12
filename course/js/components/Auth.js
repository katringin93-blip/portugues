import { login, register } from '../services/auth.js';
import { LangSwitcher } from './LangSwitcher.js';

export const Auth = {
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h1 class="auth-title">Portugues</h1>
        <p class="auth-subtitle">Curso de Portugues Europeu</p>

        <div class="text-center mb-2" style="display:flex;justify-content:center;align-items:center;gap:.5rem">
          <lang-switcher></lang-switcher>
          <button class="theme-btn" @click="toggleTheme()" :aria-label="t('nav.theme')">{{ theme() === 'dark' ? '\u2600' : '\u263E' }}</button>
        </div>

        <form @submit.prevent="submit">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input class="input" :class="{ 'input-error': error }"
              type="email" v-model="email" placeholder="email@example.com" required autocomplete="email">
          </div>
          <div class="form-group">
            <label class="form-label">{{ t('auth.password') }}</label>
            <input class="input" :class="{ 'input-error': error }"
              type="password" v-model="password" :placeholder="t('auth.passwordPlaceholder')" required
              minlength="6" :autocomplete="isLogin ? 'current-password' : 'new-password'">
          </div>

          <div v-if="!isLogin" class="form-group consent-group">
            <label class="consent-label">
              <input type="checkbox" v-model="consent" class="consent-checkbox">
              <span>{{ t('auth.consent') }} <a href="/terms" target="_blank">{{ t('auth.termsOfUse') }}</a> {{ t('auth.and') }} <a href="/privacy" target="_blank">{{ t('auth.privacyPolicy') }}</a></span>
            </label>
          </div>

          <div v-if="error" class="form-error mb-2">{{ error }}</div>

          <button class="btn btn-primary btn-lg" style="width:100%" :disabled="loading || (!isLogin && !consent)">
            <span v-if="loading" class="spinner" style="width:20px;height:20px;border-width:2px"></span>
            {{ isLogin ? t('auth.login') : t('auth.register') }}
          </button>
        </form>

        <p class="auth-toggle">
          <template v-if="isLogin">
            {{ t('auth.noAccount') }}
            <a href="#" @click.prevent="isLogin = false; error = ''">{{ t('auth.register') }}</a>
          </template>
          <template v-else>
            {{ t('auth.hasAccount') }}
            <a href="#" @click.prevent="isLogin = true; error = ''">{{ t('auth.login') }}</a>
          </template>
        </p>
      </div>
    </div>
  `,

  components: { LangSwitcher },

  inject: ['t', 'theme', 'toggleTheme'],

  emits: ['login'],

  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
      error: '',
      loading: false,
      consent: false,
    };
  },

  methods: {
    async submit() {
      this.error = '';
      this.loading = true;
      try {
        const user = this.isLogin
          ? await login(this.email, this.password)
          : await register(this.email, this.password);
        this.$emit('login', user);
      } catch (e) {
        // Try to translate error key, fall back to raw message
        var translated = this.t(e.message);
        this.error = translated !== e.message ? translated : e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
