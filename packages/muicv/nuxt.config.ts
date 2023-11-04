import pkg from './package.json' assert { type: 'json' };

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '姆伊求职助手',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/bootstrap-icons@1.11.1/font/bootstrap-icons.css',
        },
      ],
    },
  },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@sidebase/nuxt-auth',
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
  runtimeConfig: {
    version: pkg.version,
  },
  vite: {
    define: {
      __IS_DEV__: process.env.NODE_ENV === 'development',
      __VERSION__: JSON.stringify(pkg.version),
    },
  },
});
