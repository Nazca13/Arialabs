# SEO Setup Guide

## Files
- `public/robots.txt` — allows all bots, blocks /api/ and /_next/
- `public/sitemap.xml` — submit to Google Search Console
- `src/app/layout.tsx` — base metadata, OG tags, canonical URL

## Google Search Console Setup
1. Go to https://search.google.com/search-console
2. Add property → URL prefix → `https://arialabs.id`
3. Verify via HTML file or DNS TXT record
4. Submit sitemap: `https://arialabs.id/sitemap.xml`

## On-Page SEO Checklist
- [x] Title tag includes primary keyword
- [x] Meta description under 160 chars
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Canonical URL set
- [x] robots meta: index, follow
- [x] Lang attribute on `<html>`
- [ ] Add structured data (JSON-LD) for LocalBusiness
- [ ] Add structured data for each Service
- [ ] Add alt text to all images once real content is added

## Updating Sitemap
Update `public/sitemap.xml` whenever new pages are added.
Change `<lastmod>` to current date.

## Meta Title Formula
`{Page Name} | Aria Labs`
Max 60 characters.

## Meta Description Formula
Action verb + main benefit + brand name.
Max 155 characters.
