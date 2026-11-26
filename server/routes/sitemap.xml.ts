import { projects } from '../../app/data/projects'
export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig()
  const base = (cfg.public.siteUrl as string).replace(/\/$/, '')
  let slugs = projects.map(p => p.slug)
  try { slugs = (await $fetch<{ data: { slug: string }[] }>('/projects', { baseURL: cfg.public.apiBase as string, timeout: 4000 })).data.map(p => p.slug) } catch { /* API down: static list */ }
  const paths = ['', '/about', '/projects', '/skills', '/contact', ...slugs.map(s => `/projects/${s}`)]
  setHeader(event, 'content-type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.flatMap(p => [`${base}${p}`, `${base}/ar${p}`]).map(u => `<url><loc>${u}</loc></url>`).join('')}</urlset>`
})
