import type { Project, Category } from '~/types'
// Categories are a first proposal: verify each against the real repository, then edit freely.
// Add screenshots to public/images/projects/<slug>/ and list file names in `images`. Cover is always cover.webp.
const p = (repo: string, categories: Category[], stack: string[] = [], images: string[] = []): Project =>
  ({ slug: repo.toLowerCase(), repo, categories, stack, images })
export const projects: Project[] = [
  p('my-clinic', ['healthcare','management'], [], ['dashboard.webp','frontend.webp','mobile.webp','gallery-01.webp','gallery-02.webp']),
  p('mousatech-academy', ['education','web'], [], ['dashboard.webp','frontend.webp']),
  p('dermovive-demo', ['ecommerce','web'], [], ['homepage.webp','product-page.webp']),
  p('hospital-sys', ['healthcare','management'], [], ['dashboard.webp','frontend.webp']),
  p('snefro', ['web']), p('pospro', ['management','ecommerce'], [], ['dashboard.webp','reports.webp']),
  p('coretech', ['business','web']), p('MousaTech-Agency', ['business','web']), p('digpro', ['web']),
  p('Ahmed-Amasha', ['web']), p('my-portfolio', ['ui','web']), p('theqa', ['web']),
  p('neogym', ['management','web'], [], ['dashboard.webp','frontend.webp']),
  p('shendygrouppcrm', ['management']), p('neopos', ['management','ecommerce']), p('linkapp', ['web'])
]
export const categoryKeys: ('all'|Category)[] = ['all','web','backend','ecommerce','healthcare','management','education','business','api','ui']
