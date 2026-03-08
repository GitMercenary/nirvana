// Email routing — see /src/config/email.config.js to change recipients
import { EMAIL_CONFIG } from '../config/email.config'

export async function submitToEmail(formData, formType) {
  const payload = {
    access_key: EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY,
    subject: EMAIL_CONFIG.SUBJECTS[formType],
    from_name: 'Caffeine Nirvana Website',
    to: EMAIL_CONFIG.PRIMARY,
    cc: EMAIL_CONFIG.CC,
    replyto: formData[EMAIL_CONFIG.REPLY_TO_FIELD] || '',
    ...formData,
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  const result = await response.json()
  if (!result.success) throw new Error(result.message || 'Submission failed')
  return result
}
