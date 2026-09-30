'use client'

import Link from 'next/link'
import { Mail, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-hex-dark border-t border-hex-purple/20 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-xl text-gradient mb-4">HexBazaar</h3>
            <p className="text-gray-400 text-sm">Where marketplace meets multiplayer RPG</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/marketplace" className="hover:text-hex-purple">Marketplace</Link></li>
              <li><Link href="/game" className="hover:text-hex-purple">Game</Link></li>
              <li><Link href="/vip" className="hover:text-hex-purple">VIP</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-hex-purple">About</Link></li>
              <li><Link href="/blog" className="hover:text-hex-purple">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-hex-purple">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-hex-purple">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-hex-purple">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hex-purple/20 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 HexBazaar. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-hex-purple">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hex-purple">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hex-purple">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
