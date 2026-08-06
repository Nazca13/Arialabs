'use client'

import { Button } from '@/components/ui/button/button'
import { Badge } from '@/components/ui/badge/badge'
import styles from './layanan-hero.module.css'

export function LayananHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.badgeWrap}>
          <Badge>Our Services</Badge>
        </div>
        <h1 className={styles.headline}>
          Solusi Digital untuk <span className={styles.blue}>Setiap</span> Kebutuhan <span className={styles.blue}>Bisnis.</span>
        </h1>
        <div className={styles.actions}>
          <Button href="/portfolio" size="md" arrow>View Work</Button>
          <Button href="/kontak" size="md" variant="outline">Reach Out</Button>
        </div>
      </div>
    </section>
  )
}
