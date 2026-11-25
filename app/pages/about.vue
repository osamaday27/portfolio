<script setup lang="ts">
import { experience } from '~/data/experience'
const { t, locale } = useI18n()
const fmt = (d: string) => new Intl.DateTimeFormat(locale.value === 'ar' ? 'ar-EG' : 'en-US', { month: 'long', year: 'numeric' }).format(new Date(d + '-01'))
const steps = ['req','flow','db','tech','logic','api','test','maintain']
useSeoMeta({ title: () => `${t('about.title')} — ${t('brand')}` })
</script>
<template>
  <div class="container-x py-16">
    <h1 class="font-display text-4xl font-bold">{{ t('about.title') }}</h1>
    <p class="mt-4 max-w-[65ch] text-fg2">{{ t('about.intro') }}</p>
    <h2 class="mt-14 font-display text-2xl font-bold">{{ t('about.approach') }}</h2>
    <ol class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
      <li v-for="(s, i) in steps" :key="s" class="bg-card p-5"><span class="label-mono">{{ String(i + 1).padStart(2, '0') }}</span><p class="mt-2">{{ t('about.step.' + s) }}</p></li>
    </ol>
    <h2 class="mt-14 font-display text-2xl font-bold">{{ t('about.experience') }}</h2>
    <ol class="mt-6 border-s border-line ps-6 space-y-8">
      <li v-for="e in experience" :key="e.id" class="relative">
        <span class="absolute -start-[1.9rem] top-2 size-2 bg-olive" />
        <p class="label-mono">{{ fmt(e.start) }} – {{ fmt(e.end) }}</p>
        <h3 class="font-display text-xl font-bold">{{ t(`exp.${e.id}.title`) }}</h3>
        <p class="text-olive">{{ e.company }}</p>
        <p class="mt-2 max-w-[65ch] text-fg2">{{ t(`exp.${e.id}.desc`) }}</p>
      </li>
    </ol>
  </div>
</template>
