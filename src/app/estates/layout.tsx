import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estates',
  description:
    'Our Chikmagalur estate partners — Zoya (flagship, 4,180 ft), Sheethal (lakeside, organic) and Kardigandi (Aldur, Rainforest Alliance Certified).',
  alternates: { canonical: 'https://caffeinenirvana.co/estates' },
  openGraph: {
    title: 'Our Estates | Caffeine Nirvana',
    description:
      'Zoya, Sheethal, Kardigandi — three Chikmagalur estates, three philosophies, one shared standard for specialty coffee.',
    url: 'https://caffeinenirvana.co/estates',
    type: 'website',
    images: [{ url: '/images/estate-zoya-hero.png', width: 1200, height: 630 }],
  },
  keywords: [
    'Zoya Estate Chikmagalur',
    'Sheethal Estate coffee',
    'Kardigandi Estate Aldur',
    'Rainforest Alliance India coffee',
    'Chikmagalur coffee estates',
  ],
}

export default function EstatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
