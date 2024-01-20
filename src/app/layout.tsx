import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'

import './globals.css'
import { Container, Menu } from '@/components'

const poppins = Poppins({ weight: ['600', '500', '300'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Controle de eventos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`flex h-screen w-screen flex-col bg-page-500 ${poppins.className}`}
      >
        <main className="flex h-screen flex-1 flex-col lg:flex-row">
          <Menu />
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  )
}
