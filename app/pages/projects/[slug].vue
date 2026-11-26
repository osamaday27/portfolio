<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'
const { t } = useI18n(); const route = useRoute(); const localePath = useLocalePath()
const { items } = await useProjects()
const project = computed(() => items.value.find(p => p.slug === route.params.slug))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
const sections = ['overview','problem','objectives','role','architecture','database','features','challenges','solutions'] as const
const related = computed(() => items.value.filter(p => p.slug !== project.value!.slug && p.categories.some(c => project.value!.categories.includes(c))).slice(0, 3))
useSeoMeta({ title: () => `${project.value?.title} — ${t('brand')}`, description: () => project.value?.description, ogImage: () => project.value?.cover ?? undefined })
</script>
<template>
  <article v-if="project" class="container-x py-16">
    <NuxtLink :to="localePath('/projects')" class="label-mono hover:text-fg">{{ t('nav.projects') }}</NuxtLink>
    <h1 class="mt-3 font-display text-4xl lg:text-5xl font-bold">{{ project.title }}</h1>
    <p class="mt-4 max-w-[60ch] text-fg2">{{ project.description || t('projects.noDesc') }}</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <a :href="project.url" target="_blank" rel="noopener" class="btn btn-primary"><Github :size="16" />GitHub</a>
      <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="btn"><ExternalLink :size="16" />{{ t('projects.demo') }}</a>
    </div>
    <div class="mt-10"><ProjectsProjectImage :src="project.cover" :alt="`${project.title} cover`" ratio="21/9" /></div>
    <div class="mt-12 grid lg:grid-cols-[1fr_2fr] gap-10">
      <aside class="space-y-4 label-mono">
        <p>{{ project.categories.map(c => t('cat.' + c)).join(' / ') }}</p>
        <ul v-if="project.stack.length" class="flex flex-wrap gap-2"><li v-for="s in project.stack" :key="s" class="border border-line px-2 py-0.5">{{ s }}</li></ul>
        <p v-if="project.gh">★ {{ project.gh.stars }} · {{ new Date(project.gh.updatedAt).toLocaleDateString() }}</p>
      </aside>
      <div class="space-y-8">
        <template v-for="s in sections" :key="s">
          <section v-if="project.caseStudy?.[s]"><h2 class="font-display text-xl font-bold">{{ t('case.' + s) }}</h2><p class="mt-2 text-fg2 whitespace-pre-line max-w-[65ch]">{{ project.caseStudy[s] }}</p></section>
        </template>
        <p v-if="!project.caseStudy" class="border border-line p-5 text-fg2">{{ t('projects.preparing') }}</p>
      </div>
    </div>
    <section v-if="project.images.length" class="mt-14"><h2 class="font-display text-xl font-bold mb-4">{{ t('case.screens') }}</h2><ProjectsProjectGallery :images="project.images" /></section>
    <section v-if="related.length" class="mt-14"><h2 class="font-display text-xl font-bold mb-4">{{ t('case.related') }}</h2>
      <div class="grid md:grid-cols-3 gap-6"><ProjectsProjectCard v-for="r in related" :key="r.slug" :project="r" /></div></section>
  </article>
</template>
