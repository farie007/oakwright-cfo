import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SplitEditorialProps = {
  imageSrc: string
  imageAlt: string
  kicker: string
  title: string
  body: string
  imageSide?: 'left' | 'right'
}

export function SplitEditorial({
  imageSrc,
  imageAlt,
  kicker,
  title,
  body,
  imageSide = 'left',
}: SplitEditorialProps) {
  return (
    <section className="grid min-h-[min(72vh,640px)] grid-cols-1 md:grid-cols-2">
      <div
        className={cn(
          'relative min-h-[280px] overflow-hidden bg-mist md:min-h-0',
          imageSide === 'right' && 'md:order-2',
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
      <div
        className={cn(
          'flex items-center bg-ink px-8 py-16 text-white md:px-14 md:py-24',
          imageSide === 'right' && 'md:order-1',
        )}
      >
        <Reveal className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-signal">{kicker}</p>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75 text-pretty">{body}</p>
        </Reveal>
      </div>
    </section>
  )
}
