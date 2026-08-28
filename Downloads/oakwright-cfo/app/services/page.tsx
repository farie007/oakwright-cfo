import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { Reveal, RevealItem, RevealStagger } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Services — Oakwright CFO',
  description:
    'Four pillars of strategic CFO advisory: cash flow forecasting, margin & pricing strategy, job costing discipline, and capital & debt decisions.',
}

const pillars = [
  {
    number: '01',
    title: 'Cash Flow Forecasting',
    summary:
      'Know what your bank balance will look like weeks and months out — before payroll, before the next material order, before the slow season.',
    points: [
      'Rolling 13-week cash forecasts',
      'Seasonality and backlog modeling',
      'Draw schedules and retainage timing',
    ],
  },
  {
    number: '02',
    title: 'Margin & Pricing Strategy',
    summary:
      'Understand what every job actually earns and price with confidence — so growth adds profit instead of quietly eroding it.',
    points: [
      'True gross margin by service line',
      'Break-even and target-margin pricing',
      'Overhead allocation that reflects reality',
    ],
  },
  {
    number: '03',
    title: 'Job Costing Discipline',
    summary:
      'Turn field data into financial clarity. See which crews, jobs, and customers make money — and which ones cost you.',
    points: [
      'Labor, materials, and equipment tracking',
      'Estimate vs. actual variance analysis',
      'Systems your team will actually use',
    ],
  },
  {
    number: '04',
    title: 'Capital & Debt Decisions',
    summary:
      'Make the big moves — equipment, acquisitions, real estate — with a clear view of the returns, the risks, and the tax consequences.',
    points: [
      'Financing structure and lender readiness',
      'Buy vs. lease vs. finance analysis',
      'Tax-aware capital deployment',
    ],
  },
]

const cadence = [
  {
    phase: 'Weekly',
    title: 'Cash & Tactical Sync',
    description: 'A focused review of the 13-week cash flow forecast, AR/AP bottlenecks, and immediate capital needs to ensure payroll and vendor runs are never a surprise.'
  },
  {
    phase: 'Monthly',
    title: 'Financial Board Meeting',
    description: 'A deep dive into the closed books. We review job profitability, overhead absorption, and budget vs. actuals to keep operations strictly aligned with the forecast.'
  },
  {
    phase: 'Quarterly',
    title: 'Tax & Strategic Course Correction',
    description: 'Proactive tax planning, entity structure review, and adjustments to the annual operating plan based on your current run-rate and changing market conditions.'
  },
  {
    phase: 'Annually',
    title: 'The Blueprint',
    description: 'Comprehensive planning for the year ahead. Capital allocation for new equipment, compensation strategy, and long-term exit or succession mapping.'
  }
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-[-2]">
          <Image
            src="/Oakwright-hero4.png" 
            alt="Oakwright strategic scale"
            fill
            className="object-cover object-right md:object-center opacity-90"
            priority
          />
        </div>

        {/* Gradient Overlay (Solid left, fading to transparent right) */}
        <div 
          className="absolute inset-0 z-[-1] bg-gradient-to-r from-background via-background/95 to-background/10 md:to-background/30" 
          aria-hidden="true" 
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-balance md:text-5xl">
              Four disciplines that decide whether growth pays off.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              We don&apos;t sell bookkeeping. We install the financial operating system that lets a
              trade business scale without losing the profit it worked so hard to earn.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {pillars.map((pillar) => (
            <RevealItem key={pillar.number}>
            <article className="flex h-full flex-col bg-background p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-semibold text-muted-foreground">{pillar.number}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h2 className="mt-6 flex min-h-8 items-start text-2xl font-bold leading-tight tracking-tight text-foreground text-balance">
                {pillar.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty md:min-h-24">
                {pillar.summary}
              </p>
              <ul className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                    <span
                      className="mt-[0.4375rem] h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* NEW: The Operating Rhythm */}
      <section className="bg-ink py-20 md:py-28 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
              The Advisory Cadence
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80 text-pretty">
              Real strategy isn't a PDF delivered once a year. It is a rigorous, recurring operating rhythm designed to keep your business ahead of the numbers.
            </p>
          </Reveal>

          <RevealStagger className="mt-16 grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {cadence.map((item) => (
              <RevealItem key={item.phase} className="py-8 md:px-8 md:py-4 md:first:pl-0 md:last:pr-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-signal">
                  {item.phase}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CtaBand />
    </>
  )
}