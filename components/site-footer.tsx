import { site } from '@/lib/site'

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
  { label: 'Политика конфиденциальности', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-heading text-lg font-extrabold tracking-tight">
              {site.brand}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ремонт и замена автостёкол в Москве
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{site.domain}</p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Ссылки в подвале">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.brand}. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
