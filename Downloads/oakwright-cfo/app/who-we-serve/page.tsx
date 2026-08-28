import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { Reveal, RevealItem, RevealStagger } from '@/components/reveal'
import { SplitEditorial } from '@/components/split-editorial'

export const metadata: Metadata = {
  title: 'Who We Serve — Oakwright CFO',
  description:
    'We serve trade business owners in HVAC, plumbing, electrical, roofing, and remodeling scaling from $2.5M to $20M—the most technical part of the climb.',
}

const trades = [
  { name: 'HVAC', detail: 'Service, install, and new construction mix' },
  { name: 'Plumbing', detail: 'Residential, commercial, and service divisions' },
  { name: 'Electrical', detail: 'Project-based work and recurring service' },
  { name: 'Roofing', detail: 'Storm, retail, and commercial cycles' },
  { name: 'Remodeling', detail: 'Design-build and high-ticket renovation' },
]

const bandChallenges = [
  {
    title: 'You outgrow your systems faster than you outgrow your crews',
    body: 'The spreadsheets and gut instinct that got you to $2.5M start breaking. Every new truck, crew, and location adds complexity your reporting was never built to handle.',
  },
  {
    title: 'Overhead climbs before profit catches up',
    body: 'Managers, office staff, software, and equipment all arrive before the revenue that justifies them. Without a plan, margin quietly erodes even as the top line grows.',
  },
  {
    title: 'The tax and cash decisions get expensive',
    body: 'Equipment purchases, entity structure, owner comp, and financing choices now move real money. Getting them wrong at this size costs six figures, not a rounding error.',
  },
]

// NEW: The Psychological Filter
const clientDNA = [
  {
    trait: 'You view finance as an engine, not a scoreboard.',
    description: 'You aren\'t looking for someone to just tell you what you made last year. You want to engineer what you make next year.'
  },
  {
    trait: 'You are willing to break what isn\'t working.',
    description: 'Scaling requires new infrastructure. You are ready to abandon the spreadsheets and legacy habits that got you here to reach the next level.'
  },
  {
    trait: 'You are building an asset, not just a job.',
    description: 'Whether your timeline is 3 years or 30 years, you are building a business that can run, scale, and eventually sell on the strength of its underlying structure.'
  }
]

export default function WhoWeServePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-[-3]">
          <Image
            src="/Oakwright-hero5.png" 
            alt="Commercial trade scaling and infrastructure"
            fill
            className="object-cover object-right md:object-center opacity-80"
            priority
          />
        </div>

        {/* Gradient Overlay (Solid left, fading to transparent right) */}
        <div 
          className="absolute inset-0 z-[-2] bg-gradient-to-r from-background via-background/95 to-background/10 md:to-background/30" 
          aria-hidden="true" 
        />

        {/* Editorial Grain Texture Layer */}
        <div
          className="pointer-events-none absolute inset-0 z-[-1] bg-[url('/grain.svg')] bg-[length:220px_220px] opacity-[0.07] mix-blend-overlay"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Who We Serve
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-balance md:text-5xl">
              Built for trade business owners in the middle of the climb.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              We work exclusively with the trades because the way a contractor makes and keeps money
              is nothing like a typical small business.
            </p>
          </Reveal>
        </div>
      </section>

      <SplitEditorial
        imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Executive meeting around a conference table"
        kicker="The room"
        title="Owners who have outgrown the truck, but not the need to see every dollar."
        body="We sit with principals making capital, tax, and hiring calls that used to live in a notebook. The conversation is quiet, precise, and built around the P&L — not a pitch deck."
        imageSide="right"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <RevealStagger className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5">
          {trades.map((trade) => (
            <RevealItem
              key={trade.name}
              className="flex flex-col gap-2 py-8 sm:px-6 sm:py-10 sm:odd:border-b sm:odd:border-border lg:border-b-0 lg:border-l lg:border-border lg:first:border-l-0"
            >
              <h2 className="text-xl font-bold tracking-tight text-foreground">{trade.name}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{trade.detail}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
                Why $2.5M to $20M is the most technical part of the climb.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                Below $2.5M, a good bookkeeper and a hard worker can carry the business. Above $20M,
                you can afford a full finance team. In between is the hardest stretch: too big to run
                on instinct, too lean to hire a CFO outright. That gap is exactly where we operate.
              </p>
            </Reveal>

            <RevealStagger className="flex flex-col divide-y divide-border border-t border-border" stagger={0.12}>
              {bandChallenges.map((item, i) => (
                <RevealItem key={item.title} className="py-8 first:pt-8">
                  <div className="flex gap-5">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground text-balance">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* NEW: The Client DNA Section */}
      <section className="bg-ink py-20 md:py-28 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
              The DNA of an Oakwright Client
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80 text-pretty">
              We don't partner with everyone who hits the revenue threshold. Our operating system requires owners who are ready to transition from operators to executives.
            </p>
          </Reveal>

          <RevealStagger className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {clientDNA.map((item) => (
              <RevealItem key={item.trait} className="flex flex-col">
                <span className="block h-px w-full bg-signal/50" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {item.trait}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/70">
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