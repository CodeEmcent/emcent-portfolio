import { projects } from '../../data'

function ProjectTag({ label, neutral }) {
  return (
    <span
      className="font-mono text-[0.67rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border"
      style={neutral
        ? { background: 'var(--bg-3)', color: 'var(--text-3)', borderColor: 'var(--border)' }
        : { background: 'rgba(74,222,128,0.1)', color: 'var(--accent)', borderColor: 'rgba(74,222,128,0.25)' }
      }
    >
      {label}
    </span>
  )
}

function ProjectCard({ project }) {
  const { featured, wide, tags, year, title, description, stack, link, linkLabel } = project

  if (featured) {
    return (
      <div className="project-card-wrap md:col-span-2 md:flex-row flex flex-col gap-8 md:gap-16 md:items-center">
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-2 mb-4">
            {tags.map((t, i) => <ProjectTag key={t} label={t} neutral={i > 0} />)}
            <span className="font-mono text-[0.7rem] ml-auto" style={{ color: 'var(--text-3)' }}>{year}</span>
          </div>
          <h3 className="font-serif text-[2rem] leading-[1.15] mt-3 mb-4" style={{ color: 'var(--text)' }}>
            Emcent Facilities<br />Management System
          </h3>
          <p className="text-sm leading-[1.8] mb-5" style={{ color: 'var(--text-2)' }}>{description}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {stack.map(s => <span key={s} className="stack-badge">{s}</span>)}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs flex items-center gap-1.5 no-underline transition-colors duration-200"
            style={{ color: 'var(--text-3)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
          >
            {linkLabel}
          </a>
        </div>
        <div className="hidden md:block flex-shrink-0">
          <p className="font-serif text-[8rem] leading-none italic" style={{ color: 'var(--border)' }}>01</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`project-card-wrap flex flex-col ${wide ? 'md:col-span-2' : ''}`}>
      <div className="flex items-center flex-wrap gap-2">
        {tags.map((t, i) => <ProjectTag key={t} label={t} neutral={i > 0} />)}
        <span className="font-mono text-[0.7rem] ml-auto" style={{ color: 'var(--text-3)' }}>{year}</span>
      </div>
      <h3 className="font-serif text-[1.5rem] leading-[1.2]" style={{ color: 'var(--text)' }}>{title}</h3>
      <p className="text-sm leading-[1.8] flex-1" style={{ color: 'var(--text-2)' }}>{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {stack.map(s => <span key={s} className="stack-badge">{s}</span>)}
      </div>
      <p
        className="font-mono text-xs mt-1 transition-colors duration-200"
        style={{ color: 'var(--text-3)' }}
      >
        {linkLabel}
      </p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Selected work</p>
        <h2 className="font-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text)', lineHeight: 1.1 }}>
          Projects
        </h2>
        <p className="text-base leading-[1.75] mb-14 max-w-xl" style={{ color: 'var(--text-2)' }}>
          Academic and independent projects — each built end-to-end, from problem framing through to deployed product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
