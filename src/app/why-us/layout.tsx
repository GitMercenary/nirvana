import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Us',
  description:
    'Soil. Soul. Science. The four practices that set Caffeine Nirvana apart — radical transparency, the pursuit of the “god shot”, sustainable balance, and precision roasting.',
  alternates: { canonical: 'https://caffeinenirvana.co/why-us' },
  openGraph: {
    title: 'Why Us | Caffeine Nirvana',
    description:
      'Soil, soul, science — the philosophy and the four practices behind every Caffeine Nirvana lot.',
    url: 'https://caffeinenirvana.co/why-us',
    type: 'website',
  },
}

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
