import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Brand lockup: Brute-forcing the width/height to override the SVG bounding box.
 */
const LOGO_HEIGHT_PX = 40
const CLEAR_SPACE_PX = LOGO_HEIGHT_PX / 4

export function Logo({
  href,
  onNavigate,
  className,
}: {
  href?: string
  onNavigate?: () => void
  className?: string
}) {
  const mark = (
    <span
      className={cn('inline-flex items-center', className)}
      style={{ padding: CLEAR_SPACE_PX }}
    >
      <Image
        src="/Oakwright-logo.svg"
        alt="Oakwright CFO Logo"
        width={160}
        height={LOGO_HEIGHT_PX}
        className="object-contain"
        priority
      />
    </span>
  )

  if (!href) return mark

  return (
    <Link href={href} onClick={onNavigate} aria-label="Oakwright CFO — home" className="shrink-0">
      {mark}
    </Link>
  )
}