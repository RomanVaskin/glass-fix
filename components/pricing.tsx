import { Button } from '@/components/ui/button'

const prices = [
  { title: 'Ремонт скола', price: 'от 1 000 ₽', note: '' },
  { title: 'Ремонт трещины', price: 'от 1 500 ₽', note: '' },
  { title: 'Замена лобового стекла', price: 'от 3 000 ₽', note: 'за работу' },
  { title: 'Замена бокового стекла', price: 'от 2 500 ₽', note: 'за работу' },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Примерная стоимость
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {prices.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-sm font-medium text-muted-foreground">{p.title}</p>
              <p className="mt-3 font-heading text-2xl font-bold tracking-tight">
                {p.price}
              </p>
              {p.note && (
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-muted-foreground">
            Точная стоимость зависит от автомобиля и типа повреждения.
          </p>
          <Button className="h-12 px-6 text-base" render={<a href="#selector" />}>
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  )
}
