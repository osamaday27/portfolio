export type Bi = { en?: string | null; ar?: string | null }
export interface GitHubRepo { name: string; description: string|null; language: string|null; stars: number; updatedAt: string; url: string; topics: string[]; homepage?: string|null }
export interface ApiImage { id?: number; type: string; url: string; thumb_url: string; alt?: Bi | null }
export interface ApiProject {
  slug: string; repo: string; title: Bi; description: Bi | null; categories: string[]; stack: string[]
  case_study: Record<string, Bi> | null; github_url: string | null; demo_url: string | null
  cover_url: string | null; images: ApiImage[]
}
export interface ProjectView {
  slug: string; repo: string; title: string; description: string; categories: string[]; stack: string[]
  caseStudy: Record<string, string> | null; url: string; demo: string | null; cover: string | null
  images: { url: string; thumb: string; alt: string; type: string }[]; gh?: GitHubRepo
}
