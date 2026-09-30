'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Zap, ShoppingBag, Coins } from 'lucide-react'
import { useWallet } from '@/lib/wallet'
import clsx from 'clsx'

const LINKS = [
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/game', label: 'Game' },
  { href: '/vip', label: 'VIP' },
  { href: '/bag', label: 'Bag' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const pathname = usePathname()
  const hex = useWallet((s) => s.hex)
  const bag = useWallet((s) => s.bag)
  const vip = useWallet((s) => s.vip)

  useEffect(() => setReady(true), [])
  const hexLabel = ready ? hex.toLocaleString() : '—'
  const bagCount = ready ? bag.length : 0
  const vipLabel = ready ? vip : '—'

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-hex-darker/80 border-b border-hex-purple/20 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Zap className="w-6 h-6 text-hex-gold" />
          <span className="font-display font-bold text-xl text-gradient">HexBazaar</span>
        </Link>

        <div className="hidden md:flex gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                'hover:text-hex-purple transition-colors',
                pathname?.startsWith(l.href) ? 'text-hex-gold' : 'text-gray-300'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/bag"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hex-gold/30 bg-hex-gold/10 text-hex-gold text-sm font-semibold"
            title="HEX purse"
          >
            <Coins className="w-4 h-4" />
            {hexLabel} HEX
          </Link>
          <Link
            href="/bag"
            className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hex-purple/30 bg-hex-purple/10 text-hex-purple-light text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Bag
            {bagCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-hex-pink text-[10px] font-bold flex items-center justify-center text-white">
                {bagCount}
              </span>
            )}
          </Link>
          <span className="text-xs uppercase tracking-wider text-hex-cyan border border-hex-cyan/30 rounded px-2 py-1">
            {vipLabel}
          </span>
          <Link href="/login" className="btn-secondary !px-4 !py-2 text-sm">
            Login
          </Link>
          <Link href="/signup" className="btn-primary !px-4 !py-2 text-sm">
            Sign Up
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-hex-purple/20 px-4 py-4 space-y-3 bg-hex-darker/95">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-hex-gold font-semibold">{hexLabel} HEX</span>
            <span className="text-hex-cyan uppercase">{vipLabel}</span>
          </div>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {l.label}
              {l.href === '/bag' && bagCount > 0 ? ` (${bagCount})` : ''}
            </Link>
          ))}
          <Link href="/login" className="block btn-secondary text-center" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link href="/signup" className="block btn-primary text-center" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  )
}
