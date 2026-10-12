import Reveal from './Reveal'

const links = {
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  whatsapp: 'WhatsApp',
  github: 'GitHub',
}

export default function TeamMember({ member, index, last }) {
  const { role, roleStyle, name, bio, skills, socials, portrait } = member
  const num = String(index + 1).padStart(2, '0')

  const bustProps = portrait
    ? {
        className: 'bust',
        role: 'img',
        'aria-label': `Portrait of team member ${num}`,
        style: { '--img': `url(${portrait})`, backgroundSize: 'cover', backgroundPosition: 'center top' },
      }
    : { className: 'bust ph' }

  return (
    <Reveal as="article" className="tm" style={last ? { borderBottom: '1px solid rgba(255,255,255,.15)' } : undefined}>
      <div className="tm-i">
        <div className="top">
          <span className="cond">{num}</span>
          <div>
            <p className="lb" style={roleStyle}>{role}</p>
            <h3 className="disp">{name}</h3>
          </div>
        </div>
        <p className="bio">{bio}</p>
        <div className="sk mt">{skills.map((s) => <span key={s}>{s}</span>)}</div>
        <div className="soc lb">
          {Object.entries(socials).map(([key, href]) => (
            <a key={key} href={href} target="_blank" rel="noopener noreferrer">{links[key]}</a>
          ))}
        </div>
      </div>
      <div className="tm-a">
        <div className="band" />
        <div {...bustProps} />
      </div>
    </Reveal>
  )
}
