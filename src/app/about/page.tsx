'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useFormContext } from '@/context/FormContext'
import { useIsMobile } from '@/hooks/useIsMobile'

const ease = [0.16, 1, 0.3, 1] as const

const exploreCards = [
  {
    eyebrow: 'The People',
    title: 'Team',
    body: 'The producers, directors, and roasters behind Caffeine Nirvana \u2014 and the heritage they carry.',
    href: '/about/team',
    image: '/images/estate-zoya.png',
  },
  {
    eyebrow: 'The Region',
    title: 'Chikmagalur',
    body: 'The mist-covered hills where coffee in India began, and where every Caffeine Nirvana lot is grown.',
    href: '/about/chikmagalur',
    image: '/images/carousel/cherries-ripe.jpg',
  },
  {
    eyebrow: 'The Craft',
    title: 'Get to Know Your Coffee',
    body: 'Coffee as a way of life \u2014 our philosophy on ethical growth, longevity, and protecting what we love.',
    href: '/about/coffee-101',
    image: '/images/carousel/cupping-lab.jpg',
  },
]

const practices = [
  {
    number: '01',
    title: 'Shade-Grown',
    body: '36 hectares under biodiverse canopy. Our coffee grows alongside native trees, creating a balanced ecosystem that produces richer, more complex flavours.',
  },
  {
    number: '02',
    title: 'Chemical-Free',
    body: 'No synthetic pesticides or artificial fertilisers. We rely on natural compost, biological pest management, and healthy soil microbiomes to grow exceptional coffee.',
  },
  {
    number: '03',
    title: 'Direct Trade',
    body: '100% of premium reaches the estate and its farmers. No middlemen, no opaque supply chains \u2014 just transparent relationships from origin to roaster.',
  },
]

