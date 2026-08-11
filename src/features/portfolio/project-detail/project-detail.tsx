'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
import styles from './project-detail.module.css'

type ProjectData = {
  title: string
  category: string
  year: string
  client: string
  description: string
  challenge: string
  solution: string
  result: string
  logo: string
  heroImage: string
  testimonial: {
    text: string
    author: string
  }
  services: string[]
  images: {
    desktop: string
    mobile1: string | null
    mobile2: string | null
  }
}

type Props = {
  project: ProjectData
  otherProjects?: { title: string; slug: string; image: string; category: string }[]
}

export function ProjectDetail({ project, otherProjects = [] }: Props) {
  const ref = useScrollReveal<HTMLElement>()
  const { lang } = useLanguage()

  return (
    <article className={styles.article}>

      {/* ── Hero: meta left + logo right ── */}
      <section className={styles.hero}>
        <div className="container">
          <Badge>Our Projects</Badge>
          <div className={styles.heroTop}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>{project.title}</h1>
              <div className={styles.heroMeta}>
                <span className={styles.metaItem}>
                  <span className={styles.metaLabel}>Year</span>
                  <span className={styles.metaDot}>/</span>
                  {project.year}
                </span>
                <span className={styles.metaItem}>
                  <span className={styles.metaLabel}>Timeline</span>
                  <span className={styles.metaDot}>/</span>
                  {lang === 'en' ? '4–6 weeks' : '4–6 minggu'}
                </span>
              </div>
            </div>
            <div className={styles.heroRight}>
              <Image
                src={project.logo}
                alt={project.title}
                width={160}
                height={50}
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className={styles.heroBanner}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className={styles.heroBannerImg}
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Details Grid ── */}
      <section ref={ref} className={`reveal ${styles.details}`}>
        <div className="container">
          <div className={styles.detailsGrid}>
            <div className={styles.detailBlock}>
              <h2 className={styles.sectionLabel}>Client &amp; Scope</h2>
              <p className={styles.clientName}>{project.client}</p>
              <div className={styles.servicesList}>
                {project.services.map(s => (
                  <span key={s} className={styles.servicePill}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.detailBlock}>
              <h2 className={styles.sectionLabel}>Overview</h2>
              <p className={styles.desc}>{project.description}</p>
            </div>

            <div className={styles.detailBlock}>
              <h2 className={styles.sectionLabel}>The Challenge</h2>
              <p className={styles.desc}>{project.challenge}</p>
            </div>

            <div className={styles.detailBlock}>
              <h2 className={styles.sectionLabel}>Our Solution</h2>
              <p className={styles.desc}>{project.solution}</p>
            </div>

            <div className={styles.detailBlock}>
              <h2 className={styles.sectionLabel}>The Result</h2>
              <p className={styles.desc}>{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className={styles.testimonial}>
        <div className="container">
          <div className={styles.testimonialInner}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quoteText}>{project.testimonial.text}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>
                {project.testimonial.author[0]}
              </div>
              <div>
                <p className={styles.authorName}>{project.testimonial.author}</p>
                <p className={styles.authorRole}>{project.client}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Projects ── */}
      {otherProjects.length > 0 && (
        <section className={styles.others}>
          <div className="container">
            <Badge>Projects</Badge>
            <h2 className={styles.othersHeading}>Other Projects</h2>
            <div className={styles.othersGrid}>
              {otherProjects.map(p => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className={styles.otherCard}>
                  <div className={styles.otherImg}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      loading="lazy"
                      className={styles.otherImgEl}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={styles.otherBody}>
                    <span className={styles.otherCat}>{p.category}</span>
                    <h3 className={styles.otherTitle}>{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
