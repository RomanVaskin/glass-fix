import { Clock, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function Contacts() {
  return (
    <section id="contacts" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div id="lead" className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Контакты
            </h2>

            <dl className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <dt className="text-sm text-muted-foreground">Адрес</dt>
                  <dd className="text-base font-medium">{site.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <dt className="text-sm text-muted-foreground">Телефон</dt>
                  <dd className="text-base font-medium">
                    <a href={site.phoneHref} className="hover:text-primary">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Clock className="size-5" />
                </span>
                <div>
                  <dt className="text-sm text-muted-foreground">Время работы</dt>
                  <dd className="text-base font-medium">{site.hours}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="h-12 px-6 text-base" render={<a href={site.phoneHref} />}>
                Позвонить
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 text-base"
                render={
                  <a
                    href="https://yandex.ru/maps/?text=Москва"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Построить маршрут
              </Button>
              <Button
                variant="secondary"
                className="h-12 px-6 text-base"
                render={<a href="#selector" />}
              >
                Записаться
              </Button>
            </div>
          </div>

          <div className="flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/50 p-8 text-center">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <MapPin className="size-8 text-primary" />
              <p className="text-sm">Здесь будет карта Яндекс с расположением сервиса.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
