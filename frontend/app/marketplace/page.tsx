'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, MapPin, Star } from 'lucide-react'
import { DISTRICTS, LISTINGS } from '@/lib/demo-data'
import { useWallet } from '@/lib/wallet'

export default function MarketplacePage() {
  const [q, setQ] = useState('')
  const [district, setDistrict] = useState<string>('All')
  const hex = useWallet((s) => s.hex)

  const filtered = useMemo(() => {
    return LISTINGS.filter((l) => {
      const inDistrict = district === 'All' || l.district === district
      const needle = q.trim().toLowerCase()
      const inQuery =
        !needle ||
        l.title.toLowerCase().includes(needle) ||
        l.seller.toLowerCase().includes(needle) ||
        l.tags.some((t) => t.includes(needle)) ||
        l.blurb.toLowerCase().includes(needle)
      return inDistrict && inQuery
    })
  }, [q, district])

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-hex-gold text-sm font-semibold mb-2">NIGHT MARKET FLOOR</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-gray-400 mt-2 max-w-xl">
              OfferUp energy on the curb. Prices in HEX. Claim to bag — demo escrow, no real cash.
            </p>
          </div>
          <div className="text-sm text-gray-400">
            Purse <span className="text-hex-gold font-semibold">{hex.toLocaleString()} HEX</span>
            <span className="mx-2">·</span>
            {filtered.length} stalls
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search stalls, sellers, tags…"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-hex-dark/70 border border-hex-purple/30 focus:border-hex-purple outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {DISTRICTS.map((d) => (
            <button
              key={d}
              onClick={() => setDistrict(d)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                district === d
                  ? 'border-hex-gold bg-hex-gold/15 text-hex-gold'
                  : 'border-hex-purple/25 text-gray-400 hover:border-hex-purple/50'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((l, i) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link href={`/marketplace/${l.id}`} className="card block h-full hover:glow-purple">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{l.emoji}</div>
                  <div className="text-right">
                    <div className="text-hex-gold font-display font-bold text-lg">
                      {l.priceHex} HEX
                    </div>
                    <div className="text-xs text-gray-500">{l.condition}</div>
                  </div>
                </div>
                <h2 className="font-bold text-lg mb-1">{l.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">{l.blurb}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-hex-purple" />
                    {l.district}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3 h-3 text-hex-gold fill-hex-gold" />
                    {l.rating} · {l.seller}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="card text-center text-gray-400 py-16">
            No stalls match. Clear search or switch district.
          </div>
        )}
      </div>
    </div>
  )
}
