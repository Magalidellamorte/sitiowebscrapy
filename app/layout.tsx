import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import WhatsappButton from "@/components/WhatsappButton"
import { Providers } from '@/components/query-provider'

export const metadata: Metadata = {
  title: 'Scrapy App',
  description: 'Transformamos materiales reciclables en oportunidades. Soluciones tecnológicas innovadoras para el reciclaje urbano e industrial.',
  generator: 'Scrapy',
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
        <WhatsappButton />
        <Toaster />
      </body>
    </html>
  )
}
