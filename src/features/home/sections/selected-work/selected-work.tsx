'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import styles from './selected-work.module.css'

const PROJECTS = [
  {
    title: 'PHASE Fragrance',
    category: 'Web Development',
    slug: 'phase-fragrance',
    logo: '/assets/images/brands/phase.png',
    image: '/assets/projects-image/web-development/phase.webp'
  },
  {
    title: 'Aquanime Official Website',
    category: 'Web Development',
    slug: 'aquanime-studio',
    logo: '/assets/images/brands/official-partners/aquanime.png',
    image: '/assets/projects-image/web-development/aquanime.id.webp'
  },
  {
    title: 'Jejak Lokal',
    category: 'Web Development',
    slug: 'jejak-lokal',
    logo: '/assets/images/brands/jejak-lokal.png',
    image: '/assets/projects-image/web-development/jejaklokal.id.webp'
  },
  {
    title: 'Mae News',
    category: 'Web Development',
    slug: 'mae-news',
    logo: '/assets/images/brands/official-partners/animae.png',
    image: '/assets/projects-image/web-development/maenews.id.webp'
  },
]

export function SelectedWork() {
  const doubled = [...PROJECTS, ...PROJECTS]

  return (
    <section className={styles.section}>
      <div className="container">
        <Badge>Selected Work</Badge>
        <div className={styles.header}>
          <h2 className={styles.heading}>Crafted for <span className={styles.blue}>Ambitious Brands</span></h2>
          <p className={styles.sub}>
            Kami bekerja bersama bisnis, startup, dan organisasi yang ingin membangun
            identitas digital yang kuat, modern, dan berkelanjutan di masa depan.
          </p>
        </div>
      </div>

      <div className={styles.trackWrap}>
        <div className={styles.rail}>
          {doubled.map((p, i) => (
            <Link
              key={i}
              href={`/portfolio/${p.slug}`}
              className={styles.card}
            >
              <div className={styles.cardPreview}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  priority={i < 4}
                  className={styles.cardPreviewImg}
                  sizes="(max-width: 640px) 280px, 320px"
                />
                <div className={styles.cardLogoOverlay}>
                  <Image
                    src={p.logo}
                    alt=""
                    width={120}
                    height={50}
                    priority={i < 4}
                    className={styles.cardLogoImg}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className={styles.cardInfo}>
                <p className={styles.cardCat}>{p.category}</p>
                <h3 className={styles.cardTitle}>{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
