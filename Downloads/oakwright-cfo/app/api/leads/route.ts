import { NextResponse } from 'next/server'

/**
 * Accepts the contact form payload and forwards it to n8n.
 * n8n webhook JSON (capitalized keys for easy mapping):
 * { Name, Email, Phone, Industry, Revenue, Message?, source, submittedAt }
 *
 * After n8n cleans the lead, pipe it into GoHighLevel.
 */
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

  const webhookUrl = process.env.N8N_WEBHOOK_URL || process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    console.info('[leads] N8N_WEBHOOK_URL not set. Payload ready for n8n:', lead)
    return NextResponse.json({ ok: true, forwarded: false }, { status: 200 })
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(lead),
    })

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => '')
      console.error('[leads] n8n webhook failed', upstream.status, detail)
      return NextResponse.json({ ok: false, error: 'Upstream webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, forwarded: true }, { status: 200 })
  } catch (error) {
    console.error('[leads] n8n webhook error', error)
    return NextResponse.json({ ok: false, error: 'Upstream webhook unreachable' }, { status: 502 })
  }
}
