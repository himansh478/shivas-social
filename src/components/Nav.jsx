import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const menuLinks = [
  ['#about', 'about.'],
  ['#services', 'services.'],
  ['#team', 'team.'],
  ['#work', 'work.'],
  ['#contact', 'contact.'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav id="nav" className={`lb${scrolled ? ' s' : ''}`}>
        <a href="#top" className="n-logo"><img src={logo} alt="[TEAM NAME] logo" /></a>
        <div className="n-mid"><a href="#work">Work</a><a href="#services">Services</a><a href="#team">Team</a></div>
        <div className="n-r">
          <a href="#about">About</a>
          <a href="#contact">Start a project ▾</a>
          <button className="dots" aria-label="Open menu" onClick={() => setOpen(true)}>•••</button>
        </div>
      </nav>
      <div className={`menu${open ? ' o' : ''}`}>
        <button aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        {menuLinks.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
    </>
  )
}
