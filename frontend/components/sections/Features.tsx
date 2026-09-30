'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, MessageSquare, Gamepad2, Crown, TrendingUp, Users } from 'lucide-react'

const features = [
  {
    icon: ShoppingCart,
    title: 'Advanced Marketplace',
    description: 'Buy, sell, trade, and barter with advanced filters'
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Chat',
    description: 'Direct messaging integrated with marketplace'
  },
  {
    icon: Gamepad2,
    title: 'Multiplayer Game',
    description: 'Explore an Octopath-inspired RPG world'
  },
  {
    icon: Crown,
    title: 'VIP Tiers',
    description: 'Unlock exclusive features and rewards'
  },
  {
    icon: TrendingUp,
    title: 'Earn Rewards',
    description: 'Complete quests and earn marketplace bonuses'
  },
  {
    icon: Users,
    title: 'Trading Community',
    description: 'Join millions of traders worldwide'
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-400">Everything you need to trade and play</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <Icon className="w-8 h-8 text-hex-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
