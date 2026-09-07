import { ChevronDown } from 'lucide-react'

const faq = [
  {
    q: 'Можно ли отремонтировать скол без замены стекла?',
    a: 'В большинстве случаев небольшой скол можно восстановить без замены. Мастер оценивает размер, глубину и расположение повреждения — по фото или на месте.',
  },
  {
    q: 'Сколько занимает замена лобового стекла?',
    a: 'Обычно замена занимает несколько часов. Точное время зависит от автомобиля и необходимости калибровки систем помощи водителю.',
  },
  {
    q: 'Можно ли ездить сразу после замены?',
    a: 'Мы подскажем, сколько времени нужно выждать до начала эксплуатации, чтобы клей полностью схватился и установка была надёжной.',
  },
  {
    q: 'Как подобрать правильное стекло?',
    a: 'Стекло подбирается по марке, модели, году выпуска и VIN автомобиля. Это позволяет учесть датчики, обогрев и другие особенности.',
  },
  {
    q: 'Есть ли гарантия на установку?',
    a: 'Да, мы предоставляем гарантию на выполненные работы по установке стекла.',
  },
  {
    q: 'Можно ли заменить стекло в день обращения?',
    a: 'Часто это возможно при наличии подходящего стекла. Оставьте заявку, и мы уточним сроки для вашего автомобиля.',
  },
  {
    q: 'Нужна ли калибровка камеры после замены стекла?',
    a: 'Если автомобиль оснащён камерами и системами ADAS, после замены лобового стекла требуется калибровка для корректной работы систем помощи водителю.',
  },
]

export function Faq() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Частые вопросы
        </h2>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faq.map((item) => (
            <details key={item.q} className="group px-5 md:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium marker:hidden">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
