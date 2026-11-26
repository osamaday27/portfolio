import { defineStore } from 'pinia'
export const usePreferences = defineStore('preferences', () => {
  // Server always renders 'dark' so cached (ISR) HTML is identical for everyone; the client applies the saved choice.
  const theme = ref<'dark' | 'light'>('dark')
  const init = () => { const m = document.cookie.match(/(?:^|; )theme=(dark|light)/); if (m) theme.value = m[1] as 'dark' | 'light' }
  const toggleTheme = () => { theme.value = theme.value === 'dark' ? 'light' : 'dark'; document.cookie = `theme=${theme.value}; path=/; max-age=31536000; SameSite=Lax` }
  return { theme, init, toggleTheme }
})
