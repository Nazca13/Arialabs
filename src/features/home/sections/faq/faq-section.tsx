'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './faq-section.module.css'

const FAQS = [
  {
    question: 'Layanan apa saja yang ditawarkan Aria Labs?',
    answer: 'Kami menyediakan solusi digital menyeluruh mulai dari web development, brand identity, UI/UX design, hingga graphic design. Setiap proyek disesuaikan dengan tujuan bisnis dan target audiens Anda.',
  },
  {
    question: 'Berapa lama waktu pengerjaan sebuah proyek?',
    answer: 'Tergantung skop pekerjaan. Website standar biasanya memakan waktu 2 sampai 4 minggu; proyek brand identity yang lebih lengkap bisa 4 sampai 8 minggu. Timeline detail akan diberikan saat konsultasi awal.',
  },
  {
    question: 'Bisa gak kalau cuma minta desain atau development-nya aja?',
    answer: 'Bisa. Layanan kami modular, jadi Anda bisa pilih desain saja, development saja, atau proses lengkap dari awal sampai akhir, sesuai kebutuhan.',
  },
  {
    question: 'Apakah Aria Labs melayani startup dan bisnis kecil?',
    answer: 'Tentu. Kami bekerja sama dengan bisnis dari berbagai skala, mulai dari startup dan UMKM hingga perusahaan yang sudah mapan, dengan pendekatan dan harga yang disesuaikan.',
  },
  {
    question: 'Bagaimana cara memulai kerja sama dengan Aria Labs?',
    answer: 'Hubungi kami lewat form kontak atau jadwalkan panggilan. Kami akan diskusikan kebutuhan Anda, tentukan skop proyek bersama, dan susun langkah berikutnya sebelum ada komitmen apa pun.',
  },
]

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

  return (
    <section ref={ref} className={`reveal ${styles.section}`} id="faq">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <Badge>FAQ</Badge>
            <h2 className={styles.heading}>
              Got questions?
              <br />
              <span className={styles.blue}>We&apos;ve got answers</span>
            </h2>
            <p className={styles.sub}>
              Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai layanan,
              proses kerja, dan kolaborasi bersama Aria Labs. Jika masih ada pertanyaan
              lainnya, tim kami siap membantu.
            </p>
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
