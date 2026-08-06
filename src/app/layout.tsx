import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/globals.css'

/* ── Headlines & Navigation: Plus Jakarta Sans ── */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-jakarta',
  preload: true,
})

/* ── Subtext & Descriptions: Outfit ── */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://arialabs.id'),
  title: {
    default: 'Aria Labs | Creative Digital Studio',
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
    title: 'Aria Labs | Creative Digital Studio',
    description: 'Full-service digital agency for web development, UI/UX design, brand identity, and graphic design.',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: 'Aria Labs — Creative Digital Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aria Labs | Creative Digital Studio',
    description: 'Full-service digital agency for web development, UI/UX design, brand identity, and graphic design.',
    creator: '@arialabs',
    images: ['/og-image.webp'],
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
  sameAs: [
    'https://www.instagram.com/arialabs.aquanime',
    'https://wa.me/6283832886220',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${outfit.variable}`}>
      <head>
        {/* ── FCP: preload hero background ── */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/backgrounds/hero-bg.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* ── Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* ── Vercel Analytics ── */}
        <Analytics />

        {/* ── Vercel Speed Insights ── */}
        <SpeedInsights />

        {/* ── Microsoft Clarity ── */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s2j9o72p58");
          `}
        </Script>
      </body>
    </html>
  )
}
