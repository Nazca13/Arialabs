import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Navbar } from '@/components/common/navbar/navbar'
import { Footer } from '@/components/common/footer/footer'
import { ProjectDetail } from '@/features/portfolio/project-detail'

const PROJECTS_DATA = {
  'phase-fragrance': {
    title: 'PHASE Fragrance',
    category: 'Web Development',
    year: '2024',
    client: 'PHASE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    logo: '/assets/images/brands/phase.png',
    heroImage: '/assets/projects-image/web-development/phase.webp',
    testimonial: {
      text: 'Working with Aria Labs felt personal. The process was smooth, the design was stunning, and everything had meaning.',
      author: 'Founder, PHASE Fragrance',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo: '/assets/images/brands/aquanime.png',
    heroImage: '/assets/projects-image/web-development/aquanime.id.webp',
    testimonial: {
      text: 'Amazing work from Aria Labs team. Highly recommended!',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo: '/assets/images/brands/jejak-lokal.png',
    heroImage: '/assets/projects-image/web-development/jejaklokal.id.webp',
    testimonial: {
      text: 'Professional and creative team. Love the final result!',
      author: 'Founder, Jejak Lokal',
    },
    services: ['Web Development', 'SEO'],
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo: '/assets/images/brands/animae.png',
    heroImage: '/assets/projects-image/web-development/maenews.id.webp',
    testimonial: {
      text: 'Excellent collaboration. The website exceeded our expectations!',
      author: 'Editor, Mae News',
    },
    services: ['Web Development', 'Content Management'],
    images: {
      desktop: '/assets/projects-image/web-development/maenews.id.webp',
      mobile1: null,
      mobile2: null,
    },
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS_DATA[params.slug as keyof typeof PROJECTS_DATA]
  
  if (!project) {
    return {
      title: 'Project Not Found | Aria Labs',
    }
  }

  return {
    title: `${project.title} - ${project.category} | Aria Labs`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS_DATA[params.slug as keyof typeof PROJECTS_DATA]
  
  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({ slug }))
}
