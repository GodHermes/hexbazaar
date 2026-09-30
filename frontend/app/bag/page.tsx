'use client'

import Link from 'next/link'
import { Coins, Package, RotateCcw, Plus } from 'lucide-react'
import { useWallet } from '@/lib/wallet'

export default function BagPage() {
  const hex = useWallet((s) => s.hex)
  const bag = useWallet((s) => s.bag)
  const vip = useWallet((s) => s.vip)
  const classId = useWallet((s) => s.classId)
  const sellFromBag = useWallet((s) => s.sellFromBag)
  const topUp = useWallet((s) => s.topUp)
  const resetDemo = useWallet((s) => s.resetDemo)

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <p className="text-hex-gold text-sm font-semibold mb-2">HEX PURSE · DEMO</p>
        <h1 className="text-4xl font-display font-bold mb-2">
          Your <span className="text-gradient">Bag</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Curb coin theater. Claim on the Floor, sell back at 80%, top up packs. Nothing leaves this browser.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="card">
            <div className="flex items-center gap-2 text-hex-gold mb-2">
              <Coins className="w-5 h-5" />
              <span className="text-sm font-semibold">HEX</span>
            </div>
            <div className="text-3xl font-display font-bold">{hex.toLocaleString()}</div>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 text-hex-purple-light mb-2">
              <Package className="w-5 h-5" />
              <span className="text-sm font-semibold">Items</span>
            </div>
            <div className="text-3xl font-display font-bold">{bag.length}</div>
          </div>
          <div className="card">
            <div className="text-sm text-gray-400 mb-2">Status</div>
            <div className="text-lg font-semibold capitalize text-hex-cyan">{vip} VIP</div>
            <div className="text-xs text-gray-500 mt-1">
              Class: {classId || 'none yet'}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button onClick={() => topUp(500)} className="btn-primary inline-flex items-center gap-2">
            <Plus className="w-4 h-4" /> Top up +500 HEX
          </button>
          <Link href="/marketplace" className="btn-secondary">
            Back to Floor
          </Link>
          <button onClick={resetDemo} className="btn-secondary inline-flex items-center gap-2 text-sm">
            <RotateCcw className="w-4 h-4" /> Reset demo wallet
          </button>
        </div>

        {bag.length === 0 ? (
          <div className="card text-center py-14 text-gray-400">
            Bag empty. Hit the{' '}
            <Link href="/marketplace" className="text-hex-gold underline">
              Marketplace
            </Link>{' '}
            and claim a stall.
          </div>
        ) : (
          <div className="space-y-3">
            {bag.map((item) => (
              <div
                key={`${item.listingId}-${item.claimedAt}`}
                className="card flex items-center justify-between gap-4 !p-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="text-3xl">{item.emoji}</div>
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{item.title}</div>
                    <div className="text-xs text-gray-500">
                      Paid {item.priceHex} HEX · sell-back {Math.floor(item.priceHex * 0.8)} HEX
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link
                    href={`/marketplace/${item.listingId}`}
                    className="text-sm text-hex-purple-light hover:underline"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => sellFromBag(item.listingId)}
                    className="text-sm px-3 py-1 rounded-lg border border-hex-gold/40 text-hex-gold hover:bg-hex-gold/10"
                  >
                    Sell 80%
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
