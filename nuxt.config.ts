import pkg from './package.json' assert { type: 'json' };

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/icon.css',
  ],
  vite: {
    define: {
      __IS_DEV__: process.env.NODE_ENV === 'development',
      __VERSION__: JSON.stringify(pkg.version),
    },
  },
});
