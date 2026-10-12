import Reveal from './Reveal'
import { keywords } from '../data/content'

export default function About() {
  return (
    <section id="about">
      <div className="head"><span className="lb">About the team</span><span className="lb vert">01 / 08</span></div>
      <div className="abt">
        <Reveal as="h2" className="disp h2">one team.<br />multiple expertises.</Reveal>
        <Reveal as="p" className="mt" style={{ maxWidth: 300 }}>
          We are a multidisciplinary team working across content creation, video production, social media, branding, AI and full-stack technology.
        </Reveal>
      </div>
      <Reveal className="kw">
        {keywords.map((k, i) => (
          <div key={k}>{k}<sup>{String(i + 1).padStart(2, '0')}</sup></div>
        ))}
      </Reveal>
    </section>
  )
}
