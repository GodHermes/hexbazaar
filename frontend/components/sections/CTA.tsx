'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card border-hex-gold/30 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join HexBazaar today and start trading while playing.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup" className="btn-primary inline-flex items-center gap-2">
              Create Free Account <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/marketplace" className="btn-secondary">
              Explore Marketplace
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
