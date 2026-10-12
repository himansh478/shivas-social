import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="ft-logo">
          <img src={logo} alt="[TEAM NAME] logo" />
          <p className="lb" style={{ opacity: 0.6 }}>Creative. Strategy.<br />Technology.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }} className="lb">
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul>
            <li><a href="[INSTAGRAM URL]">Instagram</a></li>
            <li><a href="[LINKEDIN URL]">LinkedIn</a></li>
            <li><a href="[PHONE NUMBER]">WhatsApp</a></li>
            <li><a href="[GITHUB URL]">GitHub</a></li>
          </ul>
        </div>
      </div>
      <p className="mt" style={{ marginTop: 50, opacity: 0.5 }}>© 2026 All Rights Reserved.</p>
    </footer>
  )
}
