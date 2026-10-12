import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    const cur = ref.current
    const move = (e) => {
      cur.style.left = e.clientX - 6 + 'px'
      cur.style.top = e.clientY - 6 + 'px'
    }
    const over = (e) => cur.classList.toggle('b', !!e.target.closest?.('a,button'))
    addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    return () => {
      removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
    }
  }, [])

  return <div className="cur" ref={ref} />
}
