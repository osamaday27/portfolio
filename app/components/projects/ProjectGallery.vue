<script setup lang="ts">
const props = defineProps<{ slug: string; files: string[] }>()
const { t } = useI18n(); const current = ref<number | null>(null)
const move = (d: number) => { if (current.value !== null) current.value = (current.value + d + props.files.length) % props.files.length }
onKeyStroke('Escape', () => (current.value = null))
onKeyStroke('ArrowRight', () => move(1)); onKeyStroke('ArrowLeft', () => move(-1))
</script>
<template>
  <div class="grid sm:grid-cols-2 gap-4">
    <button v-for="(f, i) in files" :key="f" class="group text-start" :aria-label="`${t('projects.open')} ${f}`" @click="current = i">
      <ProjectsProjectImage :slug="slug" :file="f" :alt="`${slug} ${f.replace('.webp','')}`" />
    </button>
  </div>
  <div v-if="current !== null" class="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" @click.self="current = null">
    <button class="btn absolute top-4 end-4 !text-white" @click="current = null">{{ t('projects.close') }}</button>
    <img :src="`/images/projects/${slug}/${files[current]}`" :alt="files[current]" class="max-h-[85vh] max-w-full object-contain" />
  </div>
</template>
