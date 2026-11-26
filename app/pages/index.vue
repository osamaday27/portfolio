<script setup lang="ts">
const { t } = useI18n(); const loc = useLoc(); const site = await useSite()
useSeoMeta({ title: () => loc(site.value?.seo?.site_title, `${t('brand')} — ${t('hero.title')}`), description: () => loc(site.value?.seo?.site_description, t('hero.desc')) })
</script>
<template><HomeHeroSection /></template>
