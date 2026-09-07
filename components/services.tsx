import { Camera, Car, Gauge, ShieldCheck, Sparkles, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  text: string
}

const services: Service[] = [
  {
    icon: Car,
    title: 'Замена лобового стекла',
    text: 'Подбор стекла и профессиональная установка.',
  },
  {
    icon: Wrench,
    title: 'Ремонт сколов',
    text: 'Ремонт небольших повреждений без замены стекла.',
  },
  {
    icon: Sparkles,
    title: 'Ремонт трещин',
    text: 'Остановка распространения трещины и восстановление стекла.',
  },
  {
    icon: ShieldCheck,
    title: 'Замена бокового стекла',
    text: 'Замена разбитого или повреждённого бокового стекла.',
  },
  {
    icon: Camera,
    title: 'Замена заднего стекла',
    text: 'Подбор и установка заднего стекла.',
  },
  {
    icon: Gauge,
    title: 'Калибровка ADAS',
    text: 'Калибровка камер и систем помощи водителю после замены стекла.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Основные услуги
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-ring"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
