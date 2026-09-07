'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { nav, site } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a
          href="#top"
          className="font-heading text-lg font-extrabold tracking-tight"
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            {site.phoneDisplay}
          </a>
          <Button className="h-10 px-5" render={<a href="#lead" />}>
            Записаться
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2" aria-label="Мобильная навигация">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 py-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-base font-semibold"
              >
                <Phone className="size-4 text-primary" />
                {site.phoneDisplay}
              </a>
              <Button className="h-11" render={<a href="#lead" onClick={() => setOpen(false)} />}>
                Записаться
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
