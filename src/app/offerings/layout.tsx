import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Specialty Coffee Offerings',
  description:
    'Current Caffeine Nirvana lots: 5B Naturals (Zoya, SCA 86.75), Chandragiri Washed (Sheethal, SCA 85.5), Supernatural Process (Zoya, SCA 87.75), Lactic Sequential Naturals (CN Washing Station, SCA 87.0). FOB Mangalore. Direct trade.',
  alternates: { canonical: 'https://caffeinenirvana.co/offerings' },
  openGraph: {
    title: 'Specialty Coffee Offerings | Caffeine Nirvana',
    description:
      '4 current specialty lots from Chikmagalur. SCA scores 85.5–87.75. Sample requests open. FOB Mangalore.',
    url: 'https://caffeinenirvana.co/offerings',
    type: 'website',
  },
  keywords: [
    '5B Naturals coffee',
    'Chandragiri Washed',
    'Indian Anaerobic coffee',
    'specialty coffee samples India',
    'green coffee FOB Mangalore',
  ],
}

export default function OfferingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
