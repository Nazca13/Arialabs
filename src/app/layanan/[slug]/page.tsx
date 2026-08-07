import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { CtaSection } from '@/features/home/sections/cta/cta-section'
import { HowWeWork } from '@/features/home/sections/how-we-work/how-we-work'
import { PricingSection } from '@/features/home/sections/pricing/pricing-section'
import { ServiceDetailHero } from '@/features/layanan/sections/service-detail/service-detail-hero'
import { ServiceBenefits } from '@/features/layanan/sections/service-detail/service-benefits'
import { ServicePortfolio } from '@/features/layanan/sections/service-detail/service-portfolio'

type ServiceData = {
  title: string
  badge: string
  tagline: string
  description: string
  mascot: string
  categoryName: string
  benefits: Array<{ title: string; desc: string }>
}

const SERVICES_DATA: Record<string, ServiceData> = {
  'web-development': {
    title: 'Web Development',
    badge: 'Core Solution',
    tagline: 'Website Modern, Cepat & Scalable untuk Eskalasi Bisnis Anda',
    description: 'Kami merancang dan membangun website kustom berkinerja tinggi yang responsif di semua perangkat, cepat dimuat, aman, dan dioptimalkan untuk konversi serta pertumbuhan mesin pencari (SEO).',
    mascot: '/assets/images/characters/aria-service/aria-web.svg',
    categoryName: 'Web Development',
    benefits: [
      {
        title: 'Desain Modern & Unik',
        desc: 'Desain khusus yang dibuat dari nol sesuai karakter brand Anda, bukan sekadar template pasaran.',
      },
      {
        title: 'Sepenuhnya Responsif',
        desc: 'Tampilan sempurna dan interaktif di semua ukuran layar, dari ponsel pintar hingga layar desktop 4K.',
      },
      {
        title: 'Super Cepat (Core Web Vitals)',
        desc: 'Dioptimalkan dengan arsitektur modern Next.js untuk waktu muat secepat kilat dan pengalaman pengguna terbaik.',
      },
      {
        title: 'Struktur SEO-Friendly',
        desc: 'Fondasi arsitektur dan meta tags terstruktur agar website Anda lebih mudah ditemukan di mesin pencari.',
      },
      {
        title: 'Keamanan Berlapis',
        desc: 'Perlindungan terhadap ancaman siber dengan standar enkripsi SSL dan praktik keamanan modern.',
      },
      {
        title: 'Dukungan Purna Jual',
        desc: 'Pendampingan teknis dan pemeliharaan berkala setelah peluncuran agar website selalu beroperasi lancar.',
      },
    ],
  },
  'brand-identity': {
    title: 'Brand Identity',
    badge: 'Visual Strategy',
    tagline: 'Identitas Visual Otentik yang Memikat & Berdampak Panjang',
    description: 'Kami membangun fondasi merek yang kuat melalui desain logo otentik, palet warna berkarakter, tipografi terpilih, serta panduan brand komprehensif yang membedakan bisnis Anda dari kompetitor.',
    mascot: '/assets/images/characters/aria-service/aria-brand.svg',
    categoryName: 'Brand Identity',
    benefits: [
      {
        title: 'Filosofi Konseptual',
        desc: 'Setiap elemen logo dan bentuk visual dirancang berdasarkan cerita merek dan nilai inti bisnis Anda.',
      },
      {
        title: 'Brand Guideline Lengkap',
        desc: 'Dokumen panduan komprehensif untuk penggunaan logo, warna, dan huruf di media cetak maupun digital.',
      },
      {
        title: 'Aset Vektor Siap Pakai',
        desc: 'Paket file master lengkap (SVG, PNG, PDF, EPS, AI) yang siap langsung digunakan tim pemasaran Anda.',
      },
      {
        title: 'Materi Kit Stasioneri',
        desc: 'Desain kartu nama, kop surat, amplop, dan amplop stasioneri kantor yang elegan dan profesional.',
      },
      {
        title: 'Hierarki Visual Konsisten',
        desc: 'Skema warna dan komposisi yang kohesif untuk membangun kepercayaan dan rekognisi audiens.',
      },
      {
        title: 'Kepemilikan Hak Cipta Penuh',
        desc: 'Hak cipta atas seluruh desain identitas brand diserahkan 100% secara eksklusif kepada Anda.',
      },
    ],
  },
  'uiux-design': {
    title: 'UI/UX Design',
    badge: 'Product Experience',
    tagline: 'Pengalaman Digital Intuitif yang Nyaman & Meningkatkan Konversi',
    description: 'Kami melakukan riset pengguna, wireframing, dan penyusunan prototipe interaktif untuk menghasilkan aplikasi atau platform web dengan navigasi alami, tampilan estetis, dan pengalaman pengguna yang luar biasa.',
    mascot: '/assets/images/characters/aria-service/aria-uiux.svg',
    categoryName: 'UI/UX Design',
    benefits: [
      {
        title: 'User Research & Flow Map',
        desc: 'Analisis perilaku dan pemetaan alur pengguna yang intuitif untuk mengurangi friksi navigasi.',
      },
      {
        title: 'Wireframing Presisi',
        desc: 'Sketsa tata letak struktural sebelum tahap pengembangan visual untuk efisiensi keputusan desain.',
      },
      {
        title: 'Design System Terstruktur',
        desc: 'Komponen UI modular yang rapi dan konsisten (ready for developer handoff).',
      },
      {
        title: 'Prototipe Interaktif',
        desc: 'Simulasi aplikasi nyata di Figma yang dapat langsung diuji coba sebelum mulai tahap koding.',
      },
      {
        title: 'Aksesibilitas Tinggi',
        desc: 'Standar kontras warna, ukuran teks, dan responsivitas yang ramah bagi semua pengguna.',
      },
      {
        title: 'Usability Testing',
        desc: 'Pengujian langsung ke audiens target untuk memvalidasi kenyamanan dan efisiensi pengalaman pengguna.',
      },
    ],
  },
  'graphic-design': {
    title: 'Graphic Design',
    badge: 'Creative Visuals',
    tagline: 'Desain Visual Memukau untuk Memperkuat Kampanye Promosi Anda',
    description: 'Solusi visual kreatif untuk seluruh media pemasaran Anda — mulai dari materi promosi cetak, baliho, brosur, banner digital, hingga materi presentasi bisnis yang estetik dan komunikatif.',
    mascot: '/assets/images/characters/aria-service/aria-graphic.svg',
    categoryName: 'Graphic Design',
    benefits: [
      {
        title: 'Visual Komunikatif',
        desc: 'Desain menarik yang efektif menyampaikan pesan pemasaran dan meningkatkan keterlibatan audiens.',
      },
      {
        title: 'Format Ready-to-Print & Digital',
        desc: 'Berkas resolusi tinggi CMYK untuk cetak presisi serta file RGB yang dioptimalkan untuk digital.',
      },
      {
        title: 'Tenggat Waktu Cepat',
        desc: 'Proses produksi tepat waktu yang disesuaikan dengan linimasa kampanye promosi bisnis Anda.',
      },
      {
        title: 'Aset Pemasaran Serbaguna',
        desc: 'Variasi spanduk, brosur, poster, hingga banner promosi dalam satu paket terpadu.',
      },
      {
        title: 'Pitch Deck & Presentasi Estetik',
        desc: 'Desain slide presentasi bisnis yang rapi, persuasif, dan mencerminkan kelas bisnis Anda.',
      },
      {
        title: 'Revisi Terstruktur',
        desc: 'Iterasi desain yang terbuka dan terarah untuk memastikan hasil akhir memuaskan.',
      },
    ],
  },
  'social-media-management': {
    title: 'Social Media Management',
    badge: 'Audience Growth',
    tagline: 'Strategi & Pengelolaan Media Sosial Profesional untuk Pertumbuhan Merek',
    description: 'Kami mengelola akun media sosial bisnis Anda secara konsisten — mulai dari riset konten, pembuatan visual feed/reels, penulisan caption persuasif, hingga analisis performa bulanan.',
    mascot: '/assets/images/characters/aria-service/aria-sosmed.svg',
    categoryName: 'Social Media Management',
    benefits: [
      {
        title: 'Kalender Konten Bulanan',
        desc: 'Perencanaan jadwal posting terstruktur yang relevan dengan tren dan target audiens bisnis Anda.',
      },
      {
        title: 'Desain Feed & Motion Video',
        desc: 'Konten gambar dan video pendek (Reels/Shorts) dengan estetik visual kelas atas.',
      },
      {
        title: 'Copywriting Persuasif',
        desc: 'Penulisan teks caption engaging yang memicu diskusi, likes, shares, dan konversi calon pembeli.',
      },
      {
        title: 'Riset Tagar & Audio Tren',
        desc: 'Strategi penggunaan tagar dan musik populer untuk memperluas jangkauan konten secara organik.',
      },
      {
        title: 'Laporan Analisis Performa',
        desc: 'Laporan metrik evaluasi bulanan yang transparan untuk memantau pertumbuhan jangkauan akun.',
      },
      {
        title: 'Manajemen Komunitas',
        desc: 'Interaksi proaktif membalas komentar dan pesan masuk untuk membangun hubungan erat dengan pengikut.',
      },
    ],
  },
}

