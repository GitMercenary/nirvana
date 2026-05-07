'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const ease = [0.16, 1, 0.3, 1] as const

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: 'Who we are',
    body: [
      'Caffeine Nirvana is a specialty coffee producer and exporter based in Chikmagalur, Karnataka, India. We operate this website at caffeinenirvana.co to share information about our estates, lots, and roasted-coffee programmes, and to receive enquiries from roasters, importers, and cafés worldwide.',
      'For any privacy-related question, write to danish@caffeinenirvana.co. This is the address you should use to exercise any of the rights described below.',
    ],
  },
  {
    heading: 'What we collect, and why',
    body: [
      'We only collect the information you actively give us through our enquiry forms — typically your name, business email, country, company, and the message you submit (including, where relevant, the lot, sample quantity, or visit window you are interested in).',
      'We use this information for one purpose: to reply to your enquiry and to discuss a potential commercial relationship. We do not sell or rent your data, and we do not enrol you in marketing lists without your explicit consent.',
    ],
  },
  {
    heading: 'How forms are processed',
    body: [
      'Form submissions are routed through Web3Forms, a third-party form-handler that delivers your message to our inbox. Web3Forms processes the data only as a transmission service and does not retain it for marketing.',
      'A copy of the enquiry is also sent to a monitoring address operated by our communications partner, who assists us in ensuring no enquiry goes unanswered. They are bound by confidentiality.',
    ],
  },
  {
    heading: 'Cookies and analytics',
    body: [
      'This website uses only the cookies strictly necessary for the site to function (e.g., session and security cookies set by Next.js, our hosting provider). We do not use third-party advertising cookies or behavioural tracking.',
      'If we add analytics in future, we will update this policy and ask for your consent where required.',
    ],
  },
  {
    heading: 'How long we keep your data',
    body: [
      'Enquiries are retained for as long as we reasonably need them to maintain the commercial relationship — typically the lifetime of the partnership plus seven years for tax and export records, as required by Indian law. If you ask us to delete an enquiry sooner, we will do so unless we are legally required to retain it.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'Under India’s Digital Personal Data Protection Act, 2023, and equivalent laws such as the EU GDPR for users in the European Union, you have the right to access the data we hold about you, to correct it, to delete it, and to withdraw any consent you have given. Email danish@caffeinenirvana.co with your request and we will respond within 30 days.',
    ],
  },
  {
    heading: 'International transfers',
    body: [
      'Because we work with roasters and importers across the world, your enquiry data may be transmitted between India and the country you are writing from. We rely on secure, encrypted channels for these transfers and only share what is necessary for the conversation.',
    ],
  },
  {
    heading: 'Updates to this policy',
    body: [
      'We may update this policy from time to time. The “last updated” date below will reflect the most recent revision. Material changes will be highlighted on the homepage for at least thirty days.',
      'Last updated: 7 May 2026.',
    ],
  },
]

export default function PrivacyPage() {
  const isMobile = useIsMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-10% 0px' })

  return (
    <main>
      <section
        ref={heroRef}
        style={{
          background: 'var(--cn-black, #0a0a0a)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '100px 20px 56px' : '120px 32px 72px',
        }}
      >
        <div style={{ maxWidth: '780px', textAlign: 'center' }}>
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
            Privacy Policy
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
            How Caffeine Nirvana handles the information you share with us.
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
