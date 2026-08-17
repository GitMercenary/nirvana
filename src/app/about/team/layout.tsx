import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Team | Caffeine Nirvana' },
  description:
    'Meet the people behind Caffeine Nirvana — Danish Ali (Founder), Ayesha Naseer (Director) and Harsh Jain (Roasting Head). 150 years of coffee heritage.',
  alternates: { canonical: 'https://caffeinenirvana.co/about/team' },
  openGraph: {
    title: 'Team | Caffeine Nirvana',
    description:
      'Danish Ali, Ayesha Naseer, Harsh Jain — the people behind Caffeine Nirvana specialty coffee.',
    url: 'https://caffeinenirvana.co/about/team',
    type: 'profile',
    images: [{ url: '/images/logo-full.jpg', width: 1200, height: 630 }],
  },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
