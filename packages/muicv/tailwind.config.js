import daisyui from 'daisyui';
import Typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    Typography,
  ],
  daisyui: {
    themes: ['winter', 'aqua'],
    darkTheme: 'aqua',
  },
};
