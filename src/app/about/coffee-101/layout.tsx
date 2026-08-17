import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Get to Know Your Coffee | Caffeine Nirvana' },
  description:
    'Essays on the philosophy behind every Caffeine Nirvana cup — coffee as a means of life, ethical growth from farmer to consumer, and Indian coffee heritage.',
  alternates: { canonical: 'https://caffeinenirvana.co/about/coffee-101' },
  openGraph: {
    title: 'Get to Know Your Coffee | Caffeine Nirvana',
    description:
      'Long-form essays on coffee as a way of life, the farmer-to-consumer journey, and the protection of Chikmagalur’s coffee heritage.',
    url: 'https://caffeinenirvana.co/about/coffee-101',
    type: 'article',
    images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
  },
  keywords: [
    'coffee philosophy',
    'ethical coffee sourcing',
    'farmer-to-cup',
    'Chikmagalur coffee culture',
    'specialty coffee education',
  ],
}

export default function Coffee101Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
