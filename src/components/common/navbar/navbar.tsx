'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button/button'
import { useLanguage } from '@/contexts/language-context'
import styles from './navbar.module.css'

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isKontak = pathname === '/kontak'
  const onHeroBg = isHome && !scrolled
  const { lang, setLang, t } = useLanguage()

  const NAV_ITEMS = [
    { label: t.nav.home,      href: '/' },
    { label: t.nav.about,     href: '/tentang' },
    { label: t.nav.services,  href: '/layanan' },
    { label: t.nav.portfolio, href: '/portfolio' },
    { label: t.nav.contact,   href: '/kontak' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function isActive(href: string) {
    return href === '/' ? pathname === '/' : pathname.startsWith(href)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${mobileOpen ? styles.headerOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link 
          href="/" 
          className={styles.logo} 
          aria-label="Aria Labs, kembali ke beranda"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/assets/logo/logo.svg"
            alt="Aria Labs"
            width={48}
            height={48}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <nav
          className={`${styles.pill} ${scrolled ? styles.pillSolid : ''}`}
          aria-label="Navigasi utama"
        >
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                styles.navLink,
                onHeroBg ? styles.navLinkLight : '',
                isActive(item.href) && !onHeroBg ? styles.navLinkActive : '',
              ].filter(Boolean).join(' ')}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.rightGroup}>
          {/* Language toggle */}
          <button
            className={`${styles.langToggle} ${onHeroBg ? styles.langToggleLight : ''}`}
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          >
            <span className={lang === 'id' ? styles.langActive : styles.langInactive}>ID</span>
            <span className={styles.langDivider}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
          </button>

          {!isKontak && (
            <div className={styles.cta}>
              <Button href="/kontak" size="sm" arrow>{t.nav.bookToCall}</Button>
            </div>
          )}
        </div>

        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''} ${onHeroBg && !mobileOpen ? styles.burgerLight : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className={styles.drawer} role="dialog" aria-modal="true">
          <div className={styles.drawerContent}>
            <nav className={styles.drawerNav}>
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.drawerLink} ${isActive(item.href) ? styles.drawerLinkActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language toggle in mobile drawer */}
            <button
              className={styles.drawerLangToggle}
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            >
              <span className={lang === 'id' ? styles.langActive : styles.langInactive}>ID</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ opacity: 0.5 }}>
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            </button>

            {!isKontak && (
              <div className={styles.drawerCta}>
                <Button href="/kontak" arrow onClick={() => setMobileOpen(false)}>
                  {t.nav.bookToCall}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}