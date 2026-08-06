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
          Empowering Your <span className={styles.blue}>Business</span> with Digital <span className={styles.blue}>Solutions.</span>
        </h1>
        <div className={styles.actions}>
          <Button href="/portfolio" size="md" arrow>View Work</Button>
          <Button href="/kontak" size="md" variant="outline">Reach Out</Button>
        </div>
      </div>
    </section>
  )
}
