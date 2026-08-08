# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Aria Labs** is a Next.js 14 + React 18 portfolio/marketing website for a creative digital agency. The site features bilingual content (Indonesian/English), performance-optimized imagery, scroll-reveal animations, and modular section-based architecture.

### Key Characteristics
- **Multilingual**: Indonesian site with multilingual support patterns in place
- **Performance-focused**: Image optimization via Next.js Image, preloading, caching strategies, Vercel Analytics/Speed Insights
- **Component-driven**: Features are organized by page area (home sections, service detail pages, etc.)
- **CSS modules**: Scoped styling with CSS Modules (no Tailwind)
- **Scroll animations**: Intersection Observer-based scroll reveal + draggable marquee animations
- **Cross-browser compatible**: @supports gates for modern CSS features; fallback timers for animation/observer edge cases

### Tech Stack
- **Framework**: Next.js 14.2.35
- **Runtime**: React 18.3.0, TypeScript 6.0.3
- **Styling**: CSS Modules + vanilla CSS design tokens
- **Fonts**: Plus Jakarta Sans (headlines), Outfit (body)
- **Analytics**: Vercel Analytics, Speed Insights, Microsoft Clarity
- **Deployment**: Vercel (production at arialabs.id)

---

## Development Commands

```bash
# Development server (hot reload on http://localhost:3000)
npm run dev

# Production build
npm build

# Run production server locally
npm start

# Linting (ESLint via next/core-web-vitals config)
npm run lint
```

### No Tests Configured
The project currently has no test suite. If tests are added in the future, place unit tests in a `tests/` or `__tests__/` directory adjacent to source files.

---

## Codebase Structure

### `/src/app` — Next.js App Router Pages
Routes follow the Next.js file-based routing pattern:
- **`page.tsx`**: Home page (combines 13 feature sections)
- **`layout.tsx`**: Root layout (metadata, fonts, scripts, analytics)
- **`[slug]` routes**: Dynamic pages for `/layanan/[slug]` (services) and `/portfolio/[slug]` (projects)
- **Pages**: tentang (about), kontak (contact), blog, portfolio, layanan (services), privacy, terms, not-found

### `/src/features` — Feature Modules by Page
Each feature directory contains all components, styles, and data for a logical page section:
- **`/features/home/sections/`**: 13 reusable sections (hero, services, pricing, testimonials, faq, etc.)
  - Each section is its own subdirectory with TSX + CSS Module
  - Sections compose into the home page via `/src/app/page.tsx`
- **`/features/[layanan|portfolio|blog|about|kontak]/`**: Full-page features for service/project detail, contact form, etc.

### `/src/components` — Reusable UI Components
- **`/common/`**: Layout components (Navbar, Footer, layout wrappers)
- **`/ui/`**: Atomic UI primitives (Button, etc.)

### `/src/hooks` — Custom React Hooks
- **`use-scroll-reveal.ts`**: Intersection Observer + fallback timer for scroll animations
  - Adds `is-visible` + `visible` classes when element enters viewport
  - Hard 1.5s timeout fallback for old browsers/slow GPU
  - Threshold: 0 (fires at 1px visibility); 50px bottom margin for early trigger
- **`use-drag-marquee.ts`**: Makes CSS keyframe marquees draggable (mouse + touch)
  - Pauses animation on pointer down, resumes from frozen position on release
  - Wraps with correct animation offset via negative delay
  - Used for client logo carousels, testimonials

### `/src/styles` — Global CSS & Design Tokens
- **`globals.css`**: Base reset, typography rules, design token variables (colors, fonts, container)
  - Container max-width: 1280px (1360px at 1600px+)
  - Responsive padding: 40px (768px+), adjusts on mobile
  - Design tokens: `--color-blue`, `--color-blue-dark`, `--color-gray`, `--color-gray-light`, `--color-gray-border`, `--color-black`, `--color-white`
  - Easing: `--ease-smooth` (cubic-bezier)
  - Font families: `--font-heading` (Jakarta), `--font-body` (Outfit)

### `/src/types` — TypeScript Interfaces
- **`index.ts`**: Domain types (NavItem, ServiceItem, Project, BlogPost, Testimonial, PricingTier, FaqItem, etc.)
- **`css.d.ts`**: Module declaration for CSS Modules

