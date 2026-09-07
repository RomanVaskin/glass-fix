import { MapPin } from 'lucide-react'

const reviews = [
  {
    name: 'Дмитрий',
    text: 'Прилетел камень, появился скол на лобовом. Отремонтировали быстро, замену не потребовалось. Всё аккуратно.',
  },
  {
    name: 'Анна',
    text: 'Меняли лобовое стекло на кроссовере. Подобрали подходящее стекло, установили в тот же день. Остались довольны.',
  },
  {
    name: 'Сергей',
    text: 'Трещина расползалась по стеклу. Остановили, восстановили. Мастера объяснили каждый шаг, работой доволен.',
  },
  {
    name: 'Ольга',
    text: 'Разбили боковое стекло. Приехала без записи, помогли оперативно и по адекватной цене.',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Отзывы клиентов
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-base leading-relaxed text-foreground text-pretty">
                {`«${r.text}»`}
              </p>
              <footer className="mt-4 text-sm font-semibold text-muted-foreground">
                {r.name}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-dashed border-border bg-card/50 p-6 text-sm text-muted-foreground">
          <MapPin className="size-5 shrink-0 text-primary" />
          <span>Здесь появятся отзывы из Яндекс Карт.</span>
        </div>
      </div>
    </section>
  )
}