// Map alias slugs
SERVICES_DATA['social-media'] = SERVICES_DATA['social-media-management']

const ALL_PROJECTS = [
  {
    title: 'PHASE Fragrance',
    category: 'Web Development',
    slug: 'phase-fragrance',
    image: '/assets/projects-image/web-development/phase.webp',
  },
  {
    title: 'Aquanime Official Website',
    category: 'Web Development',
    slug: 'aquanime-studio',
    image: '/assets/projects-image/web-development/aquanime.id.webp',
  },
  {
    title: 'Jejak Lokal',
    category: 'Web Development',
    slug: 'jejak-lokal',
    image: '/assets/projects-image/web-development/jejaklokal.id.webp',
  },
  {
    title: 'Mae News',
    category: 'Web Development',
    slug: 'mae-news',
    image: '/assets/projects-image/web-development/maenews.id.webp',
  },
]

export function generateStaticParams() {
  return [
    { slug: 'web-development' },
    { slug: 'brand-identity' },
    { slug: 'uiux-design' },
    { slug: 'graphic-design' },
    { slug: 'social-media-management' },
    { slug: 'social-media' },
  ]
}

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES_DATA[params.slug]
  if (!service) return { title: 'Layanan Tidak Ditemukan | Aria Labs' }

  return {
    title: `${service.title} | Aria Labs`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Aria Labs`,
      description: service.description,
      images: ['/og-image.jpg'],
    },
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES_DATA[params.slug]
  if (!service) {
    notFound()
  }

  // Filter projects by category
  const matchingProjects = ALL_PROJECTS.filter(p => p.category === service.categoryName)

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetailHero
          title={service.title}
          badge={service.badge}
          tagline={service.tagline}
          description={service.description}
          mascot={service.mascot}
        />
        <ServiceBenefits benefits={service.benefits} />
        <PricingSection />
        <HowWeWork />
        <ServicePortfolio
          serviceTitle={service.title}
          projects={matchingProjects}
        />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
