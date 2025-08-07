import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

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
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
