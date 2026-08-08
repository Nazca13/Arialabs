import type { Metadata } from 'next'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { PageHeader } from '@/components/common/page-header/page-header'
import { ContactMain } from '@/features/kontak/sections/contact-main/contact-main'
import styles from '@/components/common/page-header/page-header.module.css'

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi Aria Labs untuk konsultasi gratis seputar web development, UI/UX design, brand identity, dan graphic design.',
}

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title={<>Let&apos;s <span className={styles.blue}>Talk</span></>}
          subtitle="Have a project in mind? Tell us a bit about it and we'll help you turn it into a plan, and eventually, a launch."
        />
        <ContactMain />
      </main>
      <Footer />
    </>
  )
}
