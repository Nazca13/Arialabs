'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge/badge'
import { Button } from '@/components/ui/button/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './pricing-section.module.css'

const CATEGORIES = ['Web Development', 'Brand Identity', 'UI/UX Design', 'Graphic Design'] as const
type Category = typeof CATEGORIES[number]

const PLANS_BY_CATEGORY: Record<Category, Array<{
  name: string
  price: string
  period: string
  description: string
  features: string[]
  featured?: boolean
}>> = {
  'Web Development': [
    {
      name: 'Starter',
      price: 'Rp 5jt',
      period: '/ project',
      description: 'Ideal untuk bisnis kecil yang baru memulai kehadiran digital.',
      features: ['Landing page design', 'Mobile responsive', 'Basic SEO', '1x revisi', 'Delivery 7 hari'],
    },
    {
      name: 'Professional',
      price: 'Rp 15jt',
      period: '/ project',
      description: 'Untuk bisnis yang berkembang dan butuh solusi digital lengkap.',
      features: ['Multi-page website', 'Custom UI/UX design', 'CMS integration', 'Advanced SEO', 'Analytics setup', '3x revisi'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Solusi terukur untuk brand yang sudah mapan dengan kebutuhan kompleks.',
      features: ['Full-stack development', 'Sistem terintegrasi', 'Dedicated team', 'Priority support', 'Maintenance', 'Unlimited revisi'],
    },
  ],
  'Brand Identity': [
    {
      name: 'Starter',
      price: 'Rp 4jt',
      period: '/ project',
      description: 'Fondasi identitas visual untuk brand yang baru mulai.',
      features: ['Logo design', 'Color palette', 'Typography guide', '1x revisi', 'Delivery 5 hari'],
    },
    {
      name: 'Professional',
      price: 'Rp 10jt',
      period: '/ project',
      description: 'Identitas brand lengkap untuk kehadiran yang lebih matang.',
      features: ['Logo & brand mark', 'Brand guideline lengkap', 'Business card & stationery', 'Social media kit', '3x revisi'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Rebranding menyeluruh untuk organisasi berskala besar.',
      features: ['Brand strategy', 'Sistem identitas multi-platform', 'Brand book lengkap', 'Dedicated team', 'Unlimited revisi'],
    },
  ],
  'UI/UX Design': [
    {
      name: 'Starter',
      price: 'Rp 6jt',
      period: '/ project',
      description: 'Desain antarmuka untuk produk digital skala kecil.',
      features: ['Wireframe', 'UI design (up to 10 screens)', 'Basic prototype', '1x revisi', 'Delivery 10 hari'],
    },
    {
      name: 'Professional',
      price: 'Rp 18jt',
      period: '/ project',
      description: 'Riset dan desain pengalaman pengguna secara menyeluruh.',
      features: ['User research', 'Wireframe & UI design lengkap', 'Interactive prototype', 'Design system', '3x revisi'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Desain produk kompleks dengan tim yang berdedikasi.',
      features: ['End-to-end product design', 'Usability testing', 'Design system skala besar', 'Dedicated team', 'Unlimited revisi'],
    },
  ],
  'Graphic Design': [
    {
      name: 'Starter',
      price: 'Rp 2jt',
      period: '/ project',
      description: 'Materi visual untuk kebutuhan promosi sederhana.',
      features: ['Social media assets (5 desain)', 'Basic banner/poster', '1x revisi', 'Delivery 3 hari'],
    },
    {
      name: 'Professional',
      price: 'Rp 7jt',
      period: '/ project',
      description: 'Paket materi visual untuk kampanye yang lebih luas.',
      features: ['Social media assets (20 desain)', 'Marketing collateral', 'Presentation deck', 'Print-ready files', '3x revisi'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Dukungan desain berkelanjutan untuk kebutuhan skala besar.',
      features: ['Monthly design retainer', 'Multi-channel campaign assets', 'Dedicated designer', 'Priority turnaround', 'Unlimited revisi'],
    },
  ],
}

export function PricingSection() {
  const ref = useScrollReveal<HTMLElement>()
  const [category, setCategory] = useState<Category>('Web Development')
  const plans = PLANS_BY_CATEGORY[category]

  return (
    <section ref={ref} className={`reveal ${styles.section}`} id="pricing">
      <div className="container">
        <div className={styles.top}>
          <div>
            <Badge>Pricing Plans</Badge>
            <h2 className={styles.heading}>Choose the Way <span className={styles.blue}>We Work Together</span></h2>
          </div>
          <div className={styles.filter}>
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`${styles.filterBtn} ${category === c ? styles.filterBtnActive : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              <p className={styles.planName}>{plan.name}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && <span className={styles.period}>{plan.period}</span>}
              </div>
              <p className={styles.desc}>{plan.description}</p>
              <hr className={styles.divider} />
              <ul className={styles.features}>
                {plan.features.map(f => (
                  <li key={f} className={styles.featureItem}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                      <path
                        d="M12.5 4L6 10.5L2.5 7"
                        stroke={plan.featured ? '#fff' : '#2FA8FA'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/kontak" variant={plan.featured ? 'outline' : 'primary'} arrow>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
