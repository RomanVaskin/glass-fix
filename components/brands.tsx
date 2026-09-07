const brands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Lexus',
  'Kia', 'Hyundai', 'Geely', 'Chery', 'Haval', 'Exeed',
  'Changan', 'Li Auto', 'Zeekr',
]

export function Brands() {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Работаем с большинством марок автомобилей
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b) => (
            <div
              key={b}
              className="flex items-center justify-center bg-card px-4 py-6 text-center text-sm font-semibold text-foreground"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
