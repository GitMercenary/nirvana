'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const credentials = [
  { text: 'Ernesto Illy Award 2020', highlight: true },
  { text: 'Listed on TYPICA', highlight: false },
  { text: 'Produce of India', highlight: false },
  { text: 'Direct Export — No Middlemen', highlight: false },
  { text: 'Fully Traceable to Farm', highlight: false },
  { text: 'Chikmagalur, Karnataka', highlight: false },
]

export default function CredentialBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        background: '#0a0a0a',
        padding: '20px 0',
        borderTop: '1px solid rgba(242,242,243,0.08)',
        borderBottom: '1px solid rgba(242,242,243,0.08)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          gap: '0',
        }}
      >
        {credentials.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.06,
              }}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: item.highlight ? '#da2233' : '#a4a2a2',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
            >
              {item.text}
            </motion.span>
            {i < credentials.length - 1 && (
              <span
                style={{
                  color: 'rgba(164,162,162,0.3)',
                  margin: '0 14px',
                  fontSize: '12px',
                }}
              >
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
