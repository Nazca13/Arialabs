import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/contexts/language-context'
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

const SITE_URL = 'https://arialabs.id'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aria Labs | Creative Digital Studio',
    template: '%s | Aria Labs',
  },
  description: 'Aria Labs adalah digital agency full-service yang membangun web development, UI/UX design, brand identity, dan graphic design untuk eskalasi bisnis Anda.',
  keywords: ['digital agency', 'web development', 'ui ux design', 'brand identity', 'graphic design', 'jakarta', 'indonesia', 'aria labs'],
  authors: [{ name: 'Aria Labs', url: SITE_URL }],
  creator: 'Aria Labs',
  publisher: 'Aria Labs',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Aria Labs',
    title: 'Aria Labs | Creative Digital Studio',
    description: 'Aria Labs adalah digital agency full-service yang membangun web development, UI/UX design, brand identity, dan graphic design untuk eskalasi bisnis Anda.',
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Aria Labs, Creative Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aria Labs | Creative Digital Studio',
    description: 'Aria Labs adalah digital agency full-service yang membangun web development, UI/UX design, brand identity, dan graphic design untuk eskalasi bisnis Anda.',
    creator: '@arialabs',
    images: [OG_IMAGE],
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
    canonical: SITE_URL,
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
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo/logo.svg`,
  image: OG_IMAGE,
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
        {/* ── Preconnect to external resources ── */}
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* ── FCP: preload hero background ── */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/backgrounds/hero-bg.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* ── Explicit Meta Tags for WhatsApp & Social Scrapers ── */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ── Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
        {children}
        </LanguageProvider>

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
  ) //end
}
