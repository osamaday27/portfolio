<script setup lang="ts">
import { Github } from 'lucide-vue-next'
defineProps<{ project: any; featured?: boolean }>()
const { t } = useI18n(); const localePath = useLocalePath()
</script>
<template>
  <article class="group flex flex-col border border-line bg-card" :class="featured && 'md:col-span-2'">
    <NuxtLink :to="localePath(`/projects/${project.slug}`)" :aria-label="project.repo">
      <ProjectsProjectImage :slug="project.slug" file="cover.webp" :alt="`${project.repo} cover`" :ratio="featured ? '21/9' : '16/10'" />
    </NuxtLink>
    <div class="flex flex-1 flex-col gap-3 p-5">
      <p class="label-mono">{{ project.categories.map((c: string) => t('cat.' + c)).join(' / ') }}</p>
      <h3 class="font-display text-xl font-bold">{{ project.repo }}</h3>
      <p class="text-sm text-fg2 flex-1">{{ project.description || t('projects.noDesc') }}</p>
      <ul v-if="project.stack.length" class="flex flex-wrap gap-2"><li v-for="s in project.stack" :key="s" class="label-mono border border-line px-2 py-0.5">{{ s }}</li></ul>
      <div class="flex gap-2 pt-2">
        <a :href="project.url" target="_blank" rel="noopener" class="btn !py-2 text-sm"><Github :size="16" />GitHub</a>
        <NuxtLink :to="localePath(`/projects/${project.slug}`)" class="btn !py-2 text-sm">{{ t('projects.caseStudy') }}</NuxtLink>
      </div>
    </div>
  </article>
</template>
