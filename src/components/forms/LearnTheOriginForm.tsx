'use client'
// Email routing — see /src/config/email.config.js to change recipients

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'
import { submitToEmail } from '@/utils/submitForm'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const PURPOSE_OPTIONS = [
  'Cupping session',
  'Farm tour',
  'Procurement decision',
  'Content/media',
  'Other',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(242,242,243,0.12)',
  color: '#f2f2f3',
  padding: '14px 16px',
  fontFamily: 'DM Sans, system-ui, sans-serif',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 300ms ease',
  marginBottom: '4px',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'DM Sans, system-ui, sans-serif',
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#a4a2a2',
  marginBottom: '6px',
}

export default function LearnTheOriginForm({ isOpen, onClose }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data: Record<string, unknown>) => {
    setStatus('submitting')
    try {
      await submitToEmail(data, 'LEARN_THE_ORIGIN')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: '#0a0a0a',
            }}
          />

          {/* Right slide panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '480px',
              maxWidth: '100vw',
              zIndex: 101,
              background: '#0e0e0e',
              borderLeft: '1px solid rgba(242,242,243,0.08)',
              overflowY: 'auto',
              padding: '60px 40px 48px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                background: 'none',
                border: 'none',
                color: '#a4a2a2',
                cursor: 'pointer',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
            >
              <X size={18} />
            </button>

            <h2
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 700,
                fontSize: '26px',
                color: '#f2f2f3',
                marginBottom: '8px',
              }}
            >
              Learn the Origin
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '14px',
                color: '#a4a2a2',
                marginBottom: '36px',
                lineHeight: 1.5,
              }}
            >
              Visit our estates. Walk the farm. Cup the coffee at source.
            </p>

            {status === 'success' ? (
              <p
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#f2f2f3',
                  lineHeight: 1.4,
                  padding: '40px 0',
                }}
              >
                Your visit enquiry has reached Danish Ali directly. Expect a response within 24 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                {[
                  { field: 'name', label: 'Full Name', type: 'text', required: true },
                  { field: 'company', label: 'Company / Role', type: 'text', required: true },
                  { field: 'country', label: 'Country', type: 'text', required: true },
                  { field: 'email', label: 'Email Address', type: 'email', required: true },
                ].map(({ field, label, type, required }) => (
                  <div key={field} style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>{label} {required && '*'}</label>
                    <input
                      {...register(field as string, { required })}
                      type={type}
                      style={{
                        ...inputStyle,
                        borderColor: errors[field] ? '#da2233' : 'rgba(242,242,243,0.12)',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors[field] ? '#da2233' : 'rgba(242,242,243,0.12)')}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>Preferred Visit Quarter</label>
                  <select
                    {...register('quarter')}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                  >
                    <option value="">Select...</option>
                    <option value="Q1">Q1 Jan–Mar</option>
                    <option value="Q2">Q2 Apr–Jun</option>
                    <option value="Q3">Q3 Jul–Sep</option>
                    <option value="Q4">Q4 Oct–Dec</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>Group Size</label>
                  <select
                    {...register('group_size')}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                  >
                    <option value="">Select...</option>
                    <option value="Just me">Just me</option>
                    <option value="2-5">2–5 people</option>
                    <option value="5-10">5–10 people</option>
                    <option value="10+">10+</option>
                  </select>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>Purpose of Visit</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {PURPOSE_OPTIONS.map((p) => (
                      <label
                        key={p}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontFamily: 'DM Sans, system-ui, sans-serif',
                          fontSize: '13px',
                          color: '#a4a2a2',
                          cursor: 'pointer',
                        }}
                      >
                        <input type="checkbox" value={p} {...register('purpose')} style={{ accentColor: '#da2233' }} />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us what you'd like to experience at our estates..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '13px', color: '#da2233', marginBottom: '16px' }}>
                    Something went wrong. Please email danish.888.ali@gmail.com directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%',
                    background: '#da2233',
                    color: '#f2f2f3',
                    border: 'none',
                    padding: '18px',
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '14px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    transition: 'background 250ms ease',
                    opacity: status === 'submitting' ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (status !== 'submitting') e.currentTarget.style.background = '#b82026' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#da2233' }}
                >
                  {status === 'submitting' ? 'Sending...' : 'Enquire About a Visit'}
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
