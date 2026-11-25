<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: () => `${t('brand')} — ${t('hero.title')}`, description: () => t('hero.desc') })
</script>
<template><HomeHeroSection /></template>
