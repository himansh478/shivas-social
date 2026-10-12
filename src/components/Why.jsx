import Reveal from './Reveal'
import { why } from '../data/content'

export default function Why() {
  return (
    <section>
      <div className="head"><span className="lb">Why clients work with us</span><span className="lb vert">05 / 08</span></div>
      <Reveal as="p" className="mt" style={{ maxWidth: 380, marginBottom: 50 }}>
        One team. Multiple capabilities. One clear objective — building digital experiences that create real business value.
      </Reveal>
      {why.map((w, i) => (
        <Reveal className="wy" key={w}>
          <span className="cond" style={{ fontSize: 44 }}>{String(i + 1).padStart(2, '0')}</span>
          <h3 className="disp">{w}</h3>
          <span className="sq">→</span>
        </Reveal>
      ))}
    </section>
  )
}
