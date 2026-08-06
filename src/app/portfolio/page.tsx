import type { Metadata } from 'next'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { PortfolioHero } from '@/features/portfolio/sections/hero/portfolio-hero'
import { ClientLogos } from '@/features/home/sections/client-logos/client-logos'
import { PortfolioGrid } from '@/features/portfolio/sections/grid/portfolio-grid'
import { CtaSection } from '@/features/home/sections/cta/cta-section'

export const metadata: Metadata = {
  title: 'Portfolio | Aria Labs',
  description: 'Karya terbaik Aria Labs — web development, UI/UX design, brand identity, graphic design, dan social media management untuk bisnis di seluruh Indonesia.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <ClientLogos />
        <PortfolioGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
