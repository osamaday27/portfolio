<script setup lang="ts">
const { locale, t } = useI18n(); const switchPath = useSwitchLocalePath()
const target = computed(() => (locale.value === 'en' ? 'ar' : 'en'))
</script>
<template>
  <NuxtLink :to="switchPath(target)" class="btn !py-2 text-sm" :hreflang="target">{{ t('lang') }}</NuxtLink>
</template>
