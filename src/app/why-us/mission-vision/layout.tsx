import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Mission & Vision | Caffeine Nirvana' },
  description:
    'Our three-pillar mission — soil, soul, science: empowering smallholder farmers and championing Chikmagalur’s terroir and specialty coffee.',
  alternates: { canonical: 'https://caffeinenirvana.co/why-us/mission-vision' },
  openGraph: {
    title: 'Mission & Vision | Caffeine Nirvana',
    description:
      'Soil, soul, science — three pillars driving Caffeine Nirvana. Plus our partnership-over-patronage approach to direct trade.',
    url: 'https://caffeinenirvana.co/why-us/mission-vision',
    type: 'article',
    images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
  },
}

export default function MissionVisionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
