// Lead submission — posts to the server route /api/lead, which sends the
// email via Resend. Recipients/subjects live in /src/config/email.config.js.
// The Resend API key stays server-side (RESEND_API_KEY) — never in the browser.

export async function submitToEmail(formData, formType) {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ formType, ...formData }),
  })

  let result = {}
  try {
    result = await response.json()
  } catch {
    // non-JSON error response
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Submission failed')
  }
  return result
}
