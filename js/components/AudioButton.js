import { speak, isTTSAvailable } from '../services/tts.js';

export const AudioButton = {
  template: `
    <button v-if="available" class="audio-btn" :class="{ playing, 'audio-error': error }"
      @click.stop="play" :title="t('audio.listen', { text: text })"
      :aria-label="t('audio.listenAria', { text: text })">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <template v-if="error">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </template>
        <template v-else>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path v-if="!playing" d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path v-else d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </template>
      </svg>
    </button>
  `,

  inject: ['t'],

  props: {
    text: { type: String, required: true },
    rate: { type: Number, default: 0.9 },
  },

  data() {
    return { playing: false, error: false };
  },

  computed: {
    available() { return isTTSAvailable(); },
  },

  methods: {
    async play() {
      if (this.playing) return;
      this.error = false;
      this.playing = true;
      try {
        await speak(this.text, this.rate);
      } catch (e) {
        console.warn('AudioButton: playback failed', e);
        this.error = true;
        setTimeout(() => { this.error = false; }, 3000);
      }
      this.playing = false;
    },
  },
};
