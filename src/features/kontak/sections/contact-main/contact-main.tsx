'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './contact-main.module.css'

const WA_NUMBER = '6283832886220'
const WA_DIRECT = `https://wa.me/${WA_NUMBER}`

const CONTACT_ITEMS = [
  {
    icon: '/assets/icons/contact/whatsapp.svg',
    label: 'WhatsApp',
    value: '+62 838-3288-6220',
    href: WA_DIRECT,
  },
  {
    icon: '/assets/icons/contact/email.svg',
    label: 'Email',
    value: 'arialabs.aquanime@gmail.com',
    href: 'mailto:arialabs.aquanime@gmail.com',
  },
  {
    icon: '/assets/icons/contact/location.svg',
    label: 'Address',
    value: 'Jl. Pulo Besar 1 No. 11, RT.3/RW. 11, Sunter Jaya, Kec. Tanjung Priok, Jakarta Utara, DKI Jakarta 14350',
    href: undefined as string | undefined,
  },
]

const SERVICES_OPTIONS = [
  'Web Development',
  'Brand Identity',
  'UI/UX Design',
  'Graphic Design',
  'Social Media Management',
  'Consultation / Lainnya',
]

export function ContactMain() {
  const ref = useScrollReveal<HTMLElement>()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  })
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function toggleService(service: string) {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { firstName, lastName, description } = formData
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()
    const services = selectedServices.length > 0 ? selectedServices.join(', ') : 'Belum dipilih'

    const textMessage = `Halo AriaLabs! 👋
Saya ingin mendiskusikan kebutuhan digital bisnis saya.

📦 Paket / Layanan: ${services}
🏢 Nama / Perusahaan: ${fullName}
📧 Email: ${formData.email}
📝 Detail Kebutuhan: ${description}

Apakah kita bisa berdiskusi lebih lanjut mengenai estimasi biaya dan waktunya?`

    const encodedText = encodeURIComponent(textMessage)
    const waUrl = `${WA_DIRECT}?text=${encodedText}`
    window.open(waUrl, '_blank')
  }

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            Need more information?
            <br />
            Get in touch with us
          </h2>
          <p className={styles.sub}>
            We&apos;re here to help. Reach out through any of the channels below, or fill out the
            form, kami langsung reply via WhatsApp.
          </p>

          <div className={styles.items}>
            {CONTACT_ITEMS.map(item => {
              const inner = (
                <>
                  <span className={styles.iconBadge}>
                    <Image src={item.icon} alt="" width={22} height={22} aria-hidden="true" />
                  </span>
                  <span className={styles.itemText}>
                    <span className={styles.itemLabel}>{item.label}</span>
                    <span className={styles.itemValue}>{item.value}</span>
                  </span>
                </>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.item}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label} className={styles.item}>{inner}</div>
              )
            })}
          </div>
        </div>

        <div className={styles.formWrap}>
          <h2 className={styles.heading}>Start Your Legacy</h2>
          <p className={styles.sub}>
            Isi detail kamu dan pilih layanan yang dibutuhkan. Kami akan langsung hubungi via WhatsApp.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jack"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="lastName">Last name / Company</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Hudson / Brand Anda"
                  required
                />/
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@kamu.com"
                required
              />
            </div>

            {/* Multi-select service pills */}
            <div className={styles.field}>
              <label>Paket / Layanan <span className={styles.labelHint}>(pilih satu atau lebih)</span></label>
              <div className={styles.servicePills}>
                {SERVICES_OPTIONS.map(opt => {
                  const active = selectedServices.includes(opt)
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleService(opt)}
                      className={`${styles.pill} ${active ? styles.pillActive : ''}`}
                    >
                      {active && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="description">Detail Kebutuhan</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Ceritakan kebutuhan website, desain, atau bisnis kamu..."
                required
              />
            </div>

            <div className={styles.submitWrap}>
              <button type="submit" className={styles.submitBtn}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2 7.5H13M13 7.5L8.5 3M13 7.5L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
