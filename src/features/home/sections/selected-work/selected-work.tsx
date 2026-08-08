'use client'

import { useRef, useCallback } from 'react'
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

const CARD_WIDTH = 320
const GAP = 20

export function SelectedWork() {
  const railRef = useRef<HTMLDivElement>(null)
  const quadrupled = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS]

  const pauseAnimation = useCallback(() => {
    if (railRef.current) {
      railRef.current.style.animationPlayState = 'paused'
    }
  }, [])

  const resumeAnimation = useCallback(() => {
    if (railRef.current) {
      railRef.current.style.animationPlayState = 'running'
    }
  }, [])

  const scrollBy = useCallback((direction: 'prev' | 'next') => {
    const rail = railRef.current
    if (!rail) return

    // Pause animation, get current position
    const style = window.getComputedStyle(rail)
    const matrix = new DOMMatrix(style.transform)
    const currentX = matrix.m41

    // Calculate new position
    const step = CARD_WIDTH + GAP
    const halfWidth = rail.scrollWidth / 2
    let newX = direction === 'next' ? currentX - step : currentX + step

    // Wrap around
    if (newX < -halfWidth) newX += halfWidth
    if (newX > 0) newX -= halfWidth

    // Apply and resume
    rail.style.animationPlayState = 'paused'
    rail.style.transform = `translateX(${newX}px)`

    // Resume animation from new position after short delay
    setTimeout(() => {
      const fraction = halfWidth > 0 ? Math.abs(newX) / halfWidth : 0
      rail.style.transform = ''
      rail.style.animationDelay = `${-(fraction * 28)}s`
      rail.style.animationPlayState = 'running'
    }, 300)
  }, [])

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

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scrollBy('prev')}
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scrollBy('next')}
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={styles.trackWrap}
        onMouseEnter={pauseAnimation}
        onMouseLeave={resumeAnimation}
      >
        <div ref={railRef} className={styles.rail} data-rail>
          {quadrupled.map((p, i) => (
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
                  loading="lazy"
                  className={styles.cardPreviewImg}
                  sizes="(max-width: 640px) 280px, 320px"
                />
                <div className={styles.cardLogoOverlay}>
                  <Image
                    src={p.logo}
                    alt=""
                    width={120}
                    height={50}
                    loading="lazy"
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
