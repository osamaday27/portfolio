import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  // vue-router 5 reads Vue compile-time flags; inline it so the production server bundle defines them.
  build: { transpile: ['vue-router'] },
  // Content comes from the Laravel API, so pages are server-rendered and cached (ISR on Vercel).
  // A dashboard edit appears on the public site within `swr` seconds, with no rebuild.
  routeRules: { '/**': { swr: 60 }, '/admin/**': { ssr: false, swr: false } },
  runtimeConfig: {
    githubToken: '',
    public: { siteUrl: 'https://example.vercel.app', githubUser: 'osamaday27', apiBase: 'http://localhost:8000/api/v1' }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: 'locales',
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.vercel.app',
    detectBrowserLanguage: false, // a redirect that depends on cookies/headers would be wrongly cached by ISR
    locales: [
      { code: 'en', language: 'en-US', dir: 'ltr', file: 'en.json', name: 'English' },
      { code: 'ar', language: 'ar-EG', dir: 'rtl', file: 'ar.json', name: 'العربية' }
    ]
  },
  app: { head: { link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;600&family=Cairo:wght@700&family=JetBrains+Mono:wght@400&display=swap' }
  ] } }
})
