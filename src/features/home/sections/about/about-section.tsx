'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './about-section.module.css'

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Badge>Who We Are</Badge>
          <h2 className={styles.headline}>
            Design with <span className={styles.blue}>Purpose</span>
            <br />
            Built for <span className={styles.blue}>Growth</span>
          </h2>
          <p className={styles.desc}>
            Aria Labs adalah Creative Digital Studio yang menggabungkan strategi, desain,
            dan teknologi untuk membantu bisnis membangun identitas visual, pengalaman
            digital, dan website modern. Kami percaya bahwa setiap desain harus memiliki
            tujuan yang jelas, memberikan nilai, serta mendukung pertumbuhan jangka panjang.
          </p>
          <Link href="/tentang" className={styles.cta}>
            Learn More About Us
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
            src="/assets/images/characters/aria-face.png"
            alt=""
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