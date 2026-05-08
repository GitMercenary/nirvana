'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import CTABanner from '@/components/CTABanner'
import HeroBackdrop from '@/components/HeroBackdrop'

const ease = [0.16, 1, 0.3, 1] as const

const PILLARS = [
  {
    title: 'Soil',
    body: 'The unique terroir of Chikmagalur, celebrated. Shade-grown under native canopy, regenerative practices, soil-health analysis on every partner farm. The land is the first ingredient — and we treat it that way.',
  },
  {
    title: 'Soul',
    body: 'Empowering small-holder farmers through direct trade. We don’t just buy the harvest; we invest in the hands that grow it — running workshops on nutrient management and helping families move from commodity to specialty.',
  },
  {
    title: 'Science',
    body: 'Meticulous processing and roasting that unlock each bean’s hidden potential. From triple thermal shock and sequential anoxic-anaerobic to native-yeast propagation and precision thermal profiling — we push what’s possible in every cup.',
  },
]

const PARTNERSHIP_PILLARS = [
  {
    eyebrow: 'Education',
    title: 'Investing in the hands that grow it',
    body: 'Throughout the year, we run workshops and on-field training sessions. By educating our partner farmers on soil-health analysis and nutrient management, we help them understand exactly what their land needs — reducing fertilizer overuse, cutting costs, and improving the resilience of the coffee trees.',
  },
  {
    eyebrow: 'Shared Success',
    title: 'From commodity to specialty',
    body: 'Our goal is to shift the farmer’s mindset from "Commodity" to "Specialty." When a farmer reduces effort through mechanisation and decreases wastage through technology, their overhead drops. Combined with the specialty premiums we pay for improved produce, the result is a significant increase in annual household income.',
  },
  {
    eyebrow: 'Our Promise',
    title: 'Year over year, exceptional',
    body: 'Every year, we aim to leave the soil richer, the farmers more skilled, and the coffee more exceptional than the year before. Not as a marketing statement — as a measurable outcome we hold ourselves to with each harvest.',
  },
]

