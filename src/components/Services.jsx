import Reveal from './Reveal'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="dark">
      <div className="head"><span className="lb">What we do</span><span className="lb" style={{ color: 'var(--accent)' }}>06 services</span></div>
      <Reveal as="h2" className="disp h2" style={{ marginBottom: 'clamp(40px,6vw,80px)' }}>what we do.</Reveal>
      {services.map((s, i) => (
        <Reveal className="svc" key={s.title}>
          <span className="cond">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p className="mt">{s.text}</p>
          <span className="go">→</span>
        </Reveal>
      ))}
    </section>
  )
}
