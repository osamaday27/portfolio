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

## Requirements
- **Node.js `^22.22.3`, `^24.15.0` or newer** (Node 24 LTS recommended). `.nvmrc` is included: run `nvm use` (nvm-windows: `nvm install 24 && nvm use 24`).
- `.npmrc` sets `engine-strict=true`, so `npm install` stops with a clear message on an unsupported Node instead of printing dozens of warnings.

## Troubleshooting log (issues found and resolved)
| # | Issue | Cause | Resolution |
|---|---|---|---|
| 1 | `EBADENGINE` warnings on `npm install` (Node 22.12.0) | Nuxt 4.7 and its toolchain (Vite builder, Nitro, chokidar, Babel 8, undici) require Node >= 22.22.3 / 24.15 | Declared the supported range in `package.json` `engines`, added `.nvmrc` (24) and `engine-strict`. Upgrade Node instead of pinning an old Nuxt, because older Nuxt releases carry known advisories (e.g. an esbuild dev-server file-read issue on Windows). |
| 2 | Nuxt CLI warning: "Node.js 22.12.0 is unsupported" | Same as #1 | Same fix. |
| 3 | `npm audit`: 3 high-severity advisories (`sharp`, `ipx`, `@nuxt/image`) | `@nuxt/image` pulls in `sharp` (libvips CVEs). The site serves static `<img>` assets and never used the image optimizer | Removed `@nuxt/image` (unused dependency). Images are lazy-loaded plain `<img>` with explicit aspect ratios. Re-add it only if you need runtime image transforms, and keep it updated. |
| 4 | `npm audit`: remaining moderate advisories (`minimatch` via `archiver`/`nitropack`) | Transitive build-time tooling inside Nuxt; no runtime exposure in the generated static site; the only "fix" npm offers is downgrading Nuxt | Left as is. They are resolved upstream by Nuxt updates, so run `npm update` periodically. Do not use `npm audit fix --force`. |
| 5 | Build failed: `vite-json` "expected value at line 1" | `@nuxtjs/i18n` 9.x is incompatible with the Vite 8 (Rolldown) builder used by current Nuxt | Upgraded to `@nuxtjs/i18n` 10. |
| 6 | Build failed: prerender 404 on `/_ipx/.../ahmed-profile.webp` | Hero used `NuxtImg` for a photo not yet added | Plain `<img>` with graceful fallback; the build passes without the photo. |
| 7 | CV button always disabled | Missing `/api/cv-status` route | Added the route and prerender it, so the button enables once `public/files/Ahmed-Amasha-CV.pdf` exists. |
| 8 | Slow first `npm run dev` (~30 s on Windows) | Cold Vite/Nitro start and antivirus scanning of `node_modules` | Expected on first run. Exclude the project folder from real-time scanning for faster starts. |
