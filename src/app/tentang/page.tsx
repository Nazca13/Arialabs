import type { Metadata } from 'next'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { AboutHero } from '@/features/about/sections/hero/about-hero'
import { AboutWhoWeAre } from '@/features/about/sections/who-we-are/who-we-are'
import { HowWeWork } from '@/features/home/sections/how-we-work/how-we-work'
import { EcosystemSection } from '@/features/home/sections/ecosystem/ecosystem'
import { AboutClientWall } from '@/features/about/sections/client-wall/client-wall'
import { AboutFoundation } from '@/features/about/sections/foundation/foundation'
import { CtaSection } from '@/features/home/sections/cta/cta-section'

export const metadata: Metadata = {
  title: 'Tentang Kami | Aria Labs',
  description: 'Kenali Aria Labs lebih dekat, Creative Digital Studio yang membantu bisnis membangun identitas visual, pengalaman digital, dan website modern.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutWhoWeAre />
        <HowWeWork />
        <EcosystemSection />
        <AboutClientWall />
        <AboutFoundation />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
