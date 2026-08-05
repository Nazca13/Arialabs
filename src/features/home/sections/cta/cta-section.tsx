'use client'

import { Badge } from '@/components/ui/badge/badge'
import { Button } from '@/components/ui/button/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './cta-section.module.css'

export function CtaSection() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <Badge>Start Today</Badge>
          <h2 className={styles.heading}>
            Every Great Idea
            <br />
            Starts Somewhere
          </h2>
          <Button href="/kontak" size="lg" arrow>Let&apos;s Talk</Button>
        </div>
      </div>
    </section>
  )
}
