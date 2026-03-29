'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

/* ------------------------------------------------------------------ */
/*  Placeholder estate data — CONTENT: Owner to provide               */
/* ------------------------------------------------------------------ */
const ESTATES = [
  {
    name: 'Boothangudi Estate',
    location: 'Chikmagalur',
    altitude: '1,050 masl',
    varietals: 'SLN 5B, Chandragiri',
    description: 'Semi-anaerobic and washed process specialist.',
  },
  {
    name: 'Estate 2',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    description: 'Details coming soon.',
  },
  {
    name: 'Estate 3',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    description: 'Details coming soon.',
  },
  {
    name: 'Estate 4',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    description: 'Details coming soon.',
  },
  {
    name: 'Estate 5',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    description: 'Details coming soon.',
  },
]

/* ------------------------------------------------------------------ */
/*  Estate card                                                       */
/* ------------------------------------------------------------------ */
function EstateCard({
  estate,
  index,
}: {
  estate: (typeof ESTATES)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(242,242,243,0.06)',
        borderRadius: 'var(--cn-radius)',
        padding: 28,
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        cursor: 'default',
      }}
      whileHover={{
        y: -2,
        borderColor: 'rgba(218,34,51,0.3)',
      }}
    >
      {/* Estate name */}
      <h3
        style={{
          fontFamily: "'Zilla Slab', serif",
          fontSize: 20,
          fontWeight: 600,
          color: 'var(--cn-cream)',
          margin: '0 0 8px',
        }}
      >
        {estate.name}
      </h3>

      {/* Location + altitude */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: 'var(--cn-gray)',
          margin: '0 0 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span>{estate.location}</span>
        <span
          style={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'var(--cn-red-primary)',
            flexShrink: 0,
          }}
        />
        <span>{estate.altitude}</span>
      </p>

      {/* Varietals */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          margin: '0 0 14px',
        }}
      >
        <span
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--cn-red-primary)',
            marginRight: 6,
          }}
        >
          Varietals
        </span>
        <span style={{ color: 'var(--cn-gray)' }}>{estate.varietals}</span>
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: 'var(--cn-gray)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {estate.description}
      </p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function EstatesSection() {
  const isMobile = useIsMobile()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="estates"
      style={{
        background: 'var(--cn-dark)',
        padding: isMobile ? '80px 20px' : '120px 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--cn-gray)',
              margin: '0 0 12px',
            }}
          >
            OUR PARTNERS
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 600,
              color: 'var(--cn-cream)',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            Estates We Work With
          </h2>

          {/* Subtitle */}
          {/* CONTENT: Owner to provide */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: 'var(--cn-gray)',
              margin: 0,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            We partner with select estates across Chikmagalur to bring you the
            finest lots.
          </p>
        </motion.div>

        {/* Card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {ESTATES.map((estate, i) => (
            <EstateCard key={estate.name} estate={estate} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
