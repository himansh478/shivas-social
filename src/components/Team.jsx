import Reveal from './Reveal'
import TeamMember from './TeamMember'
import { team } from '../data/team'

export default function Team() {
  return (
    <section id="team">
      <div className="head"><span className="lb">Team members</span><span className="lb vert">02 / 08</span></div>
      <Reveal as="h2" className="disp h2" style={{ marginBottom: 'clamp(40px,6vw,80px)' }}>the people.</Reveal>
      {team.map((m, i) => (
        <TeamMember key={m.name} member={m} index={i} last={i === team.length - 1} />
      ))}
    </section>
  )
}
