'use client'

import { useState, useRef, useEffect } from 'react'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './testimonials.module.css'

const DATA = [
  {
    name: 'Angelica Michaela',
    role: 'CEO',
    company: 'PHASE Fragrance',
    quote: 'Working with AriaLabs felt personal. The process was smooth, the design was stunning, and everything had meaning.',
  },
  {
    name: 'Reza Firmansyah',
    role: 'Founder',
    company: 'Aquanime Studio',
    quote: 'They understood our vision from day one. The brand identity they created perfectly captured our creative spirit.',
  },
  {
    name: 'Dian Pratama',
    role: 'Marketing Director',
    company: 'Bumi Eka Sukses Tridaya',
    quote: 'The website AriaLabs delivered exceeded all expectations. Conversion rate increased significantly within the first month.',
  },
]

export function Testimonials() {
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useScrollReveal<HTMLElement>()
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
        <Badge>Testimonials</Badge>
        <h2 className={styles.heading}>
          Why Clients
          <br />
          <span className={styles.blue}>Choose Aria Labs</span>
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
