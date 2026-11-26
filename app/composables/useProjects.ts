import { projects as localProjects } from '~/data/projects'
import type { ApiProject, GitHubRepo, ProjectView } from '~/types'
export const useProjects = async () => {
  const loc = useLoc(); const user = useRuntimeConfig().public.githubUser
  // Start both requests before awaiting: Nuxt composables lose their context after the first `await` in a plain function.
  const [{ data: api }, { data: gh }] = await Promise.all([
    useApiGet<ApiProject[]>('/projects', 'projects'),
    useFetch<GitHubRepo[]>('/api/github/repos', { key: 'gh', default: () => [] })
  ])
  const fallback = (): ApiProject[] => localProjects.map(p => ({ slug: p.slug, repo: p.repo, title: { en: p.repo, ar: p.repo }, description: null,
    categories: p.categories, stack: p.stack, case_study: null, github_url: null, demo_url: null, cover_url: null, images: [] }))
  const items = computed<ProjectView[]>(() => ((api.value as any)?.data ?? fallback()).map((p: ApiProject) => {
    const g = gh.value.find(r => r.name.toLowerCase() === p.repo.toLowerCase())
    const cs = Object.fromEntries(Object.entries(p.case_study ?? {}).map(([k, v]) => [k, loc(v)]).filter(([, v]) => v))
    return {
      slug: p.slug, repo: p.repo, title: loc(p.title, p.repo), description: loc(p.description) || g?.description || '',
      categories: p.categories, stack: p.stack?.length ? p.stack : g?.language ? [g.language] : [],
      caseStudy: Object.keys(cs).length ? cs : null, url: p.github_url || g?.url || `https://github.com/${user}/${p.repo}`,
      demo: p.demo_url || g?.homepage || null, cover: p.cover_url,
      images: p.images.filter(i => i.type !== 'cover').map(i => ({ url: i.url, thumb: i.thumb_url, type: i.type, alt: loc(i.alt, `${p.repo} ${i.type}`) })), gh: g
    }
  }))
  return { items, fromApi: computed(() => !!(api.value as any)?.data), githubLive: computed(() => gh.value.length > 0) }
}
