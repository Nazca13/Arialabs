'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './foundation.module.css'

export function AboutFoundation() {
  const ref = useScrollReveal<HTMLElement>()
  const { lang } = useLanguage()

  const FOUNDATIONS = [
    {
      icon: '/assets/icons/utility/our-mission.svg',
      title: 'Our Mission',
      description: lang === 'en'
        ? 'Helping businesses grow through strategic, measurable digital solutions with real impact for long-term growth.'
        : 'Membantu bisnis berkembang melalui solusi digital yang strategis, terukur, dan berdampak nyata bagi pertumbuhan jangka panjang.',
    },
    {
      icon: '/assets/icons/utility/development.svg',
      title: 'Development',
      description: lang === 'en'
        ? 'Building high-quality digital products with clean code standards, optimal performance, and exceptional user experiences.'
        : 'Membangun produk digital berkualitas tinggi dengan standar kode yang bersih, performa optimal, dan pengalaman pengguna yang luar biasa.',
    },
    {
      icon: '/assets/icons/utility/culture.svg',
      title: 'Culture',
      description: lang === 'en'
        ? 'Building a collaborative, creative, and supportive team to produce the best work for every client.'
        : 'Membangun tim yang kolaboratif, kreatif, dan saling mendukung untuk menghasilkan karya terbaik bagi setiap klien kami.',
    },
  ]

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.imageWrap}>
            <Image
              src="/assets/images/backgrounds/about-bg.webp"
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
                <p className={styles.desc} style={{ fontSize: '13px', color: '#666', marginTop: '6px', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
