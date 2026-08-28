'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export function ParallaxBreak({
  imageSrc,
  imageAlt,
  kicker,
  title,
}: {
  imageSrc: string
  imageAlt: string
  kicker: string
  title: string
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-14%', '14%'])

  return (
    <section ref={ref} className="relative isolate h-[58vh] min-h-[420px] overflow-hidden md:h-[64vh]">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[18%] h-[136%] w-full">
        <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover" priority={false} />
      </motion.div>
      <div className="absolute inset-0 bg-[#172B2A]/72" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">{kicker}</p>
        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white text-balance md:text-5xl">
          {title}
        </h2>
      </div>
    </section>
  )
}
