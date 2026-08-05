'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './official-partner.module.css'

const PARTNERS = [
  {
    name: 'Animae',
    src: '/assets/images/brands/animae.png',
    alt: 'Animae — Official Partner',
  },
  {
    name: 'Nexoria',
    src: '/assets/images/brands/nexoria.png',
    alt: 'Nexoria — Official Partner',
  },
  {
    name: 'Aquanime',
    src: '/assets/images/brands/aquanime.png',
    alt: 'Aquanime — Official Partner',
  },
]

export function OfficialPartner() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Badge>Official Partner</Badge>
          <h2 className={styles.heading}>
            Didukung oleh <span className={styles.blue}>Mitra Terpercaya</span>
          </h2>
          <p className={styles.sub}>
            Aria Labs bangga bermitra secara resmi dengan Animae, Nexoria, dan Aquanime — 
            ekosistem kreatif yang mendukung solusi digital terbaik bagi setiap klien.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.grid}>
            {PARTNERS.map(partner => (
              <div key={partner.name} className={styles.card}>
                <div className={styles.badgePill}>Official Partner</div>
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
