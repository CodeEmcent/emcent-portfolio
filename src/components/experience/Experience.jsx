import { experience } from '../../data'
import { useInView } from '../../hooks/useInView'
import AnimateIn from '../ui/AnimateIn'

function TimelineItem({ period, title, org, desc, animDelay = 0 }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className="timeline-item relative pb-10 pl-8 last:pb-0"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 800ms cubic-bezier(0.4,0,0.2,1) ${animDelay}ms, transform 800ms cubic-bezier(0.4,0,0.2,1) ${animDelay}ms`,
      }}
    >
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

        <AnimateIn>
          <p className="section-label">Background</p>
          <h2 className="font-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text)', lineHeight: 1.1 }}>
            Education & experience
          </h2>
          <p className="text-base leading-[1.75] mb-14 max-w-xl" style={{ color: 'var(--text-2)' }}>
            An unconventional path — from Philosophy and seven years in education and facility management, to full-stack systems development in London.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Education */}
          <div>
            <AnimateIn>
              <p className="font-mono text-[0.68rem] tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--text-3)' }}>
                Education
              </p>
            </AnimateIn>
            <div className="timeline">
              {experience.education.map((item, i) => (
                <TimelineItem key={i} {...item} animDelay={i * 120} />
              ))}
            </div>
          </div>

          {/* Work & Projects */}
          <div>
            <AnimateIn delay={100}>
              <p className="font-mono text-[0.68rem] tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--text-3)' }}>
                Work Experience &amp; Projects
              </p>
            </AnimateIn>
            <div className="timeline">
              {experience.work.map((item, i) => (
                <TimelineItem key={i} {...item} animDelay={i * 100} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
