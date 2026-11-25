import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  nitro: { prerender: { routes: ['/', '/about', '/projects', '/skills', '/contact'] } },
  runtimeConfig: { githubToken: '', public: { siteUrl: 'https://example.vercel.app', githubUser: 'osamaday27' } },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: 'locales',
    detectBrowserLanguage: { useCookie: true, cookieKey: 'lang', redirectOn: 'root' },
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
