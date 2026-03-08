'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

interface CTABannerProps {
  onSourceClick: () => void
}

export default function CTABanner({ onSourceClick }: CTABannerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const isMobile = useIsMobile()

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        background: '#da2233',
        padding: isMobile ? '72px 20px' : '120px 32px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Texture overlay — cta-banner-bg.png at 7% over red */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/cta-banner-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: '#f2f2f3',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          Ready to Source From Origin?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontWeight: 300,
            fontSize: '16px',
            color: 'rgba(242,242,243,0.8)',
            marginBottom: '48px',
          }}
        >
          Minimum sample quantity: 1kg per lot. FOB Mangalore. Response within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
        >
          <button
            onClick={onSourceClick}
            style={{
              background: 'transparent',
              border: '2px solid #f2f2f3',
              color: '#f2f2f3',
              padding: '18px 48px',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '14px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 300ms ease, color 300ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f2f2f3'
              e.currentTarget.style.color = '#da2233'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#f2f2f3'
            }}
          >
            Source From Origin
          </button>
        </motion.div>
      </div>
    </section>
  )
}
