'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LOTS } from '@/components/AtmosphereSelector'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useFormContext } from '@/context/FormContext'

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

function AnimatedSection({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} className={className} style={style}>
      {inView ? children : <div style={{ opacity: 0 }}>{children}</div>}
    </div>
  )
}

/* ─── Lot Card ─── */
function LotCard({ lot, index }: { lot: (typeof LOTS)[number]; index: number }) {
  const isMobile = useIsMobile()
  const { openSampleForm } = useFormContext()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const dataFields = [
    { label: 'Varietal', value: lot.varietal },
    { label: 'Process', value: lot.process },
    { label: 'Altitude', value: lot.altitude },
    { label: 'Harvest', value: lot.harvest },
  ]

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      style={{
        border: '1px solid rgba(242,242,243,0.06)',
        borderRadius: 'var(--cn-radius)',
        padding: isMobile ? '28px 20px' : '40px 48px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 32 : 0,
        transition: 'background 0.5s ease, box-shadow 0.5s ease',
        background: 'transparent',
        cursor: 'default',
      }}
      whileHover={{
        background: lot.atmosphere,
        boxShadow: `0 0 80px ${lot.accent}22`,
      }}
    >
      {/* Left side */}
      <div style={{ flex: isMobile ? 'unset' : '0 0 60%' }}>
        {/* Name + SCA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <h3
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: isMobile ? 26 : 32,
              fontWeight: 500,
              color: 'var(--cn-cream)',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {lot.name}
          </h3>
          <span
            style={{
              border: '1px solid var(--cn-red-primary)',
              borderRadius: 'var(--cn-radius-sm)',
              padding: '4px 10px',
              fontFamily: 'var(--font-dm)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--cn-red-primary)',
              whiteSpace: 'nowrap',
            }}
          >
            {lot.sca_score}
          </span>
        </div>

        {/* Data grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr',
            gap: '20px 32px',
            marginBottom: 28,
          }}
        >
          {dataFields.map((field) => (
            <div key={field.label}>
              <div
                style={{
                  fontFamily: 'var(--font-dm)',
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--cn-red-primary)',
                  marginBottom: 4,
                }}
              >
                {field.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-dm)',
                  fontSize: 14,
                  color: 'var(--cn-gray)',
                }}
              >
                {field.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tasting notes */}
        <p
          style={{
            fontFamily: 'var(--font-zilla)',
            fontSize: 16,
            fontStyle: 'italic',
            color: 'var(--cn-cream)',
            margin: 0,
            opacity: 0.85,
            lineHeight: 1.6,
          }}
        >
          {lot.tasting_notes}
        </p>
      </div>

      {/* Right side */}
      <div
        style={{
          flex: isMobile ? 'unset' : '0 0 40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-dm)',
            fontSize: 14,
            fontWeight: 500,
            color: '#5cb85c',
          }}
        >
          {lot.volume}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-dm)',
            fontSize: 11,
            color: 'var(--cn-gray)',
            opacity: 0.7,
          }}
        >
          FOB Mangalore · CIF Available
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => openSampleForm(lot.name)}
            style={{
              border: '1px solid var(--cn-red-primary)',
              borderRadius: 'var(--cn-radius-sm)',
              background: 'transparent',
              color: 'var(--cn-red-primary)',
              fontFamily: 'var(--font-dm)',
              fontSize: 14,
              fontWeight: 500,
              padding: '10px 24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--cn-red-primary)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--cn-red-primary)'
            }}
          >
            Request Sample
          </button>
          <button
            style={{
              border: '1px solid var(--cn-gray)',
              borderRadius: 'var(--cn-radius-sm)',
              background: 'transparent',
              color: 'var(--cn-gray)',
              fontFamily: 'var(--font-dm)',
              fontSize: 14,
              fontWeight: 500,
              padding: '10px 24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--cn-cream)'
              e.currentTarget.style.color = 'var(--cn-cream)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--cn-gray)'
              e.currentTarget.style.color = 'var(--cn-gray)'
            }}
          >
            Download Spec Sheet
          </button>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Sourcing Step Card ─── */
