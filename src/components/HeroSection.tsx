'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useFormContext } from '@/context/FormContext'
import Image from 'next/image'

const headline = ['Specialty Coffee', 'From Origin.']

export default function HeroSection() {
  const { scrollY } = useScroll()
  const [showScroll, setShowScroll] = useState(true)
  const bgY = useTransform(scrollY, [0, 600], [0, -180])
  const isMobile = useIsMobile()
  const { openSourceForm, openLearnForm } = useFormContext()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setShowScroll(v < 100))
    return unsub
  }, [scrollY])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--cn-black)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated radial gradient background */}
      <motion.div
        animate={{ opacity: [0.6, 1.0, 0.6] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 20% 100%, #0a1a0a 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Hero image overlay — parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10% 0',
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          pointerEvents: 'none',
          y: bgY,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
          paddingTop: '120px',
          paddingBottom: '80px',
        }}
      >
        {/* Step 1: Enzo Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '32px', width: '100px', height: '100px' }}
        >
          <Image
            src="/images/logo-enzo.png"
            alt="Caffeine Nirvana"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>

        {/* Step 2: Coordinates */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#a4a2a2',
            marginBottom: '24px',
          }}
        >
          Keserke, Chikmagalur · 13.2189°N, 75.7817°E
        </motion.p>

        {/* Step 3: Headline — word by word */}
        <h1
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 900,
            fontSize: 'clamp(48px, 7vw, 96px)',
            color: '#f2f2f3',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}
        >
          {headline.map((line, lineIdx) => (
            <div key={lineIdx} style={{ overflow: 'hidden', display: 'block' }}>
              {line.split(' ').map((word, wordIdx) => {
                const globalIdx = headline
                  .slice(0, lineIdx)
                  .reduce((acc, l) => acc + l.split(' ').length, 0) + wordIdx
                return (
                  <motion.span
                    key={wordIdx}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 1.0 + globalIdx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: 'inline-block', marginRight: '0.25em' }}
                  >
                    {word}
                  </motion.span>
                )
              })}
            </div>
          ))}
        </h1>

        {/* Step 4: Subheading — made bigger per owner request */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          style={{
            fontFamily: 'Zilla Slab, Georgia, serif',
            fontWeight: 600,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            color: '#f2f2f3',
            marginBottom: '48px',
            letterSpacing: '0.02em',
          }}
        >
          Traceable. Transparent. Direct.
        </motion.p>

        {/* Step 5: CTA pair */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <button
            onClick={openSourceForm}
            style={{
              background: '#da2233',
              color: '#f2f2f3',
              border: 'none',
              padding: '16px 40px',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '14px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 250ms ease',
              borderRadius: 'var(--cn-radius-sm)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#b82026')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#da2233')}
          >
            Source From Origin
          </button>
          <button
            onClick={openLearnForm}
            style={{
              background: 'transparent',
              color: '#a4a2a2',
              border: '1px solid #a4a2a2',
              padding: '16px 40px',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '14px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'border-color 300ms ease, color 300ms ease',
              borderRadius: 'var(--cn-radius-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#f2f2f3'
              e.currentTarget.style.color = '#f2f2f3'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#a4a2a2'
              e.currentTarget.style.color = '#a4a2a2'
            }}
          >
            Learn the Origin
          </button>
        </motion.div>
      </div>

      {/* Step 6: Produce of India stamp */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 2.4, type: 'spring', stiffness: 150, damping: 20 }}
        style={{
          position: 'absolute',
          bottom: isMobile ? '120px' : '60px',
          right: isMobile ? '24px' : '80px',
          width: isMobile ? '80px' : '100px',
          height: isMobile ? '80px' : '100px',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          style={{ width: '100%', height: '100%' }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#f2f2f3" strokeWidth="1" />
            <circle cx="50" cy="50" r="38" stroke="#f2f2f3" strokeWidth="0.5" />
            <text
              style={{ fontFamily: 'DM Sans, system-ui, sans-serif' }}
              fontSize="7"
              fill="#f2f2f3"
              textAnchor="middle"
            >
              <textPath href="#stamp-circle" startOffset="12.5%">
                PRODUCE OF INDIA · CAFFEINE NIRVANA · CHIKMAGALUR ·
              </textPath>
            </text>
            <defs>
              <path
                id="stamp-circle"
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text
              x="50"
              y="46"
              textAnchor="middle"
              fontSize="8"
              fontWeight="600"
              fill="#f2f2f3"
              style={{ fontFamily: 'DM Sans, system-ui, sans-serif', letterSpacing: '0.08em' }}
            >
              BEAN HERE
            </text>
            <text
              x="50"
              y="57"
              textAnchor="middle"
              fontSize="8"
              fontWeight="600"
              fill="#f2f2f3"
              style={{ fontFamily: 'DM Sans, system-ui, sans-serif', letterSpacing: '0.08em' }}
            >
              NOW
            </text>
          </svg>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: showScroll ? 0.4 : 0, y: [0, 8, 0] }}
        transition={{ y: { duration: 2, ease: 'easeInOut', repeat: Infinity }, opacity: { duration: 0.3 } }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      >
        <ChevronDown size={24} color="#f2f2f3" />
      </motion.div>
    </section>
  )
}
