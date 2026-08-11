'use client'

import { Badge } from '@/components/ui/badge/badge'
import { useLanguage } from '@/contexts/language-context'
import styles from './service-benefits.module.css'

export type BenefitItem = {
  title: string
  desc: string
  icon?: string
}

type Props = {
  benefits: BenefitItem[]
}

function renderIcon(index: number) {
  switch (index % 6) {
    case 0:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
          <path d="M12 7v.01"/><path d="M9 10v.01"/><path d="M15 10v.01"/><path d="M8 14v.01"/><path d="M16 14v.01"/>
        </svg>
      )
    case 1:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    case 2:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10M12 12l4-4"/>
        </svg>
      )
    case 3:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    case 4:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.19-1.81-.47-2.47l-.06-.06c-.66-.66-1.76-1.18-2.47-.47z"/>
          <path d="M12 15l-3-3 7.5-7.5c.78-.78 2.05-.78 2.83 0l.17.17c.78.78.78 2.05 0 2.83L12 15z"/>
        </svg>
      )
    case 5:
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
  }
}

export function ServiceBenefits({ benefits }: Props) {
  const { lang } = useLanguage()

  return (
    <section className={styles.section} id="benefits">
      <div className="container">
        <div className={styles.header}>
          <Badge>Features &amp; Benefits</Badge>
          <h2 className={styles.heading}>
            What You <span className={styles.blue}>Get</span>
          </h2>
          <p className={styles.sub}>
            {lang === 'en'
              ? 'Every project of ours is built to the highest quality standards to maximize your business growth and results.'
              : 'Setiap proyek kami dilengkapi dengan standar kualitas tertinggi untuk memaksimalkan hasil dan pertumbuhan bisnis Anda.'}
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap}>
                {renderIcon(i)}
              </div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
