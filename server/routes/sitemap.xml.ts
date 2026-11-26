import { projects } from '../../app/data/projects'
export default defineEventHandler((event) => {
  const base = (useRuntimeConfig().public.siteUrl as string).replace(/\/$/, '')
  const paths = ['', '/about', '/projects', '/skills', '/contact', ...projects.map(p => `/projects/${p.slug}`)]
  const urls = paths.flatMap(p => [`${base}${p}`, `${base}/ar${p}`])
  setHeader(event, 'content-type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u => `<url><loc>${u}</loc></url>`).join('')}</urlset>`
})
