'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const PHOTOS = [
  { src: '/images/carousel/cherries-ripe.jpg', caption: 'Ripe coffee cherries at peak harvest' },
  { src: '/images/carousel/drying-cherries.jpg', caption: 'Natural process drying beds' },
  { src: '/images/carousel/drying-beds.jpg', caption: 'Parchment drying at the washing station' },
  { src: '/images/carousel/export-sack.jpg', caption: 'Caffeine Nirvana export-ready' },
  { src: '/images/carousel/export-sack-2.jpg', caption: 'Produce of India' },
  { src: '/images/carousel/cupping-lab.jpg', caption: 'Quality assessment in the cupping lab' },
  { src: '/images/carousel/bags-storage.jpg', caption: 'Lot storage and tracking' },
  { src: '/images/carousel/beans-floor.jpg', caption: 'Processing at origin' },
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
        padding: '80px 0',
        overflow: 'hidden',
        width: '100%',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
