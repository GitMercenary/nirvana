'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import CTABanner from '@/components/CTABanner'

const ease = [0.16, 1, 0.3, 1] as const

const FOUNDERS = [
  {
    name: 'Danish Ali',
    role: 'Founder',
    location: 'Chikmagalur, Karnataka',
    image: '/images/estate-zoya-hero.jpg',
    paragraphs: [
      'Born into a family whose roots in coffee cultivation stretch back over 250 years, Danish Ali represents a legacy deeply intertwined with the rich coffee-growing heritage of Chikmagalur. As a producer, exporter, and passionate coffee craftsman, he carries forward generations of knowledge while embracing a modern vision for specialty coffee.',
      'At the heart of this legacy lies Zoya Estates, the family’s 150-year-old estate nestled in the lush highlands of Chikmagalur, where some of the finest Arabica coffees are cultivated under ideal climatic conditions. Raised amidst coffee blossoms, harvest seasons, and the art of careful processing, Danish inherited not just a business, but a lifelong devotion to coffee.',
      'An avid coffee alchemist and self-confessed javaphile, Danish learned the nuances of coffee production from his ancestors long before realising it had become his true calling. His approach combines traditional wisdom with relentless curiosity — from cultivation and fermentation to processing and cup quality — resulting in coffees that reflect both character and terroir.',
      'For Danish, coffee is more than a commodity — it is heritage, passion, and a story meant to be shared in every cup.',
    ],
  },
  {
    name: 'Ayesha Naseer',
    role: 'Director',
    location: 'Bengaluru, Karnataka',
    image: '/images/carousel/cupping-lab.jpg',
    paragraphs: [
      'Ayesha Naseer is a passionate coffee entrepreneur and hospitality professional based out of Bengaluru, with over a decade of experience in the food and beverage industry. As the driving force behind Café Azzure, a successful and well-recognised chain of cafés across Bengaluru, she has built a brand that resonates with the city’s vibrant and evolving coffee culture.',
      'An avid coffee enthusiast with a refined palate and deep appreciation for specialty coffee, Ayesha brings together operational expertise, sharp business acumen, and extensive regional knowledge of the coffee industry. Her journey in hospitality has been shaped by years of understanding consumer experiences, café culture, and the nuances that define exceptional coffee.',
      'As Director at Caffeine Nirvana, Ayesha plays a pivotal role in bridging the gap between origin and cup — combining her experience in retail coffee and customer experience with the company’s vision of bringing premium Indian coffees to the global market.',
      'For Ayesha, coffee is not just a business — it is culture, community, and an experience that brings people together.',
    ],
  },
  {
    name: 'Harsh Jain',
    role: 'Roasting Head',
    location: 'Chikmagalur → Gujarat',
    image: '/images/carousel/beans-floor.jpg',
    paragraphs: [
      'Born and raised in the renowned coffee-growing region of Chikmagalur and now headquartered in Gujarat, Harsh Jain brings deep-rooted coffee knowledge and extensive industry expertise to his role leading the roasting division at Caffeine Nirvana.',
      'As the head of the company’s roasted coffee division, Harsh plays a pivotal role in shaping meaningful partnerships with some of India’s leading specialty cafés and coffee brands. His work goes far beyond roasting — it is centred around understanding the unique identity, audience, and vision of every café he collaborates with.',
      'With a strong understanding of regional coffee cultures and evolving consumer preferences, Harsh specialises in curating tailor-made coffee solutions for cafés across diverse markets. From sourcing and selecting exceptional beans to developing custom blends that align with a brand’s personality and customer palate, he approaches every partnership with precision, creativity, and long-term vision.',
      'For Harsh, coffee is more than a product — it is an avenue to perfection and a craft that deserves thoughtful attention in every detail.',
    ],
  },
]

function FounderCard({
  founder,
  index,
}: {
  founder: (typeof FOUNDERS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isMobile = useIsMobile()
  const isReversed = index % 2 === 1

  const imageBlock = (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 5',
        borderRadius: 'var(--cn-radius)',
        overflow: 'hidden',
        filter: 'saturate(0.85)',
      }}
    >
      <Image
        src={founder.image}
        alt={`${founder.name}, ${founder.role}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )

  const textBlock = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <p
        style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 11,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--cn-red-primary)',
          margin: 0,
        }}
      >
        {founder.role}
      </p>

      <h2
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 700,
          fontSize: 'clamp(32px, 4vw, 48px)',
          color: 'var(--cn-cream)',
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        {founder.name}
      </h2>

      <p
        style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 13,
          color: 'var(--cn-gray)',
          margin: 0,
          letterSpacing: '0.05em',
        }}
      >
        {founder.location}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
        {founder.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 16,
              color: 'var(--cn-gray)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  )

  const columns = isMobile
    ? [imageBlock, textBlock]
    : isReversed
      ? [textBlock, imageBlock]
      : [imageBlock, textBlock]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 32 : 64,
        alignItems: 'center',
      }}
    >
      {columns[0]}
      {columns[1]}
    </motion.div>
  )
}

export default function TeamPage() {
  const isMobile = useIsMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-10% 0px' })

  return (
    <main>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          background: 'var(--cn-black, #0a0a0a)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '100px 20px 64px' : '120px 32px 80px',
        }}
      >
        <div style={{ maxWidth: '860px', textAlign: 'center' }}>
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
            Our Story · Team
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 72px)',
              color: 'var(--cn-cream, #f2f2f3)',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            The People Behind the Cup
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              lineHeight: 1.6,
              color: 'var(--cn-gray, #a4a2a2)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Caffeine Nirvana is built by people who have grown up around coffee —
            on the estates, in the cup, and at the roaster.
          </motion.p>
        </div>
      </section>

      {/* Founder cards */}
      <section
        style={{
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '64px 0' : '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? 80 : 140,
          }}
        >
          {FOUNDERS.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
