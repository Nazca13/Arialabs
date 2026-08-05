'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './how-we-work.module.css'

const STEPS = [
  {
    day: 'Step 1',
    label: 'Discovery',
    icon: '/assets/icons/utility/presentation.svg',
    description: 'Kami memahami bisnis, target audiens, dan tantangan yang dihadapi untuk membangun strategi yang tepat.',
  },
  {
    day: 'Step 2',
    label: 'Strategy & Design',
    icon: '/assets/icons/utility/meeting.svg',
    description: 'Kami menyusun konsep strategi, visual, serta pengalaman pengguna yang selaras dengan kebutuhan dan tujuan bisnis.',
  },
  {
    day: 'Step 3',
    label: 'Development',
    icon: '/assets/icons/utility/spare-icon.svg',
    description: 'Kami mengembangkan desain menjadi produk digital yang siap pakai, dengan tampilan yang optimal, responsif, dan fungsional.',
  },
  {
    day: 'Launch & Beyond',
    label: 'Support',
    icon: '/assets/icons/utility/puzzle.svg',
    description: 'Setelah proyek diluncurkan, kami tetap mendukung melalui optimasi, pemeliharaan, dan pengembangan lanjutan sesuai kebutuhan.',
  },
]

export function HowWeWork() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        <Badge>How We Work</Badge>
        <h2 className={styles.heading}>
          Engineering Growth,
          <br />
          <span className={styles.blue}>Step by Step.</span>
        </h2>
        <p className={styles.sub}>
          Setiap proyek dibangun melalui proses yang terstruktur, kolaboratif, dan transparan.
          Kami memastikan setiap tahap memiliki tujuan yang jelas sehingga menghasilkan solusi
          digital yang sesuai dengan kebutuhan bisnis Anda.
        </p>

        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap}>
                <Image src={step.icon} alt="" width={68} height={68} aria-hidden="true" />
              </div>
              <p className={styles.dayBlue}>{step.day}</p>
              <p className={styles.label}>{step.label}</p>
              <p className={styles.desc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
