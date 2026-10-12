import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="dark contact">
      <div className="head"><span className="lb">Contact</span><span className="lb vert">06 / 08</span></div>
      <Reveal as="h2" className="disp">let's build something worth <em>remembering.</em></Reveal>
      <Reveal as="p" className="mt" style={{ maxWidth: 340, marginTop: 40 }}>
        Have a brand, product, campaign or technology idea? Let's turn it into something people remember.
      </Reveal>
      <Reveal className="lb" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 44 }}>
        <a className="btn a" href="mailto:[EMAIL]">Start a project</a>
        <a className="btn ol" href="[PHONE NUMBER]">WhatsApp us</a>
        <a className="btn ol" href="mailto:[EMAIL]">Email us</a>
      </Reveal>
      <Reveal className="cl lb">
        <a href="[INSTAGRAM URL]">Instagram</a>
        <a href="[LINKEDIN URL]">LinkedIn</a>
        <a href="[PHONE NUMBER]">WhatsApp</a>
        <a href="mailto:[EMAIL]">[EMAIL]</a>
        <span style={{ opacity: 0.6 }}>[LOCATION]</span>
      </Reveal>
    </section>
  )
}
