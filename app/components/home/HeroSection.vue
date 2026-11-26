<script setup lang="ts">
import { profile, heroStack } from '~/data/navigation'
const { t } = useI18n(); const localePath = useLocalePath()
const imgOk = ref(true)
</script>
<template>
  <section class="border-b border-line">
    <div class="container-x grid lg:grid-cols-[1.4fr_1fr] gap-12 py-16 lg:py-24 items-center">
      <div>
        <p class="label-mono mb-4">{{ t('hero.hello') }}</p>
        <h1 class="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">{{ t('hero.name') }}</h1>
        <p class="mt-4 text-xl text-olive font-display font-medium">{{ t('hero.title') }}</p>
        <p class="mt-6 max-w-[60ch] text-fg2">{{ t('hero.desc') }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink :to="localePath('/projects')" class="btn btn-primary">{{ t('explore') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn">{{ t('contactCta') }}</NuxtLink>
          <CommonResumeButton />
        </div>
        <div class="mt-12 border-t border-line pt-6">
          <p class="label-mono mb-3">{{ t('hero.stack') }}</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="s in heroStack" :key="s" class="label-mono !text-fg2 border border-line px-2.5 py-1">{{ s }}</li>
          </ul>
        </div>
      </div>
      <figure class="relative border border-line bg-card aspect-[4/5] w-full max-w-sm lg:max-w-none justify-self-center overflow-hidden">
        <img v-if="imgOk" :src="profile.photo" alt="Ahmed Amasha portrait" class="size-full object-cover grayscale"
          width="640" height="800" fetchpriority="high" @error="imgOk = false" />
        <figcaption v-if="profile.available" class="absolute bottom-0 inset-x-0 flex items-center gap-2 border-t border-line bg-bg/90 px-4 py-3 text-sm">
          <span class="size-2 bg-olive" />{{ t('hero.available') }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
