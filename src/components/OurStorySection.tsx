'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useFormContext } from '@/context/FormContext'

const pillars = [
  {
    number: '01',
    title: 'Sourcing & Processing',
    body: 'We source coffee from countless small farmers across Chikmagalur and process it at the Caffeine Nirvana Washing Station.',
  },
  {
    number: '02',
    title: 'Quality First',
    body: 'High scoring lots with 86\u201388 SCA cupping scores. Our shift from quantity to cup quality drives everything.',
  },
  {
    number: '03',
    title: 'Inclusion & Grassroots',
    body: 'Working with farmers at the grassroots level \u2014 from plant varietal selection to growing practices and nutrition.',
  },
  {
    number: '04',
    title: 'Sustainable & Transparent',
    body: 'We pay among the highest prices to our farmers and focus on building a sustainable coffee ecosystem.',
  },
]

export default function OurStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' })
  const isMobile = useIsMobile()
  const { openLearnForm } = useFormContext()

  return (
    <section
      id="our-story"
      ref={sectionRef}
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 48px)',
            color: 'var(--cn-cream, #f2f2f3)',
            marginBottom: '16px',
          }}
        >
          From Farmer to Cup
        </motion.h2>

        {/* CONTENT: Owner to provide final copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--cn-gray, #a4a2a2)',
            maxWidth: '640px',
            marginBottom: '64px',
          }}
        >
          We work directly with small-holder farmers in the hills of Chikmagalur,
          carefully sourcing, processing, and curating each lot so that every cup
          tells the story of its origin.
        </motion.p>

        {/* 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
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
                }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <button
            onClick={openLearnForm}
            onMouseEnter={(e) => {
              const btn = e.currentTarget
              btn.style.background = 'var(--cn-red-primary, #da2233)'
              btn.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget
              btn.style.background = 'transparent'
              btn.style.color = 'var(--cn-red-primary, #da2233)'
            }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--cn-red-primary, #da2233)',
              background: 'transparent',
              border: '1.5px solid var(--cn-red-primary, #da2233)',
              borderRadius: 'var(--cn-radius-sm, 8px)',
              padding: '14px 36px',
              cursor: 'pointer',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}
