'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Turner',
    role: 'Platinum Member',
    content: 'HexBazaar made trading fun again! The game element keeps me engaged.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Chen',
    role: 'VIP Gold',
    content: 'The real-time chat and multiplayer game features are incredible.',
    avatar: '👩‍💻',
  },
  {
    name: 'Mike Johnson',
    role: 'Community Leader',
    content: 'Best marketplace platform. The VIP rewards are generous and supportive.',
    avatar: '👨‍🎓',
  },
]

export default function Testimonials() {
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
            Loved by <span className="text-gradient">Traders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-hex-gold text-hex-gold" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-hex-purple">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
