'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'

const panels = [
  {
    image: '/images/estate-zoya.png',
    stat: '36 Hectares',
    headline: 'A Farm That Remembers',
    body: 'Zoya Estate has grown coffee since before the British mapped Chikmagalur. Across 36 hectares of shade-grown forest, the farm is its own ecosystem — silver oaks, rosewood, cardamom, and two rare coffee varietals that exist nowhere else at this altitude.',
  },
  {
    image: '/images/traceability-farm.png',
    stat: '250+ Years',
    headline: '250 Years of One Family',
    body: 'Danish Ali is the latest in a lineage of growers who chose quality over volume. Every cherry is hand-picked at peak ripeness. There are no machines on the harvest floor — only the hands of pickers who have worked this land across generations.',
  },
  {
    image: '/images/traceability-process.png',
    stat: '1,100 masl',
    headline: 'Processed at Source',
    body: "Wet processing happens within hours of picking. The estate's own processing station uses water from the Western Ghats watershed. No intermediary. No delay. The integrity of the lot is preserved from cherry to parchment under one roof.",
  },
  {
    image: '/images/social-proof-award.png',
    stat: 'Illy Award 2020',
    headline: 'Recognised Internationally',
    body: 'The Ernesto Illy International Coffee Award 2020. Awarded to producers who demonstrate exceptional quality, sustainability, and supply chain transparency. Zoya Estate. Chikmagalur. India.',
  },
]

export default function EstateStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const [activePanelIdx, setActivePanelIdx] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (isMobile) return

    let gsap: typeof import('gsap')['gsap'] | undefined
    let ScrollTrigger: typeof import('gsap/ScrollTrigger')['ScrollTrigger'] | undefined

    const init = async () => {
      if (isMobile) return

      const gsapModule = await import('gsap')
      const stModule = await import('gsap/ScrollTrigger')
      gsap = gsapModule.gsap
      ScrollTrigger = stModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current || !leftRef.current) return

      // Pin left panel
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftRef.current,
        pinSpacing: false,
      })

      // Update active panel index based on scroll
      panels.forEach((_, i) => {
        const panelEl = document.getElementById(`estate-panel-${i}`)
        if (!panelEl || !ScrollTrigger) return
        ScrollTrigger.create({
          trigger: panelEl,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActivePanelIdx(i),
          onEnterBack: () => setActivePanelIdx(i),
        })
      })
    }

    init()

    return () => {
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [isMobile])

  return (
    <section
      id="the-estate"
      ref={sectionRef}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        background: 'var(--cn-dark)',
      }}
    >
      {/* Left panel — pinned (desktop only) */}
      <div
        ref={leftRef}
        style={{
          height: isMobile ? 'auto' : '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '56px 24px 48px' : '80px 64px',
          background: 'var(--cn-dark)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '12px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#a4a2a2',
            marginBottom: '16px',
          }}
        >
          Keserke Village · Chikmagalur
        </p>
        <h2
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 900,
            fontSize: isMobile ? '52px' : '48px',
            color: '#f2f2f3',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}
        >
          Zoya Estate
        </h2>

        {/* Rotating stat */}
        <div style={{ overflow: 'hidden', height: '48px' }}>
          {panels.map((p, i) => (
            <div
              key={i}
              style={{
                fontFamily: 'Zilla Slab, Georgia, serif',
                fontWeight: 600,
                fontSize: '32px',
                color: '#da2233',
                opacity: activePanelIdx === i ? 1 : 0,
                transform: activePanelIdx === i ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 500ms ease, transform 500ms ease',
                position: 'absolute',
              }}
            >
              {p.stat}
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '8px', marginTop: isMobile ? '32px' : '60px' }}>
          {panels.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activePanelIdx ? '24px' : '6px',
                height: '6px',
                background: i === activePanelIdx ? '#da2233' : 'rgba(242,242,243,0.2)',
                transition: 'width 400ms ease, background 400ms ease',
                borderRadius: '3px',
              }}
            />
          ))}
        </div>
      </div>

      {/* Right panel — scrolls */}
      <div>
        {panels.map((panel, i) => (
          <div
            key={i}
            id={`estate-panel-${i}`}
            style={{
              position: 'relative',
              height: isMobile ? '70vh' : '100vh',
              overflow: 'hidden',
            }}
          >
            {/* Full-bleed image */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={panel.image}
                alt={panel.headline}
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'saturate(0.75) contrast(1.05)',
                }}
                sizes={isMobile ? '100vw' : '50vw'}
              />
            </div>

            {/* Dark gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.3) 70%, transparent 100%)',
              }}
            />

            {/* Text */}
            <div
              style={{
                position: 'absolute',
                bottom: isMobile ? '40px' : '80px',
                left: isMobile ? '24px' : '64px',
                right: isMobile ? '24px' : '64px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: isMobile ? '26px' : '36px',
                  color: '#f2f2f3',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                {panel.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: 'rgba(242,242,243,0.8)',
                  lineHeight: 1.7,
                  maxWidth: isMobile ? '100%' : '480px',
                }}
              >
                {panel.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
