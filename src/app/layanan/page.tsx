import type { Metadata } from 'next'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { LayananHero } from '@/features/layanan/sections/hero/layanan-hero'
import { ServicesSection } from '@/features/home/sections/services/services-section'
import { HowWeWork } from '@/features/home/sections/how-we-work/how-we-work'
import { Testimonials } from '@/features/home/sections/testimonials/testimonials'
import { FaqSection } from '@/features/home/sections/faq/faq-section'
import { CtaSection } from '@/features/home/sections/cta/cta-section'

export const metadata: Metadata = {
  title: 'Layanan | Aria Labs',
  description: 'Layanan kreatif dan digital dari Aria Labs — Web Development, Brand Identity, UI/UX Design, Graphic Design, dan Social Media Management.',
}

export default function LayananPage() {
  return (
    <>
      <Navbar />
      <main>
        <LayananHero />
        <ServicesSection />
        <HowWeWork />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
