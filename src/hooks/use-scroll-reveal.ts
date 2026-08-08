'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => {
      el.classList.add('is-visible', 'visible')
    }

    // Hard timeout fallback: force reveal after 1.5s
    // Covers: old browsers, warnet PCs, slow GPU where IO never fires
    const fallbackTimer = setTimeout(reveal, 1500)

    // Fallback if IntersectionObserver not available (IE11, old Chrome)
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      reveal()
      clearTimeout(fallbackTimer)
      return
    }

    // If element already in viewport on mount (above-the-fold sections)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal()
      clearTimeout(fallbackTimer)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          clearTimeout(fallbackTimer)
          io.unobserve(el)
        }
      },
      {
        // threshold: 0 = fires as soon as 1px is visible
        threshold: 0,
        rootMargin: '0px 0px 50px 0px',
      }
    )

    io.observe(el)

    return () => {
      io.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return ref
}