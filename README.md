# Ahmed Amasha — Portfolio (Nuxt 4 frontend + Laravel API)

The public site is **Nuxt (server-rendered + cached)** and reads all content from the **Laravel API** (`laravel-api-overlay`).
Content edited in the dashboard appears on the site within ~60 seconds (`swr: 60` in `nuxt.config.ts`), with no rebuild.
If the API is unreachable, pages fall back to the local data in `app/data/*` and `i18n/locales/*`, so the site never goes blank.

## Run
```
cp .env.example .env      # set NUXT_PUBLIC_API_BASE to your Laravel URL (…/api/v1)
npm install
npm run dev
npm run build && node .output/server/index.mjs   # production check
```

## Where content lives now
| Content | Edit in |
|---|---|
| Projects, images, case studies, hero/about/contact/SEO/stats text, skills, experience, profile photo, CV | Laravel dashboard (phase 3) / admin API |
| Fallback copy used only if the API is down | `app/data/*`, `i18n/locales/*` |
| UI labels (buttons, form text, category names) | `i18n/locales/en.json`, `ar.json` |

## Deploy (Vercel)
Set `NUXT_PUBLIC_API_BASE` (public Laravel URL) and `NUXT_PUBLIC_SITE_URL`. Do **not** use `nuxt generate` any more: the site is rendered on demand and cached (ISR). Add your Vercel domain to `CORS_ALLOWED_ORIGINS` in the Laravel `.env` (needed by the dashboard and contact form).

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
| 9 | Standalone server returned 500: `__VUE_OPTIONS_API__ is not defined` | The production server loaded `vue-router` 5 as an external package, so Vue's compile-time flags were never defined. A duplicate vue-router 4 declared in `package.json` made it worse | Aligned `vue-router` to `^5`, and inlined it in the server bundle (`build.transpile: ['vue-router']`). |
| 10 | 500 `NUXT_E1001` on the projects page | Two `useFetch` calls inside one async composable: Nuxt loses its context after the first `await` | Both requests are started together with `Promise.all` before awaiting. |
| 11 | Wrong theme served to everyone with cached pages | Theme was read from a cookie on the server, which ISR caching ignores | Server always renders dark; a tiny inline script applies the saved theme before first paint, and the toggle syncs after mount. |
| 12 | Language redirect could be cached for the wrong visitor | Browser-language detection redirects on cookies/headers | Disabled auto-detection; `/` is English and `/ar` is Arabic. |
