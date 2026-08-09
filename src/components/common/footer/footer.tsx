import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

const LINKS = {
  Company: [
    { label: 'Beranda',   href: '/' },
    { label: 'Tentang',   href: '/tentang' },
    { label: 'Layanan',   href: '/layanan' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Kontak',    href: '/kontak' },
  ],
  Services: [
    { label: 'Web Development', href: '/layanan/web-development' },
    { label: 'Brand Identity',  href: '/layanan/brand-identity' },
    { label: 'UI/UX Design',    href: '/layanan/uiux-design' },
    { label: 'Graphic Design',  href: '/layanan/graphic-design' },
    { label: 'Social Media Management', href: '/layanan/social-media-management' },
  ],
  Resources: [
    { label: 'FAQ',            href: '/#faq' },
    { label: 'Pricing',        href: '/#pricing' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const SOCIALS = [
  { name: 'Instagram', icon: '/assets/icons/social/instagram.svg', href: 'https://www.instagram.com/arialabs.aquanime?igsh=MWFuNHhxdGRjMWlnbg==' },
  { name: 'TikTok',    icon: '/assets/icons/social/tiktok.svg',    href: 'https://tiktok.com' },
  { name: 'WhatsApp',  icon: '/assets/icons/contact/whatsapp.svg', href: 'https://wa.me/6283832886220' },
  { name: 'LinkedIn',  icon: '/assets/icons/social/linkedin.svg',  href: 'https://linkedin.com' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Link href="/" aria-label="Aria Labs, kembali ke beranda" className={styles.logoLink}>
            <Image
              src="/assets/logo/logo-footer.webp"
              alt="Aria Labs"
              width={170}
              height={60}
              className={styles.logoImg}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <p className={styles.tagline}>Unlock your business potential.</p>
          <div className={styles.socials}>
            {SOCIALS.map(s => (
              <a
                key={s.name}
                href={s.href}
                className={styles.socialBtn}
                aria-label={s.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={s.icon} alt="" width={18} height={18} aria-hidden="true" />
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
