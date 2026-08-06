'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './portfolio-grid.module.css'

const FILTERS = [
  'All',
  'Web Development',
  'UI/UX Design',
  'Graphic Design',
  'Brand Identity',
  'Social Media Management',
]

const PROJECTS = [
  {
    title: 'PHASE Fragrance',
    category: 'Web Development',
    slug: 'phase-fragrance',
    logo: '/assets/images/brands/phase.png',
    image: '/assets/projects-image/web-development/phase.webp',
  },
  {
    title: 'Aquanime Official Website',
    category: 'Web Development',
    slug: 'aquanime-studio',
    logo: '/assets/images/brands/official-partners/aquanime.png',
    image: '/assets/projects-image/web-development/aquanime.id.webp',
  },
  {
    title: 'Jejak Lokal',
    category: 'Web Development',
    slug: 'jejak-lokal',
    logo: '/assets/images/brands/jejak-lokal.png',
    image: '/assets/projects-image/web-development/jejaklokal.id.webp',
  },
  {
    title: 'Mae News',
    category: 'Web Development',
    slug: 'mae-news',
    logo: '/assets/images/brands/official-partners/animae.png',
    image: '/assets/projects-image/web-development/maenews.id.webp',
  },
]

export function PortfolioGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section className={styles.section} id="projects">
      {/* Filter bar */}
      <div className="container">
        <div className={styles.filters} role="tablist" aria-label="Filter portfolio">
          {FILTERS.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`${styles.filter} ${active === f ? styles.filterActive : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container">
        <div className={styles.grid}>
          {filtered.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  loading="lazy"
                  className={styles.cardImgEl}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.cardOverlay}>
                  <Image
                    src={p.logo}
                    alt=""
                    width={120}
                    height={48}
                    loading="lazy"
                    className={styles.cardLogo}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardCat}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <p>Belum ada project dalam kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
