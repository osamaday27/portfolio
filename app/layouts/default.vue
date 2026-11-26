<script setup lang="ts">
const prefs = usePreferences()
const { locale, locales } = useI18n()
const dir = computed(() => (locales.value as any[]).find(l => l.code === locale.value)?.dir ?? 'ltr')
const head = useLocaleHead({ dir: true, seo: true })
const site = useRuntimeConfig().public.siteUrl
useHead({ link: computed(() => head.value.link ?? []), meta: computed(() => head.value.meta ?? []),
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify([{ '@context': 'https://schema.org', '@type': 'Person', name: 'Ahmed Amasha', jobTitle: 'Full-Stack Software Engineer', url: site, sameAs: ['https://github.com/osamaday27', 'https://www.linkedin.com/in/ahmed-amasha-349a41405'] }, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Ahmed Amasha', url: site }]) }] })
useHead({ htmlAttrs: { lang: locale, dir, class: computed(() => prefs.theme) } })
</script>
<template>
  <div class="min-h-screen flex flex-col bg-bg text-fg">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-olive focus:text-white">Skip</a>
    <LayoutAppHeader />
    <main id="main" class="flex-1"><slot /></main>
    <LayoutAppFooter />
  </div>
</template>
