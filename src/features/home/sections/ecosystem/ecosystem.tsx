'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { Button } from '@/components/ui/button/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './ecosystem.module.css'

export function EcosystemSection() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useLanguage()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Badge>{t.ecosystem.badge}</Badge>
          <h2 className={styles.heading}>
            Backed by <span className={styles.blue}>AquaNime</span> Ecosystem
          </h2>
          <p className={styles.sub}>{t.ecosystem.desc}</p>
          <div className={styles.actions}>
            <Button
              href="https://aquanime.id"
              size="md"
              arrow
            >
              Our Community
            </Button>
          </div>
        </div>

        <div className={styles.logoWrap}>
          <Image
            src="/assets/images/brands/official-partners/aquanime.png"
            alt="AquaNime Ecosystem"
            width={504}
            height={194}
            className={styles.logoImg}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  )
}