function StepCard({ number, title, body, index }: { number: string; title: string; body: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      style={{
        border: '1px solid rgba(242,242,243,0.06)',
        borderRadius: 'var(--cn-radius)',
        padding: '36px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost number */}
      <div
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 96,
          fontWeight: 700,
          color: 'rgba(242,242,243,0.03)',
          position: 'absolute',
          top: -10,
          right: 16,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {number}
      </div>
      <h4
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 22,
          fontWeight: 500,
          color: 'var(--cn-cream)',
          margin: '0 0 12px 0',
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: 'var(--font-dm)',
          fontSize: 14,
          color: 'var(--cn-gray)',
          margin: 0,
          lineHeight: 1.7,
        }}
      >
        {body}
      </p>
    </motion.div>
  )
}

/* ─── Page ─── */
export default function OfferingsPage() {
  const isMobile = useIsMobile()
  const { openSourceForm } = useFormContext()

  const steps = [
    {
      number: '01',
      title: 'Request',
      body: 'Request a sample of any lot. Minimum 1kg per lot.',
    },
    {
      number: '02',
      title: 'Evaluate',
      body: "Cup the samples. We'll provide full spec sheets and traceability data.",
    },
    {
      number: '03',
      title: 'Order',
      body: 'Place your order. FOB Mangalore or CIF to your port. Response within 24 hours.',
    },
  ]

  return (
    <main>
      {/* ─── Section 1: Hero ─── */}
      <section
        style={{
          background: 'var(--cn-black)',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '100px 20px 60px' : '120px 40px 80px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--cn-red-primary)',
              marginBottom: 20,
            }}
          >
            Current Harvest
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: isMobile ? 40 : 64,
              fontWeight: 500,
              color: 'var(--cn-cream)',
              margin: '0 0 20px 0',
              lineHeight: 1.1,
            }}
          >
            Current Offerings
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-zilla)',
              fontSize: isMobile ? 16 : 18,
              color: 'var(--cn-gray)',
              margin: 0,
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            High-scoring specialty green coffee lots from Chikmagalur, India. 86–88 SCA cupping scores. Traceable, transparent, direct.
          </p>
        </motion.div>
      </section>

      {/* ─── Section 2: Lot Details ─── */}
      <section
        style={{
          background: 'var(--cn-dark)',
          padding: isMobile ? '60px 16px' : '80px 40px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          {LOTS.map((lot, i) => (
            <LotCard key={lot.id} lot={lot} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Section 3: Sourcing Info ─── */}
      <section
        style={{
          background: 'var(--cn-dark-alt)',
          padding: isMobile ? '60px 16px' : '100px 40px',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                fontFamily: 'var(--font-dm)',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--cn-red-primary)',
                marginBottom: 16,
              }}
            >
              Sourcing
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: isMobile ? 32 : 48,
                fontWeight: 500,
                color: 'var(--cn-cream)',
                margin: '0 0 48px 0',
              }}
            >
              How to Source
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
              gap: 24,
              textAlign: 'left',
            }}
          >
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                body={step.body}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: CTA ─── */}
      <section
        style={{
          background: 'var(--cn-red-primary)',
          padding: isMobile ? '60px 20px' : '80px 40px',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 640, margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: isMobile ? 28 : 40,
              fontWeight: 500,
              color: '#fff',
              margin: '0 0 16px 0',
              lineHeight: 1.2,
            }}
          >
            Ready to Source From Origin?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: 15,
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
            }}
          >
            Minimum sample quantity: 1kg per lot. FOB Mangalore. Response within 24 hours.
          </p>
          <button
            onClick={openSourceForm}
            style={{
              border: '1px solid #fff',
              borderRadius: 'var(--cn-radius)',
              background: 'transparent',
              color: '#fff',
              fontFamily: 'var(--font-dm)',
              fontSize: 15,
              fontWeight: 500,
              padding: '14px 36px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff'
              e.currentTarget.style.color = 'var(--cn-red-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#fff'
            }}
          >
            Source From Origin
          </button>
        </motion.div>
      </section>
    </main>
  )
}
