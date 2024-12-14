// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/test-utils/module'
  ],
  devtools: { enabled: true }
})
