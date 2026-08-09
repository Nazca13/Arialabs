'use client'

import { useState, useRef, useEffect } from 'react'
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
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const doubled = [...PROJECTS, ...PROJECTS]
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  // Card width + gap
  const CARD_WIDTH = 340

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      if (!isPaused) {
        setOffset((prev) => {
          const speed = 0.03 // pixels per ms
          let newOffset = prev - (speed * deltaTime)

          // Smooth infinite loop - reset when halfway through
          const halfwayPoint = -(CARD_WIDTH * PROJECTS.length + 20 * PROJECTS.length)
          if (newOffset <= halfwayPoint) {
            newOffset = 0
          }

          return newOffset
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  const handlePrev = () => {
    setIsPaused(true)
    setOffset((prev) => prev + CARD_WIDTH)
    setTimeout(() => setIsPaused(false), 2500)
  }

  const handleNext = () => {
    setIsPaused(true)
    setOffset((prev) => prev - CARD_WIDTH)
    setTimeout(() => setIsPaused(false), 2500)
  }

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
        <div
          className={styles.rail}
          style={{
            transform: `translateX(${offset}px)`,
            transition: isPaused ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
        >
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

      <div className={styles.navControls}>
        <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous slide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className={styles.navBtn} onClick={handleNext} aria-label="Next slide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
