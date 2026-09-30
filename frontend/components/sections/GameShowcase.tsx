'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Zap, Users, Trophy } from 'lucide-react'

const gameClasses = [
  { name: 'Merchant', symbol: '💼', bonus: '+20% Rewards' },
  { name: 'Thief', symbol: '🗡️', bonus: 'Discounts' },
  { name: 'Cleric', symbol: '✨', bonus: 'Support' },
  { name: 'Warrior', symbol: '⚔️', bonus: 'Combat' },
  { name: 'Scholar', symbol: '📚', bonus: 'Quests' },
  { name: 'Dancer', symbol: '💃', bonus: 'Bonuses' },
  { name: 'Apothecary', symbol: '🧪', bonus: 'Crafting' },
  { name: 'Traveler', symbol: '🧭', bonus: 'Exploration' },
]

export default function GameShowcase() {
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
            Octopath <span className="text-gradient">Game Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {gameClasses.map((gameClass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-4xl mb-2">{gameClass.symbol}</div>
              <h3 className="font-bold mb-1">{gameClass.name}</h3>
              <p className="text-xs text-hex-gold">{gameClass.bonus}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Gamepad2, title: 'Immersive Gameplay', desc: 'Tile-based RPG with quests' },
            { icon: Zap, title: 'Integrated Rewards', desc: 'Earn through marketplace' },
            { icon: Users, title: 'Multiplayer Lobbies', desc: 'Join trading groups' },
            { icon: Trophy, title: 'Leaderboards', desc: 'Compete globally' },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <Icon className="w-8 h-8 text-hex-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
