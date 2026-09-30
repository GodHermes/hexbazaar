'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GAME_CLASSES } from '@/lib/demo-data'
import { useWallet } from '@/lib/wallet'
import { Swords, Users, MessageSquare } from 'lucide-react'

const LOBBY_CHAT = [
  { who: 'Vex', text: 'Neon Alley clear. Looking for Merchant for a double claim.' },
  { who: 'Pedro', text: 'Eclipse Yard drop live — crystal shards on the Floor.' },
  { who: 'Belinda', text: 'Wire open. #HexBazaar if you want the real lounge.' },
  { who: 'Floor Boss', text: 'After Hours poster only tonight. Full fight later.' },
]

export default function GamePage() {
  const classId = useWallet((s) => s.classId)
  const setClass = useWallet((s) => s.setClass)
  const displayName = useWallet((s) => s.displayName)
  const [toast, setToast] = useState<string | null>(null)
  const selected = GAME_CLASSES.find((c) => c.id === classId)

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-hex-gold text-sm font-semibold mb-2">OCTOPATH DOOR · DEMO</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
          Game <span className="text-gradient">Lobby</span>
        </h1>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Pick a class. Sit the lobby. Crew chat theater feeds loot back to the market — full Phaser world comes later.
        </p>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <div>
            <h2 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
              <Swords className="w-5 h-5 text-hex-purple" /> Choose class
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {GAME_CLASSES.map((c, i) => {
                const active = classId === c.id
                return (
                  <motion.button
                    key={c.id}
                    type="button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => {
                      setClass(c.id)
                      setToast(`${c.name} locked for ${displayName}`)
                    }}
                    className={`card text-left !p-4 ${
                      active ? 'border-hex-gold/60 glow-purple' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{c.emoji}</span>
                      <div>
                        <div className="font-bold">{c.name}</div>
                        <div className="text-xs text-hex-cyan">{c.perk}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{c.blurb}</p>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div className="card">
              <h2 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-hex-gold" /> Your loadout
              </h2>
              {selected ? (
                <div>
                  <div className="text-4xl mb-2">{selected.emoji}</div>
                  <div className="text-xl font-bold">{selected.name}</div>
                  <div className="text-hex-cyan text-sm mb-2">{selected.perk}</div>
                  <p className="text-sm text-gray-400 mb-4">{selected.blurb}</p>
                  <button
                    className="btn-primary w-full"
                    onClick={() =>
                      setToast('Queued for After Hours lobby — poster mode. Fight deferred.')
                    }
                  >
                    Enter After Hours
                  </button>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">Pick a class to enter the lobby.</p>
              )}
              {toast && (
                <p className="mt-3 text-sm text-hex-gold border border-hex-gold/30 rounded-lg px-3 py-2">
                  {toast}
                </p>
              )}
            </div>

            <div className="card">
              <h2 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-hex-purple" /> Crew Wire
              </h2>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {LOBBY_CHAT.map((m, i) => (
                  <div key={i} className="text-sm">
                    <span className="text-hex-gold font-semibold">{m.who}</span>
                    <span className="text-gray-500"> · </span>
                    <span className="text-gray-300">{m.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/marketplace" className="btn-secondary w-full mt-4 inline-flex justify-center">
                Loot hits the Floor →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
