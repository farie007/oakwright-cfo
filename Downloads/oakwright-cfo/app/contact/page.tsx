import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Contact — Oakwright CFO',
  description:
    'Book a strategy call with Oakwright CFO. Strategic CFO advisory for trade businesses scaling from $2.5M to $20M.',
}

const expectations = [
  'A direct conversation with a CPA-level advisor—no junior gatekeepers.',
  'A clear read on where your margin, cash, and tax strategy stand today.',
  'Honest guidance on whether we\u2019re the right fit—and what to do if we aren\u2019t.',
]

export default function ContactPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-balance md:text-5xl">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Tell us where the business is today and where you want it to go. We&apos;ll follow up
            within one business day to schedule your strategy call.
          </p>

          <div className="mt-10 border-t border-border pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              What to expect
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Our office
            </h2>
            <address className="mt-4 text-base not-italic leading-relaxed text-foreground">
              310 Fulton Ste 5
              <br />
              Grand Haven, MI 49417
            </address>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-sm border border-border bg-background p-8 md:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
