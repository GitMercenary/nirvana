'use client'

import { Linkedin, Instagram } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import Image from 'next/image'

export default function Footer() {
  const isMobile = useIsMobile()
  const labelStyle: React.CSSProperties = {
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: '10px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#a4a2a2',
    marginBottom: '16px',
  }

  const linkStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: '13px',
    color: '#a4a2a2',
    textDecoration: 'none',
    marginBottom: '8px',
    transition: 'color 200ms ease',
  }

  return (
    <footer
      style={{
        background: '#0a0a0a',
        paddingTop: '32px',
        paddingBottom: '16px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Image
            src="/images/logo-bw.png"
            alt="Caffeine Nirvana"
            width={812}
            height={449}
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a4a2a2',
            }}
          >
            Keserke, Chikmagalur · 13.2189°N, 75.7817°E
          </p>
        </div>

        {/* Middle row — 3 cols + contact form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: isMobile ? '32px' : '48px',
            marginBottom: '8px',
            borderTop: '1px solid rgba(242,242,243,0.06)',
            paddingTop: '20px',
          }}
        >
          {/* Col 1: Direct Export */}
          <div>
            <p style={labelStyle}>Direct Export</p>
            <a href="mailto:danish@caffeinenirvana.co" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              danish@caffeinenirvana.co
            </a>
            <a href="mailto:ayesha@caffeinenirvana.co" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              ayesha@caffeinenirvana.co
            </a>
          </div>

          {/* Col 2: Explore */}
          <div>
            <p style={labelStyle}>Explore</p>
            <a href="/about/team" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              Team
            </a>
            <a href="/about/chikmagalur" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              Chikmagalur
            </a>
            <a href="/about/coffee-101" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              Get to Know Your Coffee
            </a>
            <a href="/why-us" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              Why Us
            </a>
          </div>

          {/* Col 3: Office Hours */}
          <div>
            <p style={labelStyle}>Office Hours</p>
            <p style={{ ...linkStyle, cursor: 'default' }}>EU/UK: 9AM–6PM IST</p>
            <p style={{ ...linkStyle, cursor: 'default' }}>Japan: Response by 12PM JST</p>
            <p style={{ ...linkStyle, cursor: 'default' }}>Middle East: 10AM–7PM GST</p>
          </div>

          {/* Col 3: Social */}
          <div>
            <p style={labelStyle}>Follow Along</p>
            <a
              href="https://linkedin.com/company/caffeine-nirvana"
              style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/caffeinenirvana"
              style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              <Instagram size={14} />
              Instagram
            </a>
          </div>

        </div>

        {/* Logo mark — centered */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <Image
            src="/images/logo-enzo.png"
            alt=""
            width={48}
            height={48}
            style={{ objectFit: 'contain', opacity: 0.6, display: 'inline-block' }}
          />
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(164,162,162,0.12)',
            paddingTop: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              color: 'rgba(164,162,162,0.5)',
            }}
          >
            © 2026 Caffeine Nirvana. Keserke, Chikmagalur 577101, Karnataka, India.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '11px',
                  color: 'rgba(164,162,162,0.5)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a4a2a2')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(164,162,162,0.5)')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
