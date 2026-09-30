'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Bronze',
    price: 'Free',
    features: ['Search & browse', 'Basic listings', 'Standard chat'],
  },
  {
    name: 'Silver',
    price: '$4.99',
    features: ['Priority chat', '+10% rewards', 'Verified badge', 'Game cosmetics'],
  },
  {
    name: 'Gold',
    price: '$9.99',
    features: ['Exclusive listings', '+20% rewards', '24/7 support', 'Premium items'],
    highlighted: true
  },
  {
    name: 'Platinum',
    price: '$19.99',
    features: ['Priority support', '+30% rewards', 'Exclusive events', 'Custom profile'],
  },
  {
    name: 'Diamond',
    price: '$49.99',
    features: ['VIP treatment', '+50% rewards', 'Monthly stipend', 'All features'],
  },
]

export default function VIPTiers() {
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
            VIP <span className="text-gradient">Membership</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card ${tier.highlighted ? 'border-hex-gold/50' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold">{tier.name}</div>
                {tier.highlighted && <Star className="w-5 h-5 text-hex-gold fill-hex-gold" />}
              </div>

              <div className="text-3xl font-bold mb-6">{tier.price}</div>

              <ul className="space-y-3 flex-1 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-hex-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={tier.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
