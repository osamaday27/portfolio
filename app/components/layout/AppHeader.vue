<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { navigation } from '~/data/navigation'
const { t } = useI18n(); const localePath = useLocalePath(); const open = ref(false)
const route = useRoute(); watch(() => route.fullPath, () => (open.value = false))
</script>
<template>
  <header class="sticky top-0 z-40 bg-bg/95 backdrop-blur border-b border-line">
    <div class="container-x flex h-16 items-center justify-between gap-4">
      <NuxtLink :to="localePath('/')" class="font-display font-bold text-lg">{{ t('brand') }}</NuxtLink>
      <nav class="hidden md:flex items-center gap-1" aria-label="Main">
        <NuxtLink v-for="n in navigation" :key="n.key" :to="localePath(n.to)"
          class="px-3 py-2 text-sm text-fg2 hover:text-fg border-b-2 border-transparent"
          exact-active-class="!text-fg !border-olive">{{ t('nav.' + n.key) }}</NuxtLink>
      </nav>
      <div class="flex items-center gap-2">
        <CommonLanguageSwitcher /><CommonThemeToggle />
        <CommonResumeButton class="hidden lg:inline-flex" />
        <button class="md:hidden btn !p-2" :aria-label="t('menu')" :aria-expanded="open" @click="open = !open">
          <component :is="open ? X : Menu" :size="18" />
        </button>
      </div>
    </div>
    <nav v-if="open" class="md:hidden border-t border-line bg-bg" aria-label="Mobile">
      <NuxtLink v-for="n in navigation" :key="n.key" :to="localePath(n.to)" class="container-x block py-3 border-b border-line text-fg2">{{ t('nav.' + n.key) }}</NuxtLink>
      <div class="container-x py-3"><CommonResumeButton /></div>
    </nav>
  </header>
</template>
