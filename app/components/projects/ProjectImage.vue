<script setup lang="ts">
defineProps<{ slug: string; file: string; alt: string; ratio?: string }>()
const { t } = useI18n(); const ok = ref(true)
</script>
<template>
  <div class="relative w-full overflow-hidden bg-elev border border-line" :style="{ aspectRatio: ratio ?? '16/10' }">
    <img v-if="ok" :src="`/images/projects/${slug}/${file}`" :alt="alt" loading="lazy" decoding="async"
      class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" @error="ok = false" />
    <div v-else class="absolute inset-0 grid place-items-center label-mono text-center p-4">{{ t('projects.pending') }}</div>
  </div>
</template>
