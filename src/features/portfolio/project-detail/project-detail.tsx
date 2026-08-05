'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { Button } from '@/components/ui/button/button'
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
}

export function ProjectDetail({ project }: Props) {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <article className={styles.article}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroMeta}>
            <Badge>{project.category}</Badge>
            <div className={styles.heroMetaInfo}>
              <span>Year: {project.year}</span>
              <span>Client: {project.client}</span>
              <span>Services: {project.services.join(', ')}</span>
            </div>
          </div>
          
          <h1 className={styles.heroTitle}>{project.title}</h1>
          
          <div className={styles.heroImageWrap}>
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1200}
              height={700}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section ref={ref} className={`reveal ${styles.overview}`}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.badge}>01</span>
                Overview
              </h2>
              <p className={styles.text}>{project.description}</p>
            </div>
            <div className={styles.overviewLogo}>
              <Image
                src={project.logo}
                alt={project.title}
                width={200}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionHeading}>
            <span className={styles.badge}>02</span>
            Challenge
          </h2>
          <p className={styles.text}>{project.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionHeading}>
            <span className={styles.badge}>03</span>
            Solution
          </h2>
          <p className={styles.text}>{project.solution}</p>
        </div>
      </section>

      {/* Visuals - 3 window layout */}
      <section className={styles.visuals}>
        <div className="container">
          <div className={styles.visualsGrid}>
            {/* Main desktop view */}
            <div className={styles.visualMain}>
              <div className={styles.window}>
                <div className={styles.windowBar}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                </div>
                <div className={styles.windowContent}>
                  <Image
                    src={project.images.desktop}
                    alt={`${project.title} Desktop View`}
                    fill
                    className={styles.windowImage}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </div>

            {/* Mobile views - empty for now */}
            <div className={styles.visualSide}>
              <div className={`${styles.window} ${styles.windowSmall}`}>
                <div className={styles.windowBar}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                </div>
                <div className={styles.windowContent}>
                  {project.images.mobile1 && (
                    <Image
                      src={project.images.mobile1}
                      alt={`${project.title} Mobile View 1`}
                      fill
                      className={styles.windowImage}
                      sizes="300px"
                    />
                  )}
                </div>
              </div>

              <div className={`${styles.window} ${styles.windowSmall}`}>
                <div className={styles.windowBar}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                </div>
                <div className={styles.windowContent}>
                  {project.images.mobile2 && (
                    <Image
                      src={project.images.mobile2}
                      alt={`${project.title} Mobile View 2`}
                      fill
                      className={styles.windowImage}
                      sizes="300px"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionHeading}>
            <span className={styles.badge}>04</span>
            Result
          </h2>
          <p className={styles.text}>{project.result}</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonial}>
        <div className="container">
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>&ldquo;{project.testimonial.text}&rdquo;</p>
            <p className={styles.testimonialAuthor}>— {project.testimonial.author}</p>
          </div>
        </div>
      </section>

      {/* Other Projects CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaHeading}>
            <span className={styles.blue}>Explore</span> Other Projects
          </h2>
          <div className={styles.ctaButtons}>
            <Button href="/portfolio">View All Projects</Button>
            <Button href="/kontak" variant="outline">Start Your Project</Button>
          </div>
        </div>
      </section>
    </article>
  )
}
