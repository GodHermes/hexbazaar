export type Listing = {
  id: string
  title: string
  priceHex: number
  district: string
  seller: string
  rating: number
  condition: 'New' | 'Like New' | 'Good' | 'Fair'
  emoji: string
  blurb: string
  tags: string[]
}

export type GameClass = {
  id: string
  name: string
  emoji: string
  perk: string
  blurb: string
}

export const DISTRICTS = [
  'All',
  'Neon Alley',
  'Curb Row',
  'Eclipse Yard',
  'Wire Den',
  'Vault Lane',
] as const

export const LISTINGS: Listing[] = [
  {
    id: 'neon-blade',
    title: 'Neon Street Blade',
    priceHex: 420,
    district: 'Neon Alley',
    seller: 'Vex',
    rating: 4.9,
    condition: 'Like New',
    emoji: '⚔️',
    blurb: 'Chromed curb cutter. Looks mean under violet light. Comes with leather wrap.',
    tags: ['gear', 'weapon', 'trade'],
  },
  {
    id: 'crystal-shard',
    title: 'Eclipse Crystal Shard',
    priceHex: 880,
    district: 'Eclipse Yard',
    seller: 'Pedro',
    rating: 5.0,
    condition: 'New',
    emoji: '💎',
    blurb: 'Island light trapped in glass. Pedro cut. Good for quest tips and bag flex.',
    tags: ['loot', 'rare', 'art'],
  },
  {
    id: 'concrete-lullaby',
    title: 'Concrete Lullaby Vinyl',
    priceHex: 150,
    district: 'Wire Den',
    seller: 'Gatekeep',
    rating: 4.7,
    condition: 'Good',
    emoji: '💿',
    blurb: 'Night Market OS theme press. Soft hiss, hard bass. Keep the gate clean.',
    tags: ['music', 'collectible'],
  },
  {
    id: 'leather-coat',
    title: 'Midnight Trader Coat',
    priceHex: 310,
    district: 'Curb Row',
    seller: 'Aleyah',
    rating: 4.8,
    condition: 'Like New',
    emoji: '🧥',
    blurb: 'Heavy black coat with HEX-thread lining. Pockets deep enough for escrow.',
    tags: ['fashion', 'gear'],
  },
  {
    id: 'hex-pack-small',
    title: 'HEX Pack · 500',
    priceHex: 500,
    district: 'Vault Lane',
    seller: 'A&R Bank',
    rating: 5.0,
    condition: 'New',
    emoji: '🪙',
    blurb: 'Demo purse top-up. Instant. No card — theater only.',
    tags: ['currency', 'bank'],
  },
  {
    id: 'radio-handset',
    title: 'Wire Handset · Channel Hex',
    priceHex: 95,
    district: 'Wire Den',
    seller: 'Belinda',
    rating: 4.6,
    condition: 'Good',
    emoji: '📡',
    blurb: 'Talk the Floor. Syncs to lounge chatter in the demo lobby.',
    tags: ['comms', 'gear'],
  },
  {
    id: 'zodiac-map',
    title: 'Zodiac House Map (Folded)',
    priceHex: 640,
    district: 'Eclipse Yard',
    seller: 'Pedro',
    rating: 4.9,
    condition: 'Fair',
    emoji: '🗺️',
    blurb: 'Sun / moon / eclipse marks. Phase-two battle prep. Creased but readable.',
    tags: ['art', 'quest', 'rare'],
  },
  {
    id: 'stall-lamp',
    title: 'Purple Stall Lantern',
    priceHex: 75,
    district: 'Curb Row',
    seller: 'Floor Boss',
    rating: 4.4,
    condition: 'Good',
    emoji: '🏮',
    blurb: 'Lights your stall on the Floor. Flickers when a deal closes.',
    tags: ['stall', 'decor'],
  },
  {
    id: 'merchant-ledger',
    title: 'Merchant Class Ledger',
    priceHex: 220,
    district: 'Vault Lane',
    seller: 'Scholar',
    rating: 4.8,
    condition: 'Like New',
    emoji: '📒',
    blurb: '+trade tip theater. Bind it to Merchant class for demo bonuses.',
    tags: ['class', 'quest'],
  },
  {
    id: 'drone-badge',
    title: 'Predator Overflight Badge',
    priceHex: 180,
    district: 'Neon Alley',
    seller: 'Morrigan',
    rating: 5.0,
    condition: 'New',
    emoji: '🦅',
    blurb: 'Crow-on-the-wire pin. House flex. Not for sale outside the demo.',
    tags: ['collectible', 'house'],
  },
  {
    id: 'barter-crate',
    title: 'Mystery Barter Crate',
    priceHex: 260,
    district: 'Curb Row',
    seller: 'Traveler',
    rating: 4.2,
    condition: 'Fair',
    emoji: '📦',
    blurb: 'OfferUp energy. You claim, we shuffle. Demo loot only.',
    tags: ['barter', 'loot'],
  },
  {
    id: 'vip-pass-day',
    title: 'Gold VIP Day Pass',
    priceHex: 99,
    district: 'Vault Lane',
    seller: 'Hex Desk',
    rating: 4.7,
    condition: 'New',
    emoji: '🎫',
    blurb: '24h Gold doors in the demo. Priority chat theater + gold badge.',
    tags: ['vip', 'pass'],
  },
]

export const GAME_CLASSES: GameClass[] = [
  { id: 'merchant', name: 'Merchant', emoji: '💼', perk: '+20% trade rewards', blurb: 'Floor shark. Deals first, blades second.' },
  { id: 'thief', name: 'Thief', emoji: '🗡️', perk: 'Stealth discounts', blurb: 'Quiet feet. Loud bag.' },
  { id: 'cleric', name: 'Cleric', emoji: '✨', perk: 'Crew support', blurb: 'Keeps the party standing through escrow fights.' },
  { id: 'warrior', name: 'Warrior', emoji: '⚔️', perk: 'Combat loot', blurb: 'Clears After Hours doors for gear.' },
  { id: 'scholar', name: 'Scholar', emoji: '📚', perk: 'Quest intel', blurb: 'Reads the Wire. Finds the rare stalls.' },
  { id: 'dancer', name: 'Dancer', emoji: '💃', perk: 'Social bonuses', blurb: 'Lobby magnetism. Group trade buffs.' },
  { id: 'apothecary', name: 'Apothecary', emoji: '🧪', perk: 'Craft potions', blurb: 'Brews that turn curb scrap into value.' },
  { id: 'traveler', name: 'Traveler', emoji: '🧭', perk: 'Discovery loot', blurb: 'Pedro islands. New districts. Always moving.' },
]

export function getListing(id: string) {
  return LISTINGS.find((l) => l.id === id)
}
