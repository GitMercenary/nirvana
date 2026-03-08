'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  onSourceClick: () => void
}

export default function Navigation({ onSourceClick }: NavigationProps) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 80)
    })
    return unsubscribe
  }, [scrollY])

  const navLinks = ['Our Coffee', 'The Estate', 'Traceability', 'Contact']

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12"
        style={{
          height: '72px',
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 300ms ease-out, backdrop-filter 300ms ease-out',
          borderBottom: scrolled ? '1px solid rgba(242,242,243,0.06)' : 'none',
        }}
      >
        {/* Wordmark */}
        <a
          href="/"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: '20px',
            color: '#f2f2f3',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Caffeine Nirvana
        </a>

        {/* Nav links + CTA — desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#a4a2a2',
                textDecoration: 'none',
                transition: 'color 300ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              {link}
            </a>
          ))}

          {/* Ghost CTA with SVG border trace animation */}
          <NavCTAButton onClick={onSourceClick} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
        >
          {[
            { transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' },
            { opacity: isMenuOpen ? 0 : 1 },
            { transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' },
          ].map((style, i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '1px',
                background: '#f2f2f3',
                transition: 'transform 300ms ease, opacity 300ms ease',
                ...style,
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10,10,10,0.98)',
              backdropFilter: 'blur(12px)',
              zIndex: 49,
              display: 'flex',
              flexDirection: 'column',
              padding: '80px 32px 48px',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: '20px',
                right: '28px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#f2f2f3',
                fontSize: '28px',
                lineHeight: 1,
                padding: '4px',
              }}
            >
              ×
            </button>

            {/* Nav links */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 + i * 0.07 }}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '36px',
                    color: '#f2f2f3',
                    textDecoration: 'none',
                    lineHeight: 1.3,
                    display: 'block',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#da2233')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#f2f2f3')}
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            {/* CTA at bottom */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              onClick={() => {
                setIsMenuOpen(false)
                onSourceClick()
              }}
              style={{
                background: 'transparent',
                border: '1px solid #da2233',
                color: '#da2233',
                padding: '16px 32px',
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 250ms ease, color 250ms ease',
                alignSelf: 'flex-start',
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
              Source From Origin
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavCTAButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '10px 24px',
        fontSize: '13px',
        fontFamily: 'DM Sans, system-ui, sans-serif',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#da2233',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {/* SVG border that traces itself on hover */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          fill="none"
          stroke="#da2233"
          strokeWidth="1"
          style={{
            strokeDasharray: hovered ? '0' : '1000',
            strokeDashoffset: hovered ? '0' : '1000',
            transition: 'stroke-dashoffset 400ms linear, stroke-dasharray 400ms linear',
          }}
        />
      </svg>
      {/* Static border when not hovered */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid #da2233',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 100ms ease',
          pointerEvents: 'none',
        }}
      />
      Source From Origin
    </button>
  )
}
