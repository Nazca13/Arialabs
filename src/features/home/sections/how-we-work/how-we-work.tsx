'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './how-we-work.module.css'

const STEP_KEYS = ['discover', 'design', 'develop', 'deliver'] as const

const STEP_ICONS = [
  '/assets/icons/utility/presentation.svg',
  '/assets/icons/utility/meeting.svg',
  '/assets/icons/utility/spare-icon.svg',
  '/assets/icons/utility/puzzle.svg',
]

const STEP_DAYS = ['Step 1', 'Step 2', 'Step 3', 'Launch & Beyond']

export function HowWeWork() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useLanguage()

  const steps = STEP_KEYS.map((key, i) => ({
    day: STEP_DAYS[i],
    label: t.howWeWork.steps[key].label,
    icon: STEP_ICONS[i],
    description: t.howWeWork.steps[key].desc,
  }))

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        <Badge>{t.howWeWork.badge}</Badge>
        <h2 className={styles.heading}>
          {t.howWeWork.heading}
          <br />
          <span className={styles.blue}>{t.howWeWork.headingBlue}</span>
        </h2>
        <p className={styles.sub}>{t.howWeWork.sub}</p>

        <div className={styles.grid}>
          {steps.map((step, i) => (
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
