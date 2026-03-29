'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const steps = [
  {
    title: 'Farm',
    location: 'Partner Estates, Keserke',
    body: 'Hand-picked at peak ripeness. Zero mechanised harvest.',
  },
  {
    title: 'Processing',
    location: 'On-estate wet processing station',
    body: 'Washed and natural lots prepared within hours of picking. Western Ghats watershed water only.',
  },
  {
    title: 'Milling & Grading',
    location: 'Chikmagalur processing facility',
    body: 'Screen-graded, moisture-tested, and lot-separated. Full documentation per batch.',
  },
  {
    title: 'Direct Export',
    location: 'Port of Mangalore → Your Roastery',
    body: 'No broker. No middleman. You deal directly with Danish Ali. FOB and CIF terms available.',
  },
]

// Botanical SVG — single-stroke coffee branch
function BotanicalBackground() {
  return (
    <svg
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '800px',
        opacity: 0.07,
        pointerEvents: 'none',
        color: '#f2f2f3',
      }}
      viewBox="0 0 300 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M 150 380 C 148 320, 145 260, 150 200 C 155 140, 148 80, 150 20" />
      <path d="M 150 300 C 130 280, 100 270, 80 260" />
      <path d="M 80 260 C 70 248, 65 240, 60 230" />
      <path d="M 80 260 C 75 255, 68 250, 62 248" />
      <path d="M 150 220 C 125 200, 95 190, 70 185" />
      <path d="M 70 185 C 58 175, 50 168, 45 158" />
      <path d="M 150 150 C 130 135, 105 125, 85 120" />
      <path d="M 85 120 C 72 112, 62 105, 55 95" />
      <path d="M 150 280 C 170 260, 200 250, 220 242" />
      <path d="M 220 242 C 232 230, 240 222, 244 210" />
      <path d="M 150 200 C 175 182, 205 172, 228 165" />
      <path d="M 228 165 C 242 156, 252 148, 258 138" />
      <path d="M 150 130 C 170 118, 195 110, 215 104" />
      <path d="M 215 104 C 228 96, 238 90, 244 80" />
      <ellipse cx="60" cy="225" rx="14" ry="7" transform="rotate(-30 60 225)" />
      <ellipse cx="45" cy="153" rx="14" ry="7" transform="rotate(-40 45 153)" />
      <ellipse cx="55" cy="90" rx="12" ry="6" transform="rotate(-35 55 90)" />
      <ellipse cx="68" cy="250" rx="10" ry="5" transform="rotate(-50 68 250)" />
      <ellipse cx="244" cy="206" rx="14" ry="7" transform="rotate(25 244 206)" />
      <ellipse cx="258" cy="133" rx="14" ry="7" transform="rotate(30 258 133)" />
      <ellipse cx="244" cy="76" rx="12" ry="6" transform="rotate(35 244 76)" />
      <circle cx="78" cy="182" r="4" />
      <circle cx="68" cy="185" r="3" />
      <circle cx="228" cy="163" r="4" />
      <circle cx="238" cy="166" r="3" />
      <circle cx="52" cy="160" r="3" />
      <circle cx="248" cy="102" r="3" />
    </svg>
  )
}

export default function TraceabilitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' })
  const isMobile = useIsMobile()

  return (
    <section
      id="traceability"
      ref={sectionRef}
      style={{
        position: 'relative',
        background: 'var(--cn-dark-warm)',
        padding: isMobile ? '72px 0' : '120px 0',
        overflow: 'hidden',
      }}
    >
      {/* Ambient radial bloom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(16,12,8,0.8) 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.35,
        }}
      />

      <BotanicalBackground />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '800px',
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
            color: '#a4a2a2',
            marginBottom: '16px',
          }}
        >
          The Supply Chain
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 48px)',
            color: '#f2f2f3',
            marginBottom: '80px',
          }}
        >
          From Seed to Your Roastery
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical red line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            style={{
              position: 'absolute',
              left: '15px',
              top: '32px',
              bottom: '32px',
              width: '1px',
              background: '#da2233',
              transformOrigin: 'top',
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '32px',
                marginBottom: '64px',
                alignItems: 'flex-start',
              }}
            >
              {/* Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.3 + i * 0.15,
                }}
                style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid #da2233',
                  background: 'transparent',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#da2233',
                  }}
                >
                  {i + 1}
                </span>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + i * 0.15,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#f2f2f3',
                    marginBottom: '4px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#a4a2a2',
                    marginBottom: '8px',
                  }}
                >
                  {step.location}
                </p>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontWeight: 300,
                    fontSize: '15px',
                    color: '#a4a2a2',
                    lineHeight: 1.7,
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
