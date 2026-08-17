'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import CTABanner from '@/components/CTABanner'

const ease = [0.16, 1, 0.3, 1] as const

const PARAGRAPHS = [
  'Nestled in the mist-covered hills of Chikmagalur, the birthplace of coffee in India, lies one of the world’s most unique and naturally gifted coffee-growing regions. With its rich biodiversity, high-altitude terrain, fertile soil, abundant rainfall, and ideal tropical climate, Chikmagalur produces coffees celebrated for their complexity, sweetness, balanced acidity, and refined cup profiles.',
  'Grown under dense shade forests alongside native flora and wildlife, the coffees of Chikmagalur develop slowly and naturally, resulting in exceptional bean density and character. From elegant washed Arabicas to fruit-forward naturals, the region offers a diverse range of specialty coffees that continue to gain recognition among international roasters, importers, and cafés.',
  'At Caffeine Nirvana, we are proud to source and curate coffees from this extraordinary land — coffees that carry not only remarkable quality, but also the heritage, craftsmanship, and spirit of Indian coffee culture in every cup.',
]

export default function ChikmagalurPage() {
  const isMobile = useIsMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-10% 0px' })
  const bodyInView = useInView(bodyRef, { once: true, margin: '-10% 0px' })

  return (
    <main>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          background: 'var(--cn-black, #0a0a0a)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '100px 20px 80px' : '120px 32px 100px',
          overflow: 'hidden',
        }}
      >
        {/* Atmospheric backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "image-set(url('/images/hero-bg.webp') type('image/webp'), url('/images/hero-bg.png'))",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', maxWidth: '860px', textAlign: 'center', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-gray, #a4a2a2)',
              marginBottom: '20px',
            }}
          >
            Our Story · Region
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            Chikmagalur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              lineHeight: 1.6,
              color: 'var(--cn-gray, #a4a2a2)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            The birthplace of coffee in India.
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <section
        ref={bodyRef}
        style={{
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '64px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 32px',
          }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 'var(--cn-radius)',
              overflow: 'hidden',
              marginBottom: isMobile ? 40 : 64,
              filter: 'saturate(0.85)',
            }}
          >
            <Image
              src="/images/landscape-chikmagalur.jpg"
              alt="Mist-covered ridges of Chikmagalur at sunrise"
              fill
              sizes="(max-width: 768px) 100vw, 780px"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={bodyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.1 }}
                style={{
                  fontFamily: 'Zilla Slab, Georgia, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(17px, 2vw, 19px)',
                  lineHeight: 1.75,
                  color: 'var(--cn-cream, #f2f2f3)',
                  margin: 0,
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
