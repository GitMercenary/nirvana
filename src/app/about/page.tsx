'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useFormContext } from '@/context/FormContext'
import { useIsMobile } from '@/hooks/useIsMobile'

const ease = [0.16, 1, 0.3, 1] as const

const pillars = [
  {
    number: '01',
    title: 'Sourcing & Processing',
    body: 'We source coffee from countless small farmers across Chikmagalur and process it at the Caffeine Nirvana Washing Station. Shade-grown under biodiverse canopy with a focus on soil health.',
    detail:
      'Our washing station is equipped to handle diverse processing methods, ensuring each lot is treated according to its unique characteristics and the farmer\u2019s growing conditions.',
  },
  {
    number: '02',
    title: 'Quality First',
    body: 'High scoring lots with 86\u201388 SCA cupping scores. Our shift from quantity to cup quality drives everything we do.',
    detail:
      'Processing innovations including anaerobic, semi-anaerobic, washed, and natural methods allow us to unlock each lot\u2019s full potential and deliver exceptional specialty coffee.',
  },
  {
    number: '03',
    title: 'Inclusion & Grassroots',
    body: 'Working with farmers at the grassroots level \u2014 from plant varietal selection to growing practices and nutrition.',
    detail:
      'We share knowledge with regional growers, helping them adopt better varietals, improve soil management, and increase yields while maintaining quality.',
  },
  {
    number: '04',
    title: 'Sustainable & Transparent',
    body: 'We pay among the highest prices to our farmers and focus on building a sustainable coffee ecosystem.',
    detail:
      'Climate-conscious growing and processing methods, transparent pricing, and long-term partnerships ensure that every link in the chain benefits \u2014 from the soil to the cup.',
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

      {/* ──────────────────── SECTION 2: THE PILLARS (WHAT WE DO) ─────────────────── */}
      <section
        ref={pillarsRef}
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
          {/* Eyebrow */}
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
            What We Do
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 48px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '64px',
            }}
          >
            The Four Pillars
          </motion.h2>

          {/* CONTENT: Owner to provide final copy */}

          {/* 2x2 Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '24px',
            }}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 32 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  ease,
                  delay: 0.2 + i * 0.1,
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(242, 242, 243, 0.06)',
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
                    opacity: 0.15,
                    position: 'absolute',
                    top: '12px',
                    right: '24px',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {pillar.number}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--cn-cream, #f2f2f3)',
                    marginBottom: '12px',
                    position: 'relative',
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--cn-gray, #a4a2a2)',
                    position: 'relative',
                    marginBottom: '14px',
                  }}
                >
                  {pillar.body}
                </p>

                {/* Detail paragraph */}
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: 'rgba(164, 162, 162, 0.7)',
                    position: 'relative',
                  }}
                >
                  {pillar.detail}
                </p>
              </motion.div>
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
              &mdash; Danish Ali, Director, Caffeine Nirvana
            </motion.p>

            {/* Bio placeholder */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.32 }}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--cn-gray, #a4a2a2)',
              }}
            >
              Danish Ali grew up on a coffee estate in Chikmagalur and spent years
              learning every step of the journey from cherry to cup. His vision for
              Caffeine Nirvana is built on three pillars he presented at the Typica
              conference: sustainability, inclusion, and spirituality. He believes
              that great coffee is as much about the people who grow it as the
              methods used to process it.
            </motion.p>
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
