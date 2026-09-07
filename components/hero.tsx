import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  'Стёкла для большинства марок автомобилей',
  'Гарантия на установку',
  'Ремонт сколов от 30 минут',
  'Работаем ежедневно',
]

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            Автостёкла в Москве
          </span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Ремонт и замена
            <br />
            автостёкол в Москве
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Подберём стекло, назовём стоимость и установим в день обращения.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 px-6 text-base" render={<a href="#selector" />}>
              Узнать стоимость
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 px-6 text-base"
              render={<a href="#photo" />}
            >
              Ремонт скола
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="/images/hero-windshield.png"
              alt="Мастер устанавливает лобовое стекло современного автомобиля в чистом сервисе"
              width={960}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
