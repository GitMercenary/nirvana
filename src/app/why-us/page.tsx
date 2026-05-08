'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import CTABanner from '@/components/CTABanner'
import HeroBackdrop from '@/components/HeroBackdrop'

const ease = [0.16, 1, 0.3, 1] as const

const SETS_APART = [
  {
    title: 'Radical Transparency',
    body: 'We maintain direct relationships with our washing stations and estates. You’ll know exactly where your beans were grown, the altitude of the soil, and the hands that harvested them.',
  },
  {
    title: 'The Pursuit of the “God Shot”',
    body: 'Our cupping standards are uncompromising. We only trade beans that score in the top tier of specialty grades, ensuring every batch has the potential to reach Nirvana.',
  },
  {
    title: 'Sustainable Balance',
    body: 'True harmony isn’t possible without ethical practice. We prioritise regenerative farming and fair-trade pricing so partner farmers thrive as much as our customers do.',
  },
  {
    title: 'Precision Roasting',
    body: 'Using state-of-the-art thermal profiling, we roast in small batches to highlight the distinct soul of the origin — capturing acidity, body, and the complex palate of every bean.',
  },
]

export default function WhyUsPage() {
  const isMobile = useIsMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const apartRef = useRef<HTMLDivElement>(null)
  const pactRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-10% 0px' })
  const missionInView = useInView(missionRef, { once: true, margin: '-10% 0px' })
  const apartInView = useInView(apartRef, { once: true, margin: '-10% 0px' })
  const pactInView = useInView(pactRef, { once: true, margin: '-10% 0px' })

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
        <HeroBackdrop src="/images/hero-bg-v2.png" opacity={0.22} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', textAlign: 'center' }}>
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
            Why Us
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
            Soil. Soul. Science.
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
            The journey from farm to your cup should be as tranquil as the final sip.
            We aren’t trading a commodity — we’re curating an experience that honours
            both the grower and the drinker.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision teaser — full content lives on /why-us/mission-vision */}
      <section
        ref={missionRef}
        style={{
          position: 'relative',
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '80px 0' : '120px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/landscape-why-us.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(16,14,11,0.85) 0%, rgba(16,14,11,0.6) 50%, rgba(16,14,11,0.92) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '780px',
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 32px',
            textAlign: 'center',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-gray, #a4a2a2)',
              marginBottom: '16px',
            }}
          >
            Mission &amp; Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            Soil. Soul. Science.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.7,
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: 32,
            }}
          >
            A three-pillar mission — celebrating the terroir, empowering the
            farmer, and unlocking the bean. A vision to pioneer specialty coffee
            in nascent regions while honouring the heritage that built ours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
          >
            <a
              href="/why-us/mission-vision"
              style={{
                display: 'inline-block',
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cn-cream, #f2f2f3)',
                textDecoration: 'none',
                border: '1px solid rgba(242,242,243,0.4)',
                borderRadius: 'var(--cn-radius-sm)',
                padding: '14px 36px',
                transition: 'background 250ms ease, border-color 250ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--cn-red-primary, #da2233)'
                e.currentTarget.style.borderColor = 'var(--cn-red-primary, #da2233)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(242,242,243,0.4)'
              }}
            >
              Read our Mission &amp; Vision →
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section
        ref={apartRef}
        style={{
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '80px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 32px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={apartInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-gray, #a4a2a2)',
              marginBottom: '16px',
            }}
          >
            What Sets Us Apart
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={apartInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '56px',
              lineHeight: 1.15,
            }}
          >
            Four practices, one promise.
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '24px',
            }}
          >
            {SETS_APART.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={apartInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.08 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(242, 242, 243, 0.06)',
                  borderRadius: 'var(--cn-radius, 12px)',
                  padding: '32px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '64px',
                    fontWeight: 700,
                    color: 'var(--cn-red-primary, #da2233)',
                    opacity: 0.18,
                    position: 'absolute',
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--cn-cream, #f2f2f3)',
                    marginBottom: '12px',
                    margin: '0 0 12px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--cn-gray, #a4a2a2)',
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pact / Promise — muted red (alpha) so it sits between Sets-Apart and the bright CTABanner */}
      <section
        ref={pactRef}
        style={{
          background: '#da22336b',
          padding: isMobile ? '80px 24px' : '140px 32px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/cta-banner-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={pactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(242,242,243,0.7)',
              marginBottom: '20px',
            }}
          >
            Our Pact
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={pactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#f2f2f3',
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            Every year, we aim to leave the soil richer, the farmers more skilled,
            and the coffee more exceptional than the year before.
          </motion.p>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
