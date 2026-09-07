import Image from 'next/image'
import { Camera, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function PhotoRepair() {
  return (
    <section id="photo" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-2xl border border-border bg-muted lg:order-1">
          <Image
            src="/images/chip-repair.png"
            alt="Крупный план ремонта скола на лобовом стекле"
            width={960}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Скол или трещина?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Пришлите фотографию повреждения. Мастер оценит, можно ли восстановить
            стекло без замены.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 px-6 text-base" render={<a href="#lead" />}>
              <Camera className="size-4" />
              Загрузить фото
            </Button>
            <Button
              variant="outline"
              className="h-12 px-6 text-base"
              render={
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" />
              }
            >
              <MessageCircle className="size-4" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