export default function AboutPage() {
  const isMobile = useIsMobile()
  const { openSourceForm } = useFormContext()

  const heroRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const practicesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-10% 0px' })
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-10% 0px' })
  const storyInView = useInView(storyRef, { once: true, margin: '-10% 0px' })
  const practicesInView = useInView(practicesRef, { once: true, margin: '-10% 0px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-10% 0px' })

  return (
    <main>
      {/* ───────────────────────────── SECTION 1: HERO ───────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          background: 'var(--cn-black, #0a0a0a)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '100px 20px 80px' : '120px 32px 100px',
        }}
      >
        <div style={{ maxWidth: '860px', textAlign: 'center' }}>
          {/* Eyebrow */}
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
            About Us
          </motion.p>

          {/* CONTENT: Owner to provide final copy */}

          {/* Headline */}
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
            From Farmer to Cup
          </motion.h1>

          {/* Subtitle */}
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
            We source coffee from small farmers across Chikmagalur and process it
            ourselves at the Caffeine Nirvana Washing Station. Every lot tells the
            story of its origin.
          </motion.p>
        </div>
      </section>

      {/* ──────────────────── SECTION 2: WHY NIRVANA (NAME ORIGIN) ─────────────────── */}
      <section
        ref={pillarsRef}
        style={{
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '80px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 32px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
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
            The Story Behind the Name
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '36px',
              lineHeight: 1.15,
            }}
          >
            Why we named it Caffeine Nirvana.
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              'The word Nirvana represents a state of perfect harmony, liberation, and the ultimate realisation of one’s potential. To us, coffee is more than a stimulant — it is a catalyst for that moment of total clarity.',
              'We chose the name Caffeine Nirvana because we aim to bridge the gap between the frantic energy of the daily grind and the serene focus required to conquer it. It’s that precise, blissful point where the world goes quiet, your senses awaken, and everything feels possible.',
              'We don’t just sell coffee; we sell the peak moment of your day.',
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.16 + i * 0.08 }}
                style={{
                  fontFamily: 'Zilla Slab, Georgia, serif',
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

      {/* ──────────────────── SECTION 3: THE DANISH ALI STORY ─────────────────────── */}
      {/* CONTENT: Owner to provide final copy — pending discussion with Ayesha */}
      <section
        ref={storyRef}
        style={{
          background: 'var(--cn-dark, #0e0e0e)',
          padding: isMobile ? '80px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 32px',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '48px' : '64px',
            alignItems: 'center',
          }}
        >
          {/* Text column */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
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
              The Person Behind the Coffee
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 44px)',
                color: 'var(--cn-cream, #f2f2f3)',
                marginBottom: '28px',
              }}
            >
              Meet Danish Ali
            </motion.h2>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.16 }}
              style={{
                fontFamily: 'Zilla Slab, Georgia, serif',
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: 1.6,
                color: 'var(--cn-cream, #f2f2f3)',
                borderLeft: '3px solid var(--cn-red-primary, #da2233)',
                paddingLeft: '20px',
                margin: '0 0 16px 0',
                fontStyle: 'italic',
              }}
            >
              &ldquo;I started exporting because I wanted the people who roast our
              coffee to know exactly where it comes from. Not a broker&apos;s
              description. Not a cupping report. The actual place, the actual
              process, and the person responsible for it.&rdquo;
            </motion.blockquote>

            {/* Attribution */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.24 }}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: 'var(--cn-red-primary, #da2233)',
                marginBottom: '28px',
              }}
            >
              &mdash; Danish Ali, Founder, Caffeine Nirvana
            </motion.p>

            {/* Short bio + link to /about/team */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.32 }}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--cn-gray, #a4a2a2)',
                marginBottom: '20px',
              }}
            >
              Hailing from a family with over 250 years of coffee-growing heritage in
              Chikmagalur, Danish is a producer, exporter, and passionate coffee
              craftsman dedicated to elevating Indian specialty coffee on the global
              stage. He leads Caffeine Nirvana alongside Ayesha Naseer (Director) and
              Harsh Jain (Roasting Head).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
            >
              <Link
                href="/about/team"
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--cn-red-primary, #da2233)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--cn-red-primary, #da2233)',
                  paddingBottom: 2,
                }}
              >
                Meet the team →
              </Link>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={storyInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            style={{
              position: 'relative',
              aspectRatio: '4 / 5',
              borderRadius: 'var(--cn-radius, 12px)',
              overflow: 'hidden',
              order: isMobile ? -1 : 0,
            }}
          >
            <Image
              src="/images/pillar-direct-export(1).png"
              alt="Danish Ali in the cupping lab at Caffeine Nirvana"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ──────────────────── SECTION 3.5: EXPLORE OUR STORY ──────────────────────── */}
      <ExploreSection />

      {/* ──────────────────── SECTION 4: OUR PRACTICES ────────────────────────────── */}
      <section
        ref={practicesRef}
        style={{
          background: 'var(--cn-warm-white, #f0ece6)',
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
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={practicesInView ? { opacity: 1, y: 0 } : {}}
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
            Our Practice
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={practicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 48px)',
              color: 'var(--cn-black, #0a0a0a)',
              marginBottom: '64px',
            }}
          >
            Grown Without Compromise
          </motion.h2>

          {/* 3 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {practices.map((practice, i) => (
              <motion.div
                key={practice.number}
                initial={{ opacity: 0, y: 32 }}
                animate={practicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  ease,
                  delay: 0.2 + i * 0.1,
                }}
                style={{
                  background: 'rgba(10, 10, 10, 0.04)',
                  border: '1px solid rgba(10, 10, 10, 0.08)',
                  borderRadius: 'var(--cn-radius, 12px)',
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Ghost number */}
                <span
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '72px',
                    fontWeight: 700,
                    color: 'var(--cn-red-primary, #da2233)',
                    opacity: 0.1,
                    position: 'absolute',
                    top: '12px',
                    right: '24px',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {practice.number}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--cn-black, #0a0a0a)',
                    marginBottom: '12px',
                    position: 'relative',
                  }}
                >
                  {practice.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--cn-dark, #0e0e0e)',
                    position: 'relative',
                  }}
                >
                  {practice.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── SECTION 5: CTA ──────────────────────────────── */}
      <section
        ref={ctaRef}
        style={{
          background: 'var(--cn-red-primary, #da2233)',
          padding: isMobile ? '64px 0' : '80px 0',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 32px',
            textAlign: 'center',
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            Ready to Source From Origin?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '36px',
            }}
          >
            Learn more about our lots, request samples, or plan a visit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
          >
            <button
              onClick={openSourceForm}
              onMouseEnter={(e) => {
                const btn = e.currentTarget
                btn.style.background = '#fff'
                btn.style.color = 'var(--cn-red-primary, #da2233)'
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget
                btn.style.background = 'transparent'
                btn.style.color = '#fff'
              }}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#fff',
                background: 'transparent',
                border: '1.5px solid #fff',
                borderRadius: 'var(--cn-radius-sm, 8px)',
                padding: '14px 40px',
                cursor: 'pointer',
                transition: 'background 0.3s ease, color 0.3s ease',
              }}
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ExploreSection() {
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--cn-black, #0a0a0a)',
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
          Explore
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4.5vw, 44px)',
            color: 'var(--cn-cream, #f2f2f3)',
            marginBottom: '48px',
            lineHeight: 1.15,
          }}
        >
          Our Story, in three threads.
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {exploreCards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.16 + i * 0.1 }}
            >
              <Link
                href={card.href}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(242, 242, 243, 0.06)',
                  borderRadius: 'var(--cn-radius, 12px)',
                  overflow: 'hidden',
                  height: '100%',
                  transition: 'transform 300ms ease, border-color 300ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(218, 34, 51, 0.5)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(242, 242, 243, 0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3 / 2',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', filter: 'saturate(0.85)' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <p
                    style={{
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--cn-red-primary, #da2233)',
                      marginBottom: '10px',
                      margin: 0,
                    }}
                  >
                    {card.eyebrow}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: 'var(--cn-cream, #f2f2f3)',
                      margin: '8px 0 12px 0',
                      lineHeight: 1.2,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'var(--cn-gray, #a4a2a2)',
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
