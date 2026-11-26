<script setup lang="ts">
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-vue-next'
import { profile } from '~/data/navigation'
const { t } = useI18n(); const loc = useLoc(); const site = await useSite()
useSeoMeta({ title: () => `${t('nav.contact')} — ${t('brand')}` })
const c = computed(() => ({ email: site.value?.contact?.email ?? profile.email, github: site.value?.contact?.github ?? profile.github,
  linkedin: site.value?.contact?.linkedin ?? profile.linkedin, whatsapp: site.value?.contact?.whatsapp ?? profile.whatsapp }))
const cards = computed(() => [{ i: Mail, l: 'Email', v: c.value.email, h: `mailto:${c.value.email}` }, { i: Github, l: 'GitHub', v: c.value.github.replace('https://github.com/', ''), h: c.value.github },
  { i: Linkedin, l: 'LinkedIn', v: 'ahmed-amasha', h: c.value.linkedin }, { i: MessageCircle, l: 'WhatsApp', v: c.value.whatsapp.replace('https://wa.me/', '+'), h: c.value.whatsapp }])
</script>
<template>
  <div class="container-x py-16 grid lg:grid-cols-2 gap-12">
    <div>
      <h1 class="font-display text-4xl font-bold">{{ loc(site?.contact?.title, t('contact.title')) }}</h1>
      <ul class="mt-8 grid gap-px bg-line border border-line">
        <li v-for="x in cards" :key="x.l"><a :href="x.h" target="_blank" rel="noopener" class="flex items-center gap-4 bg-card p-5 hover:bg-elev"><component :is="x.i" :size="20" class="text-olive" /><span><span class="label-mono block">{{ x.l }}</span>{{ x.v }}</span></a></li>
      </ul>
    </div>
    <ContactContactForm :email="c.email" />
  </div>
</template>
