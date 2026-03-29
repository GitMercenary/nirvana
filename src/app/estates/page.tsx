'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useFormContext } from '@/context/FormContext'

/* ------------------------------------------------------------------ */
/*  Estate data — placeholder content                                  */
/* ------------------------------------------------------------------ */

const ESTATES = [
  {
    name: 'Boothangudi Estate',
    location: 'Chikmagalur',
    altitude: '1,050 masl',
    varietals: 'SLN 5B, Chandragiri',
    process: 'Semi-Anaerobic, Washed',
    description:
      'Semi-anaerobic and washed process specialist. Known for complex cup profiles with tropical fruit notes.',
    image: '/images/carousel/export-sack.jpg',
  },
  {
    name: 'Estate 2',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    process: 'TBD',
    description: 'Details coming soon. Content will be provided by the owner.',
    image: '/images/carousel/drying-beds.jpg',
  },
  {
    name: 'Estate 3',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    process: 'TBD',
    description: 'Details coming soon. Content will be provided by the owner.',
    image: '/images/carousel/cherries-ripe.jpg',
  },
  {
    name: 'Estate 4',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    process: 'TBD',
    description: 'Details coming soon. Content will be provided by the owner.',
    image: '/images/carousel/drying-cherries.jpg',
  },
  {
    name: 'Estate 5',
    location: 'Chikmagalur',
    altitude: 'TBD',
    varietals: 'TBD',
    process: 'TBD',
    description: 'Details coming soon. Content will be provided by the owner.',
    image: '/images/carousel/beans-floor.jpg',
  },
]

/* ------------------------------------------------------------------ */
/*  Reusable estate card                                               */
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
  const isMobile = useIsMobile()
  const isEven = index % 2 === 1 // 0-indexed: "even" index = second, fourth…

  const imageBlock = (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 3',
        borderRadius: 'var(--cn-radius)',
        overflow: 'hidden',
        filter: 'saturate(0.85)',
      }}
    >
      <Image
        src={estate.image}
        alt={estate.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )

  const textBlock = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      {/* CONTENT: Owner to provide */}
      <h3
        style={{
          fontFamily: "'Zilla Slab', serif",
          fontSize: 28,
          fontWeight: 600,
          color: 'var(--cn-cream)',
          margin: 0,
        }}
      >
        {estate.name}
      </h3>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: 'var(--cn-gray)',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {estate.location}
        <span
          style={{
            display: 'inline-block',
            width: 5,
            height: 5,
            borderRadius: '50%',
            backgroundColor: 'var(--cn-red-primary)',
            flexShrink: 0,
          }}
        />
        {estate.altitude}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <p style={{ margin: 0, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
          <span
            style={{
              color: 'var(--cn-red-primary)',
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginRight: 8,
            }}
          >
            Varietals
          </span>
          <span style={{ color: 'var(--cn-gray)' }}>{estate.varietals}</span>
        </p>
        <p style={{ margin: 0, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
          <span
            style={{
              color: 'var(--cn-red-primary)',
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginRight: 8,
            }}
          >
            Process
          </span>
          <span style={{ color: 'var(--cn-gray)' }}>{estate.process}</span>
        </p>
      </div>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          color: 'var(--cn-gray)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {estate.description}
      </p>
    </div>
  )

  const columns = isMobile
    ? [imageBlock, textBlock]
    : isEven
      ? [textBlock, imageBlock]
      : [imageBlock, textBlock]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.1 * (index % 3), ease: 'easeOut' }}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 24 : 48,
        alignItems: 'center',
      }}
    >
      {columns[0]}
      {columns[1]}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function EstatesPage() {
  const isMobile = useIsMobile()
  const { openSourceForm, openLearnForm } = useFormContext()

  const traceRef = useRef<HTMLDivElement>(null)
  const traceInView = useInView(traceRef, { once: true, margin: '-60px' })

  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' })

  return (
    <main>
      {/* ============================================================ */}
      {/*  Section 1 — Hero                                            */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: 'var(--cn-black)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: isMobile ? '80px 20px' : '100px 24px',
        }}
      >
        {/* CONTENT: Owner to provide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ maxWidth: 720 }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--cn-red-primary)',
              marginBottom: 16,
            }}
          >
            OUR PARTNERS
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 36 : 56,
              fontWeight: 700,
              color: 'var(--cn-cream)',
              lineHeight: 1.15,
              margin: '0 0 20px',
            }}
          >
            Estates We Work With
          </h1>
          <p
            style={{
              fontFamily: "'Zilla Slab', serif",
              fontSize: isMobile ? 16 : 18,
              color: 'var(--cn-gray)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            We partner with select estates across Chikmagalur, working at the
            grassroots level to bring you the finest specialty lots from India.
          </p>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  Section 2 — Estates Grid                                    */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: 'var(--cn-dark)',
          padding: isMobile ? '80px 20px' : '120px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? 60 : 80,
          }}
        >
          {ESTATES.map((estate, i) => (
            <EstateCard key={estate.name} estate={estate} index={i} />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Section 3 — Traceability                                    */}
      {/* ============================================================ */}
      <section
        ref={traceRef}
        style={{
          backgroundColor: 'var(--cn-dark-warm)',
          padding: isMobile ? '80px 20px' : '120px 24px',
          textAlign: 'center',
        }}
      >
        {/* CONTENT: Owner to provide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={traceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ maxWidth: 640, margin: '0 auto' }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--cn-red-primary)',
              marginBottom: 16,
            }}
          >
            TRACEABILITY
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 30 : 42,
              fontWeight: 700,
              color: 'var(--cn-cream)',
              lineHeight: 1.2,
              margin: '0 0 20px',
            }}
          >
            Every Lot, Every Farmer
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: 'var(--cn-gray)',
              lineHeight: 1.7,
              margin: '0 0 32px',
            }}
          >
            Each estate we work with is fully traceable. From the varietal planted
            to the process used, every detail is documented and available to our
            roaster partners.
          </p>
          <button
            onClick={openSourceForm}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '14px 32px',
              backgroundColor: 'var(--cn-red-primary)',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--cn-radius-sm)',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Request Lot Details
          </button>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  Section 4 — CTA                                             */}
      {/* ============================================================ */}
      <section
        ref={ctaRef}
        style={{
          backgroundColor: '#da2233',
          padding: isMobile ? '80px 20px' : '100px 24px',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ maxWidth: 560, margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 28 : 40,
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              margin: '0 0 16px',
            }}
          >
            Want to Visit an Estate?
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
              margin: '0 0 32px',
            }}
          >
            Plan a cupping session and farm visit at origin.
          </p>
          <button
            onClick={openLearnForm}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '14px 32px',
              backgroundColor: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              borderRadius: 'var(--cn-radius-sm)',
              cursor: 'pointer',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff'
              e.currentTarget.style.color = '#da2233'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#fff'
            }}
          >
            Plan Your Visit
          </button>
        </motion.div>
      </section>
    </main>
  )
}
