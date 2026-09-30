'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useWallet } from '@/lib/wallet'

export default function LoginPage() {
  const router = useRouter()
  const setDisplayName = useWallet((s) => s.setDisplayName)
  const displayName = useWallet((s) => s.displayName)
  const [name, setName] = useState(displayName || 'Hermes')
  const [note, setNote] = useState<string | null>(null)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDisplayName(name)
    setNote(`Welcome back, ${name.trim() || 'Trader'}. Demo session on.`)
    setTimeout(() => router.push('/marketplace'), 600)
  }

  return (
    <div className="pt-28 pb-16 px-4 min-h-screen flex items-start justify-center">
      <div className="card w-full max-w-md">
        <h1 className="text-3xl font-display font-bold mb-2">
          <span className="text-gradient">Login</span>
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Demo auth stub. No password — just a trader name on this device.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Trader name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-hex-darker border border-hex-purple/30 outline-none focus:border-hex-purple"
              placeholder="Hermes"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Enter the Floor
          </button>
        </form>
        {note && <p className="mt-4 text-sm text-hex-cyan">{note}</p>}
        <p className="mt-6 text-sm text-gray-500">
          New here?{' '}
          <Link href="/signup" className="text-hex-gold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
