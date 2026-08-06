'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
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
                  4–6 minggu
                </span>
                <span className={styles.metaItem}>
                  <span className={styles.metaLabel}>Services</span>
                  <span className={styles.metaDot}>/</span>
                  {project.services.join(', ')}
                </span>
              </div>
            </div>
            <div className={styles.heroRight}>
              <Image
                src={project.logo}
                alt={project.client}
                width={220}
                height={80}
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Browser-frame with scrollable screenshot */}
          <div className={styles.browserFrame}>
            <div className={styles.browserBar}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
              <span className={styles.browserUrl}>{project.title.toLowerCase().replace(/\s+/g, '')}.id</span>
            </div>
            <div className={styles.browserScroll}>
              <Image
                src={project.heroImage}
                alt={`${project.title} — tampilan website`}
                width={1200}
                height={800}
                priority
                className={styles.browserImg}
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section ref={ref} className={`reveal ${styles.textSection}`}>
        <div className="container">
          <div className={styles.labelRow}>
            <div className={styles.labelCol}>
              <Badge>Challenges</Badge>
            </div>
            <div className={styles.descCol}>
              <p className={styles.desc}>{project.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><hr className={styles.divider} /></div>

      {/* ── Solutions ── */}
      <section className={styles.textSection}>
        <div className="container">
          <div className={styles.labelRow}>
            <div className={styles.labelCol}>
              <Badge>Solutions</Badge>
            </div>
            <div className={styles.descCol}>
              <p className={styles.desc}>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><hr className={styles.divider} /></div>

      {/* ── Results ── */}
      <section className={styles.textSection}>
        <div className="container">
          <div className={styles.labelRow}>
            <div className={styles.labelCol}>
              <Badge>Results</Badge>
            </div>
            <div className={styles.descCol}>
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
