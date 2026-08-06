'use client'

import { useState, useRef } from 'react'
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
    image: '/assets/projects-image/web-development/phase.webp'
  },
  { 
    title: 'Aquanime Official Website', 
    category: 'Web Development', 
    slug: 'aquanime-studio', 
    logo: '/assets/images/brands/aquanime.png',
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
    logo: '/assets/images/brands/animae.png',
    image: '/assets/projects-image/web-development/maenews.id.webp'
  },
]

export function SelectedWork() {
  const ref = useScrollReveal<HTMLElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startTranslateX, setStartTranslateX] = useState(0)
  const [dragDistance, setDragDistance] = useState(0)

  const doubled = [...PROJECTS, ...PROJECTS]

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setDragDistance(0)
    if (trackRef.current) {
      const rail = trackRef.current.querySelector<HTMLElement>('[data-rail]')
      if (rail) {
        const computedStyle = window.getComputedStyle(rail)
        const matrix = new WebKitCSSMatrix(computedStyle.transform)
        setStartTranslateX(matrix.m41)
        rail.style.animationPlayState = 'paused'
        rail.style.transform = `translateX(${matrix.m41}px)`
      }
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return
    const dx = e.clientX - startX
    setDragDistance(Math.abs(dx))
    const rail = trackRef.current.querySelector<HTMLElement>('[data-rail]')
    if (rail) {
      let newX = startTranslateX + dx
      const halfWidth = rail.scrollWidth / 2
      if (halfWidth > 0) {
        while (newX < -halfWidth) newX += halfWidth
        while (newX > 0) newX -= halfWidth
      }
      rail.style.transform = `translateX(${newX}px)`
    }
  }

  const handlePointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (trackRef.current) {
      const rail = trackRef.current.querySelector<HTMLElement>('[data-rail]')
      if (rail) {
        rail.style.animationPlayState = 'running'
      }
    }
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

      <div 
        ref={trackRef}
        className={styles.trackWrap}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
      >
        <div className={styles.rail} data-rail>
          {doubled.map((p, i) => (
            <Link 
              key={i} 
              href={`/portfolio/${p.slug}`} 
              className={styles.card}
              onClick={(e) => {
                if (dragDistance > 6) e.preventDefault()
              }}
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
