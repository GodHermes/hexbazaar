'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-hex-darker/80 border-b border-hex-purple/20 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-hex-gold" />
          <span className="font-display font-bold text-xl text-gradient">HexBazaar</span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/marketplace" className="text-gray-300 hover:text-hex-purple">Marketplace</Link>
          <Link href="/game" className="text-gray-300 hover:text-hex-purple">Game</Link>
          <Link href="/vip" className="text-gray-300 hover:text-hex-purple">VIP</Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="/login" className="btn-secondary">Login</Link>
          <Link href="/signup" className="btn-primary">Sign Up</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-hex-purple/20 px-4 py-4 space-y-3 bg-hex-darker/95">
          <Link href="/marketplace" className="block text-gray-300" onClick={() => setIsOpen(false)}>Marketplace</Link>
          <Link href="/game" className="block text-gray-300" onClick={() => setIsOpen(false)}>Game</Link>
          <Link href="/vip" className="block text-gray-300" onClick={() => setIsOpen(false)}>VIP</Link>
          <Link href="/login" className="block btn-secondary text-center" onClick={() => setIsOpen(false)}>Login</Link>
          <Link href="/signup" className="block btn-primary text-center" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  )
}
