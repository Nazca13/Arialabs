import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://arialabs.id'),
  title: {
    default: 'Aria Labs | Complete Digital Strategies',
    template: '%s | Aria Labs',
  },
  description: 'Aria Labs adalah digital agency full-service yang membangun web development, UI/UX design, brand identity, dan graphic design untuk eskalasi bisnis Anda.',
  keywords: ['digital agency', 'web development', 'ui ux design', 'brand identity', 'graphic design', 'jakarta', 'indonesia', 'aria labs'],
  authors: [{ name: 'Aria Labs', url: 'https://arialabs.id' }],
  creator: 'Aria Labs',
  publisher: 'Aria Labs',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://arialabs.id',
    siteName: 'Aria Labs',
    title: 'Aria Labs | Complete Digital Strategies',
    description: 'Full-service digital agency for web development, UI/UX design, brand identity, and graphic design.',
    images: [{ url: '/assets/images/backgrounds/hero-bg.webp', width: 1200, height: 630, alt: 'Aria Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aria Labs | Complete Digital Strategies',
    description: 'Full-service digital agency for web development, UI/UX design, brand identity, and graphic design.',
    creator: '@arialabs',
    images: ['/assets/images/backgrounds/hero-bg.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://arialabs.id',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2FA8FA',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aria Labs',
  description: 'Full-service digital agency untuk web development, UI/UX design, brand identity, dan graphic design.',
  url: 'https://arialabs.id',
  logo: 'https://arialabs.id/assets/logo/logo.svg',
  areaServed: 'ID',
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
