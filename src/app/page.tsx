import { Navbar }           from '@/components/common/navbar/navbar'
import { Footer }           from '@/components/common/footer/footer'
import { HeroSection }      from '@/features/home/sections/hero/hero-section'
import { ClientLogos }      from '@/features/home/sections/client-logos/client-logos'
import { AboutSection }     from '@/features/home/sections/about/about-section'
import { ServicesSection }  from '@/features/home/sections/services/services-section'
import { HowWeWork }        from '@/features/home/sections/how-we-work/how-we-work'
import { SelectedWork }     from '@/features/home/sections/selected-work/selected-work'
import { PricingSection }   from '@/features/home/sections/pricing/pricing-section'
import { FaqSection }       from '@/features/home/sections/faq/faq-section'
import { Testimonials }     from '@/features/home/sections/testimonials/testimonials'
import { EcosystemSection } from '@/features/home/sections/ecosystem/ecosystem'
import { OfficialPartner } from '@/features/home/sections/official-partner/official-partner'
import { CtaSection }       from '@/features/home/sections/cta/cta-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogos />
        <AboutSection />
        <ServicesSection />
        <HowWeWork />
        <SelectedWork />
        <PricingSection />
        <FaqSection />
        <Testimonials />
        <EcosystemSection />
        <OfficialPartner />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
