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

    // Fast timeout fallback: force reveal after 300ms
    const fallbackTimer = setTimeout(reveal, 300)

    // Fallback if IntersectionObserver not available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      reveal()
      clearTimeout(fallbackTimer)
      return
    }

    // Immediately reveal if element is within or near viewport (+400px margin)
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 400 && rect.bottom > -400) {
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
        threshold: 0,
        rootMargin: '400px 0px 400px 0px', // Trigger 400px before scrolling into view
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