export type Category = 'web'|'backend'|'ecommerce'|'healthcare'|'management'|'education'|'business'|'api'|'ui'
export interface Project {
  slug: string; repo: string; categories: Category[]; stack: string[]
  images: string[]            // file names inside public/images/projects/<slug>/
  description?: string        // fallback; GitHub description is used when present
  caseStudy?: Partial<Record<'overview'|'problem'|'objectives'|'role'|'architecture'|'database'|'features'|'challenges'|'solutions', string>>
  demo?: string
}
export interface GitHubRepo { name: string; description: string|null; language: string|null; stars: number; updatedAt: string; url: string; topics: string[]; homepage?: string|null }
export interface Skill { name: string; level?: 'core'|'working'|'fundamentals' }
export interface SkillGroup { key: string; skills: Skill[] }
