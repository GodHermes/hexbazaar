'use client'

import { useState } from 'react'
import { Check, Star } from 'lucide-react'
import { useWallet, VipTier } from '@/lib/wallet'

const TIERS: {
  id: VipTier
  name: string
  price: string
  costHex: number
  features: string[]
  highlighted?: boolean
}[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 'Free',
    costHex: 0,
    features: ['Search & browse', 'Basic listings', 'Standard chat'],
  },
  {
    id: 'silver',
    name: 'Silver',
    price: '$4.99',
    costHex: 200,
    features: ['Priority chat', '+10% rewards', 'Verified badge', 'Game cosmetics'],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '$9.99',
    costHex: 400,
    features: ['Exclusive listings', '+20% rewards', '24/7 support theater', 'Premium items'],
    highlighted: true,
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '$19.99',
    costHex: 800,
    features: ['Priority support', '+30% rewards', 'Exclusive events', 'Custom profile'],
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: '$49.99',
    costHex: 1500,
    features: ['VIP treatment', '+50% rewards', 'Monthly stipend theater', 'All features'],
  },
]

export default function VipPage() {
  const vip = useWallet((s) => s.vip)
  const hex = useWallet((s) => s.hex)
  const setVip = useWallet((s) => s.setVip)
  const spendHex = useWallet((s) => s.spendHex)
  const topUp = useWallet((s) => s.topUp)
  const [msg, setMsg] = useState<string | null>(null)

  const activate = (tier: (typeof TIERS)[number]) => {
    if (tier.id === vip) {
      setMsg(`Already on ${tier.name}.`)
      return
    }
    if (tier.costHex > 0) {
      if (!spendHex(tier.costHex)) {
        setMsg(`Need ${tier.costHex} HEX. Top up your purse first.`)
        return
      }
    }
    setVip(tier.id)
    setMsg(`${tier.name} VIP active (demo). Badge shows in the nav.`)
  }

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-hex-gold text-sm font-semibold mb-2">MEMBERSHIP · DEMO</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
          VIP <span className="text-gradient">Tiers</span>
        </h1>
        <p className="text-gray-400 mb-2 max-w-2xl">
          Activate with HEX from your demo purse. Stripe comes later — this is curb theater.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Current: <span className="text-hex-cyan capitalize font-semibold">{vip}</span>
          <span className="mx-2">·</span>
          Purse <span className="text-hex-gold font-semibold">{hex.toLocaleString()} HEX</span>
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <button onClick={() => topUp(500)} className="btn-secondary text-sm">
            +500 HEX pack
          </button>
          <button onClick={() => topUp(1500)} className="btn-secondary text-sm">
            +1500 HEX pack
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`card flex flex-col ${tier.highlighted ? 'border-hex-gold/50' : ''} ${
                vip === tier.id ? 'ring-1 ring-hex-cyan/50' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-xl font-bold">{tier.name}</div>
                {tier.highlighted && <Star className="w-5 h-5 text-hex-gold fill-hex-gold" />}
              </div>
              <div className="text-2xl font-bold mb-1">{tier.price}</div>
              <div className="text-xs text-hex-gold mb-4">
                {tier.costHex === 0 ? 'No HEX' : `${tier.costHex} HEX to unlock`}
              </div>
              <ul className="space-y-2 flex-1 mb-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-hex-cyan shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => activate(tier)}
                className={tier.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}
              >
                {vip === tier.id ? 'Active' : 'Activate'}
              </button>
            </div>
          ))}
        </div>

        {msg && (
          <p className="mt-6 text-sm text-hex-cyan border border-hex-cyan/30 rounded-lg px-4 py-3 max-w-xl">
            {msg}
          </p>
        )}
      </div>
    </div>
  )
}
