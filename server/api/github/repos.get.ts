export default defineCachedEventHandler(async () => {
  const cfg = useRuntimeConfig()
  try {
    const repos = await $fetch<any[]>(`https://api.github.com/users/${cfg.public.githubUser}/repos`, {
      query: { per_page: 100, sort: 'updated' },
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'portfolio', ...(cfg.githubToken ? { Authorization: `Bearer ${cfg.githubToken}` } : {}) }
    })
    return repos.filter(r => !r.private).map(r => ({
      name: r.name, description: r.description, language: r.language, stars: r.stargazers_count,
      updatedAt: r.pushed_at, url: r.html_url, topics: r.topics ?? [], homepage: r.homepage
    }))
  } catch { return [] }
}, { maxAge: 3600, swr: true })
