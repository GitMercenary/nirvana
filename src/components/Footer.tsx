'use client'

import { useState } from 'react'
import { submitToEmail } from '@/utils/submitForm'
import { Linkedin, Instagram } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import Image from 'next/image'

// Inline quick contact form
function FooterQuickContactForm() {
  // Email routing — see /src/config/email.config.js to change recipients
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitToEmail(form, 'FOOTER_QUICK')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: '14px',
          color: '#a4a2a2',
          lineHeight: 1.6,
        }}
      >
        Message sent. Danish will respond shortly.
      </p>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(242,242,243,0.08)',
    color: '#f2f2f3',
    padding: '12px 14px',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: '14px',
    outline: 'none',
    marginBottom: '10px',
    transition: 'border-color 200ms ease',
    borderRadius: 'var(--cn-radius-sm)',
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.08)')}
      />
      <input
        type="email"
        placeholder="your@email.com"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.08)')}
      />
      <textarea
        placeholder="Your message to Danish Ali..."
        required
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        style={{ ...inputStyle, resize: 'vertical', marginBottom: '14px' }}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.08)')}
      />
      {status === 'error' && (
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '12px',
            color: '#da2233',
            marginBottom: '10px',
          }}
        >
          Something went wrong. Email danish.888.ali@gmail.com directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          background: 'transparent',
          border: '1px solid #da2233',
          color: '#da2233',
          padding: '10px 24px',
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          transition: 'background 250ms ease, color 250ms ease',
          opacity: status === 'submitting' ? 0.6 : 1,
          borderRadius: 'var(--cn-radius-sm)',
        }}
        onMouseEnter={(e) => {
          if (status !== 'submitting') {
            e.currentTarget.style.background = '#da2233'
            e.currentTarget.style.color = '#f2f2f3'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = '#da2233'
        }}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              src="/images/logo-enzo.png"
              alt=""
              width={28}
              height={28}
              style={{ objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: '24px',
                color: '#f2f2f3',
              }}
            >
              Caffeine Nirvana
            </span>
          </div>
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
            <a href="mailto:danish.888.ali@gmail.com" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              danish.888.ali@gmail.com
            </a>
            <a href="tel:+918073728811" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              +91 80 7372 8811
            </a>
            <a href="https://caffeinenirvana.net" style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              caffeinenirvana.net
            </a>
          </div>

          {/* Col 2: Office Hours */}
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

          {/* Col 4: Quick Contact */}
          <div>
            <p style={labelStyle}>Send a Message</p>
            <FooterQuickContactForm />
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
            {['Privacy Policy', 'Terms'].map((item) => (
              <a
                key={item}
                href="#"
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
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
