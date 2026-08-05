'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>(options?: {
  threshold?: number
  rootMargin?: string
}) {
  const ref = useRef<T>(null)
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options ?? {}

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
