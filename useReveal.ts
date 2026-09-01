import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container and adds the
 * `is-visible` class to any descendant with the `reveal` class
 * once it scrolls into view. Staggers siblings automatically via
 * their DOM order using a small incremental delay.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = Array.from(container.querySelectorAll<HTMLElement>('.reveal'))
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.revealDelay ?? '0'
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((el, i) => {
      if (!el.dataset.revealDelay) {
        el.dataset.revealDelay = String((i % 6) * 90)
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return containerRef
}
