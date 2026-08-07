import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { Button } from '@/components/ui/button/button'
import styles from './service-portfolio.module.css'

export type ProjectItem = {
  title: string
  slug: string
  image: string
  category: string
}

type Props = {
  serviceTitle: string
  projects: ProjectItem[]
}

export function ServicePortfolio({ serviceTitle, projects }: Props) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <Badge>Selected Work</Badge>
          <h2 className={styles.heading}>
            Featured <span className={styles.blue}>{serviceTitle}</span>
          </h2>
          <p className={styles.sub}>
            Lihat bagaimana kami membantu bisnis mencapai hasil terbaik melalui solusi digital terukur.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className={styles.grid}>
            {projects.map(p => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className={styles.card}>
                <div className={styles.cardPreview}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className={styles.cardPreviewImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.cardOverlay}>
                    <span>Lihat Case Study →</span>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCat}>{p.category}</span>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIconWrap}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>Portfolio Sedang Diperbarui</h3>
            <p className={styles.emptyDesc}>
              Dokumentasi studi kasus terbaru untuk kategori <strong>{serviceTitle}</strong> sedang disiapkan. Hubungi tim kami untuk konsultasi dan melihat sampel pengerjaan langsung.
            </p>
            <Button href="/kontak" size="sm" arrow>
              Konsultasi Proyek
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
