'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-hex-purple/10 border border-hex-purple/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-hex-gold" />
              <span className="text-sm text-hex-gold font-semibold">Welcome to the Future</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              <span className="text-gradient">Buy, Sell, Trade</span>
              <br />
              <span className="text-white">& Play</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              HexBazaar combines peer-to-peer marketplace with an immersive multiplayer RPG. Trade items, chat with friends, and unlock VIP rewards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <Link href="/marketplace" className="btn-primary inline-flex items-center gap-2">
                Start Trading <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/signup" className="btn-secondary">
                Create Account
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-12 mt-12 pt-8 border-t border-hex-purple/20"
            >
              <div>
                <div className="text-3xl font-bold text-hex-gold">50K+</div>
                <div className="text-gray-400 text-sm">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hex-cyan">$2.5M+</div>
                <div className="text-gray-400 text-sm">Traded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hex-purple">8</div>
                <div className="text-gray-400 text-sm">Game Classes</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">🎮</div>
              <h3 className="text-2xl font-bold text-gradient">Game Preview</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
