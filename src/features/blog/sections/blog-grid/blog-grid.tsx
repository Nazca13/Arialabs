'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './blog-grid.module.css'

const CATEGORY_ICON: Record<string, string> = {
  Technology: '/assets/icons/utility/spark.svg',
  Design: '/assets/icons/utility/puzzle.svg',
  'Brand Identity': '/assets/icons/utility/presentation.svg',
  Other: '/assets/icons/utility/meeting.svg',
}

const TABS = ['View all', 'Technology', 'Design', 'Brand Identity', 'Other'] as const

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
  {
    title: 'Choosing the Right Color Palette for Your Brand',
    excerpt: 'Color drives perception before a single word is read. A practical guide to picking palettes that match your brand personality.',
    category: 'Design',
    slug: 'choosing-color-palette',
  },
  {
    title: 'How Startups Should Approach Their First Website',
    excerpt: 'A lean, practical framework for early-stage teams deciding what to build first and what to skip.',
    category: 'Other',
    slug: 'startups-first-website',
  },
]

export function BlogGrid() {
  const ref = useScrollReveal<HTMLElement>()
  const [tab, setTab] = useState<typeof TABS[number]>('View all')

  const posts = tab === 'View all' ? POSTS : POSTS.filter(p => p.category === tab)

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className="container">
        <div className={styles.tabs}>
          {TABS.map(t => (
            <button
              key={t}
              className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={`${styles.thumb} ${styles[`thumbGrad${i % 3}`]}`}>
                <Image
                  src={CATEGORY_ICON[post.category]}
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
                    <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
