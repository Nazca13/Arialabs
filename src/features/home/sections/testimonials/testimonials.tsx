'use client'

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
  const sectionRef = useScrollReveal<HTMLElement>()
  const doubled = [...DATA, ...DATA]

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
        <div className={styles.rail}>
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
