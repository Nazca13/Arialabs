import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { Button } from '@/components/ui/button/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './ecosystem.module.css'

export function EcosystemSection() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Badge>Ecosystem</Badge>
          <h2 className={styles.heading}>
            Backed by <span className={styles.blue}>AquaNime</span> Ecosystem
          </h2>
          <p className={styles.sub}>
            Aria Labs beroperasi di bawah naungan ekosistem AquaNime, menghadirkan standar 
            kualitas profesional dan eksekusi digital yang matang untuk setiap proyek klien.
          </p>
          <div className={styles.actions}>
            <Button
              href="https://aquanime.id"
              size="md"
              arrow
            >
              Our Community
            </Button>
          </div>
        </div>

        <div className={styles.logoWrap}>
          <div className={styles.logoCard}>
            <Image
              src="/assets/images/brands/official-partners/aquanime.png"
              alt="AquaNime Ecosystem"
              width={200}
              height={80}
              style={{ objectFit: 'contain', maxHeight: '60px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
