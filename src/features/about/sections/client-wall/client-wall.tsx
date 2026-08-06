'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './client-wall.module.css'

const CLIENT_LOGOS = [
  { name: 'Bumi Eka', src: '/assets/images/brands/bumi-eka.png' },
  { name: 'Jejak Lokal', src: '/assets/images/brands/jejak-lokal.png' },
  { name: 'PHASE', src: '/assets/images/brands/phase.png' },
  { name: 'Elmax', src: '/assets/images/brands/elmax.png' },
]

export function AboutClientWall() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <Badge>Client Wall</Badge>
        </div>
        <div className={styles.grid}>
          {CLIENT_LOGOS.map((logo, i) => (
            <div key={i} className={styles.logoCard}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
