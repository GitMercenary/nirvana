'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useFormContext } from '@/context/FormContext'
import { submitToEmail } from '@/utils/submitForm'

/* ─── animation helpers ─── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

function Section({
  children,
  bg,
  style,
}: {
  children: React.ReactNode
  bg: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <section
      ref={ref}
      style={{
        background: bg,
        padding: '80px 24px',
        ...style,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 1200, margin: '0 auto' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

/* ─── eyebrow ─── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-dm)',
        fontSize: 13,
        letterSpacing: '0.18em',
        color: 'var(--cn-red-primary)',
        marginBottom: 16,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </p>
  )
}

/* ─── CTA card ─── */
function CtaCard({
  title,
  description,
  buttonLabel,
  onClick,
}: {
  title: string
  description: string
  buttonLabel: string
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(242,242,243,0.06)',
        borderTop: '2px solid var(--cn-red-primary)',
        borderRadius: 'var(--cn-radius)',
        padding: 32,
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-slab)',
          fontSize: 20,
          color: 'var(--cn-cream)',
          marginBottom: 12,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-dm)',
          fontSize: 15,
          color: 'var(--cn-gray)',
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        {description}
      </p>
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: 'var(--font-dm)',
          fontSize: 14,
          letterSpacing: '0.06em',
          padding: '12px 28px',
          borderRadius: 'var(--cn-radius-sm)',
          border: '1px solid var(--cn-red-primary)',
          background: hovered ? 'var(--cn-red-primary)' : 'transparent',
          color: hovered ? '#fff' : 'var(--cn-red-primary)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        {buttonLabel}
      </button>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   Contact Page
   ═══════════════════════════════════════════════ */

