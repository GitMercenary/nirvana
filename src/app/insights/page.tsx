import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

const DESC =
  'Guides and perspectives for green-coffee buyers: sourcing, cupping, processing, importing and the story of specialty coffee from Chikmagalur, India.'

export const metadata: Metadata = {
  title: { absolute: 'Insights | Caffeine Nirvana' },
  description: DESC,
  alternates: { canonical: 'https://caffeinenirvana.co/insights' },
  openGraph: {
    title: 'Insights — Caffeine Nirvana',
    description: DESC,
    url: 'https://caffeinenirvana.co/insights',
    type: 'website',
    images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
  },
}

export default function InsightsIndex() {
  const posts = getAllPosts()

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'flex-end',
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.92) 100%), var(--cn-black, #0a0a0a)',
          padding: '130px 24px 52px',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--cn-red, #da2233)',
              margin: 0,
            }}
          >
            The Journal
          </p>
          <h1
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.08,
              color: 'var(--cn-cream, #f2f2f3)',
              margin: '16px 0 12px 0',
            }}
          >
            Insights
          </h1>
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'var(--cn-gray, #a4a2a2)',
              margin: 0,
              maxWidth: '52ch',
            }}
          >
            {DESC}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--cn-dark, #0e0e0e)', padding: '56px 24px 88px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <article
                style={{
                  background: 'var(--cn-black, #0a0a0a)',
                  border: '1px solid rgba(242,242,243,0.08)',
                  borderRadius: 'var(--cn-radius, 14px)',
                  padding: '26px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {post.tags[0] && (
                  <span
                    style={{
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--cn-red, #da2233)',
                    }}
                  >
                    {post.tags[0]}
                  </span>
                )}
                <h2
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '21px',
                    lineHeight: 1.25,
                    color: 'var(--cn-cream, #f2f2f3)',
                    margin: 0,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'var(--cn-gray, #a4a2a2)',
                    margin: 0,
                  }}
                >
                  {post.excerpt}
                </p>
                <span
                  style={{
                    marginTop: 'auto',
                    paddingTop: '8px',
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '13px',
                    color: 'var(--cn-cream, #f2f2f3)',
                  }}
                >
                  Read →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
