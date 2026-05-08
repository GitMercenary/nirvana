'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const PHOTOS = [
  { src: '/images/gallery/award-illy-2020.jpg', caption: 'Ernesto Illy International Coffee Award, 2020' },
  { src: '/images/carousel/cherries-ripe.jpg', caption: 'Ripe coffee cherries at peak harvest' },
  { src: '/images/gallery/cherries-drying-red.jpg', caption: 'Naturals at the drying beds' },
  { src: '/images/gallery/canopy-coffee-shadegrown.jpg', caption: 'Shade-grown under native canopy' },
  { src: '/images/carousel/drying-cherries.jpg', caption: 'Natural process drying beds' },
  { src: '/images/gallery/parchment-yard.jpg', caption: 'Parchment drying yard at scale' },
  { src: '/images/carousel/cupping-lab.jpg', caption: 'Quality assessment in the cupping lab' },
  { src: '/images/gallery/cherries-green-branch.jpg', caption: 'Coffee cherries developing on branch' },
  { src: '/images/gallery/naturals-golden-hour.jpg', caption: 'Specialty naturals in golden-hour light' },
  { src: '/images/carousel/export-sack.jpg', caption: 'Caffeine Nirvana export-ready' },
  { src: '/images/gallery/jungle-canopy-coffee.jpg', caption: 'Polyculture in the Western Ghats' },
  { src: '/images/carousel/drying-beds.jpg', caption: 'Parchment drying at the washing station' },
  { src: '/images/gallery/cherries-tarp-harvest.jpg', caption: 'Fresh harvest at the estate' },
  { src: '/images/carousel/export-sack-2.jpg', caption: 'Produce of India' },
  { src: '/images/gallery/naturals-close.jpg', caption: 'Naturals close-up — black-honey character' },
  { src: '/images/carousel/bags-storage.jpg', caption: 'Lot storage and tracking' },
]

const DUPLICATED_PHOTOS = [...PHOTOS, ...PHOTOS]

export default function PhotoCarousel() {
  const isMobile = useIsMobile()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const cardWidth = isMobile ? 280 : 400
  const cardHeight = isMobile ? 220 : 300
  const gap = 20
  const sidePadding = 32

  const totalSingleSetWidth = PHOTOS.length * (cardWidth + gap)

  const handleAutoScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container) return

    container.scrollLeft += 1

    if (container.scrollLeft >= totalSingleSetWidth) {
      container.scrollLeft = 0
    }
  }, [totalSingleSetWidth])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(handleAutoScroll, 30)
    return () => clearInterval(interval)
  }, [isPaused, handleAutoScroll])

  const dragConstraints = {
    left: -(DUPLICATED_PHOTOS.length * (cardWidth + gap) - (typeof window !== 'undefined' ? window.innerWidth : 1200) + sidePadding * 2),
    right: 0,
  }

  return (
    <section
      style={{
        background: 'var(--cn-black)',
        padding: isMobile ? '64px 0 72px' : '96px 0 100px',
        overflow: 'hidden',
        width: '100%',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 20px 36px' : '0 32px 56px',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--cn-gray, #a4a2a2)',
            marginBottom: '14px',
          }}
        >
          From the Estates
        </p>
        <h2
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 44px)',
            color: 'var(--cn-cream, #f2f2f3)',
            lineHeight: 1.15,
            margin: 0,
            maxWidth: '720px',
          }}
        >
          A year of harvests, processing, and quiet hours at origin.
        </h2>
      </div>

      <motion.div
        ref={scrollRef}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        style={{
          display: 'flex',
          gap: `${gap}px`,
          paddingLeft: `${sidePadding}px`,
          paddingRight: `${sidePadding}px`,
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="photo-carousel-track"
        whileTap={{ cursor: 'grabbing' }}
      >
        {DUPLICATED_PHOTOS.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            style={{
              position: 'relative',
              width: `${cardWidth}px`,
              minWidth: `${cardWidth}px`,
              height: `${cardHeight}px`,
              borderRadius: 'var(--cn-radius)',
              overflow: 'hidden',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              filter: 'saturate(0.8)',
              transition: 'filter 0.4s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLDivElement).style.filter = 'saturate(1)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLDivElement).style.filter = 'saturate(0.8)'
            }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              style={{ objectFit: 'cover' }}
              sizes={`${cardWidth}px`}
              draggable={false}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px 16px 14px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                pointerEvents: 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body, "DM Sans", sans-serif)',
                  fontSize: '13px',
                  color: 'var(--cn-cream)',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <style jsx global>{`
        .photo-carousel-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
