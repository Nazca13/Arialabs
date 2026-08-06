import { Button } from '@/components/ui/button/button'
import styles from './hero-section.module.css'

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <div className={styles.top}>
          <span className={styles.pillBadge}>Creative Digital Studio</span>
          <h1 className={styles.headline}>
            Build Better Brands
            <br />
            <span className={styles.blue}>Create</span> Better <span className={styles.blue}>Experiences</span>
          </h1>
          <p className={styles.sub}>
            Kami membantu bisnis, startup, UMKM, dan organisasi membangun identitas visual,
            pengalaman digital, serta website modern yang dirancang untuk mendukung
            pertumbuhan bisnis.
          </p>
        </div>

        <div className={styles.right}>
          <p className={styles.body}>
            Every Great Brand
            <br />
            Starts with Clarity
          </p>
          <div className={styles.actions}>
            <Button href="/portfolio" size="md" arrow>View Work</Button>
            <Button href="/kontak" size="md" variant="outline">Reach Out</Button>
          </div>
        </div>

        <div className={styles.tags}>
          <span>+ Define</span>
          <span>+ Design</span>
          <span>+ Development</span>
        </div>
      </div>
    </section>
  )
}
