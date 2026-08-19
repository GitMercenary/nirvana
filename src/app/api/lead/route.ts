import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL_CONFIG } from '@/config/email.config'

// Runs on the server only — the Resend API key never reaches the browser.
export const runtime = 'nodejs'

// email.config.js is untyped JS; give the subject map a string index for TS.
const SUBJECTS: Record<string, string> = EMAIL_CONFIG.SUBJECTS

// Human-friendly labels for known fields; anything else falls back to the raw key.
const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  company: 'Company',
  email: 'Email',
  phone: 'Phone',
  country: 'Country',
  role: 'Role',
  volume: 'Est. Annual Volume',
  interest: 'Interest',
  lot: 'Lot',
  message: 'Message',
  visitDate: 'Preferred Visit Date',
  groupSize: 'Group Size',
}

const HIDDEN_FIELDS = new Set(['formType', 'botcheck', '_gotcha'])

function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function labelFor(key: string): string {
  return FIELD_LABELS[key] ?? key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())
}

function buildEmail(formType: string, data: Record<string, unknown>) {
  const rows = Object.entries(data).filter(
    ([k, v]) => !HIDDEN_FIELDS.has(k) && v !== undefined && v !== null && String(v).trim() !== ''
  )

  const label = SUBJECTS[formType] ? formType.replace(/_/g, ' ') : 'Website Enquiry'

  const text =
    `New lead — ${label}\n\n` +
    rows.map(([k, v]) => `${labelFor(k)}: ${String(v)}`).join('\n') +
    `\n\n— Sent from caffeinenirvana.co`

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
    <div style="background:#0a0a0a;padding:20px 24px;border-radius:8px 8px 0 0">
      <span style="color:#f2f2f3;font-size:14px;letter-spacing:.15em;text-transform:uppercase">Caffeine Nirvana</span>
      <div style="color:#da2233;font-size:12px;letter-spacing:.2em;text-transform:uppercase;margin-top:4px">New Lead · ${esc(label)}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px">
      ${rows
        .map(
          ([k, v]) => `<tr>
        <td style="padding:12px 16px;background:#fafafa;border-bottom:1px solid #eee;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#888;width:38%;vertical-align:top">${esc(labelFor(k))}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:15px;color:#1a1a1a;white-space:pre-wrap">${esc(v)}</td>
      </tr>`
        )
        .join('')}
    </table>
    <p style="font-size:12px;color:#aaa;margin:16px 0 0;text-align:center">Sent from the caffeinenirvana.co website. Reply directly to respond to the enquirer.</p>
  </div>`

  return { text, html }
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot — silently accept bots without emailing.
  if (body.botcheck || body._gotcha) {
    return NextResponse.json({ success: true })
  }

  const formType = String(body.formType ?? '')
  const replyTo =
    typeof body[EMAIL_CONFIG.REPLY_TO_FIELD] === 'string'
      ? (body[EMAIL_CONFIG.REPLY_TO_FIELD] as string)
      : undefined

  const subject = SUBJECTS[formType] ?? 'New Website Enquiry — Caffeine Nirvana'
  const from = process.env.RESEND_FROM || 'Caffeine Nirvana <onboarding@resend.dev>'
  const { text, html } = buildEmail(formType, body)

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: EMAIL_CONFIG.PRIMARY,
      ...(EMAIL_CONFIG.CC ? { cc: EMAIL_CONFIG.CC } : {}),
      ...(replyTo ? { replyTo } : {}),
      subject,
      html,
      text,
    })

    if (error) {
      console.error('Resend send error:', error)
      return NextResponse.json(
        { success: false, message: 'Could not send. Please try again.' },
        { status: 502 }
      )
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead route error:', err)
    return NextResponse.json(
      { success: false, message: 'Could not send. Please try again.' },
      { status: 502 }
    )
  }
}
