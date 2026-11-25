<script setup lang="ts">
import { profile } from '~/data/navigation'
const { t } = useI18n()
</script>
<template>
  <footer class="border-t border-line bg-bg2">
    <div class="container-x py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-fg2">
      <p>© {{ new Date().getFullYear() }} {{ t('brand') }}. {{ t('footer.rights') }}</p>
      <div class="flex gap-5 label-mono">
        <a :href="profile.github" target="_blank" rel="noopener" class="hover:text-fg">GitHub</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-fg">LinkedIn</a>
        <a :href="`mailto:${profile.email}`" class="hover:text-fg">Email</a>
      </div>
    </div>
  </footer>
</template>
