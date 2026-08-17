'use client'

/**
 * Reusable hero-section backdrop. Renders a low-opacity image plus a dark
 * gradient overlay that keeps text readable. Drop it inside a `position: relative`
 * section, then place the actual hero content in a `z-index: 1` container.
 */
export default function HeroBackdrop({
  src = '/images/hero-bg.png',
  opacity = 0.18,
  gradient = 'linear-gradient(180deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.88) 100%)',
}: {
  src?: string
  opacity?: number
  gradient?: string
}) {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `image-set(url(${src.replace(/\.(png|jpe?g)$/i, '.webp')}) type('image/webp'), url(${src}))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: gradient,
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
