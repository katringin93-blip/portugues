import { speak, isTTSAvailable } from '../services/tts.js';

export const AudioButton = {
  template: `
    <button v-if="available" class="audio-btn" :class="{ playing }"
      @click.stop="play" :title="t('audio.listen', { text: text })"
      :aria-label="t('audio.listenAria', { text: text })">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path v-if="!playing" d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path v-else d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    </button>
  `,

  inject: ['t'],

  props: {
    text: { type: String, required: true },
    rate: { type: Number, default: 0.9 },
  },

  data() {
    return { playing: false };
  },

  computed: {
    available() { return isTTSAvailable(); },
  },

  methods: {
    async play() {
      if (this.playing) return;
      this.playing = true;
      await speak(this.text, this.rate);
      this.playing = false;
    },
  },
};
