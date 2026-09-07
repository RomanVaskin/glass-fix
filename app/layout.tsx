import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Manrope } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-geist',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GLASS FIX — Ремонт и замена автостёкол в Москве',
  description:
    'Ремонт сколов и трещин, замена лобовых, боковых и задних автостёкол в Москве. Подбор стекла по автомобилю, гарантия на установку, работа в день обращения.',
  generator: 'v0.app',
  metadataBase: new URL('https://glass-fix.ru'),
  openGraph: {
    title: 'GLASS FIX — Ремонт и замена автостёкол в Москве',
    description:
      'Подберём стекло, назовём стоимость и установим в день обращения. Ремонт сколов от 30 минут.',
    url: 'https://glass-fix.ru',
    siteName: 'GLASS FIX',
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`light bg-background ${geist.variable} ${manrope.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
