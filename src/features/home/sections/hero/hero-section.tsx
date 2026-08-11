'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button/button'
import { useLanguage } from '@/contexts/language-context'
import styles from './hero-section.module.css'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap} aria-hidden="true">
        <Image
          src="/assets/images/backgrounds/hero-bg.webp"
          alt=""
          fill
          priority
          quality={90}
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.scrim} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.top}>
          <span className={styles.pillBadge}>{t.hero.badge}</span>
          <h1 className={styles.headline}>
            Build Better Brands
            <br />
            Create Better Experiences
          </h1>
          <p className={styles.sub}>{t.hero.sub}</p>
        </div>

        <div className={styles.right}>
          <p className={styles.body}>
            Every Great Brand
            <br />
            Starts with Clarity
          </p>
          <div className={styles.actions}>
            <Button href="/portfolio" size="md" arrow>View Work</Button>
            <Button href="/kontak" size="md" variant="outline">Reach Out</Button>
          </div>
        </div>

        <div className={styles.tags}>
          <span>+ Define</span>
          <span>+ Design</span>
          <span>+ Development</span>
        </div>
      </div>
    </section>
  )
}
