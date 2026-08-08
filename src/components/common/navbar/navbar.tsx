'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button/button'
import styles from './navbar.module.css'

const NAV_ITEMS = [
  { label: 'Beranda',   href: '/' },
  { label: 'Tentang',   href: '/tentang' },
  { label: 'Layanan',   href: '/layanan' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Kontak',    href: '/kontak' },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isKontak = pathname === '/kontak'
  const onHeroBg = isHome && !scrolled

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
              className={`${styles.navLink} ${onHeroBg ? styles.navLinkLight : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {!isKontak && (
          <div className={styles.cta}>
            <Button href="/kontak" size="sm" arrow>Book to Call</Button>
          </div>
        )}

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
            {!isKontak && (
              <div className={styles.drawerCta}>
                <Button href="/kontak" arrow onClick={() => setMobileOpen(false)}>
                  Book to Call
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}