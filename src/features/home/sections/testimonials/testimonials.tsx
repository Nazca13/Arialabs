'use client'

import { useState, useRef, useEffect } from 'react'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './testimonials.module.css'

const DATA = [
  {
    name: 'Angelica Phurada',
    role: 'CEO',
    company: 'PHASE Fragrance',
    quote: 'Working with Aria Labs felt personal. The process was smooth, the design was stunning, and everything had meaning.',
  },
  {
    name: 'Abdul Majid',
    role: 'Direktur Utama',
    company: 'PT Bumi Eka Sukses Tridaya',
    quote: 'Aria Labs bener-bener ngerti kebutuhan kami. Hasilnya jauh melampaui ekspektasi dan proses kerjasamanya nyaman banget dari awal sampai selesai.',
  },
  {
    name: 'Aditya Syahbana',
    role: 'Direktur Operasional',
    company: 'PT Eldaya Mentari Alfikurnia',
    quote: 'Timnya responsif, kreatif, dan paham banget arah brand kami. Output yang mereka kasih langsung on point tanpa banyak revisi yang muter-muter.',
  },
]

export function Testimonials() {
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useScrollReveal<HTMLElement>()
  const { t } = useLanguage()
  const doubled = [...DATA, ...DATA]
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  // Card width + gap
  const CARD_WIDTH = 402

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      if (!isPaused) {
        setOffset((prev) => {
          const speed = 0.025 // pixels per ms
          let newOffset = prev - (speed * deltaTime)

          // Smooth infinite loop - reset when halfway through
          const halfwayPoint = -(CARD_WIDTH * DATA.length)
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
    <section ref={sectionRef} className={`reveal ${styles.section}`}>
      <div className="container">
        <Badge>{t.testimonials.badge}</Badge>
        <h2 className={styles.heading}>
          {t.testimonials.heading}
          <br />
          <span className={styles.blue}>{t.testimonials.headingBlue}</span>
        </h2>
      </div>

      <div className={styles.trackWrap}>
        <div
          className={styles.rail}
          style={{
            transform: `translateX(${offset}px)`,
            transition: isPaused ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
        >
          {doubled.map((t, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navControls}>
        <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous testimonial">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className={styles.navBtn} onClick={handleNext} aria-label="Next testimonial">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
