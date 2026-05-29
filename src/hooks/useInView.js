import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────
//  useInView — Intersection Observer hook
//  Tracks whether an element is in the viewport.
//  triggerOnce: false — animates in AND out as
//  the user scrolls in both directions.
// ─────────────────────────────────────────────

export function useInView({
  threshold = 0.12,
  rootMargin = '0px 0px -60px 0px',
  triggerOnce = false,
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect user's reduced motion preference — show immediately, no animation
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce) {
          // Trigger once only — animate in, never out
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(el)
          }
        } else {
          // Bidirectional — animate in when entering, out when leaving
          setInView(entry.isIntersecting)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, inView }
}
