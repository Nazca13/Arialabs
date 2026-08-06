'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './foundation.module.css'

const FOUNDATIONS = [
  {
    title: 'Define',
    description: 'Menemukan kejelasan arah melalui riset target pasar dan perumusan strategi bisnis yang kuat.',
  },
  {
    title: 'Development',
    description: 'Mentransformasi strategi dan desain menjadi website/aplikasi modern yang fungsional dan scalable.',
  },
  {
    title: 'Deliver',
    description: 'Meluncurkan produk digital dengan performa optimal untuk mendukung pertumbuhan bisnis Anda.',
  },
]

export function AboutFoundation() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.imageWrap}>
            <Image
              src="/assets/images/backgrounds/about-bg.png"
              alt="Our Foundation Illustration"
              width={540}
              height={540}
              className={styles.illustration}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className={styles.right}>
          <Badge>Our Foundation</Badge>
          <h2 className={styles.heading}>
            Designed with Intent,<br />Engineered for Results.
          </h2>
          
          <div className={styles.list}>
            {FOUNDATIONS.map((item, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.icon}>+</span>
                  <span className={styles.title}>{item.title}</span>
                </div>
                <p className={styles.desc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
