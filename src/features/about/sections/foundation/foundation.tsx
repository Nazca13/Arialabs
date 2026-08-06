'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './foundation.module.css'

const FOUNDATIONS = [
  {
    icon: '/assets/icons/utility/our-mission.svg',
    title: 'Our Mission',
    description: 'Membantu bisnis berkembang melalui solusi digital yang strategis, terukur, dan berdampak nyata bagi pertumbuhan jangka panjang.',
  },
  {
    icon: '/assets/icons/utility/development.svg',
    title: 'Development',
    description: 'Membangun produk digital berkualitas tinggi dengan standar kode yang bersih, performa optimal, dan pengalaman pengguna yang luar biasa.',
  },
  {
    icon: '/assets/icons/utility/culture.svg',
    title: 'Culture',
    description: 'Membangun tim yang kolaboratif, kreatif, dan saling mendukung untuk menghasilkan karya terbaik bagi setiap klien kami.',
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
                <div className={styles.itemRow}>
                  <Image src={item.icon} alt="" width={22} height={22} aria-hidden="true" />
                  <span className={styles.title}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
