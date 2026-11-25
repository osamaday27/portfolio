<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
const prefs = usePreferences(); const { t } = useI18n()
</script>
<template>
  <button class="btn !p-2" :aria-label="t('theme')" @click="prefs.toggleTheme()">
    <component :is="prefs.theme === 'dark' ? Sun : Moon" :size="18" />
  </button>
</template>
