import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the team behind Caffeine Nirvana — Danish Ali (Founder), Ayesha Naseer (Director), and Harsh Jain (Roasting Head). 150 years of coffee heritage, three perspectives, one cup.',
  alternates: { canonical: 'https://caffeinenirvana.co/about/team' },
  openGraph: {
    title: 'Team | Caffeine Nirvana',
    description:
      'Danish Ali, Ayesha Naseer, Harsh Jain — the people behind Caffeine Nirvana specialty coffee.',
    url: 'https://caffeinenirvana.co/about/team',
    type: 'profile',
  },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