export default function MissionVisionPage() {
  const isMobile = useIsMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const partnershipRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const stewardshipRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-10% 0px' })
  const missionInView = useInView(missionRef, { once: true, margin: '-10% 0px' })
  const partnershipInView = useInView(partnershipRef, { once: true, margin: '-10% 0px' })
  const visionInView = useInView(visionRef, { once: true, margin: '-10% 0px' })
  const stewardshipInView = useInView(stewardshipRef, { once: true, margin: '-10% 0px' })

  return (
    <main>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          background: 'var(--cn-black, #0a0a0a)',
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '100px 20px 64px' : '120px 32px 80px',
          overflow: 'hidden',
        }}
      >
        <HeroBackdrop src="/images/landscape-why-us.jpg" opacity={0.22} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', textAlign: 'center' }}>
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
            Why Us · Mission &amp; Vision
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            Our Mission &amp; Vision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(17px, 2.2vw, 22px)',
              lineHeight: 1.6,
              color: 'var(--cn-gray, #a4a2a2)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            What we&rsquo;re building, who we&rsquo;re building it for, and the year-over-year
            promise that holds it all together.
          </motion.p>
        </div>
      </section>

      {/* Mission — Soil / Soul / Science */}
      <section
        ref={missionRef}
        style={{
          position: 'relative',
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '80px 0' : '120px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 32px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-gray, #a4a2a2)',
              marginBottom: '16px',
            }}
          >
            Our Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '24px',
              lineHeight: 1.15,
              maxWidth: 760,
            }}
          >
            A three-pillar model — soil, soul, and science.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(17px, 2vw, 19px)',
              lineHeight: 1.7,
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: 56,
              maxWidth: 760,
            }}
          >
            Our business is an amalgamation of three forces: the soil — where the
            unique terroir of Chikmagalur is celebrated; the soul — where we
            empower small-holder farmers through direct trade; and the science —
            where meticulous processing and roasting unlock each bean&rsquo;s hidden
            potential.
          </motion.p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(242, 242, 243, 0.06)',
                  borderRadius: 'var(--cn-radius, 12px)',
                  padding: '32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    color: 'var(--cn-red-primary, #da2233)',
                    margin: '0 0 16px 0',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--cn-gray, #a4a2a2)',
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership over Patronage — 3 cards */}
      <section
        ref={partnershipRef}
        style={{
          background: 'var(--cn-black, #0a0a0a)',
          padding: isMobile ? '80px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 32px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={partnershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-gray, #a4a2a2)',
              marginBottom: '16px',
            }}
          >
            Partnership over Patronage
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={partnershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '24px',
              lineHeight: 1.2,
              maxWidth: 760,
            }}
          >
            Empowering the source — a tech-forward direct trade model.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={partnershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(17px, 2vw, 19px)',
              lineHeight: 1.7,
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: 56,
              maxWidth: 760,
            }}
          >
            For us, direct trade isn&rsquo;t just shorter supply chains — it&rsquo;s a long-term
            commitment to the small-holder farmers in the hills of Chikmagalur. By
            bridging traditional wisdom and modern technology, we&rsquo;re building a
            sustainable future for Indian coffee.
          </motion.p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {PARTNERSHIP_PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                animate={partnershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(242, 242, 243, 0.06)',
                  borderRadius: 'var(--cn-radius, 12px)',
                  padding: '32px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--cn-red-primary, #da2233)',
                    margin: '0 0 12px 0',
                  }}
                >
                  {p.eyebrow}
                </p>
                <h3
                  style={{
                    fontFamily: 'Zilla Slab, Georgia, serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: 'var(--cn-cream, #f2f2f3)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: 'var(--cn-gray, #a4a2a2)',
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        ref={visionRef}
        style={{
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '80px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 32px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-gray, #a4a2a2)',
              marginBottom: '16px',
            }}
          >
            Our Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(30px, 4.5vw, 44px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '32px',
              lineHeight: 1.2,
            }}
          >
            A world where every sip is a collective act of conservation.
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              'We see ourselves as the global bridge between the untouched potential of the land and the untapped curiosity of the world’s emerging palates. We are pioneers introducing the ritual and depth of specialty coffee to virgin and nascent regions where the true beauty of the bean has yet to be discovered.',
              'By igniting a coffee culture in these new frontiers, we aren’t just selling a product; we are curating a transformative experience that turns the unknown into a daily necessity.',
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={visionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.16 + i * 0.08 }}
                style={{
                  fontFamily: 'Zilla Slab, Georgia, serif',
                  fontSize: 'clamp(17px, 2vw, 19px)',
                  lineHeight: 1.78,
                  color: 'var(--cn-cream, #f2f2f3)',
                  margin: 0,
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Stewardship + future */}
      <section
        ref={stewardshipRef}
        style={{
          background: 'var(--cn-black, #0a0a0a)',
          padding: isMobile ? '80px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 32px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={stewardshipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--cn-red-primary, #da2233)',
              marginBottom: '16px',
            }}
          >
            Stewardship
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={stewardshipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '28px',
              lineHeight: 1.2,
            }}
          >
            Multi-generational knowledge meets a new generation&rsquo;s energy.
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              'This mission is fuelled by a profound sense of stewardship. We leverage our multi-generational wealth of knowledge to inspire and anchor a new generation of producers — making the production space a place of pride and profitability, where the heritage of our ancestors meets the aspirations of the next generation.',
              'As we move forward, Caffeine Nirvana stands at the intersection of discovery and disruption — relentlessly pursuing new origins and integrating cutting-edge technologies that redefine what is possible. We are not just participants in the global coffee trade; we are its architects.',
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={stewardshipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.16 + i * 0.08 }}
                style={{
                  fontFamily: 'Zilla Slab, Georgia, serif',
                  fontSize: 'clamp(17px, 2vw, 19px)',
                  lineHeight: 1.78,
                  color: 'var(--cn-cream, #f2f2f3)',
                  margin: 0,
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
