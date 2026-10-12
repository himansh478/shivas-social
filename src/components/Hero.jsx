import { useEffect, useRef } from 'react'

export default function Hero() {
  const bustRef = useRef(null)

  // subtle parallax on the hero cut-out (desktop only)
  useEffect(() => {
    const onScroll = () => {
      const hb = bustRef.current
      if (hb && window.scrollY < 900 && window.innerWidth > 900) {
        hb.style.translate = '0 ' + window.scrollY * -0.06 + 'px'
      }
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="hero" id="top">
      <div className="micro">
        <span className="outline" style={{ fontSize: 15, letterSpacing: '.04em' }}>[TEAM]/STUDIO</span>
        <div className="cols">
          <p className="mt">Creative content, social media, branding, AI and technology — under one team.</p>
          <p className="mt">We combine creative production, strategic marketing and modern technology to help brands build a stronger digital presence.</p>
        </div>
      </div>
      <h1 className="disp">
        <span><i>we create.</i></span>
        <span><i>we build.</i></span>
        <span><i>we grow.</i></span>
      </h1>
      <div className="stage" style={{ display: 'contents' }}>
        <div className="band" />
        <div className="bust ph" ref={bustRef} />
        <div className="vtxt">Creative + Technology<br />Team 2026</div>
        <div className="big-n cond vert" style={{ writingMode: 'vertical-rl' }}>05</div>
        <a href="#work" className="arrow" aria-label="View our work">→</a>
      </div>
      <p className="sub mt">Content · Social · Branding · AI · Technology</p>
      <div className="ctas lb">
        <a className="btn" href="#work">View our work</a>
        <a className="btn o" href="#contact">Let's work together</a>
      </div>
    </header>
  )
}
