import Link from 'next/link'
import { cn } from '@/lib/utils'

type BrandButtonProps = {
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export function BrandButton({
  href,
  type = 'button',
  disabled,
  className,
  onClick,
  children,
}: BrandButtonProps) {
  const classes = cn('btn-primary', className)

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
