'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useWallet } from '@/lib/wallet'

export default function SignupPage() {
  const router = useRouter()
  const setDisplayName = useWallet((s) => s.setDisplayName)
  const topUp = useWallet((s) => s.topUp)
  const [name, setName] = useState('')
  const [note, setNote] = useState<string | null>(null)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const n = name.trim() || 'Trader'
    setDisplayName(n)
    topUp(250)
    setNote(`Account ready, ${n}. +250 HEX starter pack.`)
    setTimeout(() => router.push('/game'), 700)
  }

  return (
    <div className="pt-28 pb-16 px-4 min-h-screen flex items-start justify-center">
      <div className="card w-full max-w-md">
        <h1 className="text-3xl font-display font-bold mb-2">
          Create <span className="text-gradient">Account</span>
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Demo signup. Name sticks in localStorage. You get a starter HEX pack.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Trader name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-hex-darker border border-hex-purple/30 outline-none focus:border-hex-purple"
              placeholder="Pick a curb name"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Join HexBazaar
          </button>
        </form>
        {note && <p className="mt-4 text-sm text-hex-cyan">{note}</p>}
        <p className="mt-6 text-sm text-gray-500">
          Already trading?{' '}
          <Link href="/login" className="text-hex-gold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
