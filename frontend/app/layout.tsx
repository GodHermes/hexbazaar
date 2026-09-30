import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'HexBazaar | Marketplace Meets RPG',
  description: 'Buy, sell, trade with friends while playing an immersive multiplayer RPG.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-hex-darker text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
