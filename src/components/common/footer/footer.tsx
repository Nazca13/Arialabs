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
  <svg viewBox="0 0 640 640" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M436.8 302C436.2 232.4 398.5 190.5 334.8 190.5C292.3 190.5 256.5 209.7 237.7 240.4L278.9 269.1C289.6 252.3 304.3 238.3 331.3 238.3C361.8 238.3 377.6 255.3 382.1 286.8C367.4 284.5 352.6 283.3 337.5 283.3C255.1 283.3 216.4 320.6 216.4 369.9C216.4 419.2 255.2 449.6 312.3 449.6C375 449.6 412.4 407.4 427.7 355.1C443.6 362.3 454.6 379.1 454.6 404.4C454.6 472 376.6 508.9 310.5 508.9C213 508.9 149.2 444.9 149.2 340.7C149.2 213.1 233.5 131.3 346.8 131.3C422.8 131.3 460.4 164.7 486 209.4L528 179.9C500.2 121.9 438.1 80.4 344.9 80.4C196.4 80.4 95.4 185.8 95.4 338.6C95.4 478.4 194.3 559.5 312.1 559.5C409.5 559.5 507.9 502.7 507.9 405.5C507.9 354.7 478.7 321 436.7 302zM310.4 398.9C288.9 398.9 270 388.7 270 369.9C270 340.3 306.4 331.3 342 331.3C355.5 331.3 368.8 332.2 380.5 334.8C372.1 373.3 347.1 399 310.5 399L310.5 399z"/>
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

