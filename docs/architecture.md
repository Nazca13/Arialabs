# Aria Labs Website — Architecture

## Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (vanilla CSS, no Tailwind)
- **Font:** Plus Jakarta Sans (Google Fonts)
- **Hosting:** Vercel
- **CMS:** Supabase (planned)

## Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout + SEO metadata
│   └── page.tsx                  # Homepage
├── components/
│   ├── common/                   # Shared layout components
│   │   ├── navbar/               # Global navbar
│   │   └── footer/               # Global footer
│   └── ui/                       # Reusable UI primitives
│       ├── button/               # Button atom
│       └── badge/                # Badge/eyebrow atom
├── features/
│   └── home/
│       └── sections/             # Landing page sections (1 folder per section)
│           ├── hero/
│           ├── client-logos/
│           ├── about/
│           ├── services/
│           ├── how-we-work/
│           ├── selected-work/
│           ├── pricing/
│           ├── faq/
│           ├── testimonials/
│           ├── blog-preview/
│           └── cta/
├── hooks/
│   └── use-scroll-reveal.ts      # IntersectionObserver scroll animation
├── styles/
│   └── globals.css               # Reset, design tokens, utilities
└── types/
    └── index.ts                  # Shared TypeScript interfaces
```

## Design Tokens (CSS Variables)
Defined in `src/styles/globals.css`:
- `--color-blue: #2FA8FA` — primary brand blue
- `--color-blue-dark: #293681` — dark navy
- `--color-gray: #747474` — body text / subtitles
- `--color-gray-light: #F5F7FA` — backgrounds
- `--color-gray-mid: #E8E8E8` — borders / dividers

## Naming Conventions
- Files: `kebab-case` (e.g., `hero-section.tsx`)
- Components: `PascalCase` named exports (e.g., `export function HeroSection`)
- CSS classes: `camelCase` within CSS Modules
- Constants: `SCREAMING_SNAKE_CASE`
- Hooks: `use-` prefix (e.g., `use-scroll-reveal.ts`)

## SEO
- `public/robots.txt` — crawler directives
- `public/sitemap.xml` — page index for Google
- `src/app/layout.tsx` — global metadata (OG, Twitter, canonical)
- Each page can extend metadata via `generateMetadata()`

## Performance
- Next.js Image for all images (automatic WebP/AVIF, lazy load)
- Google Fonts loaded via `@import` in globals.css
- CSS Modules = zero runtime CSS-in-JS overhead
- Scroll reveal via native IntersectionObserver (no library)

## Future: Supabase CMS
Tables planned: `blog_posts`, `portfolio_projects`, `testimonials`, `team_members`
