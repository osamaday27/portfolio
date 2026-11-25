<script setup lang="ts">
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-vue-next'
import { profile } from '~/data/navigation'
const { t } = useI18n()
useSeoMeta({ title: () => `${t('nav.contact')} — ${t('brand')}` })
const cards = [{ i: Mail, l: 'Email', v: profile.email, h: `mailto:${profile.email}` }, { i: Github, l: 'GitHub', v: 'osamaday27', h: profile.github },
  { i: Linkedin, l: 'LinkedIn', v: 'ahmed-amasha', h: profile.linkedin }, { i: MessageCircle, l: 'WhatsApp', v: '+20 109 071 8857', h: profile.whatsapp }]
</script>
<template>
  <div class="container-x py-16 grid lg:grid-cols-2 gap-12">
    <div>
      <h1 class="font-display text-4xl font-bold">{{ t('contact.title') }}</h1>
      <ul class="mt-8 grid gap-px bg-line border border-line">
        <li v-for="c in cards" :key="c.l"><a :href="c.h" target="_blank" rel="noopener" class="flex items-center gap-4 bg-card p-5 hover:bg-elev">
          <component :is="c.i" :size="20" class="text-olive" /><span><span class="label-mono block">{{ c.l }}</span>{{ c.v }}</span></a></li>
      </ul>
    </div>
    <ContactContactForm />
  </div>
</template>
