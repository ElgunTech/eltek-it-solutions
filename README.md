# ⚡ ElTek – IT Solutions Website

A premium, production-ready corporate website for **ElTek IT Solutions** built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack

| Technology      | Version  | Purpose                        |
|-----------------|----------|--------------------------------|
| Next.js         | 14.2     | React framework (App Router)   |
| React           | 18.3     | UI library                     |
| TypeScript      | 5.4      | Type safety                    |
| Tailwind CSS    | 3.4      | Utility-first styling          |
| Framer Motion   | 11.1     | Animations & transitions       |
| Lucide React    | 0.379    | Icon system                    |

---

## 📁 Project Structure

```
eltek/
├── app/
│   ├── layout.tsx          # Root layout, metadata, dark mode script
│   └── page.tsx            # Home page (assembles all sections)
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button (primary/secondary/ghost/outline)
│   │   └── SectionHeader.tsx  # Animated section headings
│   ├── Navbar.tsx          # Sticky nav with dark mode + mobile menu
│   ├── Hero.tsx            # Hero section with animated orb & stats
│   ├── Services.tsx        # 4 service cards with hover animations
│   ├── About.tsx           # Mission, vision, company stats
│   ├── WhyChooseUs.tsx     # 6 advantage cards + CTA strip
│   ├── Contact.tsx         # Contact form + info cards
│   └── Footer.tsx          # Full-featured site footer
├── lib/
│   └── utils.ts            # cn(), animation variants, easing presets
├── styles/
│   └── globals.css         # Design tokens, base styles, utility classes
├── public/                 # Static assets (favicon, og-image, etc.)
├── tailwind.config.ts      # Tailwind config with custom tokens
├── next.config.js          # Next.js config
├── tsconfig.json           # TypeScript config
└── package.json
```

---

## 🎨 Design System

### Colors
- **Primary:** `#3370ff` (ElTek Blue)
- **Accent:** `#00d4ff` (Cyan)
- **Background (dark):** `#0a0f1e`
- **Background (light):** `#ffffff`

### Typography
- **Display font:** Clash Display (headings)
- **Body font:** Cabinet Grotesk
- **Mono font:** JetBrains Mono (badges/labels)

### Key Utility Classes
| Class         | Effect                                  |
|---------------|-----------------------------------------|
| `.gradient-text` | Blue → Cyan → Purple gradient text  |
| `.glass-card`    | Frosted glass effect                 |
| `.grid-bg`       | Subtle blue dot grid background      |
| `.glow-blue`     | Blue outer glow shadow               |
| `.btn-primary`   | Primary CTA button                   |
| `.btn-secondary` | Outlined secondary button            |

---

## ✨ Features

- **Dark / Light Mode** — system-aware with manual toggle; persisted to localStorage, no FOUC
- **Smooth Animations** — Framer Motion fade-up, stagger, and spring transitions
- **Glassmorphism** — Cards with backdrop-blur and soft borders
- **Fully Responsive** — Mobile-first grid layouts, collapsible nav
- **SEO Ready** — Next.js metadata API with OG tags, structured titles
- **Accessible** — ARIA labels, roles, focus-visible outlines, semantic HTML
- **Performance** — Code splitting, lazy viewport animations, optimized fonts
- **Contact Form** — Client-side validation, loading state, success state

---

## 🛠️ Getting Started

### Prerequisites
- Node.js ≥ 18.17.0
- npm ≥ 9.x or pnpm / yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📐 Sections

| # | Section       | Description                                         |
|---|---------------|-----------------------------------------------------|
| 1 | **Hero**      | Full-viewport with animated tech orb and CTA        |
| 2 | **Services**  | 4 service cards (consulting, network, cyber, dev)   |
| 3 | **About**     | Mission, vision, and 4 animated stat cards          |
| 4 | **Why Us**    | 6 advantage cards + booking CTA strip               |
| 5 | **Contact**   | Validated form + contact info cards                 |
| 6 | **Footer**    | Navigation columns, social links, certifications    |

---

## 📄 License

© 2024 ElTek IT Solutions. All rights reserved.
