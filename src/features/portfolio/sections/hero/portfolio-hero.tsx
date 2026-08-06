'use client'

import { Button } from '@/components/ui/button/button'
import { Badge } from '@/components/ui/badge/badge'
import styles from './portfolio-hero.module.css'

export function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.badgeWrap}>
          <Badge>Our Portfolio</Badge>
        </div>
        <h1 className={styles.headline}>
          Turning Your <span className={styles.blue}>Vision</span> Into Unstoppable Digital <span className={styles.blue}>Presence.</span>
        </h1>
        <div className={styles.actions}>
          <Button href="#projects" size="md" arrow>View Work</Button>
          <Button href="/kontak" size="md" variant="outline">Reach Out</Button>
        </div>
      </div>
    </section>
  )
}
