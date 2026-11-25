<script setup lang="ts">
import { profile } from '~/data/navigation'
const { t } = useI18n()
const types = ['fullstack','backend','it','project','collab','other']
const f = reactive<Record<string, string>>({ name: '', email: '', subject: '', message: '', type: 'fullstack' })
const errors = reactive<Record<string, string>>({}); const sent = ref(false)
const submit = () => {
  Object.keys(errors).forEach(k => delete errors[k]); sent.value = false
  if (!f.name.trim()) errors.name = t('contact.v.required')
  if (!/^\S+@\S+\.\S+$/.test(f.email)) errors.email = t('contact.v.email')
  if (!f.subject.trim()) errors.subject = t('contact.v.required')
  if (f.message.trim().length < 10) errors.message = t('contact.v.message')
  if (Object.keys(errors).length) return
  const body = `${f.message}\n\n— ${f.name} (${f.email})\n${t('contact.type.' + f.type)}`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
const field = 'w-full border border-line bg-bg px-3 py-2.5 focus:border-olive'
</script>
<template>
  <form class="space-y-5 border border-line bg-card p-6" novalidate @submit.prevent="submit">
    <div v-for="k in ['name','email','subject']" :key="k">
      <label :for="k" class="label-mono block mb-1.5">{{ t('contact.f.' + k) }}</label>
      <input :id="k" v-model="f[k]" :type="k === 'email' ? 'email' : 'text'" :class="field" :aria-invalid="!!errors[k]" />
      <p v-if="errors[k]" class="mt-1 text-sm text-red-500" role="alert">{{ errors[k] }}</p>
    </div>
    <div><label for="type" class="label-mono block mb-1.5">{{ t('contact.f.type') }}</label>
      <select id="type" v-model="f.type" :class="field"><option v-for="x in types" :key="x" :value="x">{{ t('contact.type.' + x) }}</option></select></div>
    <div><label for="message" class="label-mono block mb-1.5">{{ t('contact.f.message') }}</label>
      <textarea id="message" v-model="f.message" rows="5" :class="field" :aria-invalid="!!errors.message" />
      <p v-if="errors.message" class="mt-1 text-sm text-red-500" role="alert">{{ errors.message }}</p></div>
    <button class="btn btn-primary" type="submit">{{ t('contact.send') }}</button>
    <p class="label-mono">{{ t('contact.note') }}</p>
    <p v-if="sent" class="text-sm text-fg2" role="status">{{ t('contact.opened') }}</p>
  </form>
</template>