### `/public` — Static Assets
- SVG logos, images, backgrounds, icons
- Images optimized via Next.js Image component with AVIF + WebP support

---

## Key Architectural Patterns

### 1. Scroll Reveal Animation System
All below-the-fold sections use `useScrollReveal()` hook to trigger CSS animations via `is-visible` class:
```tsx
const ref = useScrollReveal<HTMLDivElement>()
return <section ref={ref} className={styles.section}> ... </section>
```
**CSS side**: `.section { opacity: 0 } .section.is-visible { opacity: 1; animation: slideUp 0.8s ease; }`

### 2. Marquee with Drag Support
Client logos, testimonials, and testimonial cards use `useDragMarquee()`:
```tsx
const { trackRef, handlers } = useDragMarquee('[data-rail]')
return <div ref={trackRef} {...handlers}> <div data-rail> ... </div> </div>
```
**CSS side**: `@keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`

### 3. Image Optimization
Next.js `Image` component + next.config.js settings:
- Formats: AVIF, WebP
- Device sizes: 390, 640, 768, 1024, 1280, 1536, 1920px
- Hero background preloaded via `<link rel="preload">`
- 1-year immutable cache for optimized assets (`Cache-Control: public, max-age=31536000, immutable`)

### 4. Metadata & SEO
- Root layout centralizes all metadata: OG tags, Twitter cards, structured data (schema.org)
- Page-specific titles via metadata `template` (e.g., `"%s | Aria Labs"`)
- Canonical URLs, robots directives, hreflang ready for i18n

### 5. Analytics & Monitoring
- Vercel Analytics: tracks Core Web Vitals
- Speed Insights: performance monitoring
- Microsoft Clarity: session recording
- All injected in root layout, no opt-out per page

### 6. Bilingual Structure (Indonesian-first)
- Routes: `/layanan`, `/tentang`, `/kontak` (Indonesian slugs)
- Content defaulting to Indonesian; English patterns in types but not yet routed
- Future i18n: convert static content to data + add `/en` prefix or subdomain routing

---

## Styling Guidelines

### CSS Modules
- One `.module.css` file per component/section
- Class names: camelCase (`heroHeadline`, `serviceCard`, `ctaButton`)
- Scoped to component, no global name collisions

### Design System
- **Colors**: Use CSS custom properties from `globals.css` (e.g., `var(--color-blue)`)
- **Typography**: Headlines use `--font-heading` (Jakarta); body uses `--font-body` (Outfit)
- **Spacing**: Use pixel values; rem-based scaling not currently in use
- **Breakpoints**: Mobile-first approach, test at 390px (smallest device size)
  - Common breakpoint: 768px (tablet), 1024px (desktop)
- **Animations**: Use `--ease-smooth` easing for consistency
- **@supports gates**: Wrap modern CSS (backdrop-filter, scrollbar-gutter, etc.) in `@supports()` for fallback safety

### Windows Compatibility Notes
Recent commits highlight Windows/32-inch 4K display fixes:
- Avoid `backdrop-filter` (causes black box bug on some Windows GPU drivers); prefer solid backgrounds or Next.js Image overlays
- Use `@supports (backdrop-filter: ...)` to feature-gate
- GPU compositing hints: `will-change: transform`, `transform: translateZ(0)` for marquees and scroll-triggered elements
- Test smooth scroll and Direct3D rendering at high DPI (4K 32-inch)

---

## Common Development Tasks

### Add a New Home Section
1. Create `/src/features/home/sections/[name]/`
2. Add component file: `[name]-section.tsx` (export named function)
3. Add CSS Module: `[name]-section.module.css`
4. Import + add to section list in `/src/app/page.tsx`
5. Use `useScrollReveal()` for fade-in animation if below the fold

### Create a Dynamic Service/Project Page
1. Add page file: `/src/app/layanan/[slug]/page.tsx` or `/src/app/portfolio/[slug]/page.tsx`
2. Implement `generateStaticParams()` to pre-render slugs at build time (SSG)
3. Create feature folder with components + styles
4. Fetch/import service/project data (currently static in types or component data)

### Update Metadata for SEO
- Edit `/src/app/layout.tsx` for global metadata (title template, description, OG image, robots)
- Override with page-level `export const metadata: Metadata = { ... }` in route `page.tsx` files
- Keep canonical URLs and OpenGraph image size (1200×630) consistent

