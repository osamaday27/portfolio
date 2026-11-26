<script setup lang="ts">
import { categoryKeys } from '~/data/projects'
const { t } = useI18n(); const { items, fromApi } = await useProjects()
const active = ref<string>('all')
const shown = computed(() => items.value.filter(p => active.value === 'all' || p.categories.includes(active.value)))
useSeoMeta({ title: () => `${t('nav.projects')} — ${t('brand')}` })
</script>
<template>
  <div class="container-x py-16">
    <h1 class="font-display text-4xl font-bold">{{ t('nav.projects') }}</h1>
    <p class="mt-3 text-fg2 max-w-[60ch]">{{ t('projects.intro') }}</p>
    <p v-if="!fromApi" class="label-mono mt-2">{{ t('projects.local') }}</p>
    <div class="mt-8 flex flex-wrap gap-2" role="group" :aria-label="t('projects.filter')">
      <button v-for="c in categoryKeys" :key="c" class="btn !py-2 text-sm" :class="active === c && 'btn-primary'" :aria-pressed="active === c" @click="active = c">{{ t('cat.' + c) }}</button>
    </div>
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectsProjectCard v-for="(p, i) in shown" :key="p.slug" :project="p" :featured="i === 0 && active === 'all'" />
    </div>
    <p v-if="!shown.length" class="mt-8 text-fg2">{{ t('projects.empty') }}</p>
  </div>
</template>
