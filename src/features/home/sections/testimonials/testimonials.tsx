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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useScrollReveal<HTMLElement>()
  const doubled = [...DATA, ...DATA]
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!isAutoPlaying) return

    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - 0.4
        // Reset saat sudah scroll setengah
        if (Math.abs(newOffset) >= (402 * DATA.length)) {
          return 0
        }
        return newOffset
      })
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setOffset((prev) => prev + 402)
    setTimeout(() => setIsAutoPlaying(true), 2000)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setOffset((prev) => prev - 402)
    setTimeout(() => setIsAutoPlaying(true), 2000)
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
            transition: isAutoPlaying ? 'none' : 'transform 0.5s ease-out'
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
