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

const LOTS_OPTIONS = [
  '5B Natural',
  '5B Washed',
  'Chandragiri Washed',
  'Monsooned Malabar',
  'All Available',
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

export default function SourceFromOriginForm({ isOpen, onClose }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const selectedLots = watch('lots') || []

  const onSubmit = async (data: Record<string, unknown>) => {
    setStatus('submitting')
    try {
      await submitToEmail(data, 'SOURCE_FROM_ORIGIN')
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
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(16px)',
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 101,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                padding: '60px 48px 48px',
                background: 'rgba(14,14,14,0.9)',
                border: '1px solid rgba(242,242,243,0.08)',
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
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f2f2f3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a4a2a2')}
              >
                <X size={18} />
              </button>

              {/* Header */}
              <h2
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: '28px',
                  color: '#f2f2f3',
                  marginBottom: '8px',
                }}
              >
                Source From Origin
              </h2>
              <p
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '14px',
                  color: '#a4a2a2',
                  marginBottom: '40px',
                }}
              >
                Your enquiry reaches Danish Ali directly. Response within 24 hours.
              </p>

              {status === 'success' ? (
                <p
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#f2f2f3',
                    lineHeight: 1.4,
                    textAlign: 'center',
                    padding: '40px 0',
                  }}
                >
                  Your enquiry has reached Danish Ali directly. Expect a response within 24 hours.
                </p>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        {...register('name', { required: true })}
                        type="text"
                        style={{ ...inputStyle, borderColor: errors.name ? '#da2233' : 'rgba(242,242,243,0.12)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? '#da2233' : 'rgba(242,242,243,0.12)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Company / Roastery *</label>
                      <input
                        {...register('company', { required: true })}
                        type="text"
                        style={{ ...inputStyle, borderColor: errors.company ? '#da2233' : 'rgba(242,242,243,0.12)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.company ? '#da2233' : 'rgba(242,242,243,0.12)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Country *</label>
                      <input
                        {...register('country', { required: true })}
                        type="text"
                        style={{ ...inputStyle, borderColor: errors.country ? '#da2233' : 'rgba(242,242,243,0.12)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.country ? '#da2233' : 'rgba(242,242,243,0.12)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                        type="email"
                        style={{ ...inputStyle, borderColor: errors.email ? '#da2233' : 'rgba(242,242,243,0.12)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? '#da2233' : 'rgba(242,242,243,0.12)')}
                      />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={labelStyle}>Phone (optional)</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                      />
                    </div>
                  </div>

                  {/* Lots checkboxes */}
                  <div style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <label style={labelStyle}>Lots of Interest</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {LOTS_OPTIONS.map((lot) => (
                        <label
                          key={lot}
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
                          <input
                            type="checkbox"
                            value={lot}
                            {...register('lots')}
                            style={{ accentColor: '#da2233' }}
                          />
                          {lot}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Monthly volume */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Monthly Volume</label>
                    <select
                      {...register('volume')}
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                    >
                      <option value="">Select...</option>
                      <option value="<100kg">&lt;100kg</option>
                      <option value="100-500kg">100–500kg</option>
                      <option value="500kg-1MT">500kg–1MT</option>
                      <option value="1MT+">1MT+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about your roastery and what you're looking for..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                    />
                  </div>

                  {status === 'error' && (
                    <p
                      style={{
                        fontFamily: 'DM Sans, system-ui, sans-serif',
                        fontSize: '13px',
                        color: '#da2233',
                        marginBottom: '16px',
                      }}
                    >
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
                    onMouseEnter={(e) => {
                      if (status !== 'submitting') e.currentTarget.style.background = '#b82026'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#da2233'
                    }}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
