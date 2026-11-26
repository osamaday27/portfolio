<script setup lang="ts">
const { t } = useI18n(); const groups = await useSkills()
useSeoMeta({ title: () => `${t('nav.skills')} — ${t('brand')}` })
</script>
<template>
  <div class="container-x py-16">
    <h1 class="font-display text-4xl font-bold">{{ t('skills.title') }}</h1>
    <p class="mt-3 text-fg2 max-w-[60ch]">{{ t('skills.intro') }}</p>
    <div class="mt-10 grid md:grid-cols-2 gap-px bg-line border border-line">
      <section v-for="(g, i) in groups" :key="g.key" class="bg-card p-6">
        <h2 class="font-display text-lg font-bold"><span class="label-mono me-3">{{ String(i + 1).padStart(2, '0') }}</span>{{ g.title }}</h2>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="s in g.skills" :key="s.name" class="border border-line px-2.5 py-1 text-sm text-fg2">{{ s.name }}<span v-if="s.level" class="label-mono ms-2 !text-olive">{{ t('level.' + s.level) }}</span></li>
        </ul>
      </section>
    </div>
  </div>
</template>
