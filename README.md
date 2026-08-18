# Aria Labs

Creative Digital Studio — situs marketing dan portfolio resmi [arialabs.id](https://arialabs.id).

Aria Labs adalah studio kreatif digital yang menggabungkan strategi, desain, dan teknologi untuk membantu bisnis membangun identitas visual, pengalaman digital, dan website modern.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Runtime**: React 18, TypeScript
- **Styling**: CSS Modules + design tokens
- **Fonts**: Plus Jakarta Sans (heading), Outfit (body)
- **Analytics**: Vercel Analytics, Speed Insights, Microsoft Clarity
- **Deployment**: Vercel

---

## Layanan

Situs ini menampilkan 6 layanan inti Aria Labs:

1. Web Development
2. Brand Identity
3. UI/UX Design
4. Graphic Design
5. Social Media Management
6. Photo & Video

Setiap layanan memiliki halaman detail di `/layanan/[slug]` dengan hero, benefits, pricing, dan portfolio terkait.

---

## Fitur Utama

- **Bilingual (ID/EN)** — language context tersimpan di `localStorage`, konten dari `src/locales/{id,en}.json`
- **Home page modular** — 13 section yang bisa disusun ulang di `src/app/page.tsx`
- **Scroll reveal animation** — custom hook `use-scroll-reveal` berbasis Intersection Observer
- **Draggable marquee** — hook `use-drag-marquee` untuk client logos & testimonial cards
- **Image optimization** — Next.js Image dengan format AVIF & WebP
- **SEO ready** — metadata terstruktur, sitemap, robots.txt, hreflang siap i18n
- **Cross-browser & Windows compatible** — `@supports` gates + fallback timer untuk animasi

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run production build lokal
npm start

# Linting
npm run lint
```

---

## Struktur Proyek

```
src/
├── app/                    # Next.js App Router pages
│   ├── layanan/[slug]/     # Halaman detail layanan (SSG)
│   ├── portfolio/[slug]/   # Halaman detail proyek (SSG)
│   ├── tentang/            # Halaman about
│   ├── kontak/             # Halaman kontak
│   └── layout.tsx          # Root layout (metadata, fonts, analytics)
├── components/             # Reusable UI
│   ├── common/             # Navbar, Footer, layout
│   └── ui/                 # Button, Badge, primitif
├── contexts/               # React context (language)
├── features/               # Modul per area halaman
│   ├── home/sections/      # 13 section homepage
│   ├── layanan/            # Section detail layanan
│   ├── portfolio/          # Section portfolio
│   ├── about/              # Section tentang
│   └── kontak/             # Section kontak
├── hooks/                  # Custom hooks (scroll-reveal, drag-marquee)
├── locales/                # Terjemahan id.json & en.json
├── styles/                 # Global CSS + design tokens
└── types/                  # TypeScript interfaces

public/
├── assets/
│   ├── icons/
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── brands/
│   │   └── characters/     # Mascot Aria per service
│   ├── logo/
│   └── projects-image/     # Screenshot portfolio
├── robots.txt
└── sitemap.xml
```

---

## Design System

Design tokens tersedia sebagai CSS custom properties di `src/styles/globals.css`:

- **Colors**: `--color-blue`, `--color-blue-dark`, `--color-gray`, `--color-gray-light`, `--color-gray-border`, `--color-black`, `--color-white`
- **Fonts**: `--font-heading` (Jakarta), `--font-body` (Outfit)
- **Easing**: `--ease-smooth`
- **Container**: max-width 1280px (1360px pada layar 1600px+)

Gunakan CSS Modules per komponen (`*.module.css`) dengan class camelCase — hindari class global.

---

## Deployment

Deploy otomatis ke Vercel setiap push ke branch `main`.  
Preview deployment aktif di setiap PR / push branch lain.

Domain produksi: [arialabs.id](https://arialabs.id)

---

## License

© 2026 Aria Labs. All rights reserved.
