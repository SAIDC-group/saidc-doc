// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    respectPathCase: true,
  },
  extends: ['shadcn-docs-nuxt'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        language: 'zh-CN',
      },
    ],
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  mdc: {
    highlight: {
      langs: ['python', 'py'],
    },
  },
  compatibilityDate: '2024-07-06',
});
