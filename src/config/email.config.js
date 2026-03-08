// /src/config/email.config.js
// ─────────────────────────────────────────────────────────────────
// CAFFEINE NIRVANA — EMAIL ROUTING CONFIGURATION
// Change recipient addresses here ONLY. Do not hardcode emails
// in any component. All forms import from this file.
// ─────────────────────────────────────────────────────────────────

export const EMAIL_CONFIG = {

  // Primary recipient — client inbox
  PRIMARY: 'danish.888.ali@gmail.com',

  // CC recipient — agency monitoring all leads
  CC: 'mohamed.jaffar@blackarrowtechnologies.com',

  // Web3Forms access key — get free key at https://web3forms.com
  // Replace the placeholder below with the real key before going live
  WEB3FORMS_ACCESS_KEY: 'a1dfb1cf-ea8e-46f0-b79c-500f449facdf',

  // Form subjects — one per form type
  SUBJECTS: {
    SOURCE_FROM_ORIGIN:  'New Sourcing Enquiry — Caffeine Nirvana',
    LEARN_THE_ORIGIN:    'Farm Visit Enquiry — Caffeine Nirvana',
    FOOTER_QUICK:        'Quick Contact — Caffeine Nirvana',
    SAMPLE_REQUEST:      'Sample Request — Caffeine Nirvana',
  },

  // Reply-to: always set to the enquirer's email
  // so Danish can reply directly from his inbox
  REPLY_TO_FIELD: 'email',
}
