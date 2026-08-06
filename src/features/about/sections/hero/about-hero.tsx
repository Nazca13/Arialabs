'use client'

import { Button } from '@/components/ui/button/button'
import { Badge } from '@/components/ui/badge/badge'
import styles from './about-hero.module.css'

export function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.badgeWrap}>
          <Badge>Who We Are</Badge>
        </div>
        <h1 className={styles.headline}>
          We Are Here to <span className={styles.blue}>Build</span> Your<br />Business <span className={styles.blue}>Empires.</span>
        </h1>
        <div className={styles.actions}>
          <Button href="/portfolio" size="md" arrow>View Work</Button>
          <Button href="/kontak" size="md" variant="outline">Reach Out</Button>
        </div>
      </div>
    </section>
  )
}
