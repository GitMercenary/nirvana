// /src/config/email.config.js
// ─────────────────────────────────────────────────────────────────
// CAFFEINE NIRVANA — LEAD EMAIL ROUTING
// Used SERVER-SIDE ONLY (by /api/lead). No secrets live here — the
// Resend API key comes from the RESEND_API_KEY environment variable.
// Change recipient addresses and subjects here ONLY.
// ─────────────────────────────────────────────────────────────────

export const EMAIL_CONFIG = {
  // Where every website lead is delivered
  PRIMARY: 'hello@caffeinenirvana.co',

  // Optional CC (e.g. an admin/monitoring inbox). Leave '' for none.
  CC: '',

  // Form subjects — one per form type
  SUBJECTS: {
    SOURCE_FROM_ORIGIN: 'New Sourcing Enquiry — Caffeine Nirvana',
    LEARN_THE_ORIGIN: 'Farm Visit Enquiry — Caffeine Nirvana',
    FOOTER_QUICK: 'Quick Contact — Caffeine Nirvana',
    SAMPLE_REQUEST: 'Sample Request — Caffeine Nirvana',
  },

  // The field on the form that holds the enquirer's email (used as reply-to)
  REPLY_TO_FIELD: 'email',
}
