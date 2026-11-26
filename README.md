# Ahmed Amasha — Portfolio (Nuxt 4 + Tailwind 4 + i18n)

## Run
```
npm install
npm run dev        # development
npm run generate   # static production build -> .output/public
npm run preview
```

## Edit content (no component changes needed)
| What | File |
|---|---|
| Projects, categories, stack, screenshots, case studies | `app/data/projects.ts` |
| Skills (add `level` only when verified) | `app/data/skills.ts` |
| Experience dates / company | `app/data/experience.ts` |
| Contact links, photo, CV path | `app/data/navigation.ts` |
| All translated text, job descriptions | `i18n/locales/en.json`, `ar.json` |

## Images
- Profile: `public/images/profile/ahmed-profile.webp`
- Project: `public/images/projects/<slug>/cover.webp` plus file names listed in `images` in `projects.ts`
  (e.g. `dashboard.webp`, `frontend.webp`, `mobile.webp`, `gallery-01.webp`). Missing files show a "pending" box.
- CV: `public/files/Ahmed-Amasha-CV.pdf` (button is disabled until the file exists).

## Case study example
```ts
{ ...p('my-clinic', ['healthcare']), caseStudy: { overview: '...', role: '...' } }
```
Only filled sections are rendered.

## GitHub API
Public repos of `osamaday27` are fetched server-side (`/api/github/repos`, cached 1h). Optional token to raise rate limits:
set `NUXT_GITHUB_TOKEN` (server only, never exposed). If GitHub fails, local data is used.
Because pages are prerendered, GitHub data refreshes on each deploy.

## Deploy on Vercel
1. Push to GitHub, import the repo in Vercel (framework: Nuxt, auto-detected).
2. Environment variables: `NUXT_PUBLIC_SITE_URL` = your final domain (used for canonical, hreflang, sitemap); optional `NUXT_GITHUB_TOKEN`.
3. Every push to `main` redeploys.

## Contact form
Opens the visitor's email app (mailto) with a prepared message; it never fakes a "sent" state. For direct delivery, connect Resend/Formspree later.
