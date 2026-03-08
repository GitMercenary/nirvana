import { useIsMobile } from '@/hooks/useIsMobile'
import Image from 'next/image'
interface HumanContactSectionProps {
  onSourceClick: () => void
}

export default function HumanContactSection({ onSourceClick }: HumanContactSectionProps) {
  const isMobile = useIsMobile()

  return (
    <section
      id="contact"
      style={{
        background: 'var(--cn-dark)',
        padding: isMobile ? '80px 0' : '120px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 24px' : '0 32px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '40px' : '80px',
          alignItems: 'center',
        }}
      >
        {/* Left — text */}
        <div>
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#a4a2a2',
              marginBottom: '24px',
            }}
          >
            The Person Behind the Coffee
          </p>

          <h2
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 900,
              fontSize: 'clamp(40px, 5vw, 56px)',
              color: '#f2f2f3',
              marginBottom: '40px',
              lineHeight: 1.1,
            }}
          >
            Talk to Danish.
          </h2>

          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontWeight: 300,
              fontSize: '17px',
              color: '#f0ece6',
              lineHeight: 1.85,
              marginBottom: '16px',
            }}
          >
            &ldquo;I started exporting because I wanted the people who roast our coffee to know
            exactly where it comes from. Not a broker&apos;s description. Not a cupping report.
            The actual place, the actual process, and the person responsible for it.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontWeight: 300,
              fontSize: '17px',
              color: '#f0ece6',
              lineHeight: 1.85,
              marginBottom: '12px',
            }}
          >
            If you&apos;re a roaster looking for something genuinely different from India — I&apos;d
            like to hear from you.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontWeight: 400,
              fontSize: '13px',
              color: '#a4a2a2',
              letterSpacing: '0.1em',
              marginBottom: '48px',
            }}
          >
            — Danish Ali, Director, Zoya Estate
          </p>

          {/* Contact block */}
          <div style={{ marginBottom: '40px' }}>
            {[
              { text: 'danish.888.ali@gmail.com', href: 'mailto:danish.888.ali@gmail.com', red: true },
              { text: '+91 80 7372 8811', href: 'tel:+918073728811', red: true },
              { text: 'caffeinenirvana.net', href: 'https://caffeinenirvana.net', red: false },
            ].map(({ text, href, red }) => (
              <a
                key={text}
                href={href}
                style={{
                  display: 'block',
                  fontFamily: 'Zilla Slab, Georgia, serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: red ? '#da2233' : '#a4a2a2',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 200ms ease',
                  paddingBottom: '4px',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = red ? '#da2233' : '#a4a2a2'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                {text}
              </a>
            ))}
          </div>

          <button
            onClick={onSourceClick}
            style={{
              background: '#da2233',
              color: '#f2f2f3',
              border: 'none',
              padding: '16px 40px',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '14px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 250ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#b82026')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#da2233')}
          >
            Source From Origin
          </button>
        </div>

        {/* Right — portrait */}
        <div
          style={{
            position: 'relative',
            aspectRatio: '3/4',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/pillar-direct-export(1).png"
            alt="Danish Ali, Director, Zoya Estate"
            fill
            style={{
              objectFit: 'cover',
              filter: 'saturate(0.9)',
              transition: 'filter 400ms ease',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.filter = 'saturate(1.1)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.9)')}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Dark vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at center, transparent 50%, rgba(14,14,14,0.4) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  )
}
