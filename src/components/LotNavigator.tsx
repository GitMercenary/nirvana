'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LOTS } from './AtmosphereSelector'
import { useIsMobile } from '@/hooks/useIsMobile'

function TopographicBackground() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.03,
      }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => {
        const y = 50 + i * 60
        const amp = 15 + (i % 4) * 8
        const sw = 0.5 + (i % 3) * 0.5
        return (
          <path
            key={i}
            d={`M 0 ${y} C 200 ${y - amp}, 400 ${y + amp}, 600 ${y - amp * 0.7} S 900 ${y + amp * 0.5}, 1200 ${y - amp * 0.3} S 1600 ${y + amp}, 1920 ${y}`}
            fill="none"
            stroke="#f2f2f3"
            strokeWidth={sw}
          />
        )
      })}
    </svg>
  )
}

interface LotNavigatorProps {
  onSampleRequest: (lotName: string) => void
}

export default function LotNavigator({ onSampleRequest }: LotNavigatorProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-5% 0px' })
  const isMobile = useIsMobile()

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        background: 'var(--cn-dark-alt)',
        padding: isMobile ? '72px 0' : '120px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(218,34,51,0.2)',
      }}
    >
      {/* Smoke background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/bg-smoke.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      />

      {/* Ambient radial bloom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 50% 60% at 15% 50%, rgba(8,8,14,0.7) 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.35,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
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
            color: '#a4a2a2',
            marginBottom: '16px',
          }}
        >
          Request Availability
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 42px)',
            color: '#f2f2f3',
            marginBottom: '16px',
          }}
        >
          Order &amp; Sample Request
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            color: '#a4a2a2',
            marginBottom: '64px',
          }}
        >
          All lots are available for sample request. FOB Mangalore. Direct from estate.
        </motion.p>

        {/* 4-col procurement grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {LOTS.map((lot, i) => (
            <motion.div
              key={lot.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + i * 0.12,
              }}
              whileHover={{
                y: -6,
                transition: { type: 'spring', stiffness: 300, damping: 25 },
              }}
              style={{
                border: '1px solid rgba(242,242,243,0.08)',
                borderTop: `1px solid rgba(242,242,243,0.08)`,
                padding: '40px',
                cursor: 'default',
                position: 'relative',
              }}
              onHoverStart={(e) => {
                const el = e.target as HTMLElement
                const card = el.closest('[data-lot-card]') as HTMLElement
                if (card) {
                  card.style.borderColor = `${lot.accent}66`
                  card.style.boxShadow = `inset 0 0 0 1px ${lot.accent}33`
                }
              }}
              onHoverEnd={(e) => {
                const el = e.target as HTMLElement
                const card = el.closest('[data-lot-card]') as HTMLElement
                if (card) {
                  card.style.borderColor = 'rgba(242,242,243,0.08)'
                  card.style.boxShadow = 'none'
                }
              }}
              data-lot-card
            >
              {/* Top row: name + SCA badge */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '28px',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '22px',
                    color: '#f2f2f3',
                  }}
                >
                  {lot.name}
                </h3>
                <span
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    background: 'rgba(218,34,51,0.1)',
                    border: '1px solid rgba(218,34,51,0.3)',
                    color: '#da2233',
                    padding: '4px 12px',
                    borderRadius: '2px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  SCA {lot.sca_score}
                </span>
              </div>

              {/* Data grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(80px, 1fr))',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                {[
                  { label: 'Varietal', value: lot.varietal },
                  { label: 'Process', value: lot.process },
                  { label: 'Altitude', value: lot.altitude },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: 'DM Sans, system-ui, sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#a4a2a2',
                        marginBottom: '4px',
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Zilla Slab, Georgia, serif',
                        fontWeight: 600,
                        fontSize: '15px',
                        color: '#f2f2f3',
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability line */}
              <p
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6a6a6a',
                  marginBottom: '28px',
                }}
              >
                FOB Mangalore · CIF Available
              </p>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onSampleRequest(lot.name)}
                  style={{
                    background: 'transparent',
                    border: '1px solid #da2233',
                    color: '#da2233',
                    padding: '10px 24px',
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background 250ms ease, color 250ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#da2233'
                    e.currentTarget.style.color = '#f2f2f3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#da2233'
                  }}
                >
                  Request Sample
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(164,162,162,0.4)',
                    color: '#a4a2a2',
                    padding: '10px 24px',
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'border-color 250ms ease, color 250ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(164,162,162,0.8)'
                    e.currentTarget.style.color = '#f2f2f3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(164,162,162,0.4)'
                    e.currentTarget.style.color = '#a4a2a2'
                  }}
                >
                  Download Spec
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
