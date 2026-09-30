'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type BagItem = {
  listingId: string
  title: string
  priceHex: number
  emoji: string
  claimedAt: string
}

export type VipTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'

type WalletState = {
  hex: number
  bag: BagItem[]
  vip: VipTier
  classId: string | null
  displayName: string
  claimListing: (item: Omit<BagItem, 'claimedAt'>) => { ok: boolean; reason?: string }
  sellFromBag: (listingId: string) => void
  topUp: (amount: number) => void
  spendHex: (amount: number) => boolean
  setVip: (tier: VipTier) => void
  setClass: (classId: string) => void
  setDisplayName: (name: string) => void
  resetDemo: () => void
}

const DEFAULTS = {
  hex: 1250,
  bag: [] as BagItem[],
  vip: 'bronze' as VipTier,
  classId: null as string | null,
  displayName: 'Hermes',
}

export const useWallet = create<WalletState>()(
  persist(
    (set, get) => ({
      ...DEFAULTS,
      claimListing: (item) => {
        const { hex, bag } = get()
        if (bag.some((b) => b.listingId === item.listingId)) {
          return { ok: false, reason: 'Already in your bag' }
        }
        if (hex < item.priceHex) {
          return { ok: false, reason: 'Not enough HEX' }
        }
        set({
          hex: hex - item.priceHex,
          bag: [
            ...bag,
            { ...item, claimedAt: new Date().toISOString() },
          ],
        })
        return { ok: true }
      },
      sellFromBag: (listingId) => {
        const { bag, hex } = get()
        const hit = bag.find((b) => b.listingId === listingId)
        if (!hit) return
        // demo: sell back at 80%
        const refund = Math.floor(hit.priceHex * 0.8)
        set({
          hex: hex + refund,
          bag: bag.filter((b) => b.listingId !== listingId),
        })
      },
      topUp: (amount) => set({ hex: get().hex + amount }),
      spendHex: (amount) => {
        const { hex } = get()
        if (hex < amount) return false
        set({ hex: hex - amount })
        return true
      },
      setVip: (tier) => set({ vip: tier }),
      setClass: (classId) => set({ classId }),
      setDisplayName: (name) => set({ displayName: name.trim() || 'Trader' }),
      resetDemo: () => set({ ...DEFAULTS, bag: [] }),
    }),
    { name: 'hexbazaar_copilot_v1' }
  )
)
