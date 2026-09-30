# 🎮🛍️ HexBazaar - Marketplace Meets Multiplayer RPG

**HexBazaar** is a next-generation peer-to-peer marketplace platform that combines the simplicity of buying, selling, trading, and bartering with an immersive Octopath Traveler-style multiplayer game experience. Chat with traders, complete quests, earn rewards, and unlock VIP tiers while trading real goods.

## 🌟 Core Features

### 💰 Marketplace
- **Buy, Sell, Trade, Barter** - List items and find deals
- **Real-Time Chat** - Message traders directly in-app
- **Secure Transactions** - Stripe integration for payments
- **Rating System** - Build reputation and trust
- **Search & Filters** - Find exactly what you need

### 🎮 Octopath Multiplayer Game
- **Tile-Based RPG World** - Explore and interact with traders
- **Player Characters** - 8 unique classes with different abilities
- **Quest System** - Complete marketplace challenges for rewards
- **Multiplayer Lobbies** - Trade with other players in real-time
- **Game Economy** - Earn in-game currency through marketplace activities

### 💎 VIP Membership System
- **Tier 1 (Bronze)** - Enhanced search, +5% rewards
- **Tier 2 (Silver)** - Priority chat, +10% rewards, marketplace badge
- **Tier 3 (Gold)** - Exclusive listings, +20% rewards, 24/7 support
- **Tier 4 (Platinum)** - Premium features, game items, custom profile
- **Tier 5 (Diamond)** - Full access, monthly stipend, exclusive events

### 💬 Real-Time Chat
- Direct messaging between traders
- Group chats for trading communities
- In-game chat integrated with marketplace
- Message history and search

---

## 📁 Project Structure

```
hexbazaar/
├── frontend/                    # Next.js Frontend App
│   ├── app/                     # App router (Next.js 14)
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Landing page
│   │   ├── marketplace/         # Marketplace pages
│   │   ├── game/                # Game pages
│   │   ├── chat/                # Chat pages
│   │   └── auth/                # Authentication pages
│   ├── components/              # Reusable components
│   ├── lib/                     # Utilities & API clients
│   ├── styles/                  # TailwindCSS styles
│   └── package.json
│
├── backend/                     # Express.js Backend
│   ├── src/
│   │   ├── server.ts            # Main server
│   │   ├── routes/              # API routes
│   │   │   ├── auth.ts
│   │   │   ├── marketplace.ts
│   │   │   ├── chat.ts
│   │   │   ├── vip.ts
│   │   │   └── game.ts
│   │   ├── models/              # Database models
│   │   ├── controllers/         # Business logic
│   │   ├── middleware/          # Auth, validation
│   │   ├── services/            # External services
│   │   └── config/              # Configuration
│   ├── prisma/
│   │   └── schema.prisma        # Database schema
│   └── package.json
│
├── game/                        # Phaser Game Module
│   ├── src/
│   │   ├── index.ts             # Game entry point
│   │   ├── scenes/              # Game scenes
│   │   │   ├── MainScene.ts
│   │   │   ├── MarketplaceHub.ts
│   │   │   └── MultiplayerLobby.ts
│   │   ├── entities/            # Game objects
│   │   ├── systems/             # Game systems
│   │   └── config.ts
│   └── package.json
│
├── docs/                        # Documentation
│   ├── ARCHITECTURE.md
│   ├── API.md
│   ├── DATABASE.md
│   └── GAME_DESIGN.md
│
├── docker-compose.yml           # Local dev environment
├── .github/
│   ├── workflows/
│   │   ├── ci.yml               # CI/CD pipeline
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
├── .gitignore
├── .env.example
└── package.json (root)
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+
- Git

### Local Development

1. **Clone & Install**
```bash
git clone https://github.com/GodHermes/hexbazaar.git
cd hexbazaar
npm install
```

2. **Environment Setup**
```bash
cp .env.example .env.local
# Update with your Stripe keys, Database URL, etc.
```

3. **Start Local Environment**
```bash
docker-compose up -d
npm run dev
```

4. **Access the App**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Game: http://localhost:3000/game
- Database Admin: http://localhost:5432

---

## 🏗️ Architecture Overview

### Frontend Flow
```
User → Next.js Frontend → Socket.io → Real-time Updates
                      ↓
                 REST API (Backend)
                      ↓
                 PostgreSQL Database
```

### Game Integration
```
Player → Phaser Game (Frontend)
    ↓
WebSocket → Game Server (Backend)
    ↓
Marketplace API ← → Database
```

### VIP System
```
User Profile → VIP Tier Check → Feature Access
                      ↓
              Rewards & Bonuses Applied
```

---

## 📚 Database Schema

### Core Tables
- **users** - User accounts & profiles
- **listings** - Marketplace items
- **transactions** - Buy/sell records
- **chat_messages** - Direct messages
- **chat_rooms** - Group chats
- **vip_memberships** - VIP tier data
- **game_characters** - Player game characters
- **game_quests** - Quest definitions & progress
- **game_inventory** - Player game items

---

## 🔐 Security Features
- JWT Authentication
- Password hashing (bcrypt)
- Rate limiting
- Input validation
- CORS configuration
- Environment variable protection
- Stripe PCI compliance

---

## 📊 VIP Revenue Model
- **Tier Subscriptions** - Monthly recurring revenue
- **One-Time Purchases** - Game items, cosmetics
- **Transaction Fees** - Small % on Platinum+ trades
- **Premium Features** - Ad-free, priority support

---

## 🎮 Game Design Highlights

### Classes (Octopath-inspired)
1. **Merchant** - +% trading rewards, business perks
2. **Thief** - Stealth trading, discount perks
3. **Cleric** - Healing items, support role
4. **Warrior** - Combat challenges, earn gear
5. **Scholar** - Knowledge quests, lore rewards
6. **Dancer** - Social benefits, group bonuses
7. **Apothecary** - Item crafting, potions
8. **Traveler** - Discovery rewards, exploration

---

## 🛣️ Roadmap

### Phase 1 (MVP - Weeks 1-4)
- ✅ User authentication
- ✅ Basic marketplace (CRUD)
- ✅ VIP tier system
- ✅ Real-time chat
- ✅ Basic game lobby

### Phase 2 (Weeks 5-8)
- Game world & character creation
- Quest system integration
- Enhanced marketplace features
- Transaction processing

### Phase 3 (Weeks 9-12)
- Multiplayer gameplay
- Advanced VIP features
- Mobile app (React Native)
- Analytics dashboard

---

## 🤝 Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

---

## 📜 License

MIT License - See LICENSE file

---

## 👨‍💻 Development Team

**Project Lead**: GodHermes  
**Repository**: https://github.com/GodHermes/hexbazaar

---

## 📞 Support & Community

- **Discord**: [Join Community](#)
- **Email**: support@hexbazaar.com
- **Issues**: GitHub Issues
- **Documentation**: [Full Docs](./docs/)

---

## 🎯 Vision

HexBazaar reimagines online marketplaces by adding a gaming layer that makes trading fun, engaging, and rewarding. Players earn achievements, climb leaderboards, unlock cosmetics, and form trading communities—all while buying and selling real items.

**The future of peer-to-peer commerce is gamified. Welcome to HexBazaar.** 🚀