### Add Analytics Event
- Vercel Analytics tracks Core Web Vitals automatically
- No custom event tracking currently configured
- To add: import `{ trackEvent } from '@vercel/analytics'` and call in event handlers (not yet in use)

### Debug Scroll Reveal Issues
- Check: element has `ref={useScrollReveal()}` and CSS class `.is-visible`
- Check: CSS has matching animation for `.is-visible` state
- Check: browser DevTools → CSS coverage to verify animation loads
- Fallback timer (1.5s) will force reveal even if IntersectionObserver fails
- Test on old browsers (IE11, Chrome 50) by checking console for `'IntersectionObserver' in window`

### Performance Optimization
- Use Next.js `Image` component (never `<img>` for product images)
- Lazy-load below-fold images via `loading="lazy"`
- Set `priority` on hero/above-fold images
- Check Lighthouse scores locally: `npm run build && npm start`, then run Lighthouse in DevTools
- Monitor Vercel Speed Insights dashboard for production Core Web Vitals

---

## Configuration Notes

### Environment Variables
- Currently no `.env` files in use
- Vercel deployment uses default Next.js environment (NODE_ENV, VERCEL_URL, etc.)
- To add secrets: use Vercel dashboard → Settings → Environment Variables

### Next.js Build Output
- **Static export**: Not enabled; site runs on Vercel Functions (dynamic rendering)
- **ISR (Incremental Static Regeneration)**: Not configured; pages render on-demand
- **Preload + priority images**: Hero background preloaded in `<head>`; other images lazy

### TypeScript Configuration
- **Target**: ES2017 (Node 14 compatibility)
- **Module**: ESNext with bundler resolution (Next.js Turbopack)
- **Strict mode**: Enabled
- **Path aliases**: `@/*` → `./src/*`

### ESLint
- Extends `next/core-web-vitals` (recommended Next.js rules + Lighthouse Core Web Vitals)
- Run: `npm run lint` to check all files
- No custom rules or disable comments in place; keep linting strict

---

## Recent Changes & Patterns

Recent commits (last 5) show active maintenance for:
- **Windows compatibility**: Removing backdrop-filter, GPU compositing layer hints
- **Resolution fixes**: 4K display scaling, container max-width bounds
- **Component refresh**: Clearing stale editor buffers, fixing TS error markers
- **Theme consistency**: White card frames, bilingual service detail pages, clean white integration

When making changes, be aware:
- Always test on Windows/high-DPI monitors if touching animations or visual effects
- Ensure all new components respect the CSS design system tokens
- Use CSS Modules for component scoping; avoid global class name pollution
- Keep section-based architecture (one feature per page area)

---

## Debugging & Tools

### Local Development
- Start: `npm run dev` (Turbopack bundler, HMR enabled)
- Open: http://localhost:3000
- Fast refresh works for TSX + CSS Module changes

### Vercel Preview Deployments
- Every git push triggers auto-build + preview URL (check Vercel dashboard)
- Preview URLs include built analytics hooks
- Production: arialabs.id (Vercel domain linked via DNS)

### Performance Profiling
- Chrome DevTools → Performance tab: record interactions, check FCP/LCP/CLS
- Lighthouse tab: run audit on local/production
- Vercel Analytics dashboard: Core Web Vitals breakdown by page + device

### TypeScript & Type Safety
- Strict mode enabled; all types must be explicit
- Component props: use `React.ReactNode`, `React.PropsWithChildren`, interfaces from `/src/types`
- Never use `any`; use `unknown` + type guard if needed

---

## Important Gotchas

1. **CSS Module imports must match class names exactly** — typos cause undefined styles
2. **Next.js Image requires `fill` or explicit `width`/`height`** — `<img>` will break
3. **Scroll reveal animations fire once per element** — re-triggering requires page reload or observer reconnect
4. **Marquee animations need exact scrollWidth calculation** — off-by-one pixel breaks seamless loop
5. **Windows GPU rendering** — avoid filters on animated elements; use solid backgrounds or `will-change` hints
6. **Bilingual routes not yet routed** — types exist for English content but no `/en` prefix or i18n middleware yet
