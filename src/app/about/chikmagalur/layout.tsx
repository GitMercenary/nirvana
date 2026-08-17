import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Chikmagalur | Caffeine Nirvana' },
  description:
    'Chikmagalur — the misty Western Ghats hills where Indian coffee began. High-altitude, shade-grown terroir behind every Caffeine Nirvana lot.',
  alternates: { canonical: 'https://caffeinenirvana.co/about/chikmagalur' },
  openGraph: {
    title: 'Chikmagalur — the birthplace of Indian coffee',
    description:
      'The mist-covered Western Ghats of Karnataka. Where shade-grown specialty coffee has been cultivated for over a century, and where every Caffeine Nirvana lot comes from.',
    url: 'https://caffeinenirvana.co/about/chikmagalur',
    type: 'article',
    images: [{ url: '/images/landscape-chikmagalur.jpg', width: 1200, height: 630 }],
  },
  keywords: [
    'Chikmagalur coffee',
    'Karnataka specialty coffee',
    'Western Ghats coffee region',
    'Indian coffee origin',
    'shade grown coffee India',
  ],
}

export default function ChikmagalurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
