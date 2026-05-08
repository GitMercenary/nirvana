'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import HeroBackdrop from '@/components/HeroBackdrop'

const ease = [0.16, 1, 0.3, 1] as const

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: 'Who these terms apply to',
    body: [
      'These terms govern your use of caffeinenirvana.co (the “site”), operated by Caffeine Nirvana from Chikmagalur, Karnataka, India. By browsing the site, submitting an enquiry, requesting a sample, or arranging a purchase, you agree to these terms.',
    ],
  },
  {
    heading: 'Nature of this website',
    body: [
      'The site is informational and is intended for business buyers — roasters, importers, distributors, cafés, and similar trade partners. It is not a consumer e-commerce store, and no transactions are concluded directly through the website. Pricing, availability, sample shipping, and final supply terms are agreed bilaterally by email after an enquiry is received.',
      'Cupping scores, tasting notes, and lot descriptions are provided in good faith based on our most recent assessments. Coffee is an agricultural product, and small variations between cupping rounds and shipments are normal. We do not guarantee any specific cup score for a future-vintage lot.',
    ],
  },
  {
    heading: 'Sample requests',
    body: [
      'We offer 1kg samples per lot to qualified trade buyers. Samples are subject to availability, and shipping is at the buyer’s cost unless we have agreed otherwise in writing. Samples are provided for the buyer’s evaluation and may not be resold or redistributed.',
    ],
  },
  {
    heading: 'Orders, shipping and Incoterms',
    body: [
      'All orders are confirmed by signed pro-forma invoice or written agreement and are governed by the Incoterms 2020 specified there — typically FOB Mangalore, with CIF available on request. Title and risk transfer in accordance with the agreed Incoterm.',
      'We will share lot documentation, ICO marks, certificates of origin, and quality certifications as applicable to the agreed shipment. Buyers are responsible for compliance with import regulations in the destination country.',
    ],
  },
  {
    heading: 'Limits of liability',
    body: [
      'Coffee is grown, harvested, processed, and shipped by people and machines, and supply is exposed to weather, port handling, and customs delays beyond any one party’s control. Where a delay or quality variation arises from such force-majeure events, our liability is limited to the value of the affected shipment.',
      'Nothing in these terms limits liability for fraud, gross negligence, or any liability that cannot be limited under Indian law.',
    ],
  },
  {
    heading: 'Confidentiality',
    body: [
      'Pricing, lot allocations, and any commercial proposal we share with you are confidential and shared on the understanding that they will not be disclosed to third parties or used for purposes other than evaluating a relationship with Caffeine Nirvana.',
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      'The Caffeine Nirvana name, the brushstroke mark (the “enzo”), photography, lot descriptions, and all other content on this site are owned by Caffeine Nirvana or its licensors. You may share links to the site freely, but you may not reproduce, sell, or use the brand assets in your own packaging or marketing without our written permission.',
    ],
  },
  {
    heading: 'Governing law and jurisdiction',
    body: [
      'These terms are governed by the laws of India. Any dispute that cannot be resolved by good-faith discussion will be submitted to the exclusive jurisdiction of the courts of Chikmagalur, Karnataka.',
    ],
  },
  {
    heading: 'Updates to these terms',
    body: [
      'We may update these terms from time to time. Continued use of the site after an update constitutes acceptance of the revised terms. The “last updated” date below shows when this version came into effect.',
      'Last updated: 7 May 2026.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'For questions about these terms, write to danish@caffeinenirvana.co.',
    ],
  },
]

export default function TermsPage() {
  const isMobile = useIsMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-10% 0px' })

  return (
    <main>
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          background: 'var(--cn-black, #0a0a0a)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '100px 20px 56px' : '120px 32px 72px',
          overflow: 'hidden',
        }}
      >
        <HeroBackdrop src="/images/hero-bg.png" opacity={0.1} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-gray, #a4a2a2)',
              marginBottom: '20px',
            }}
          >
            Legal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Terms of Use
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(17px, 2vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--cn-gray, #a4a2a2)',
              margin: 0,
            }}
          >
            The rules for browsing this site, requesting samples, and trading with us.
          </motion.p>
        </div>
      </section>

      <section
        style={{
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '64px 0 96px' : '96px 0 140px',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          {SECTIONS.map((section) => (
            <article key={section.heading}>
              <h2
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  color: 'var(--cn-cream, #f2f2f3)',
                  margin: '0 0 16px 0',
                  lineHeight: 1.25,
                }}
              >
                {section.heading}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {section.body.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: 'var(--cn-gray, #a4a2a2)',
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
