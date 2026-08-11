'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './faq-section.module.css'

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.row} ${open ? styles.rowOpen : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className={styles.question}>{question}</span>
        <span className={styles.icon} aria-hidden="true">
          <span className={styles.bar} />
          <span className={`${styles.bar} ${styles.barV}`} />
        </span>
      </button>
      <div className={styles.body}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  )
}

export function FaqSection() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useLanguage()

  const FAQS = [
    { question: t.faq.questions.services.q, answer: t.faq.questions.services.a },
    { question: t.faq.questions.timeline.q, answer: t.faq.questions.timeline.a },
    { question: t.faq.questions.modular.q,  answer: t.faq.questions.modular.a },
    { question: t.faq.questions.scale.q,    answer: t.faq.questions.scale.a },
    { question: t.faq.questions.start.q,    answer: t.faq.questions.start.a },
  ]

  return (
    <section ref={ref} className={`reveal ${styles.section}`} id="faq">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <Badge>{t.faq.badge}</Badge>
            <h2 className={styles.heading}>
              Got questions?
              <br />
              <span className={styles.blue}>We&apos;ve got answers</span>
            </h2>
            <p className={styles.sub}>{t.faq.sub}</p>
          </div>
          <div className={styles.right}>
            {FAQS.map((faq, i) => (
              <FaqRow key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
