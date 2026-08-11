'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './about-section.module.css'

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>()
  const { lang, t } = useLanguage()

  const desc = lang === 'en'
    ? 'Aria Labs is a Creative Digital Studio that combines strategy, design, and technology to help businesses build visual identities, digital experiences, and modern websites. We believe every design should have a clear purpose, deliver real value, and support long-term growth.'
    : 'Aria Labs adalah Creative Digital Studio yang menggabungkan strategi, desain, dan teknologi untuk membantu bisnis membangun identitas visual, pengalaman digital, dan website modern. Kami percaya bahwa setiap desain harus memiliki tujuan yang jelas, memberikan nilai, serta mendukung pertumbuhan jangka panjang.'

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Badge>{t.about.whoWeAre}</Badge>
          <h2 className={styles.headline}>
            Design with <span className={styles.blue}>Purpose</span>
            <br />
            Built for <span className={styles.blue}>Growth</span>
          </h2>
          <p className={styles.desc}>{desc}</p>
          <Link href="/tentang" className={styles.cta}>
            {lang === 'en' ? 'Learn More About Us' : 'Pelajari Lebih Lanjut'}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.right} aria-hidden="true">
          <span className={styles.dot1} />
          <span className={styles.dot2} />
          <Image
            src="/assets/images/characters/aria-face.webp"
            alt="Aria character"
            width={280}
            height={280}
            className={styles.bgLogo}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  )
}