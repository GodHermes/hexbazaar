'use client'

import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import VIPTiers from '@/components/sections/VIPTiers'
import GameShowcase from '@/components/sections/GameShowcase'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <GameShowcase />
      <VIPTiers />
      <Testimonials />
      <CTA />
    </div>
  )
}
