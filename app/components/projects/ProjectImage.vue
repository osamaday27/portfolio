<script setup lang="ts">
const props = defineProps<{ src?: string | null; alt: string; ratio?: string }>()
const { t } = useI18n(); const failed = ref(false)
watch(() => props.src, () => (failed.value = false))
</script>
<template>
  <div class="relative w-full overflow-hidden bg-elev border border-line" :style="{ aspectRatio: ratio ?? '16/10' }">
    <img v-if="src && !failed" :src="src" :alt="alt" loading="lazy" decoding="async" class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" @error="failed = true" />
    <div v-else class="absolute inset-0 grid place-items-center label-mono text-center p-4">{{ t('projects.pending') }}</div>
  </div>
</template>
