import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roasted Bean Supply',
  description:
    'Wholesale roasted specialty coffee for cafés, retailers, and white-label programmes. Single-origin Chikmagalur beans, custom roast profiles, India-wide and international supply.',
  alternates: { canonical: 'https://caffeinenirvana.co/roasted-supply' },
  openGraph: {
    title: 'Roasted Bean Supply | Caffeine Nirvana',
    description:
      'Premium roasted Chikmagalur coffee for cafés and retailers. Single origins, custom roast profiles, white-label support.',
    url: 'https://caffeinenirvana.co/roasted-supply',
    type: 'website',
  },
  keywords: [
    'wholesale roasted coffee India',
    'specialty café supply Bengaluru',
    'private label coffee India',
    'custom roast profile India',
    'single origin roasted Chikmagalur',
  ],
}

export default function RoastedSupplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