export default function ContactPage() {
  const isMobile = useIsMobile()
  const { openSourceForm, openLearnForm } = useFormContext()

  /* ── inline form state ── */
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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(242,242,243,0.1)',
    borderRadius: 'var(--cn-radius-sm)',
    padding: '14px 16px',
    color: 'var(--cn-cream)',
    fontFamily: 'var(--font-dm)',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.3s',
    marginBottom: 16,
    boxSizing: 'border-box' as const,
  }

  /* ═══ RENDER ═══ */
  return (
    <main>
      {/* ── Section 1: Hero ── */}
      <Section
        bg="var(--cn-black)"
        style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}
      >
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <motion.div {...fade(0)}>
            <Eyebrow>GET IN TOUCH</Eyebrow>
          </motion.div>

          <motion.h1
            {...fade(0.15)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 42 : 64,
              color: 'var(--cn-cream)',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Let&rsquo;s Talk Coffee
          </motion.h1>

          <motion.p
            {...fade(0.3)}
            style={{
              fontFamily: 'var(--font-slab)',
              fontSize: isMobile ? 16 : 19,
              color: 'var(--cn-gray)',
              lineHeight: 1.7,
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            Whether you&rsquo;re sourcing green beans, planning a farm visit, or
            looking for roasted supply &mdash; we&rsquo;d love to hear from you.
          </motion.p>
        </div>
      </Section>

      {/* ── Section 2: Contact Info + CTA ── */}
      <Section bg="var(--cn-dark)">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 48 : 64,
          }}
        >
          {/* Left column — contact info */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-slab)',
                fontSize: 24,
                color: 'var(--cn-cream)',
                marginBottom: 28,
              }}
            >
              Direct Contact
            </h2>

            <div style={{ marginBottom: 32 }}>
              <ContactLink
                href="mailto:danish.888.ali@gmail.com"
                label="danish.888.ali@gmail.com"
                color="var(--cn-red-primary)"
              />
              <ContactLink
                href="tel:+918073728811"
                label="+91 80 7372 8811"
                color="var(--cn-red-primary)"
              />
              <ContactLink
                href="https://caffeinenirvana.net"
                label="caffeinenirvana.net"
                color="var(--cn-gray)"
                external
              />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-slab)',
                fontSize: 17,
                color: 'var(--cn-cream)',
                marginBottom: 14,
              }}
            >
              Office Hours
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 32px',
                fontFamily: 'var(--font-dm)',
                fontSize: 14,
                lineHeight: 2,
                color: 'var(--cn-gray)',
              }}
            >
              <li>EU / UK: 9 AM &ndash; 6 PM IST</li>
              <li>Japan: Response by 12 PM JST</li>
              <li>Middle East: 10 AM &ndash; 7 PM GST</li>
            </ul>

            <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
              <SocialLink href="https://linkedin.com/company/caffeine-nirvana" label="LinkedIn" />
              <SocialLink href="https://instagram.com/caffeinenirvana" label="Instagram" />
              <SocialLink
                href="https://typica.coffee/en/producers/caffeine-nirvana"
                label="TYPICA Profile"
              />
            </div>
          </div>

          {/* Right column — CTA cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <CtaCard
              title="Source From Origin"
              description="Looking for specialty green coffee from India? Request samples, get spec sheets, and start a direct relationship."
              buttonLabel="Start Sourcing"
              onClick={openSourceForm}
            />
            <CtaCard
              title="Visit the Origin"
              description="Plan a cupping session and farm visit in Chikmagalur. Walk the estates, meet the farmers, taste the coffee at source."
              buttonLabel="Plan Your Visit"
              onClick={openLearnForm}
            />
          </div>
        </div>
      </Section>

      {/* ── Section 3: Location ── */}
      <Section bg="var(--cn-dark-warm)">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Eyebrow>LOCATION</Eyebrow>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 32 : 48,
              color: 'var(--cn-cream)',
              marginBottom: 8,
            }}
          >
            Keserke, Chikmagalur
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: 15,
              color: 'var(--cn-gray)',
              letterSpacing: '0.12em',
              marginBottom: 16,
            }}
          >
            13.2189&deg;N, 75.7817&deg;E
          </p>

          <p
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: 16,
              color: 'var(--cn-gray)',
              lineHeight: 1.7,
              maxWidth: 540,
              margin: '0 auto',
            }}
          >
            Nestled in the Western Ghats of Karnataka, India. The birthplace of
            Indian coffee.
          </p>
        </div>

        {/* CONTENT: Owner to provide */}
        <div
          style={{
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto',
            borderRadius: 'var(--cn-radius)',
            overflow: 'hidden',
            aspectRatio: '21/9',
            position: 'relative',
            filter: 'saturate(0.75)',
          }}
        >
          <Image
            src="/images/carousel/drying-beds.jpg"
            alt="Drying beds at Keserke estate, Chikmagalur"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={false}
          />
        </div>
      </Section>

      {/* ── Section 4: Quick Contact Form ── */}
      <Section bg="var(--cn-dark)">
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow>SEND A MESSAGE</Eyebrow>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 32 : 42,
              color: 'var(--cn-cream)',
              marginBottom: 36,
            }}
          >
            Drop Us a Line
          </h2>

          {status === 'success' ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: 'var(--font-slab)',
                fontSize: 17,
                color: 'var(--cn-cream)',
                lineHeight: 1.7,
                padding: '40px 0',
              }}
            >
              Message sent. Danish will respond shortly.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.1)')
                }
              />
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.1)')
                }
              />
              <textarea
                placeholder="Your message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical', marginBottom: 24 }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.1)')
                }
              />

              <SubmitButton submitting={status === 'submitting'} />

              {status === 'error' && (
                <p
                  style={{
                    color: 'var(--cn-red-primary)',
                    fontFamily: 'var(--font-dm)',
                    fontSize: 14,
                    marginTop: 14,
                  }}
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </Section>
    </main>
  )
}

/* ─── small helpers ─── */

function ContactLink({
  href,
  label,
  color,
  external,
}: {
  href: string
  label: string
  color: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'block',
        fontFamily: 'var(--font-dm)',
        fontSize: 15,
        color,
        textDecoration: 'none',
        marginBottom: 10,
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {label}
    </a>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: 'var(--font-dm)',
        fontSize: 13,
        letterSpacing: '0.08em',
        color: 'var(--cn-cream)',
        textDecoration: 'none',
        borderBottom: '1px solid rgba(242,242,243,0.15)',
        paddingBottom: 2,
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = 'var(--cn-red-primary)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.15)')
      }
    >
      {label}
    </a>
  )
}

function SubmitButton({ submitting }: { submitting: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="submit"
      disabled={submitting}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-dm)',
        fontSize: 15,
        letterSpacing: '0.06em',
        padding: '14px 36px',
        borderRadius: 'var(--cn-radius-sm)',
        border: '1px solid var(--cn-red-primary)',
        background: hovered ? 'var(--cn-red-primary)' : 'transparent',
        color: hovered ? '#fff' : 'var(--cn-red-primary)',
        cursor: submitting ? 'wait' : 'pointer',
        transition: 'all 0.3s ease',
        opacity: submitting ? 0.6 : 1,
      }}
    >
      {submitting ? 'Sending...' : 'Send Message'}
    </button>
  )
}
