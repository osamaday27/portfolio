<script setup lang="ts">
const prefs = usePreferences()
const { locale, locales } = useI18n()
const dir = computed(() => (locales.value as any[]).find(l => l.code === locale.value)?.dir ?? 'ltr')
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
