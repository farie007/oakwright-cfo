'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { BrandButton } from '@/components/brand-button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/who-we-serve', label: 'Who We Serve' },
  { href: '/about', label: 'About' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <Logo href="/" onNavigate={() => setOpen(false)} />

        <div className="hidden items-center gap-8 pl-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-foreground',
                  active ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <BrandButton href="/contact" className="px-5 py-2.5 text-sm">
            Book a Call
          </BrandButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-2 py-3 text-base font-medium',
                  pathname === link.href ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
            <BrandButton
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 text-base"
            >
              Book a Call
            </BrandButton>
          </div>
        </div>
      )}
    </header>
  )
}
