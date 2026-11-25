<script setup lang="ts">
import { Download } from 'lucide-vue-next'
import { profile } from '~/data/navigation'
const { t } = useI18n()
const { data: exists } = await useFetch<boolean>('/api/cv-status', { default: () => false })
</script>
<template>
  <a v-if="exists" :href="profile.cv" download class="btn text-sm"><Download :size="16" />{{ t('cv') }}</a>
  <span v-else class="btn text-sm" aria-disabled="true" :title="t('cvMissing')"><Download :size="16" />{{ t('cv') }}</span>
</template>
