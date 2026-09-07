import { Award, CircleCheck, Clock, Search, ShieldCheck, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const items: { icon: LucideIcon; text: string }[] = [
  { icon: ShieldCheck, text: 'Гарантия на работы' },
  { icon: Award, text: 'Опытные мастера' },
  { icon: Sparkles, text: 'Профессиональные материалы' },
  { icon: Search, text: 'Подбор по VIN' },
  { icon: Clock, text: 'Работа в день обращения' },
  { icon: CircleCheck, text: 'Стёкла разных производителей' },
]

export function Advantages() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Почему выбирают GLASS FIX
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="size-5" />
              </span>
              <span className="text-base font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
