<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
const prefs = usePreferences(); const { t } = useI18n(); const mounted = useMounted()
</script>
<template>
  <button class="btn !p-2" :aria-label="t('theme')" @click="prefs.toggleTheme()">
    <component :is="mounted && prefs.theme === 'light' ? Moon : Sun" :size="18" />
  </button>
</template>
