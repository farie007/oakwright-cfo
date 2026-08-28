import { BrandButton } from '@/components/brand-button'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            Ready to keep more of what you build?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70 text-pretty">
            Let&apos;s connect your growth strategy to your tax strategy. Book a call to see where
            the numbers can take you.
          </p>
        </Reveal>
        <BrandButton href="/contact" className="shrink-0 px-7 py-4 text-base">
          Book a Strategy Call
        </BrandButton>
      </div>
    </section>
  )
}
