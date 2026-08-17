import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Specialty Coffee Offerings',
  description:
    'Current Caffeine Nirvana green lots from Chikmagalur — SCA 85.5–87.75, natural, washed and experimental processes. FOB Mangalore, direct trade.',
  alternates: { canonical: 'https://caffeinenirvana.co/offerings' },
  openGraph: {
    title: 'Specialty Coffee Offerings | Caffeine Nirvana',
    description:
      '4 current specialty lots from Chikmagalur. SCA scores 85.5–87.75. Sample requests open. FOB Mangalore.',
    url: 'https://caffeinenirvana.co/offerings',
    type: 'website',
    images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
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
