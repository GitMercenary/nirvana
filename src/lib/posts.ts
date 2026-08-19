import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// Per-article hero image (client's own estate/coffee photography — swap for AI images later)
const HERO_IMAGES: Record<string, string> = {
  'what-sca-cupping-scores-mean-for-roasteries': '/images/hero-bg.png',
  'why-chikmagalur-terroir-behind-indias-best-arabica': '/images/sustainability-shade.png',
  'washed-natural-honey-processing-buyers-guide': '/images/estate-zoya.png',
  'direct-trade-decoded-for-importers': '/images/danish-founder.png',
  'importing-indian-green-coffee-first-time-buyer-guide': '/images/cta-banner-bg.png',
  'how-to-read-green-coffee-spec-sheet': '/images/estate-sheethal.png',
  'protecting-green-coffee-quality-transit-storage': '/images/hero-bg-v2.png',
  'india-specialty-coffee-moment-global-roasters': '/images/estate-kardigandi.png',
  'why-source-indian-green-coffee-european-roastery': '/images/estate-zoya-hero.png',
  'indian-origin-north-american-coffee-menu': '/images/hero-bg.png',
  'where-indian-green-coffee-fits-global-buyer-lineup': '/images/estate-zoya.png',
  'how-caffeine-nirvana-sources-specialty-green-coffee': '/images/danish-founder.png',
}
const DEFAULT_HERO = '/images/hero-bg.png'

// Publish dates — the content plan runs from June 2026 (~6/month for the first batch)
const POST_DATES: Record<string, string> = {
  'importing-indian-green-coffee-first-time-buyer-guide': '2026-06-03',
  'why-chikmagalur-terroir-behind-indias-best-arabica': '2026-06-06',
  'washed-natural-honey-processing-buyers-guide': '2026-06-11',
  'why-source-indian-green-coffee-european-roastery': '2026-06-16',
  'how-to-read-green-coffee-spec-sheet': '2026-06-20',
  'indian-origin-north-american-coffee-menu': '2026-06-25',
  'what-sca-cupping-scores-mean-for-roasteries': '2026-07-02',
  'direct-trade-decoded-for-importers': '2026-07-08',
  'protecting-green-coffee-quality-transit-storage': '2026-07-14',
  'where-indian-green-coffee-fits-global-buyer-lineup': '2026-07-18',
  'india-specialty-coffee-moment-global-roasters': '2026-07-23',
  'how-caffeine-nirvana-sources-specialty-green-coffee': '2026-07-29',
}

export interface Post {
  slug: string
  title: string
  metaDescription: string
  excerpt: string
  tags: string[]
  heroImage: string
  readingMinutes: number
  date: string // ISO (YYYY-MM-DD)
  content: string
}

export function formatDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return `${d} ${months[m - 1]} ${y}`
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
  const words = content.split(/\s+/).filter(Boolean).length
  return {
    slug,
    title: (data.title as string) ?? slug,
    metaDescription: (data.metaDescription as string) ?? (data.excerpt as string) ?? '',
    excerpt: (data.excerpt as string) ?? '',
    tags: (data.tags as string[]) ?? [],
    heroImage: HERO_IMAGES[slug] ?? DEFAULT_HERO,
    readingMinutes: Math.max(1, Math.round(words / 200)),
    date: (data.date as string) ?? POST_DATES[slug] ?? '2026-06-01',
    content,
  }
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map(getPost)
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => b.date.localeCompare(a.date)) // newest first
}

// Related posts: prefer shared tags, then fill with others.
export function getRelatedPosts(slug: string, n = 4): Post[] {
  const all = getAllPosts()
  const current = all.find((p) => p.slug === slug)
  const others = all.filter((p) => p.slug !== slug)
  if (!current) return others.slice(0, n)
  return others
    .map((p) => ({ p, score: p.tags.filter((t) => current.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((s) => s.p)
}
