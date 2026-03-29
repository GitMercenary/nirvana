'use client'

import HeroSection from '@/components/HeroSection'
import CredentialBar from '@/components/CredentialBar'
import OurStorySection from '@/components/OurStorySection'
import PhotoCarousel from '@/components/PhotoCarousel'
import AtmosphereSelector from '@/components/AtmosphereSelector'
import EstatesSection from '@/components/EstatesSection'
import TraceabilitySection from '@/components/TraceabilitySection'
import SustainabilitySection from '@/components/SustainabilitySection'
import LotNavigator from '@/components/LotNavigator'
import HumanContactSection from '@/components/HumanContactSection'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
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
