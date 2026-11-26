import type { Bi } from '~/types'
/** Picks the current language from a { en, ar } object, falling back to English then to `fallback`. */
export const useLoc = () => {
  const { locale } = useI18n()
  return (v: Bi | string | null | undefined, fallback = ''): string =>
    (typeof v === 'string' ? v : v ? ((v as any)[locale.value] || v.en) : '') || fallback
}
