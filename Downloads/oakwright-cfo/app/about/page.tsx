import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { Reveal, RevealItem, RevealStagger } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About Mark Tisdel, CPA — Oakwright CFO',
  description:
    'Mark Tisdel, CPA. Most fractional CFOs aren\u2019t CPAs, and most CPAs only look backward at taxes. Mark is both a strategist and a tax expert.',
}

const differentiators = [
  {
    title: 'A CPA, not just a CFO',
    body: 'Most fractional CFOs aren\u2019t CPAs. They can model a forecast but can\u2019t engineer the tax strategy that determines what you actually keep. Mark does both.',
  },
  {
    title: 'Forward-looking, not backward',
    body: 'Most CPAs only look backward—reconciling what already happened and filing the return. Mark uses the same expertise to shape the decisions in front of you.',
  },
  {
    title: 'Fluent in the trades',
    body: 'Job costing, retainage, draws, seasonality, equipment-heavy balance sheets—Mark speaks the language of contractors because that\u2019s who he serves.',
  },
]

// The new "Elevator" section content
const methodology = [
  {
    step: '01',
    title: 'Objective Alignment',
    body: 'We don\u2019t just track revenue. We define the exact target margins, cash reserves, and tax objectives required to scale safely without compromising the foundation.',
  },
  {
    step: '02',
    title: 'Data-Driven Decisions',
    body: 'Capital allocation, equipment purchases, and hiring choices are stripped of gut-instinct and grounded entirely in rigorous, forward-looking financial modeling.',
  },
  {
    step: '03',
    title: 'Tactical Execution',
    body: 'We install a resilient financial operating system—from precise job costing to automated forecasting—bringing absolute clarity to your daily operations.',
  },
  {
    step: '04',
    title: 'Relentless Measurement',
    body: 'Strategy means nothing without validation. We relentlessly measure actual performance against the forecast, catching variances before they erode your profit.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        <div className="hero-atmosphere opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-balance md:text-5xl">
              Mark Tisdel, CPA
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              A CPA who thinks like a CFO and a CFO who understands the tax code. That
              combination is rare, and for a growing trade business, it&apos;s the difference between
              working harder and keeping more.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-mist">
            <Image
              src="/mark-tisdel.jpeg"
              alt="Portrait of Mark Tisdel, CPA and founder of Oakwright CFO"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            The gap Mark was built to fill.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Trade owners are usually forced to choose between a strategist and a tax expert. Mark is
            both &mdash; so nothing falls through the cracks between the two.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {differentiators.map((item) => (
            <RevealItem key={item.title} className="bg-background p-8 md:p-10">
              <h3 className="text-lg font-bold tracking-tight text-foreground text-balance">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* NEW ELEVATOR SECTION: The Methodology */}
      <section className="border-t border-border bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
              The Oakwright Methodology
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Scaling a trade business requires more than just looking at the bank balance. It requires a disciplined, cyclical approach to financial execution.
            </p>
          </Reveal>

          <RevealStagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {methodology.map((item) => (
              <RevealItem key={item.step} className="flex flex-col">
                <span className="text-sm font-bold text-muted-foreground">{item.step}</span>
                <span className="mt-2 block h-px w-full bg-border" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* UPDATED PHILOSOPHY SECTION: Radial Gradient + Image */}
      <section className="relative isolate overflow-hidden border-t border-border bg-background py-20 md:py-32">
        
        {/* Background Texture */}
        <div className="absolute inset-0 z-[-3]">
          <Image
            src="/philosophy-bg.png" 
            alt="Strategic architectural blueprint texture"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Radial Spotlight Gradient */}
        <div 
          className="absolute inset-0 z-[-2] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background via-background/90 to-background/10 md:via-background/70" 
          aria-hidden="true" 
        />

        <Reveal className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            The philosophy
          </p>
          <blockquote className="mt-8 text-2xl font-bold leading-snug tracking-tight text-foreground text-balance md:text-3xl">
            &ldquo;Growth is only worth it if you keep what you build. My job is to make sure the
            numbers work for you &mdash; this year on the return, and years from now when you sell.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Mark Tisdel, CPA
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}