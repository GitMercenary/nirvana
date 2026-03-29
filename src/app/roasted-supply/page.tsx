'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useFormContext } from '@/context/FormContext'
import Image from 'next/image'

const OFFERINGS = [
  {
    title: 'Single Origin Roasted Beans',
    description: 'Premium roasted coffee from our Chikmagalur estates, available in wholesale quantities for cafes and specialty retailers.',
  },
  {
    title: 'Custom Roast Profiles',
    description: 'Work with our team to develop roast profiles tailored to your menu and customer preferences.',
  },
  {
    title: 'White Label Solutions',
    description: 'Launch your own branded coffee line with our high-scoring single origin beans. Full packaging support available.',
  },
]

const PROCESS_STEPS = [
  { step: '01', title: 'Enquire', body: 'Tell us about your cafe, volume needs, and roast preferences.' },
  { step: '02', title: 'Sample', body: 'We send curated samples for you to evaluate and select your preferred profile.' },
  { step: '03', title: 'Customize', body: 'We dial in the roast profile to match your requirements.' },
  { step: '04', title: 'Supply', body: 'Regular deliveries on your schedule. Consistent quality, every batch.' },
]

export default function RoastedSupplyPage() {
  const { openSourceForm } = useFormContext()
  const isMobile = useIsMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const offerRef = useRef<HTMLDivElement>(null)
  const offerInView = useInView(offerRef, { once: true, margin: '-10% 0px' })
  const processRef = useRef<HTMLDivElement>(null)
  const processInView = useInView(processRef, { once: true, margin: '-10% 0px' })

  return (
    <>
      {/* Hero Banner */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '60vh',
          background: 'var(--cn-black)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, #140e0a 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '140px 24px 80px' : '160px 32px 100px',
            width: '100%',
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#a4a2a2',
              marginBottom: '20px',
            }}
          >
            For Cafes & Retailers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: '#f2f2f3',
              lineHeight: 1.1,
              marginBottom: '24px',
              maxWidth: '700px',
            }}
          >
            Roasted Bean Supply
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              color: '#a4a2a2',
              maxWidth: '600px',
              lineHeight: 1.5,
            }}
          >
            {/* CONTENT: Owner to provide final copy */}
            Premium roasted specialty coffee from Chikmagalur, India. Sourced from our partner estates, roasted to order.
          </motion.p>
        </div>
      </section>

      {/* What We Offer */}
      <section
        ref={offerRef}
        style={{
          background: 'var(--cn-dark)',
          padding: isMobile ? '80px 24px' : '120px 32px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={offerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a4a2a2',
              marginBottom: '12px',
            }}
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={offerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 900,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: '#f2f2f3',
              marginBottom: '48px',
            }}
          >
            Supply for Your Business
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {OFFERINGS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={offerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(242,242,243,0.06)',
                  borderRadius: 'var(--cn-radius)',
                  padding: '32px',
                }}
              >
                {/* CONTENT: Owner to provide final copy */}
                <h3
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#f2f2f3',
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#a4a2a2',
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section
        ref={processRef}
        style={{
          background: 'var(--cn-dark-warm)',
          padding: isMobile ? '80px 24px' : '120px 32px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a4a2a2',
              marginBottom: '12px',
            }}
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 900,
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: '#f2f2f3',
              marginBottom: '48px',
            }}
          >
            From Enquiry to Delivery
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(242,242,243,0.06)',
                  borderRadius: 'var(--cn-radius)',
                  padding: '28px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '36px',
                    fontWeight: 900,
                    color: 'rgba(218,34,51,0.15)',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  {step.step}
                </span>
                <h3
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#f2f2f3',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#a4a2a2',
                  }}
                >
                  {/* CONTENT: Owner to provide final copy */}
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#da2233',
          padding: isMobile ? '72px 20px' : '100px 32px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: '#f2f2f3',
            marginBottom: '16px',
          }}
        >
          Ready to Stock Specialty?
        </h2>
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '16px',
            color: 'rgba(242,242,243,0.8)',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px',
          }}
        >
          Get in touch with our team for samples, pricing, and partnership details.
        </p>
        <button
          onClick={openSourceForm}
          style={{
            background: 'transparent',
            color: '#f2f2f3',
            border: '2px solid #f2f2f3',
            padding: '16px 40px',
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '14px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 250ms ease, color 250ms ease',
            borderRadius: 'var(--cn-radius-sm)',
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
          Enquire Now
        </button>
      </section>
    </>
  )
}
