import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { Button } from '@/components/ui/button/button'
import styles from './service-detail-hero.module.css'

type Props = {
  title: string
  badge: string
  tagline: string
  description: string
  mascot: string
}

export function ServiceDetailHero({ title, badge, tagline, description, mascot }: Props) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <Badge>{badge}</Badge>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Button href="/kontak" size="md" arrow>
              Konsultasi Gratis
            </Button>
            <Button href="#benefits" size="md" variant="outline">
              Pelajari Fitur
            </Button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.mascotCard}>
            <div className={styles.glowBg} aria-hidden="true" />
            <Image
              src={mascot}
              alt={title}
              width={340}
              height={340}
              priority
              className={styles.mascotImg}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
