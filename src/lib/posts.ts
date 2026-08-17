import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface Post {
  slug: string
  title: string
  metaDescription: string
  excerpt: string
  tags: string[]
  heroImagePrompt?: string
  content: string
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getPost(slug: string): Post | null {
  const full = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(full)) return null
  const raw = fs.readFileSync(full, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: (data.title as string) ?? slug,
    metaDescription: (data.metaDescription as string) ?? (data.excerpt as string) ?? '',
    excerpt: (data.excerpt as string) ?? '',
    tags: (data.tags as string[]) ?? [],
    heroImagePrompt: data.heroImagePrompt as string | undefined,
    content,
  }
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map(getPost)
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => a.title.localeCompare(b.title))
}
