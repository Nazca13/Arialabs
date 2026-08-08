export interface NavItem {
  label: string
  href: string
}

export interface ServiceItem {
  id: string
  title: string
  image: string
  href: string
}

export interface WorkStep {
  day: string
  label: string
  description: string
  icon: string
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  featured?: boolean
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
}

export interface ClientLogo {
  name: string
  src: string
}

export interface Project {
  title: string
  category: string
  slug: string
  image?: string
}
