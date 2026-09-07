'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const brands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Lexus',
  'Kia', 'Hyundai', 'Geely', 'Chery', 'Haval', 'Exeed',
  'Changan', 'Li Auto', 'Zeekr',
]

const years = Array.from({ length: 26 }, (_, i) => `${2025 - i}`)

const glassTypes = ['Лобовое', 'Боковое', 'Заднее']

const fieldClass =
  'h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/30'

export function CarSelector() {
  const [glass, setGlass] = useState('Лобовое')

  return (
    <section id="selector" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Подберём стекло для вашего автомобиля
        </h2>

        <div className="mt-8 rounded-2xl border border-border bg-card p-5 md:p-8">
          <form
            className="grid gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-3">
              <label className="grid gap-2 text-sm font-medium">
                Марка автомобиля
                <select className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Выберите марку
                  </option>
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Модель
                <input className={fieldClass} placeholder="Например, X5" />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Год выпуска
                <select className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Выберите год
                  </option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-2">
              <span className="text-sm font-medium">Тип стекла</span>
              <div className="flex flex-wrap gap-2">
                {glassTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setGlass(t)}
                    aria-pressed={glass === t}
                    className={`h-11 rounded-lg border px-5 text-sm font-medium transition-colors ${
                      glass === t
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-foreground hover:border-ring'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Button type="submit" className="h-12 px-6 text-base">
                Узнать стоимость
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
