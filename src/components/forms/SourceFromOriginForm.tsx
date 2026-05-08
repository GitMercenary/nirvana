'use client'
// Email routing — see /src/config/email.config.js to change recipients

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { X, Check } from 'lucide-react'
import { submitToEmail } from '@/utils/submitForm'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const LOTS_OPTIONS = [
  '5B Naturals — Zoya Estate',
  'Chandragiri Washed — Sheethal Estate',
  'Supernatural Process — Zoya Estate',
  'Lactic Sequential Naturals — Caffeine Nirvana Washing Station',
  'All Available',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(242,242,243,0.12)',
  color: '#f2f2f3',
  padding: '8px 10px',
  fontFamily: 'DM Sans, system-ui, sans-serif',
  fontSize: '13px',
  outline: 'none',
  transition: 'border-color 300ms ease',
  marginBottom: 0,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'DM Sans, system-ui, sans-serif',
  fontSize: '9px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#a4a2a2',
  marginBottom: '3px',
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
            onClick={onClose}
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
            {/* Close — fixed to viewport so it stays visible when scrolling inside the form on mobile */}
            <button
              onClick={onClose}
              aria-label="Close form"
              style={{
                position: 'fixed',
                top: '16px',
                right: '16px',
                zIndex: 102,
                background: 'rgba(10,10,10,0.6)',
                border: '1px solid rgba(242,242,243,0.12)',
                borderRadius: '999px',
                color: '#f2f2f3',
                cursor: 'pointer',
                transition: 'background 200ms ease, border-color 200ms ease',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(218,34,51,0.18)'
                e.currentTarget.style.borderColor = 'rgba(218,34,51,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10,10,10,0.6)'
                e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)'
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: '100%',
                maxWidth: '500px',
                position: 'relative',
                padding: 'clamp(20px, 3vw, 28px) clamp(18px, 3vw, 32px)',
                background: 'rgba(14,14,14,0.92)',
                border: '1px solid rgba(242,242,243,0.08)',
              }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Header */}
              <h2
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#f2f2f3',
                  marginBottom: '2px',
                  lineHeight: 1.2,
                }}
              >
                Source From Origin
              </h2>
              <p
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '12px',
                  color: '#a4a2a2',
                  marginBottom: '14px',
                }}
              >
                Your enquiry reaches Danish directly. Response within 24 hours.
              </p>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '24px 0 12px' }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'rgba(218,34,51,0.15)',
                      border: '1px solid rgba(218,34,51,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      color: '#da2233',
                    }}
                  >
                    <Check size={28} strokeWidth={2.5} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fontWeight: 700,
                      fontSize: '28px',
                      color: '#f2f2f3',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    Thank you.
                  </h3>
                  <p
                    style={{
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '15px',
                      color: '#a4a2a2',
                      lineHeight: 1.7,
                      maxWidth: 420,
                      margin: '0 auto 28px',
                    }}
                  >
                    Your enquiry has reached Danish at{' '}
                    <span style={{ color: '#f2f2f3' }}>danish@caffeinenirvana.co</span>.
                    He&rsquo;ll personally respond within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(242,242,243,0.2)',
                      color: '#a4a2a2',
                      padding: '12px 32px',
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '13px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: 'var(--cn-radius-sm)',
                      transition: 'color 200ms ease, border-color 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#f2f2f3'
                      e.currentTarget.style.borderColor = 'rgba(242,242,243,0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#a4a2a2'
                      e.currentTarget.style.borderColor = 'rgba(242,242,243,0.2)'
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
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
                  <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <label style={labelStyle}>Lots of Interest</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 10px' }}>
                      {LOTS_OPTIONS.map((lot) => (
                        <label
                          key={lot}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: 'DM Sans, system-ui, sans-serif',
                            fontSize: '11px',
                            color: '#a4a2a2',
                            cursor: 'pointer',
                            lineHeight: 1.25,
                          }}
                        >
                          <input
                            type="checkbox"
                            value={lot}
                            {...register('lots')}
                            style={{ accentColor: '#da2233', flexShrink: 0, width: 14, height: 14 }}
                          />
                          {lot}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Monthly volume + Message side-by-side on wider screens */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '12px' }}>
                    <div>
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
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea
                        {...register('message')}
                        rows={2}
                        placeholder="Tell us about your roastery and what you're looking for..."
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p
                      style={{
                        fontFamily: 'DM Sans, system-ui, sans-serif',
                        fontSize: '12px',
                        color: '#da2233',
                        marginBottom: '12px',
                      }}
                    >
                      Something went wrong. Please email danish@caffeinenirvana.co directly.
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
                      padding: '11px',
                      fontFamily: 'DM Sans, system-ui, sans-serif',
                      fontSize: '12px',
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
