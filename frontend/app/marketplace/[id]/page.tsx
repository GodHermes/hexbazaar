'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, MapPin, Star, ShoppingBag, MessageCircle } from 'lucide-react'
import { getListing } from '@/lib/demo-data'
import { useWallet } from '@/lib/wallet'

export default function ListingDetailPage() {
  const params = useParams()
  const id = String(params?.id || '')
  const listing = useMemo(() => getListing(id), [id])
  const claimListing = useWallet((s) => s.claimListing)
  const hex = useWallet((s) => s.hex)
  const bag = useWallet((s) => s.bag)
  const [msg, setMsg] = useState<string | null>(null)

  if (!listing) {
    return (
      <div className="pt-28 px-4 min-h-screen max-w-3xl mx-auto">
        <p className="text-gray-400 mb-4">Stall not found.</p>
        <Link href="/marketplace" className="btn-secondary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Floor
        </Link>
      </div>
    )
  }

  const inBag = bag.some((b) => b.listingId === listing.id)

  const onClaim = () => {
    const res = claimListing({
      listingId: listing.id,
      title: listing.title,
      priceHex: listing.priceHex,
      emoji: listing.emoji,
    })
    if (res.ok) setMsg('Claimed. In your bag — escrow theater closed.')
    else setMsg(res.reason || 'Could not claim')
  }

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-hex-purple mb-6">
          <ArrowLeft className="w-4 h-4" /> Floor
        </Link>

        <div className="card grid md:grid-cols-[1fr_1.2fr] gap-8">
          <div className="rounded-xl bg-gradient-to-br from-hex-purple/30 to-hex-darker border border-hex-purple/30 flex items-center justify-center min-h-[220px] text-8xl">
            {listing.emoji}
          </div>

          <div>
            <p className="text-hex-gold text-sm font-semibold mb-1">{listing.district}</p>
            <h1 className="text-3xl font-display font-bold mb-2">{listing.title}</h1>
            <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4 text-hex-purple" />
                {listing.district}
              </span>
              <span className="inline-flex items-center gap-1">
                <Star className="w-4 h-4 text-hex-gold fill-hex-gold" />
                {listing.rating} · {listing.seller}
              </span>
              <span>{listing.condition}</span>
            </div>

            <p className="text-gray-300 mb-6">{listing.blurb}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {listing.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border border-hex-purple/30 text-hex-purple-light">
                  #{t}
                </span>
              ))}
            </div>

            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-3xl font-display font-bold text-hex-gold">{listing.priceHex} HEX</div>
                <div className="text-xs text-gray-500">Your purse: {hex.toLocaleString()} HEX</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onClaim}
                disabled={inBag}
                className="btn-primary inline-flex items-center gap-2 disabled:opacity-50"
              >
                <ShoppingBag className="w-4 h-4" />
                {inBag ? 'Already in bag' : 'Claim to bag'}
              </button>
              <button
                onClick={() => setMsg(`Ping sent to ${listing.seller} on the Wire (demo).`)}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chat seller
              </button>
              <Link href="/bag" className="btn-secondary">
                Open bag
              </Link>
            </div>

            {msg && (
              <p className="mt-4 text-sm text-hex-cyan border border-hex-cyan/30 rounded-lg px-3 py-2">
                {msg}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
