'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useLanguage } from '@/contexts/language-context'
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
  'Photo & Video',
  'Consultation / Other',
]

export function ContactMain() {
  const ref = useScrollReveal<HTMLElement>()
  const { lang, t } = useLanguage()
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
    const noService = lang === 'en' ? 'Not selected' : 'Belum dipilih'
    const services = selectedServices.length > 0 ? selectedServices.join(', ') : noService

    const textMessage = lang === 'en'
      ? `Hi AriaLabs! 👋\nI'd like to discuss my digital business needs.\n\n📦 Package / Service: ${services}\n🏢 Name / Company: ${fullName}\n📧 Email: ${formData.email}\n📝 Project Details: ${description}\n\nCan we talk more about the estimated cost and timeline?`
      : `Halo AriaLabs! 👋\nSaya ingin mendiskusikan kebutuhan digital bisnis saya.\n\n📦 Paket / Layanan: ${services}\n🏢 Nama / Perusahaan: ${fullName}\n📧 Email: ${formData.email}\n📝 Detail Kebutuhan: ${description}\n\nApakah kita bisa berdiskusi lebih lanjut mengenai estimasi biaya dan waktunya?`

    const encodedText = encodeURIComponent(textMessage)
    const waUrl = `${WA_DIRECT}?text=${encodedText}`
    window.open(waUrl, '_blank')
  }

  return (
    <section ref={ref} className={`reveal ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <h2 className={styles.heading}>
            {lang === 'en' ? 'Need more information?' : 'Butuh informasi lebih?'}
            <br />
            {lang === 'en' ? 'Get in touch with us' : 'Hubungi kami'}
          </h2>
          <p className={styles.sub}>{t.contact.infoSub}</p>

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
          <h2 className={styles.heading}>{t.contact.formHeading}</h2>
          <p className={styles.sub}>{t.contact.formSub}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="firstName">{t.contact.firstName}</label>
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
                <label htmlFor="lastName">{t.contact.lastName}</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={lang === 'en' ? 'Hudson / Your Brand' : 'Hudson / Brand Anda'}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email">{t.contact.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@you.com"
                required
              />
            </div>

            {/* Multi-select service pills */}
            <div className={styles.field}>
              <label>{t.contact.services} <span className={styles.labelHint}>{t.contact.servicesHint}</span></label>
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
              <label htmlFor="description">{t.contact.description}</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder={t.contact.descPlaceholder}
                required
              />
            </div>

            <div className={styles.submitWrap}>
              <button type="submit" className={styles.submitBtn}>
                {t.contact.sendBtn}
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
