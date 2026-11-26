<script setup lang="ts">
import { Download } from 'lucide-vue-next'
const { t } = useI18n(); const site = await useSite()
const cv = computed<string | null>(() => site.value?.media?.cv ?? null)
</script>
<template>
  <a v-if="cv" :href="cv" target="_blank" rel="noopener" class="btn text-sm"><Download :size="16" />{{ t('cv') }}</a>
  <span v-else class="btn text-sm" aria-disabled="true" :title="t('cvMissing')"><Download :size="16" />{{ t('cv') }}</span>
</template>
