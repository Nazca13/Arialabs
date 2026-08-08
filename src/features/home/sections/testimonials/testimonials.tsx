'use client'

import { useRef, useCallback } from 'react'
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

const CARD_WIDTH = 380
const GAP = 22

export function Testimonials() {
  const sectionRef = useScrollReveal<HTMLElement>()
  const railRef = useRef<HTMLDivElement>(null)
  const doubled = [...DATA, ...DATA]

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

    const style = window.getComputedStyle(rail)
    const matrix = new DOMMatrix(style.transform)
    const currentX = matrix.m41

    const step = CARD_WIDTH + GAP
    const halfWidth = rail.scrollWidth / 2
    let newX = direction === 'next' ? currentX - step : currentX + step

    if (newX < -halfWidth) newX += halfWidth
    if (newX > 0) newX -= halfWidth

    rail.style.animationPlayState = 'paused'
    rail.style.transform = `translateX(${newX}px)`

    setTimeout(() => {
      const fraction = halfWidth > 0 ? Math.abs(newX) / halfWidth : 0
      rail.style.transform = ''
      rail.style.animationDelay = `${-(fraction * 32)}s`
      rail.style.animationPlayState = 'running'
    }, 300)
  }, [])

  return (
    <section ref={sectionRef} className={`reveal ${styles.section}`}>
      <div className="container">
        <Badge>Testimonials</Badge>
        <h2 className={styles.heading}>
          Why Clients
          <br />
          <span className={styles.blue}>Choose Aria Labs</span>
        </h2>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scrollBy('prev')}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scrollBy('next')}
            aria-label="Next testimonial"
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
    </section>
  )
}
