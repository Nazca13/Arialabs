'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './selected-work.module.css'

const PROJECTS = [
  { 
    title: 'PHASE Fragrance', 
    category: 'Web Development', 
    slug: 'phase-fragrance', 
    logo: '/assets/images/brands/phase.png',
    image: '/assets/projects-image/web-development/phase.png'
  },
  { 
    title: 'Aquanime Official Website', 
    category: 'Web Development', 
    slug: 'aquanime-studio', 
    logo: '/assets/images/brands/aquanime.png',
    image: '/assets/projects-image/web-development/aquanime.id.png'
  },
  { 
    title: 'Jejak Lokal', 
    category: 'Web Development', 
    slug: 'jejak-lokal', 
    logo: '/assets/images/brands/jejak-lokal.png',
    image: '/assets/projects-image/web-development/jejaklokal.id.png'
  },
  { 
    title: 'Mae News', 
    category: 'Web Development', 
    slug: 'mae-news', 
    logo: '/assets/images/brands/animae.png',
    image: '/assets/projects-image/web-development/maenews.id.png'
  },
]

export function SelectedWork() {
  const ref = useScrollReveal<HTMLElement>()
  const doubled = [...PROJECTS, ...PROJECTS]

  function pauseRail(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget.querySelector<HTMLElement>('[data-rail]')
    if (el) el.style.animationPlayState = 'paused'
  }

  function resumeRail(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget.querySelector<HTMLElement>('[data-rail]')
    if (el) el.style.animationPlayState = 'running'
  }

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
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

      <div className={styles.trackWrap} onMouseEnter={pauseRail} onMouseLeave={resumeRail}>
        <div className={styles.rail} data-rail>
          {doubled.map((p, i) => (
            <Link key={i} href={`/portfolio/${p.slug}`} className={styles.card}>
              <div className={styles.cardPreview}>
                <Image 
                  src={p.image} 
                  alt={p.title}
                  fill
                  className={styles.cardPreviewImg}
                  sizes="400px"
                />
                <div className={styles.cardLogoOverlay}>
                  <Image 
                    src={p.logo} 
                    alt="" 
                    width={120} 
                    height={50}
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
