import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { CtaSection } from '@/features/home/sections/cta/cta-section'
import { ProjectDetail } from '@/features/portfolio/project-detail'

const PROJECTS_DATA = {
  'phase-fragrance': {
    title: 'PHASE Fragrance',
    category: 'Web Development',
    year: '2024',
    client: 'PHASE',
    description: 'PHASE Fragrance adalah brand parfum premium asal Indonesia yang membutuhkan kehadiran digital yang elegan, sesuai dengan nilai brand mereka — eksklusif, minimalis, dan berkarakter.',
    challenge: 'PHASE hadir dengan produk parfum berkualitas tinggi, namun belum memiliki platform digital yang merepresentasikan identitas brand mereka secara tepat. Website lama terasa generik dan tidak mampu menyampaikan nilai premium yang ingin ditonjolkan kepada calon pelanggan.',
    solution: 'Kami merancang website dari nol menggunakan pendekatan design-first — dimulai dari riset brand, mood board, hingga wireframe yang kemudian dikembangkan menjadi website dengan animasi halus, tipografi tegas, dan layout yang bersih. Setiap detail dipilih untuk memperkuat identitas PHASE.',
    result: 'Website PHASE Fragrance berhasil meningkatkan kepercayaan konsumen secara signifikan. Bounce rate menurun dan rata-rata waktu kunjungan meningkat. Tim PHASE melaporkan peningkatan inquiry produk dan pertumbuhan penjualan online dalam 30 hari pertama setelah launch.',
    logo: '/assets/images/brands/phase.png',
    heroImage: '/assets/projects-image/web-development/phase.webp',
    testimonial: {
      text: 'Working with Aria Labs felt personal. The process was smooth, the design was stunning, and everything had meaning.',
      author: 'Angelica Phurada',
    },
    services: ['Web Development', 'UI/UX Design', 'Brand Strategy'],
    images: {
      desktop: '/assets/projects-image/web-development/phase.webp',
      mobile1: null,
      mobile2: null,
    },
  },
  'aquanime-studio': {
    title: 'Aquanime Official Website',
    category: 'Web Development',
    year: '2024',
    client: 'Aquanime',
    description: 'Aquanime adalah komunitas dan studio kreatif berbasis anime dan budaya Jepang yang ingin membangun platform digital resmi sebagai hub informasi, event, dan identitas komunitas.',
    challenge: 'Aquanime berkembang pesat di media sosial namun tidak memiliki website resmi yang terpusat. Hal ini membuat penyebaran informasi event, rekrutmen member, dan profil studio menjadi tersebar dan tidak terorganisir dengan baik.',
    solution: 'Kami membangun website resmi Aquanime dengan arsitektur yang scalable, menampilkan jadwal event, galeri karya, profil tim, serta integrasi media sosial. Desain mengangkat estetika anime modern dengan palet warna yang kuat dan navigasi yang intuitif.',
    result: 'Website Aquanime menjadi pusat informasi utama yang diakses ribuan pengunjung per bulan. Partisipasi event meningkat dan brand awareness Aquanime di komunitas anime nasional tumbuh secara signifikan.',
    logo: '/assets/images/brands/official-partners/aquanime.png',
    heroImage: '/assets/projects-image/web-development/aquanime.id.webp',
    testimonial: {
      text: 'Aria Labs benar-benar memahami estetika kami. Website yang mereka bangun terasa hidup dan mewakili semangat komunitas Aquanime dengan sempurna.',
      author: 'Founder, Aquanime Studio',
    },
    services: ['Web Development', 'UI/UX Design'],
    images: {
      desktop: '/assets/projects-image/web-development/aquanime.id.webp',
      mobile1: null,
      mobile2: null,
    },
  },
  'jejak-lokal': {
    title: 'Jejak Lokal',
    category: 'Web Development',
    year: '2024',
    client: 'Jejak Lokal',
    description: 'Jejak Lokal adalah platform perjalanan wisata lokal yang menghubungkan wisatawan dengan destinasi tersembunyi di seluruh Indonesia, mengedepankan pengalaman autentik dan keberlanjutan.',
    challenge: 'Tim Jejak Lokal membutuhkan platform yang mampu menyajikan destinasi wisata secara visual dan informatif, namun tetap mudah digunakan oleh wisatawan dari berbagai latar belakang. Website lama sulit diakses di perangkat mobile dan konversi booking sangat rendah.',
    solution: 'Kami mendesain ulang pengalaman pengguna dari awal dengan pendekatan mobile-first. Dibuat dengan Next.js untuk performa optimal, dilengkapi fitur pencarian destinasi, integrasi peta interaktif, dan alur booking yang disederhanakan menjadi tiga langkah.',
    result: 'Setelah peluncuran website baru, konversi booking meningkat signifikan dan traffic organik tumbuh berkat optimasi SEO yang terintegrasi dalam proses pengembangan. Jejak Lokal kini menjadi salah satu platform wisata lokal yang paling diminati di regionnya.',
    logo: '/assets/images/brands/jejak-lokal.png',
    heroImage: '/assets/projects-image/web-development/jejaklokal.id.webp',
    testimonial: {
      text: 'Tim Aria Labs sangat profesional dan kreatif. Mereka tidak hanya membangun website, tapi benar-benar memahami bisnis kami dan memberikan solusi yang tepat sasaran.',
      author: 'Founder, Jejak Lokal',
    },
    services: ['Web Development', 'UI/UX Design', 'SEO'],
    images: {
      desktop: '/assets/projects-image/web-development/jejaklokal.id.webp',
      mobile1: null,
      mobile2: null,
    },
  },
  'mae-news': {
    title: 'Mae News',
    category: 'Web Development',
    year: '2024',
    client: 'Mae News',
    description: 'Mae News adalah portal berita digital yang berfokus pada konten lifestyle, hiburan, dan budaya pop untuk generasi muda Indonesia, dengan pendekatan editorial yang segar dan relatable.',
    challenge: 'Mae News memiliki konten berkualitas namun platform lama tidak mampu mendukung kecepatan publikasi tim editorial dan memberikan pengalaman membaca yang nyaman. Load time lambat dan tampilan yang padat membuat pembaca cepat meninggalkan halaman.',
    solution: 'Kami mengembangkan platform CMS custom berbasis Next.js dengan optimasi gambar otomatis dan SSG untuk kecepatan loading maksimal. Desain editorial modern dengan tipografi yang terbaca, hierarki konten yang jelas, dan dark mode untuk kenyamanan membaca malam hari.',
    result: 'Mae News mengalami peningkatan signifikan pada rata-rata durasi baca per sesi dan penurunan bounce rate. Tim editorial dapat mempublikasikan konten lebih cepat, dan pertumbuhan pembaca bulanan mencapai angka tertinggi sejak portal diluncurkan.',
    logo: '/assets/images/brands/official-partners/animae.png',
    heroImage: '/assets/projects-image/web-development/maenews.id.webp',
    testimonial: {
      text: 'Kolaborasi dengan Aria Labs luar biasa. Website baru kami jauh lebih cepat, tampilan lebih modern, dan tim editorial kami sangat terbantu dengan CMS yang mudah digunakan.',
      author: 'Editor in Chief, Mae News',
    },
    services: ['Web Development', 'UI/UX Design', 'CMS Integration'],
    images: {
      desktop: '/assets/projects-image/web-development/maenews.id.webp',
      mobile1: null,
      mobile2: null,
    },
  },
}

const PROJECT_LIST = [
  { slug: 'phase-fragrance',   title: 'PHASE Fragrance',          category: 'Web Development', image: '/assets/projects-image/web-development/phase.webp' },
  { slug: 'aquanime-studio',   title: 'Aquanime Official Website', category: 'Web Development', image: '/assets/projects-image/web-development/aquanime.id.webp' },
  { slug: 'jejak-lokal',       title: 'Jejak Lokal',               category: 'Web Development', image: '/assets/projects-image/web-development/jejaklokal.id.webp' },
  { slug: 'mae-news',          title: 'Mae News',                  category: 'Web Development', image: '/assets/projects-image/web-development/maenews.id.webp' },
]

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS_DATA[params.slug as keyof typeof PROJECTS_DATA]
  if (!project) return { title: 'Project Not Found | Aria Labs' }
  return {
    title: `${project.title} — ${project.category} | Aria Labs`,
    description: project.description.slice(0, 160),
  }
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS_DATA[params.slug as keyof typeof PROJECTS_DATA]
  if (!project) notFound()

  const otherProjects = PROJECT_LIST.filter(p => p.slug !== params.slug).slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} otherProjects={otherProjects} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map(slug => ({ slug }))
}
