import Reveal from './Reveal'
import { work } from '../data/content'

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--bg2)' }}>
      <div className="head"><span className="lb">Selected work / expertise</span><span className="lb vert">03 / 08</span></div>
      <Reveal as="h2" className="disp h2" style={{ marginBottom: 'clamp(40px,6vw,80px)' }}>selected work.</Reveal>
      <div className="wg">
        {work.map((w, i) => (
          <Reveal as="a" href="#contact" className={`wt w${i + 1}`} key={w.title}>
            <span className="bgw cond">{String(i + 1).padStart(2, '0')}</span>
            <div className="lb" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{w.category}</span><span>{w.year}</span>
            </div>
            <div>
              <h4>{w.title}</h4>
              <p className="mt">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
