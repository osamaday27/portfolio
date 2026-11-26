# Portfolio API (Laravel 12) — overlay package

This folder is **not** a full Laravel app. It is the project-specific code (models, migrations, API, seeders, tests) that you copy over a fresh Laravel 12 install.

## Requirements
PHP 8.2+ with the `gd` extension **with WebP support** (`php -r "var_dump(function_exists('imagewebp'));"` must print `true`), Composer 2, MySQL 8 (or SQLite for local tests).

## Install (PowerShell)
```powershell
composer create-project laravel/laravel api "^12.0"
cd api
php artisan install:api                      # installs Sanctum, answer "yes" to run migrations
Copy-Item -Recurse -Force ..\laravel-api-overlay\* .   # copy this package over the app (overwrites User model, bootstrap/app.php, routes/api.php)
Get-Content ..\laravel-api-overlay\.env.additions | Add-Content .env
# edit .env: DB_*, ADMIN_EMAIL, ADMIN_PASSWORD
php artisan migrate --seed
php artisan storage:link
php artisan serve                            # http://localhost:8000
php artisan queue:work                       # separate terminal (thumbnails + contact emails)
php artisan test
```

## Architecture
| Layer | Where | Rule |
|---|---|---|
| Controllers | `Http/Controllers/Api/{Public,Admin}` | receive request, return response only |
| Validation | `Http/Requests` | every write goes through a Form Request; section rules live in `Support/SettingSchema` |
| Business logic | `Actions/*`, `Services/*` | multi-step writes run inside `DB::transaction()` |
| Output shape | `Http/Resources` | one place defines the JSON contract |
| Slow work | `Jobs/GenerateThumbnail`, `Mail/ContactReceived` | queued (database queue; Redis in production) |
| Authorization | Sanctum token + `Gate::define('manage-site')` | admin routes use `auth:sanctum` + `can:manage-site` |
| Caching | `Support/PublicCache` | public reads cached forever, flushed by model observers on any change |

Other decisions: soft deletes for projects, DB indexes on `(is_published, sort_order)` and image lookups, eager loading (`with('images')`) everywhere (no N+1), uploads converted to WebP and never accepted as SVG, contact messages are saved before mail is queued (nothing is lost if mail fails), login and contact are throttled (5/min).

## Endpoints (`/api/v1`)
Public: `GET site | skills | experience | projects | projects/{slug}`, `POST contact`
Auth: `POST auth/login`, `POST auth/logout`, `GET auth/me`
Admin (Bearer token): `projects` (CRUD, `PATCH projects/reorder`), `projects/{id}/images` (POST, PUT/PATCH, DELETE),
`skill-groups` (CRUD, nested `skills`), `experiences` (CRUD), `GET settings`, `PUT settings/{hero|about|contact|seo|stats}`,
`POST profile/photo`, `POST profile/cv`, `messages` (list, read, delete)

Image upload: `multipart/form-data` with `image` (jpg/png/webp, <= 8 MB) and `type` = `cover|gallery|dashboard|frontend|mobile`. A new `cover` replaces the old one.

## Data notes
`database/seeders/data/site.json` was generated from the current portfolio data: project categories are an unverified first proposal, project descriptions/stack are empty (nothing invented), no statistics. Edit all of it from the dashboard. Seeding never overwrites existing rows.
