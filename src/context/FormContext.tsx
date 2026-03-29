'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import SourceFromOriginForm from '@/components/forms/SourceFromOriginForm'
import LearnTheOriginForm from '@/components/forms/LearnTheOriginForm'
import SampleRequestForm from '@/components/forms/SampleRequestForm'

interface FormContextValue {
  openSourceForm: () => void
  openLearnForm: () => void
  openSampleForm: (lotName: string) => void
}

const FormContext = createContext<FormContextValue | null>(null)

export function useFormContext() {
  const ctx = useContext(FormContext)
  if (!ctx) throw new Error('useFormContext must be used within FormProvider')
  return ctx
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [sourceFormOpen, setSourceFormOpen] = useState(false)
  const [learnFormOpen, setLearnFormOpen] = useState(false)
  const [sampleFormLot, setSampleFormLot] = useState<string | null>(null)

  const value: FormContextValue = {
    openSourceForm: () => setSourceFormOpen(true),
    openLearnForm: () => setLearnFormOpen(true),
    openSampleForm: (lot: string) => setSampleFormLot(lot),
  }

  return (
    <FormContext.Provider value={value}>
      {children}
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
    </FormContext.Provider>
  )
}
