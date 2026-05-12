import { experience } from '../../data'

function TimelineItem({ period, title, org, desc }) {
  return (
    <div className="timeline-item relative pb-10 pl-8 last:pb-0">
      <div className="timeline-dot" />
      <p className="font-mono text-[0.7rem] tracking-[0.08em] mb-1.5" style={{ color: 'var(--text-3)' }}>{period}</p>
      <p className="text-base font-semibold mb-1" style={{ color: 'var(--text)' }}>{title}</p>
      <p className="text-sm mb-2" style={{ color: 'var(--accent)' }}>{org}</p>
      <p className="text-sm leading-[1.75] max-w-lg" style={{ color: 'var(--text-2)' }}>{desc}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Background</p>
        <h2 className="font-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text)', lineHeight: 1.1 }}>
          Education & experience
        </h2>
        <p className="text-base leading-[1.75] mb-14 max-w-xl" style={{ color: 'var(--text-2)' }}>
          An unconventional path — from Philosophy to full-stack systems — built across two countries and three institutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Education */}
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.15em] uppercase mb-6 pb-0" style={{ color: 'var(--text-3)' }}>
              Education
            </p>
            <div className="timeline">
              {experience.education.map((item, i) => (
                <TimelineItem key={i} {...item} />
              ))}
            </div>
          </div>

          {/* Work & Projects */}
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--text-3)' }}>
              Projects & Independent Work
            </p>
            <div className="timeline">
              {experience.work.map((item, i) => (
                <TimelineItem key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
