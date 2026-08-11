'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './who-we-are.module.css'

export function AboutWhoWeAre() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useLanguage()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        {/* Top split block */}
        <div className={styles.topSplit}>
          <div className={styles.left}>
            <Badge>{t.about.whoWeAre}</Badge>
          </div>
          <div className={styles.right}>
            <p className={styles.lead}>
              {t.about.lead}
            </p>
            <p className={styles.desc}>
              {t.about.desc}
            </p>
          </div>
        </div>

        {/* Center illustration & statement */}
        <div className={styles.centerBlock}>
          <h2 className={styles.statement}>
            {t.about.statement}
          </h2>
          <div className={styles.cardIllustration}>
            <Image
              src="/assets/images/characters/aria-card.webp"
              alt="Aria Cards - UI/UX, Brand Identity, Dev, Graphic Design"
              width={1355}
              height={499}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
