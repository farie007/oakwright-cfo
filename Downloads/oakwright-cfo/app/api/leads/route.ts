import { NextResponse } from 'next/server'

/**
 * Accepts the contact form payload and emails it via Resend.
 * Payload: { Name, Email, Phone, Industry, Revenue, Message?, source, submittedAt }
 */
const esc = (v: unknown) =>
  String(v ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!))

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }

  const lead = body as Record<string, unknown>
  const required = ['Name', 'Email', 'Phone', 'Industry', 'Revenue'] as const

  for (const key of required) {
    if (typeof lead[key] !== 'string' || !String(lead[key]).trim()) {
      return NextResponse.json({ ok: false, error: `Missing ${key}` }, { status: 400 })
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = (process.env.CONTACT_EMAIL || '').split(',').map((s) => s.trim()).filter(Boolean)

  if (!apiKey || to.length === 0) {
    console.error('[leads] RESEND_API_KEY or CONTACT_EMAIL not set. Lead NOT delivered:', lead)
    return NextResponse.json({ ok: false, error: 'Email not configured' }, { status: 500 })
  }

  const fields: [string, unknown][] = [
    ['Name', lead.Name],
    ['Email', lead.Email],
    ['Phone', lead.Phone],
    ['Industry', lead.Industry],
    ['Revenue', lead.Revenue],
    ['Message', lead.Message],
    ['Source', lead.source],
    ['Submitted', lead.submittedAt],
  ]
  const filled = fields.filter(([, v]) => String(v ?? '').trim() !== '')
  const rows = filled
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;font-weight:bold;vertical-align:top;color:#333">${k}</td>` +
        `<td style="padding:6px 0;color:#333">${esc(v).replace(/\n/g, '<br>')}</td></tr>`
    )
    .join('')
  const text = filled.map(([k, v]) => `${k}: ${v}`).join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Oakwright CFO Website <website@oakwrightcfo.com>',
        to,
        reply_to: String(lead.Email).trim(),
        subject: `New website inquiry: ${String(lead.Name).trim()} (${String(lead.Industry).trim()})`,
        html: `<p style="font-family:Arial,sans-serif;font-size:14px">New inquiry from <b>oakwrightcfo.com</b>. Reply to this email to respond directly.</p><table style="font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
        text: `New inquiry from oakwrightcfo.com\n\n${text}`,
      }),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('[leads] Resend failed', res.status, detail, lead)
      return NextResponse.json({ ok: false, error: 'Email send failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, sent: true }, { status: 200 })
  } catch (error) {
    console.error('[leads] Resend error', error, lead)
    return NextResponse.json({ ok: false, error: 'Email service unreachable' }, { status: 502 })
  }
}
