'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import styles from './footer.module.css'

const SERVICE_LINKS = [
  { label: 'Web Development',         href: '/layanan/web-development' },
  { label: 'Brand Identity',          href: '/layanan/brand-identity' },
  { label: 'UI/UX Design',            href: '/layanan/uiux-design' },
  { label: 'Graphic Design',          href: '/layanan/graphic-design' },
  { label: 'Social Media Management', href: '/layanan/social-media-management' },
]

/* ── Inline social icons (no external files needed, always sharp) ── */
const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

const SvgThreads = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M12.186 2c-5.14.032-8.186 3.127-8.186 8.086v3.828c0 4.972 3.065 8.053 8.186 8.086h-.014c2.136-.014 3.93-.59 5.328-1.714 1.62-1.313 2.5-3.238 2.5-5.478v-.078c-.023-2.697-1.254-4.777-3.476-5.87-.967-.464-2.094-.716-3.347-.768l-.09-.003h-.09c-2.42 0-4.348.849-5.525 2.44-.755 1.007-1.136 2.3-1.136 3.848 0 1.51.37 2.783 1.098 3.78.818 1.124 2.09 1.898 3.761 2.266.57.127 1.21.194 1.906.194.044 0 .088 0 .132-.001 1.223-.024 2.274-.32 3.125-.876.917-.594 1.538-1.464 1.793-2.545l-2.002-.446c-.168.666-.513 1.18-1.025 1.516-.566.37-1.3.56-2.185.575-.038 0-.077.001-.115.001-.582 0-1.085-.065-1.497-.193-.972-.3-1.67-.892-2.074-1.76-.274-.587-.41-1.28-.41-2.05 0-1.052.268-1.905.798-2.538.65-.776 1.688-1.17 3.088-1.17h.07c.883.006 1.613.156 2.17.447.748.394 1.165 1.02 1.241 1.862.012.136.018.272.016.406-.044 1.076-.46 1.89-1.2 2.36-.644.408-1.49.617-2.52.617-.015 0-.03 0-.045-.001-1.011-.02-1.764-.252-2.238-.688a1.8 1.8 0 0 1-.576-1.168l-2.016.288c.154 1.17.736 2.11 1.69 2.73.875.568 2.02.872 3.408.9.038 0 .077.001.115.001 1.564 0 2.896-.364 3.952-1.082 1.26-.856 1.96-2.148 2.034-3.738l.002-.12v-.008c0-.195-.008-.39-.023-.582-.192-2.44-1.73-4.07-4.387-4.633-.696-.148-1.47-.225-2.3-.228h-.05c-1.86 0-3.34.504-4.4 1.497-.998.934-1.51 2.273-1.51 3.98 0 .072.001.144.003.215H4.83c0-3.914 2.452-6.286 7.356-6.315h.014c4.74.03 7.3 2.474 7.3 6.315.001 3.825-2.546 6.295-7.3 6.315H12c-4.65-.03-6.686-2.492-6.686-6.315v-3.828C5.314 5.47 7.336 2.95 12 2.955z"/>
  </svg>
)

const SvgX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const SvgTikTok = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.93a8.2 8.2 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
  </svg>
)

const SvgWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const SvgLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/arialabs.an?igsh=MWswZjlvb2gzdWdwNA==', Icon: SvgInstagram },
  { name: 'Threads',   href: 'https://www.threads.com/@arialabs.an',                             Icon: SvgThreads   },
  { name: 'X',         href: 'https://x.com/arialabs',                                            Icon: SvgX         },
  { name: 'TikTok',    href: 'https://tiktok.com/@arialabs.an',                                   Icon: SvgTikTok    },
  { name: 'WhatsApp',  href: 'https://wa.me/6283832886220',                                        Icon: SvgWhatsApp  },
  { name: 'LinkedIn',  href: 'https://linkedin.com',                                               Icon: SvgLinkedIn  },
]

export function Footer() {
  const { t } = useLanguage()

  const LINKS = {
    [t.footer.company]: [
      { label: t.footer.links.home,      href: '/' },
      { label: t.footer.links.about,     href: '/tentang' },
      { label: t.footer.links.services,  href: '/layanan' },
      { label: t.footer.links.portfolio, href: '/portfolio' },
      { label: t.footer.links.contact,   href: '/kontak' },
    ],
    [t.footer.services]: SERVICE_LINKS,
    [t.footer.resources]: [
      { label: t.footer.links.faq,      href: '/#faq' },
      { label: t.footer.links.pricing,  href: '/#pricing' },
      { label: t.footer.links.privacy,  href: '/privacy' },
      { label: t.footer.links.terms,    href: '/terms' },
    ],
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Link href="/" aria-label="Aria Labs - back to home" className={styles.logoLink}>
            <Image
              src="/assets/logo/logo-footer.webp"
              alt="Aria Labs"
              width={170}
              height={60}
              className={styles.logoImg}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <p className={styles.tagline}>{t.footer.tagline}</p>
          <div className={styles.socials}>
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                className={styles.socialBtn}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([col, items]) => (
          <div key={col} className={styles.col}>
            <p className={styles.colHeading}>{col}</p>
            {items.map(item => (
              <Link key={item.href} href={item.href} className={styles.colLink}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.watermark} aria-hidden="true">Aria Labs</div>
    </footer>
  )
}

