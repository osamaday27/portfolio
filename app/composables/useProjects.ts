import { projects } from '~/data/projects'
import type { GitHubRepo } from '~/types'
export const useProjects = async () => {
  const { data } = await useFetch<GitHubRepo[]>('/api/github/repos', { default: () => [] })
  const items = computed(() => projects.map(pr => {
    const gh = data.value.find(r => r.name.toLowerCase() === pr.repo.toLowerCase())
    return { ...pr, gh, description: gh?.description || pr.description || '', url: gh?.url ?? `https://github.com/${useRuntimeConfig().public.githubUser}/${pr.repo}`,
      stack: pr.stack.length ? pr.stack : gh?.language ? [gh.language] : [] }
  }))
  return { items, githubLive: computed(() => data.value.length > 0) }
}
