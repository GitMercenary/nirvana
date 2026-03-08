'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const pillars = [
  {
    number: '01',
    title: 'Shade-Grown',
    body: '36 hectares under a biodiverse canopy of silver oak, rosewood, and cardamom. The shade regulates temperature, reduces water use, and creates habitat for over 40 bird species.',
  },
  {
    number: '02',
    title: 'Chemical-Free',
    body: 'No synthetic pesticides. No artificial fertilisers. Soil health is managed through composting, green manuring, and natural pest management practiced across three generations.',
  },
  {
    number: '03',
    title: 'Direct Trade',
    body: 'When you buy from Caffeine Nirvana, 100% of the premium reaches the estate. No broker fees. No certification middlemen. The price you pay reflects the value of the coffee, not the supply chain.',
  },
]

export default function SustainabilitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' })
  const isMobile = useIsMobile()

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#f0ece6',
        padding: isMobile ? '72px 0' : '120px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 32px',
        }}
      >
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#6a6a6a',
            marginBottom: '16px',
          }}
        >
          Our Practice
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 48px)',
            color: '#0e0e0e',
            marginBottom: '80px',
          }}
        >
          Grown Without Compromise
        </motion.h2>

        {/* Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
          }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + i * 0.15,
              }}
              style={{
                borderTop: '2px solid #0e0e0e',
                paddingTop: '32px',
              }}
            >
              {/* Ghost number */}
              <div
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 900,
                  fontSize: '72px',
                  color: 'rgba(0,0,0,0.08)',
                  lineHeight: 1,
                  marginBottom: '-8px',
                  userSelect: 'none',
                }}
              >
                {pillar.number}
              </div>
              <h3
                style={{
                  fontFamily: 'Zilla Slab, Georgia, serif',
                  fontWeight: 600,
                  fontSize: '22px',
                  color: '#0e0e0e',
                  marginBottom: '16px',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#5a5a5a',
                  lineHeight: 1.8,
                }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
