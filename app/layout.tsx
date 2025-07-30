import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scrapy App',
  description: 'Transformamos materiales reciclables en oportunidades. Soluciones tecnológicas innovadoras para el reciclaje urbano e industrial.',
  generator: 'Scrapy',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
