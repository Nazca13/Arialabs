'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button/button'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './contact-main.module.css'

const CONTACT_ITEMS = [
  {
    icon: '/assets/icons/contact/whatsapp.svg',
    label: 'Phone / WhatsApp',
    value: '+62 812-3456-789',
    href: 'https://wa.me/628123456789',
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
  'Lainnya / Consulation',
]

export function ContactMain() {
  const ref = useScrollReveal<HTMLElement>()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    service: 'Web Development',
    description: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { firstName, lastName, service, description } = formData
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()

    const textMessage = `Halo AriaLabs! 👋
Saya ingin mendiskusikan kebutuhan digital bisnis saya.

📦 Paket / Layanan: ${service}
🏢 Nama / Perusahaan: ${fullName}
📝 Detail Kebutuhan: ${description}

Apakah kita bisa berdiskusi lebih lanjut mengenai estimasi biaya dan waktunya?`

    const encodedText = encodeURIComponent(textMessage)
    const waUrl = `https://wa.me/628123456789?text=${encodedText}`

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
            form and it will directly open a WhatsApp chat with our team.
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
            Fill in your details and tell us about your project.
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
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="service">Paket / Layanan</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
                required
              >
                {SERVICES_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="description">Detail Kebutuhan</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Jelaskan kebutuhan website, desain, atau bisnis Anda..."
                required
              />
            </div>

            <Button type="submit" arrow>Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
