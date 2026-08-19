import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { getAllPostSlugs, getPost, getRelatedPosts, formatDate } from '@/lib/posts'
import InsightsReader from '@/components/InsightsReader'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: { absolute: 'Insights | Caffeine Nirvana' } }
  const url = `https://caffeinenirvana.co/insights/${slug}`
  return {
    title: { absolute: `${post.title} | Caffeine Nirvana` },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      images: [{ url: post.heroImage, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.metaDescription },
  }
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '')

export default async function InsightArticle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  // Render markdown, inject heading ids, and build the table of contents.
  let html = await marked.parse(post.content)
  const toc: { id: string; text: string }[] = []
  html = html.replace(/<h([23])>(.*?)<\/h\1>/g, (_m, lvl: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '')
    const id = slugify(text)
    if (lvl === '2') toc.push({ id, text })
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`
  })

  const related = getRelatedPosts(slug, 4)

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `https://caffeinenirvana.co${post.heroImage}`,
    url: `https://caffeinenirvana.co/insights/${slug}`,
    keywords: post.tags.join(', '),
    inLanguage: 'en',
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Caffeine Nirvana' },
    publisher: {
      '@type': 'Organization',
      name: 'Caffeine Nirvana',
      logo: { '@type': 'ImageObject', url: 'https://caffeinenirvana.co/images/logo-full.jpg' },
    },
    mainEntityOfPage: `https://caffeinenirvana.co/insights/${slug}`,
  }

  return (
    <main>
      {/* Hero with image */}
      <section
        className="insights-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.92) 100%), image-set(url(${post.heroImage.replace(/\.(png|jpe?g)$/i, '.webp')}) type('image/webp'), url(${post.heroImage}))`,
        }}
      >
        <div className="insights-hero__inner">
          {post.tags[0] && <span className="insights-kicker">{post.tags[0]}</span>}
          <h1>{post.title}</h1>
          <p className="insights-hero__meta">
            {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
        </div>
      </section>

      {/* 3-column reading layout */}
      <div className="insights-layout">
        <aside className="insights-rail insights-rail--left">
          <InsightsReader toc={toc} />
          <Link href="/insights" className="insights-back">
            ← All insights
          </Link>
        </aside>

        <article
          className="insights-prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <aside className="insights-rail insights-rail--right">
          <p className="insights-rail__title">Recommended reading</p>
          <div className="insights-related-list">
            {related.map((r) => (
              <Link key={r.slug} href={`/insights/${r.slug}`} className="insights-related">
                <span
                  className="insights-related__thumb"
                  style={{ backgroundImage: `image-set(url(${r.heroImage.replace(/\.(png|jpe?g)$/i, '.webp')}) type('image/webp'), url(${r.heroImage}))` }}
                />
                <span className="insights-related__body">
                  {r.tags[0] && <span className="insights-related__tag">{r.tags[0]}</span>}
                  <span className="insights-related__title">{r.title}</span>
                  <span className="insights-related__meta">{r.readingMinutes} min read</span>
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </main>
  )
}
