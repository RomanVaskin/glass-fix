const steps = [
  { n: '01', text: 'Оставляете заявку' },
  { n: '02', text: 'Подбираем стекло или оцениваем повреждение' },
  { n: '03', text: 'Согласовываем стоимость' },
  { n: '04', text: 'Ремонтируем или устанавливаем стекло' },
]

export function HowWeWork() {
  return (
    <section id="how" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Как мы работаем
        </h2>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-heading text-3xl font-extrabold text-primary">
                {s.n}
              </span>
              <p className="mt-4 text-base font-medium leading-relaxed text-pretty">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
