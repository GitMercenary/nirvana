'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useFormContext } from '@/context/FormContext'
import Image from 'next/image'
import Link from 'next/link'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string; children?: NavChild[] }

const NAV_ITEMS: NavItem[] = [
  { label: 'Offerings', href: '/offerings' },
  {
    label: 'Our Story',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Team', href: '/about/team' },
      { label: 'Chikmagalur', href: '/about/chikmagalur' },
      { label: 'Get to Know Your Coffee', href: '/about/coffee-101' },
    ],
  },
  { label: 'Estates', href: '/estates' },
  { label: 'Roasted Supply', href: '/roasted-supply' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const { openSourceForm: onSourceClick } = useFormContext()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 80)
    })
    return unsubscribe
  }, [scrollY])

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
        {/* Brand mark — full BW logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '44px',
            textDecoration: 'none',
          }}
        >
          <Image
            src="/images/logo-bw.png"
            alt="Caffeine Nirvana"
            width={812}
            height={449}
            priority
            style={{ height: '100%', width: 'auto', maxWidth: '200px', objectFit: 'contain' }}
          />
        </Link>

        {/* Nav links + CTA — desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <DesktopNavLink key={item.label} item={item} />
          ))}

          {/* Ghost CTA with SVG border trace animation */}
          <NavCTAButton onClick={onSourceClick} />
        </div>

        {/* Mobile hamburger / close — toggles */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '12px',
            position: 'relative',
            zIndex: 60,
          }}
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
            {/* Nav links */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', overflowY: 'auto' }}>
              {NAV_ITEMS.map((item, i) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  index={i}
                  closeMenu={() => setIsMenuOpen(false)}
                />
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
              Source From Origin
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileNavItem({
  item,
  index,
  closeMenu,
}: {
  item: NavItem
  index: number
  closeMenu: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = !!item.children?.length

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 + index * 0.07 }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <a
          href={item.href}
          onClick={closeMenu}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: '32px',
            color: '#f2f2f3',
            textDecoration: 'none',
            lineHeight: 1.3,
            display: 'block',
            flex: 1,
            minHeight: 44,
          }}
        >
          {item.label}
        </a>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
            aria-expanded={expanded}
            style={{
              background: 'none',
              border: 'none',
              color: expanded ? '#da2233' : '#a4a2a2',
              cursor: 'pointer',
              padding: 12,
              minWidth: 44,
              minHeight: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 200ms ease',
            }}
          >
            <ChevronDown
              size={22}
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 250ms ease',
              }}
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: 6,
                  marginBottom: 10,
                  paddingLeft: 16,
                  gap: 4,
                }}
              >
                {item.children!.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={closeMenu}
                    style={{
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '14px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#a4a2a2',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '10px 0',
                      minHeight: 44,
                    }}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  )
}

function DesktopNavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <Link
        href={item.href}
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
        {item.label}
      </Link>
    )
  }

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: '13px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: open ? '#f2f2f3' : '#a4a2a2',
          textDecoration: 'none',
          transition: 'color 300ms ease',
          display: 'inline-block',
          paddingBottom: 4,
        }}
      >
        {item.label}
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 14px)',
              left: '50%',
              transform: 'translateX(-50%)',
              minWidth: 220,
              background: 'rgba(16,14,11,0.97)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(242,242,243,0.08)',
              borderRadius: 'var(--cn-radius-sm, 8px)',
              padding: '10px 0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
            }}
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#a4a2a2',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  whiteSpace: 'nowrap',
                  transition: 'color 200ms ease, background 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f2f2f3'
                  e.currentTarget.style.background = 'rgba(218,34,51,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#a4a2a2'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
        borderRadius: 'var(--cn-radius-sm)',
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
          rx="8"
          ry="8"
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
          borderRadius: 'var(--cn-radius-sm)',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 100ms ease',
          pointerEvents: 'none',
        }}
      />
      Source From Origin
    </button>
  )
}
