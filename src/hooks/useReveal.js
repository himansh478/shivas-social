import { useEffect, useRef } from 'react'

// Adds the `in` class once the element scrolls into view (same as the original IntersectionObserver, threshold .12)
export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((x) => x.isIntersecting && x.target.classList.add('in')),
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
