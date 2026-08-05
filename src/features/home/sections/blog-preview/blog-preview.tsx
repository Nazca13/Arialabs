'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './blog-preview.module.css'

const CATEGORY_ICON: Record<string, string> = {
  Technology: '/assets/icons/utility/spark.svg',
  Design: '/assets/icons/utility/puzzle.svg',
  'Brand Identity': '/assets/icons/utility/presentation.svg',
}

const POSTS = [
  {
    title: 'Why Your Brand Needs a Digital Strategy in 2026',
    excerpt: "In today's hyper-connected world, a well-crafted digital strategy is no longer optional. Learn how to position your brand for sustainable growth.",
    category: 'Technology',
    slug: 'brand-digital-strategy-2026',
  },
  {
    title: 'The Role of UI/UX in Driving Business Conversions',
    excerpt: 'Great design does more than look good. Discover how thoughtful user experience directly impacts your bottom line and customer retention.',
    category: 'Design',
    slug: 'uiux-driving-conversions',
  },
  {
    title: 'Building a Memorable Brand Identity from Scratch',
    excerpt: 'Your brand is more than a logo. Explore the essential elements of brand identity and how to create one that resonates with your audience.',
    category: 'Brand Identity',
    slug: 'building-brand-identity',
  },
  {
    title: 'Web Performance Optimization Best Practices',
    excerpt: 'Speed matters. Learn the techniques we use to deliver fast, accessible websites that rank higher and convert better.',
    category: 'Technology',
    slug: 'web-performance-optimization',
  },
]

export function BlogPreview() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        <Badge>The Journal</Badge>
        <h2 className={styles.heading}>Ideas That <span className={styles.blue}>Inspire Better Design</span></h2>
        <p className={styles.sub}>
          Wawasan segar, visual kuat, dan inspirasi strategi branding, UI/UX, serta strategi
          digital yang membantu bisnis berkembang di era digital.
        </p>

        <div className={styles.grid}>
          {POSTS.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={`${styles.thumb} ${styles[`thumbGrad${i % 3}`]}`}>
                <Image
                  src={CATEGORY_ICON[post.category] ?? '/assets/icons/utility/spark.svg'}
                  alt=""
                  width={56}
                  height={56}
                  aria-hidden="true"
                  className={styles.thumbIcon}
                />
                <span className={styles.cat}>{post.category}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>
                  Read post
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/blog" className={styles.viewAllLink}>
            Explore All Articles
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M2 7.5H13M13 7.5L8.5 3M13 7.5L8.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <hr className="dashed-divider" />
      </div>
    </section>
  )
}
