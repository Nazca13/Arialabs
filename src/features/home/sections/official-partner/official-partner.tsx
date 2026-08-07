'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './official-partner.module.css'

const PARTNERS = [
  {
    name: 'Animae',
    src: '/assets/images/brands/official-partners/animae.png',
    alt: 'Animae — Strategic Collaboration',
  },
  {
    name: 'Nexoria',
    src: '/assets/images/brands/official-partners/nexoria.png',
    alt: 'Nexoria — Strategic Collaboration',
  },
]

export function OfficialPartner() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Badge>Strategic Collaboration</Badge>
          <h2 className={styles.heading}>
            Kolaborasi <span className={styles.blue}>Strategis</span>
          </h2>
          <p className={styles.sub}>
            Kami bekerja sama secara strategis dengan Animae dan Nexoria guna memperluas 
            kapabilitas kreatif serta memberikan solusi digital yang komprehensif.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.grid}>
            {PARTNERS.map(partner => (
              <div key={partner.name} className={styles.card}>
                <div className={styles.badgePill}>Strategic Partner</div>
                <div className={styles.imgWrap}>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={150}
                    height={50}
                    style={{ objectFit: 'contain', maxWidth: '140px', maxHeight: '50px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
