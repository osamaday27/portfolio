import { defineStore } from 'pinia'
export const usePreferences = defineStore('preferences', () => {
  const theme = useCookie<'dark' | 'light'>('theme', { default: () => 'dark', maxAge: 31536000 })
  const toggleTheme = () => { theme.value = theme.value === 'dark' ? 'light' : 'dark' }
  return { theme, toggleTheme }
})
