'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './services-section.module.css'

const SERVICES = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'Website modern, cepat, dan scalable, dibangun dengan teknologi terkini untuk mendukung pertumbuhan bisnis digital Anda secara berkelanjutan.',
    image: '/assets/images/characters/aria-service/aria-web.svg',
    href: '/layanan/web-development',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    desc: 'Identitas visual yang kuat dan konsisten, dari logo hingga brand guideline yang mencerminkan nilai dan karakter unik bisnis Anda.',
    image: '/assets/images/characters/aria-service/aria-brand.svg',
    href: '/layanan/brand-identity',
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    desc: 'Desain antarmuka yang intuitif dan berpusat pada pengguna, menciptakan pengalaman digital yang nyaman, menarik, dan berdampak.',
    image: '/assets/images/characters/aria-service/aria-uiux.svg',
    href: '/layanan/uiux-design',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    desc: 'Konten visual yang memukau, dari poster dan banner hingga social media kit yang siap pakai dan meningkatkan engagement brand Anda.',
    image: '/assets/images/characters/aria-service/aria-graphic.svg',
    href: '/layanan/graphic-design',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    desc: 'Pengelolaan akun media sosial Anda secara profesional, mulai dari strategi konten, desain visual, copywriter, hingga moderasi audiens.',
    image: '/assets/images/characters/aria-service/aria-sosmed.svg',
    href: '/layanan/social-media-management',
  },
]

export function ServicesSection() {
  const [openId, setOpenId] = useState<string>('')
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        <Badge>Services</Badge>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            What <span className={styles.blue}>We Build</span>
          </h2>
          <p className={styles.sub}>
            Kami menghadirkan layanan kreatif dan digital yang membantu bisnis membangun
            identitas, meningkatkan pengalaman pengguna, dan memperkuat kehadiran digital
            melalui solusi yang dirancang sesuai kebutuhan.
          </p>
        </div>

        <div className={styles.list}>
          {/* scrolling background ticker, sits behind the rows */}
          <div className={styles.ticker} aria-hidden="true">
            <div className={styles.tickerTrack}>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i}>ARIA LABS SERVICES</span>
              ))}
            </div>
          </div>

          {SERVICES.map(s => {
            const isOpen = openId === s.id
            return (
              <div
                key={s.id}
                className={`${styles.row} ${isOpen ? styles.rowOpen : ''}`}
                onClick={() => setOpenId(isOpen ? '' : s.id)}
              >
                <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
                <span className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />

                <div className={styles.rowMid}>
                  <div className={styles.rowBrand}>
                    <span className={`${styles.rowTitle} ${isOpen ? styles.rowTitleOpen : ''}`}>{s.title}</span>
                  </div>
                  {isOpen && (
                    <>
                      <p className={styles.rowDesc}>{s.desc}</p>
                      <Link
                        href={s.href}
                        className={styles.viewMore}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View More
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                          <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </>
                  )}
                </div>

                <div className={styles.rowImage}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    loading="lazy"
                    className={styles.rowImg}
                    sizes="220px"
                  />
                </div>

                <span className={styles.rowTrigger}>{isOpen ? 'Close' : 'Open'}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
