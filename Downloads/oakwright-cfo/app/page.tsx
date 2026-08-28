import Link from 'next/link'
import Image from 'next/image'
import { BrandButton } from '@/components/brand-button'
import { CtaBand } from '@/components/cta-band'
import { ParallaxBreak } from '@/components/parallax-break'
import { Reveal, RevealItem, RevealStagger } from '@/components/reveal'
import { SplitEditorial } from '@/components/split-editorial'

const oldWay = [
  'Backward-looking compliance CPAs',
  'File the return, then disappear until next April',
  'Tax prep treated as a once-a-year event',
  'No visibility into cash until the bank balance drops',
  'Advice that reacts to what already happened',
]

const oakwrightWay = [
  'Forward-looking strategic CFOs',
  'A year-round partner in every major decision',
  'Tax strategy engineered into how you grow',
  'Cash flow forecast before you feel the squeeze',
  'Guidance that shapes what happens next',
]

const proofPoints = [
  { stat: '$2.5M–$20M', label: 'The revenue band we specialize in' },
  { stat: 'CPA-led', label: 'Strategy and tax under one roof' },
  { stat: 'Trades only', label: 'HVAC, plumbing, electrical, roofing, remodeling' },
]

const outcomes = [
  {
    number: '01',
    metric: 'Margin Protection',
    description: 'We eliminate the blind spots in job costing, ensuring overhead isn’t silently eroding your gross profit as you scale crews.'
  },
  {
    number: '02',
    metric: 'Cash Flow Visibility',
    description: 'Rolling 13-week forecasts give you the runway to make capital decisions confidently, long before the slow season hits.'
  },
  {
    number: '03',
    metric: 'Tax Optimization',
    description: 'Proactive entity structuring and capital deployment strategies that legally minimize your tax burden year over year.'
  }
]

const faqs = [
  {
    question: 'Who is the Strategy Call for?',
    answer: 'This call is exclusively for owners of trade businesses doing between $2.5M and $20M in annual revenue who are actively looking for strategic financial leadership, not just an annual tax filer.'
  },
  {
    question: 'Do you offer standard bookkeeping services?',
    answer: 'No. We are strategic CFOs and CPAs. If you need a bookkeeper, we can help you hire or train one, but our focus is on building the financial operating system that guides your growth and protects your margins.'
  },
  {
    question: 'What happens during the initial call?',
    answer: 'We will discuss your current financial infrastructure, your growth goals, and the specific pain points you are facing with cash flow, job costing, or tax liabilities. If we are a fit, we will outline exactly what a partnership looks like.'
  },
  {
    question: 'Do you replace my current CPA?',
    answer: 'Yes. Oakwright is CPA-led. We bring your tax strategy and CFO advisory under one roof so your tax plan is actively engineered throughout the year, rather than reacting to the past.'
  }
]

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-[-3]">
          <Image
            src="/Hero-home.png" 
            alt="Monumental commercial infrastructure"
            fill
            className="object-cover object-right md:object-center opacity-90"
            priority
          />
        </div>

        {/* Gradient Overlay (Solid left, fading to transparent right) */}
        <div 
          className="absolute inset-0 z-[-2] bg-gradient-to-r from-background via-background/95 to-background/10 md:to-background/30" 
          aria-hidden="true" 
        />

        {/* Grain Texture */}
        <div
          className="pointer-events-none absolute inset-0 z-[-1] bg-[url('/grain.svg')] bg-[length:220px_220px] opacity-[0.07] mix-blend-overlay"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Strategic CFO Advisory
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-balance md:text-6xl">
              Strategic CFO Advisory for Trade Businesses Scaling from $2.5M to $20M.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              We connect your growth strategy to your tax strategy so you keep more of what you
              build.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BrandButton href="/contact" className="px-7 py-4 text-base">
                Book a Strategy Call
              </BrandButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-sm border border-border bg-background/50 backdrop-blur-sm px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-mist"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-mist">
        <RevealStagger className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofPoints.map((p) => (
            <RevealItem key={p.label} className="py-10 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{p.stat}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <SplitEditorial
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Premium construction site with architectural structure work underway"
        kicker="The work"
        title="Built for owners who still have dirt on their boots and a P&L that needs a grown-up."
        body="From job-costed crews to the next equipment note, we treat the business as an institution: numbers first, narrative second, and no theatre in between."
        imageSide="left"
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            The Old Way vs. The Oakwright Way
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Most trade businesses outgrow their accountant long before they realize it. Here&apos;s
            the difference a forward-looking partner makes.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          <div className="bg-background p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              The Old Way
            </p>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
              Backward-looking compliance CPAs
            </h3>
            <ul className="mt-8 flex flex-col divide-y divide-border">
              {oldWay.map((item) => (
                <li
                  key={item}
                  className="py-4 text-base leading-relaxed text-muted-foreground first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              The Oakwright Way
            </p>
            <h3 className="mt-3 text-xl font-bold tracking-tight">Forward-looking strategic CFOs</h3>
            <ul className="mt-8 flex flex-col divide-y divide-white/10">
              {oakwrightWay.map((item) => (
                <li key={item} className="py-4 text-base leading-relaxed text-white/85 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Elevated Impact & Outcomes Section */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
              The Institutional Advantage
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Transitioning to a strategic financial model fundamentally changes how you operate, providing clarity where there was once only gut instinct.
            </p>
          </Reveal>

          {/* Elevated Architectural Grid */}
          <RevealStagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {outcomes.map((item) => (
              <RevealItem key={item.metric} className="group relative bg-background p-10 transition-colors duration-300 hover:bg-mist/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-muted-foreground transition-colors group-hover:text-foreground">
                    {item.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-foreground">
                  {item.metric}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <ParallaxBreak
        imageSrc="/parallax-bg.png"
        imageAlt="Dark cinematic architectural steel framework"
        kicker="Institutional clarity"
        title="Growth is only worth it if the structure underneath can hold it."
      />

      {/* FAQ Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl">
            Clarity on our scope, who we serve, and what to expect when partnering with Oakwright CFO.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <RevealItem key={faq.question} className="rounded-sm border border-border bg-background p-8">
              <h3 className="text-lg font-bold tracking-tight text-foreground text-balance">
                {faq.question}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                {faq.answer}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <CtaBand />
    </>
  )
}