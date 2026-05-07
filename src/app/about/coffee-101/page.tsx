'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import CTABanner from '@/components/CTABanner'

const ease = [0.16, 1, 0.3, 1] as const

const ESSAYS = [
  {
    eyebrow: 'Chapter One',
    title: 'Coffee as a Means of Life',
    paragraphs: [
      'To understand coffee as a means of life, one must look past the steam of a morning mug and into the interconnected rhythm of the hills where it begins. It is a cycle of existence that breathes life into the soil of Chikmagalur long before it ever reaches a kitchen.',
      'For the small-holder farmers who walk the steep inclines of the Western Ghats, coffee is not merely a crop; it is the heartbeat of their heritage and the primary architect of their community’s future. Their days are dictated by the slow, deliberate pace of the seasons — where the flowering of the trees signals hope and the arrival of the harvest represents the culmination of a year’s worth of physical and emotional investment.',
      'This way of life is sustained by a delicate balance between tradition and progress. By working directly with these families, we ensure that coffee remains a dignified livelihood rather than a struggle for survival. We see this life unfold in the way a farmer meticulously checks the brix level of a cherry or monitors the moisture of a drying lot — actions that are now bolstered by modern technology to ensure that not a single bean, nor a single ounce of effort, is wasted.',
      'Ultimately, coffee as a means of life is about resilience. It is about the endurance of the shade-grown forests, the empowerment of the people who tend them, and the shared culture that unites the grower and the brewer. We aren’t just trading a commodity; we are nurturing a living ecosystem where every cup served is a testament to a life lived in harmony with the land.',
    ],
  },
  {
    eyebrow: 'Chapter Two',
    title: 'Ethical Growth — Farmer to Consumer',
    paragraphs: [
      'The story of your morning cup doesn’t begin with a roast or a grind; it begins in the quiet, mist-covered hills of Chikmagalur, where the roots of the first coffee trees in India took hold centuries ago. For us, sustaining coffee culture is about honouring this deep-rooted heritage while ensuring it has a vibrant, ethical future. It is a story of Radical Connection — moving from the soil of the mountain to the soul of the consumer.',
      'It starts with the land. In an era of mass production, we have chosen a different path — one that protects the delicate shade-grown forests of the Western Ghats. By supporting poly-culture farming, where coffee grows beneath a canopy of native jungle trees, we aren’t just sourcing beans; we are acting as stewards of biodiversity.',
      'But a landscape is only as strong as its people. Our journey continues through a Direct Trade partnership with small-holder farmers that goes far beyond a simple transaction. We spend our days in the hills not just as buyers, but as collaborators — integrating sustainable technologies and agricultural education into traditional practices. From digital moisture meters that prevent crop loss to eco-pulpers that save precious water, we provide the tools that turn gruelling effort into rewarding precision.',
      'As the beans move from the drying beds to the roaster, the story enters its most vital phase: The Handover. We see ourselves as the bridge between the quiet labour of the hills and the bustling ritual of your roastery. Our mission is to transform the consumer into a connoisseur — someone who recognises that every sip is a liquid postcard from a specific plot of land and a specific pair of hands.',
      'When you choose our coffee, you aren’t just buying a product; you are participating in a regenerative cycle. You are validating the farmer’s hard work, funding the technology that protects the forest, and proving that coffee culture can be a force for global good.',
    ],
  },
  {
    eyebrow: 'Chapter Three',
    title: 'Coffee Longevity & Protection from Extinction',
    paragraphs: [
      'The story of coffee in the hills of Chikmagalur is a saga of survival — a delicate dance between an ancient heritage and the encroaching pressures of a changing world. To speak of coffee longevity is to recognise that we are at a critical crossroads where the traditions of the past must be fortified by the innovations of the future.',
      'Our commitment begins with the understanding that coffee is not an invincible resource; it is a sensitive inhabitant of a shifting climate, and protecting it from the threat of extinction requires a shield made of both science and soul. We view our role as guardians of this botanical legacy — ensuring that the specific varietals and unique forest-grown methods that define Indian coffee are not lost to industrial monoculture or environmental instability.',
      'This protection starts deep within the soil. By maintaining the diverse ecosystem of the Western Ghats — where coffee thrives alongside pepper vines, jackfruit, and native jungle trees — we create a natural fortress that regulates temperature and preserves moisture. This isn’t just an environmental choice; it is a cultural infusion. The coffee culture of this region is inextricably linked to this biodiversity, and to lose the forest would be to lose the very character of the bean itself.',
      'However, the longevity of coffee is also tied to the longevity of the farming profession. We recognise that the greatest threat to coffee’s future is the migration of the next generation away from the hills. To prevent this cultural extinction, we are transforming the way coffee is grown through the infusion of technology and education — turning a gruelling labour of uncertainty into a sophisticated craft of excellence.',
      'Through this continuous cycle of ethical growth and technological empowerment, we are making a solemn promise: that the aroma of Chikmagalur coffee will continue to rise from cups around the world, safeguarding a culture that is too beautiful to let fade into history.',
    ],
  },
]

function Essay({
  essay,
  index,
}: {
  essay: (typeof ESSAYS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const isMobile = useIsMobile()

  return (
    <article ref={ref} style={{ paddingBottom: isMobile ? 64 : 96 }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--cn-red-primary, #da2233)',
          marginBottom: '14px',
        }}
      >
        {essay.eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease, delay: 0.08 }}
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 700,
          fontSize: 'clamp(30px, 4vw, 44px)',
          color: 'var(--cn-cream, #f2f2f3)',
          marginBottom: '32px',
          lineHeight: 1.2,
        }}
      >
        {essay.title}
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {essay.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.16 + i * 0.06 }}
            style={{
              fontFamily: 'Zilla Slab, Georgia, serif',
              fontWeight: 400,
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

      {index < ESSAYS.length - 1 && (
        <div
          style={{
            marginTop: isMobile ? 64 : 96,
            height: 1,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(218,34,51,0.4) 50%, transparent 100%)',
          }}
        />
      )}
    </article>
  )
}

export default function Coffee101Page() {
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
            Our Story · Knowledge
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
            Get to Know Your Coffee
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
            Three essays on the philosophy behind every Caffeine Nirvana cup —
            coffee as a way of life, our pact with the farmer, and our commitment
            to protecting what we love.
          </motion.p>
        </div>
      </section>

      {/* Essays */}
      <section
        style={{
          background: 'var(--cn-dark-warm, #100e0b)',
          padding: isMobile ? '64px 0 24px' : '120px 0 40px',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: isMobile ? '0 24px' : '0 32px',
          }}
        >
          {ESSAYS.map((essay, i) => (
            <Essay key={essay.title} essay={essay} index={i} />
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
