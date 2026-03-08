'use client'
// Email routing — see /src/config/email.config.js to change recipients

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'
import { submitToEmail } from '@/utils/submitForm'

interface Props {
  lotName: string | null
  onClose: () => void
}

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

export default function SampleRequestForm({ lotName, onClose }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
    if (lotName) {
      reset()
      setStatus('idle')
    }
  }, [lotName, reset])

  const onSubmit = async (data: Record<string, unknown>) => {
    setStatus('submitting')
    try {
      await submitToEmail({ ...data, lot: lotName }, 'SAMPLE_REQUEST')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {lotName && (
        <>
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
                maxWidth: '480px',
                position: 'relative',
                padding: '60px 40px 40px',
                background: 'rgba(14,14,14,0.95)',
                border: '1px solid rgba(242,242,243,0.08)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
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

              {/* Pre-filled lot name */}
              <p
                style={{
                  fontFamily: 'Zilla Slab, Georgia, serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#da2233',
                  marginBottom: '24px',
                  letterSpacing: '0.02em',
                }}
              >
                Requesting sample: {lotName}
              </p>

              {status === 'success' ? (
                <p
                  style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontWeight: 700,
                    fontSize: '22px',
                    color: '#f2f2f3',
                    lineHeight: 1.4,
                    padding: '20px 0',
                  }}
                >
                  Sample request sent. Danish will be in touch within 24 hours.
                </p>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  {[
                    { field: 'name', label: 'Full Name', type: 'text', required: true },
                    { field: 'company', label: 'Company', type: 'text', required: true },
                    { field: 'email', label: 'Email Address', type: 'email', required: true },
                    { field: 'country', label: 'Country', type: 'text', required: true },
                  ].map(({ field, label, type, required }) => (
                    <div key={field} style={{ marginBottom: '14px' }}>
                      <label style={labelStyle}>{label} *</label>
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

                  <div style={{ marginBottom: '14px' }}>
                    <label style={labelStyle}>Sample Quantity</label>
                    <select
                      {...register('quantity')}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#da2233')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(242,242,243,0.12)')}
                    >
                      <option value="100g">100g</option>
                      <option value="250g">250g</option>
                      <option value="500g">500g</option>
                      <option value="1kg">1kg</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Message (optional)</label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder="Any specific requirements or questions about this lot?"
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
                    {status === 'submitting' ? 'Sending...' : 'Request This Sample'}
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
