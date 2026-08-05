import type { Metadata } from 'next'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { PageHeader } from '@/components/common/page-header/page-header'
import { BlogGrid } from '@/features/blog/sections/blog-grid/blog-grid'
import { CtaSection } from '@/features/home/sections/cta/cta-section'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insight, strategi, dan inspirasi seputar web development, UI/UX design, brand identity, dan graphic design dari tim Aria Labs.',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Blog"
          subtitle="Insight, strategi, dan inspirasi seputar dunia digital untuk membantu bisnismu terus berkembang."
        />
        <BlogGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
