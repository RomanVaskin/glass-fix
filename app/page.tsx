import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CarSelector } from '@/components/car-selector'
import { PhotoRepair } from '@/components/photo-repair'
import { Services } from '@/components/services'
import { Pricing } from '@/components/pricing'
import { HowWeWork } from '@/components/how-we-work'
import { Advantages } from '@/components/advantages'
import { Brands } from '@/components/brands'
import { BeforeAfter } from '@/components/before-after'
import { Reviews } from '@/components/reviews'
import { Faq } from '@/components/faq'
import { SeoBlock } from '@/components/seo-block'
import { Contacts } from '@/components/contacts'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <CarSelector />
        <PhotoRepair />
        <Services />
        <Pricing />
        <HowWeWork />
        <Advantages />
        <Brands />
        <BeforeAfter />
        <Reviews />
        <Faq />
        <SeoBlock />
        <Contacts />
      </main>
      <SiteFooter />
    </div>
  )
}
