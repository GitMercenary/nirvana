'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import CredentialBar from '@/components/CredentialBar'
import { FaqSchema } from '@/components/StructuredData'

// Below-the-fold sections are code-split (still server-rendered) to cut the
// initial JS bundle and main-thread work on load. No visual/behaviour change.
const OurStorySection = dynamic(() => import('@/components/OurStorySection'))
const PhotoCarousel = dynamic(() => import('@/components/PhotoCarousel'))
const AtmosphereSelector = dynamic(() => import('@/components/AtmosphereSelector'))
const EstatesSection = dynamic(() => import('@/components/EstatesSection'))
const TraceabilitySection = dynamic(() => import('@/components/TraceabilitySection'))
const SustainabilitySection = dynamic(() => import('@/components/SustainabilitySection'))
const LotNavigator = dynamic(() => import('@/components/LotNavigator'))
const HumanContactSection = dynamic(() => import('@/components/HumanContactSection'))
const CTABanner = dynamic(() => import('@/components/CTABanner'))

export default function HomePage() {
  return (
    <>
      <FaqSchema />
      <HeroSection />
      <CredentialBar />
      <OurStorySection />
      <PhotoCarousel />
      <AtmosphereSelector />
      <EstatesSection />
      <TraceabilitySection />
      <SustainabilitySection />
      <LotNavigator />
      <HumanContactSection />
      <CTABanner />
    </>
  )
}
