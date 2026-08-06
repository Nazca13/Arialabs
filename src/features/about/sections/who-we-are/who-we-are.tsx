'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './who-we-are.module.css'

export function AboutWhoWeAre() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        {/* Top split block */}
        <div className={styles.topSplit}>
          <div className={styles.left}>
            <Badge>Who We Are</Badge>
          </div>
          <div className={styles.right}>
            <p className={styles.lead}>
              Aria Labs adalah Creative Digital Studio yang menggabungkan strategi, desain, dan teknologi 
              untuk membantu bisnis membangun identitas visual, pengalaman digital, dan website modern.
            </p>
            <p className={styles.desc}>
              Kami percaya bahwa setiap desain harus memiliki tujuan yang jelas, memberikan nilai, dan 
              mendukung pertumbuhan jangka panjang. Kami tidak hanya membuat desain yang indah, tetapi juga 
              memastikan fungsionalitas dan skalabilitas produk digital Anda untuk masa depan yang lebih baik.
            </p>
          </div>
        </div>

        {/* Center illustration & statement */}
        <div className={styles.centerBlock}>
          <h2 className={styles.statement}>
            Mewujudkan Solusi Kreatif dan Inovatif bagi Brand Anda
          </h2>
          <div className={styles.cardIllustration}>
            <Image
              src="/assets/images/characters/aria-card.png"
              alt="Aria Cards - UI/UX, Brand Identity, Dev, Graphic Design"
              width={1000}
              height={500}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
