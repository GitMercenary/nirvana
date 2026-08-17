import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { getAllPostSlugs, getPost } from '@/lib/posts'

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
      images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default async function InsightArticle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const html = await marked.parse(post.content)

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    url: `https://caffeinenirvana.co/insights/${slug}`,
    keywords: post.tags.join(', '),
    inLanguage: 'en',
    author: { '@type': 'Organization', name: 'Caffeine Nirvana' },
    publisher: {
      '@type': 'Organization',
      name: 'Caffeine Nirvana',
      logo: {
        '@type': 'ImageObject',
        url: 'https://caffeinenirvana.co/images/logo-full.jpg',
      },
    },
    mainEntityOfPage: `https://caffeinenirvana.co/insights/${slug}`,
  }

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: '38vh',
          display: 'flex',
          alignItems: 'flex-end',
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.9) 100%), var(--cn-black, #0a0a0a)',
          padding: '120px 24px 48px',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto', width: '100%' }}>
          <Link
            href="/insights"
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--cn-red, #da2233)',
              textDecoration: 'none',
            }}
          >
            Insights
          </Link>
          <h1
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              lineHeight: 1.12,
              color: 'var(--cn-cream, #f2f2f3)',
              margin: '18px 0 0 0',
              maxWidth: '18ch',
            }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section style={{ background: 'var(--cn-dark, #0e0e0e)', padding: '56px 24px 80px' }}>
        <article
          className="insights-prose"
          style={{ maxWidth: '780px', margin: '0 auto' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div style={{ maxWidth: '780px', margin: '48px auto 0' }}>
          <Link
            href="/insights"
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '14px',
              color: 'var(--cn-gray, #a4a2a2)',
              textDecoration: 'none',
            }}
          >
            ← All insights
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </main>
  )
}
