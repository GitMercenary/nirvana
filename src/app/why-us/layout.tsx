import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Us',
  description:
    'Soil, soul, science — Caffeine Nirvana’s practices: radical transparency, the pursuit of the god shot, sustainable balance and precision roasting.',
  alternates: { canonical: 'https://caffeinenirvana.co/why-us' },
  openGraph: {
    title: 'Why Us | Caffeine Nirvana',
    description:
      'Soil, soul, science — the philosophy and the four practices behind every Caffeine Nirvana lot.',
    url: 'https://caffeinenirvana.co/why-us',
    type: 'website',
    images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
  },
}

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
