'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check } from 'lucide-react'
import { BrandButton } from '@/components/brand-button'

const trades = ['HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Remodeling', 'Other']

const revenueBands = [
  'Under $2.5M',
  '$2.5M–$5M',
  '$5M–$10M',
  '$10M–$20M',
  '$20M+',
]

const fieldClass =
  'h-12 w-full rounded-sm border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-foreground/10'

const labelClass = 'mb-2 block text-sm font-semibold text-foreground'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

type LeadPayload = {
  Name: string
  Email: string
  Phone: string
  Industry: string
  Revenue: string
  Message?: string
  source: string
  submittedAt: string
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSending(true)

    const form = e.currentTarget
    const data = new FormData(form)

    const payload: LeadPayload = {
      Name: String(data.get('Name') ?? '').trim(),
      Email: String(data.get('Email') ?? '').trim(),
      Phone: String(data.get('Phone') ?? '').trim(),
      Industry: String(data.get('Industry') ?? '').trim(),
      Revenue: String(data.get('Revenue') ?? '').trim(),
      source: 'oakwright-cfo-contact',
      submittedAt: new Date().toISOString(),
    }

    const message = String(data.get('Message') ?? '').trim()
    if (message) payload.Message = message

    try {
      const endpoint = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '/api/leads'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`)
      }

      setSubmitted(true)
    } catch {
      setError('We could not send your request. Please try again, or call the office directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="relative min-h-[28rem]">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col items-start gap-6 bg-mist p-2 md:p-4"
            role="status"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-signal text-[#172B2A]">
              <Check className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance">
                Strategy Call Request Received. Mark will be in touch shortly.
              </h2>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease }}
            className="flex flex-col gap-6"
          >
            <div>
              <label htmlFor="Name" className={labelClass}>
                Full Name
              </label>
              <input
                id="Name"
                name="Name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Contractor"
                className={fieldClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="Email" className={labelClass}>
                  Work Email
                </label>
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="Phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="Phone"
                  name="Phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(555) 123-4567"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="Industry" className={labelClass}>
                  Trade Industry
                </label>
                <select id="Industry" name="Industry" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select your trade
                  </option>
                  {trades.map((trade) => (
                    <option key={trade} value={trade}>
                      {trade}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="Revenue" className={labelClass}>
                  Annual Revenue
                </label>
                <select id="Revenue" name="Revenue" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a range
                  </option>
                  {revenueBands.map((band) => (
                    <option key={band} value={band}>
                      {band}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="Message" className={labelClass}>
                What&apos;s on your mind?{' '}
                <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="Message"
                name="Message"
                rows={4}
                placeholder="Tell us a bit about where the business is headed."
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-foreground/10"
              />
            </div>

            {error ? (
              <p className="text-sm leading-relaxed text-destructive" role="alert">
                {error}
              </p>
            ) : null}

            <BrandButton type="submit" disabled={sending} className="mt-2 h-12 w-full px-8 text-base">
              {sending ? 'Sending…' : 'Request My Strategy Call'}
            </BrandButton>

            <p className="text-sm leading-relaxed text-muted-foreground">
              We respect your time and your privacy. Your details are used only to arrange your
              consultation.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
