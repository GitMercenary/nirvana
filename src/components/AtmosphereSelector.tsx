'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useFormContext } from '@/context/FormContext'
export const LOTS = [
  {
    id: '5b-naturals',
    name: '5B Naturals',
    estate: 'Zoya Estate',
    varietal: 'SL 5B',
    process: '48 hr Anaerobic',
    altitude: '4,180 ft msl',
    sca_score: '86.75',
    tasting_notes: 'Bright citrus, black tea, floral close',
    atmosphere: '#0a140a',
    accent: '#b8860b',
    harvest: '2024',
    volume: 'Available — Enquire for allocation',
  },
  {
    id: 'chandragiri-washed',
    name: 'Chandragiri Washed',
    estate: 'Sheethal Estate',
    varietal: 'Chandragiri',
    process: '24 hr Classic Washed',
    altitude: '3,870 ft msl',
    sca_score: '85.50',
    tasting_notes: 'Milk chocolate, dried apricot, soft caramel',
    atmosphere: '#140f0a',
    accent: '#a07050',
    harvest: '2024',
    volume: 'Available — Enquire for allocation',
  },
  {
    id: 'supernatural',
    name: 'Supernatural Process',
    estate: 'Zoya Estate',
    varietal: 'SL 5B',
    process: 'Triple Supernatural',
    altitude: '4,180 ft msl',
    sca_score: '87.75',
    tasting_notes: 'Stonefruit, peach, floral',
    atmosphere: '#140a14',
    accent: '#d49b6a',
    harvest: '2024',
    volume: 'Available — Enquire for allocation',
  },
  {
    id: 'lactic-sequential-naturals',
    name: 'Lactic Sequential Naturals',
    estate: 'Caffeine Nirvana Washing Station',
    varietal: 'SL 796, Chandragiri',
    process: 'Three Stage Aerobic + Anaerobic Naturals',
    altitude: '4,350 ft msl',
    sca_score: '87.00',
    tasting_notes: 'Strawberry milkshake, wildberries',
    atmosphere: '#1a0a14',
    accent: '#b03050',
    harvest: '2024',
    volume: 'Available — Enquire for allocation',
  },
]

// Topographic SVG background — 14 wavy elevation lines
function TopographicBackground() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.04,
      }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => {
        const y = 50 + i * 60
        const amp = 15 + (i % 4) * 8
        const freq = 0.003 + (i % 3) * 0.001
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

export default function AtmosphereSelector() {
  const { openSampleForm: onSampleRequest } = useFormContext()
  const [activeId, setActiveId] = useState(LOTS[0].id)
  const activeLot = LOTS.find((l) => l.id === activeId) ?? LOTS[0]
  const isMobile = useIsMobile()

  return (
    <section
      id="our-coffee"
      style={{
        position: 'relative',
        backgroundColor: activeLot.atmosphere,
        transition: 'background-color 900ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        padding: isMobile ? '72px 0 64px' : '100px 0 80px',
        overflow: 'hidden',
      }}
    >
      {/* Coffee branch background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/bg-coffee-branch.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />

      {/* Accent bloom overlay — changes per selected lot */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 80% 70% at 50% 40%, ${activeLot.accent}0f 0%, transparent 65%)`,
          transition: 'background 900ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          pointerEvents: 'none',
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
        {/* Section header */}
        <p
          style={{
            fontFamily: 'Zilla Slab, Georgia, serif',
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#a4a2a2',
            marginBottom: '12px',
          }}
        >
          Current Offerings
        </p>
        <h2
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: '42px',
            color: '#f2f2f3',
            marginBottom: '56px',
          }}
        >
          Current Harvest
        </h2>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {LOTS.map((lot) => {
            const isActive = lot.id === activeId
            return (
              <button
                key={lot.id}
                onClick={() => setActiveId(lot.id)}
                style={{
                  textAlign: 'left',
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
                  border: isActive ? `1px solid ${lot.accent}44` : '1px solid rgba(242,242,243,0.08)',
                  borderTop: isActive ? `1px solid ${lot.accent}99` : '1px solid rgba(242,242,243,0.08)',
                  boxShadow: isActive
                    ? `inset 0 0 0 1px ${lot.accent}bb, 0 0 32px 0 ${lot.accent}18`
                    : 'none',
                  padding: '32px',
                  cursor: 'pointer',
                  borderRadius: 'var(--cn-radius)',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'transform 300ms ease, border-color 300ms ease, background 300ms ease, box-shadow 300ms ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(242,242,243,0.2)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(242,242,243,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }
                }}
              >
                {/* Lot name + estate */}
                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fontWeight: 700,
                      fontSize: '22px',
                      color: '#f2f2f3',
                      marginBottom: '4px',
                    }}
                  >
                    {lot.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: lot.accent,
                    }}
                  >
                    {lot.estate}
                  </div>
                </div>

                {/* Data grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '20px',
                  }}
                >
                  {[
                    { label: 'Varietal', value: lot.varietal },
                    { label: 'Process', value: lot.process },
                    { label: 'Altitude', value: lot.altitude },
                    { label: 'SCA Score', value: lot.sca_score },
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

                {/* Tasting notes */}
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontWeight: 300,
                    fontSize: '13px',
                    color: '#a4a2a2',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    lineHeight: 1.6,
                  }}
                >
                  {lot.tasting_notes}
                </p>

                {/* Spec link */}
                <div
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '12px',
                    color: '#da2233',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  View Full Spec Sheet →
                </div>
              </button>
            )
          })}
        </div>

        {/* Expanded panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              border: '1px solid rgba(242,242,243,0.08)',
              padding: '40px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: 'var(--cn-radius)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                gap: isMobile ? '24px' : '40px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#a4a2a2',
                    marginBottom: '8px',
                  }}
                >
                  Full Tasting Profile
                </div>
                <p
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#f2f2f3',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  {activeLot.tasting_notes}
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#a4a2a2',
                    marginBottom: '8px',
                  }}
                >
                  Harvest Year
                </div>
                <div
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 600,
                    fontSize: '28px',
                    color: '#f2f2f3',
                  }}
                >
                  {activeLot.harvest}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#a4a2a2',
                    marginBottom: '8px',
                  }}
                >
                  Availability
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '14px',
                    color: '#f2f2f3',
                    marginBottom: '16px',
                  }}
                >
                  {activeLot.volume}
                </div>
                <button
                  onClick={() => onSampleRequest(activeLot.name)}
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
                    borderRadius: 'var(--cn-radius-sm)',
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
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
