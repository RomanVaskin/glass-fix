import Image from 'next/image'

const examples = [
  {
    src: '/images/chip-repair.png',
    title: 'Ремонт скола',
    text: 'Восстановление стекла без замены.',
  },
  {
    src: '/images/glass-detail.png',
    title: 'Ремонт трещины',
    text: 'Остановлено распространение трещины.',
  },
  {
    src: '/images/hero-windshield.png',
    title: 'Замена лобового стекла',
    text: 'Подбор и профессиональная установка.',
  },
]

export function BeforeAfter() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Примеры наших работ
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {examples.map((e) => (
            <figure key={e.title} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={e.src}
                  alt={e.title}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-heading text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
