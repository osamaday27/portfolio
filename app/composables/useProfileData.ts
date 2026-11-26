import { skillGroups } from '~/data/skills'
import { experience as localExp } from '~/data/experience'
export const useSkills = async () => {
  const { t } = useI18n(); const loc = useLoc()
  const { data } = await useApiGet<any[]>('/skills', 'skills')
  return computed(() => (data.value as any)?.data
    ? (data.value as any).data.map((g: any) => ({ key: g.key, title: loc(g.title), skills: g.skills }))
    : skillGroups.map(g => ({ key: g.key, title: t('skills.' + g.key), skills: g.skills })))
}
export const useExperience = async () => {
  const { t } = useI18n(); const loc = useLoc()
  const { data } = await useApiGet<any[]>('/experience', 'experience')
  return computed(() => (data.value as any)?.data
    ? (data.value as any).data.map((e: any) => ({ id: e.id, company: e.company, title: loc(e.title), desc: loc(e.description), start: e.start_date, end: e.end_date }))
    : localExp.map(e => ({ id: e.id, company: e.company, title: t(`exp.${e.id}.title`), desc: t(`exp.${e.id}.desc`), start: e.start, end: e.end })))
}
