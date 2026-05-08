import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission & Vision',
  description:
    'Our three-pillar mission — soil, soul, science. Empowering small-holder farmers, celebrating Chikmagalur’s terroir, and pioneering specialty coffee in nascent regions.',
  alternates: { canonical: 'https://caffeinenirvana.co/why-us/mission-vision' },
  openGraph: {
    title: 'Mission & Vision | Caffeine Nirvana',
    description:
      'Soil, soul, science — three pillars driving Caffeine Nirvana. Plus our partnership-over-patronage approach to direct trade.',
    url: 'https://caffeinenirvana.co/why-us/mission-vision',
    type: 'article',
  },
}

export default function MissionVisionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
