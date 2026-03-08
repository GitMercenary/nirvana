'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CredentialBar from '@/components/CredentialBar'
import AtmosphereSelector from '@/components/AtmosphereSelector'
import EstateStorySection from '@/components/EstateStorySection'
import TraceabilitySection from '@/components/TraceabilitySection'
import LotNavigator from '@/components/LotNavigator'
import SustainabilitySection from '@/components/SustainabilitySection'
import HumanContactSection from '@/components/HumanContactSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import SourceFromOriginForm from '@/components/forms/SourceFromOriginForm'
import LearnTheOriginForm from '@/components/forms/LearnTheOriginForm'
import SampleRequestForm from '@/components/forms/SampleRequestForm'

export default function HomePage() {
  const [sourceFormOpen, setSourceFormOpen] = useState(false)
  const [learnFormOpen, setLearnFormOpen] = useState(false)
  const [sampleFormLot, setSampleFormLot] = useState<string | null>(null)

  return (
    <>
      <Navigation onSourceClick={() => setSourceFormOpen(true)} />
      <HeroSection
        onSourceClick={() => setSourceFormOpen(true)}
        onLearnClick={() => setLearnFormOpen(true)}
      />
      <CredentialBar />
      <AtmosphereSelector onSampleRequest={(lot) => setSampleFormLot(lot)} />
      <EstateStorySection />
      <TraceabilitySection />
      <LotNavigator onSampleRequest={(lot) => setSampleFormLot(lot)} />
      <SustainabilitySection />
      <HumanContactSection onSourceClick={() => setSourceFormOpen(true)} />
      <CTABanner onSourceClick={() => setSourceFormOpen(true)} />
      <Footer />

      {/* Forms */}
      <SourceFromOriginForm
        isOpen={sourceFormOpen}
        onClose={() => setSourceFormOpen(false)}
      />
      <LearnTheOriginForm
        isOpen={learnFormOpen}
        onClose={() => setLearnFormOpen(false)}
      />
      <SampleRequestForm
        lotName={sampleFormLot}
        onClose={() => setSampleFormLot(null)}
      />
    </>
  )
}
