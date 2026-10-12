import Reveal from './Reveal'
import { steps } from '../data/content'

export default function Capabilities() {
  return (
    <section className="acc">
      <div className="head"><span className="lb">Our capabilities</span><span className="lb vert">04 / 08</span></div>
      <div className="flow">
        <div>
          <Reveal as="h2" className="disp h2">from idea<br />to execution.</Reveal>
          <Reveal as="p" className="mt" style={{ maxWidth: 340, marginTop: 40 }}>
            We don't work in isolated departments. We connect creative, marketing and technology to build complete digital experiences.
          </Reveal>
        </div>
        <Reveal className="steps">
          {steps.map((s, i) => (
            <div key={s}>
              <em>{String(i + 1).padStart(2, '0')}</em>
              {s}{i < steps.length - 1 ? ' ↓' : ''}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
