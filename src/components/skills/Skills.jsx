import { competencies, tools, certifications } from '../../data'

function CompGroup({ icon, title, subtitle, tags }) {
  return (
    <div className="p-8 rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-3 pb-5 mb-5 border-b" style={{ borderColor: 'var(--border)' }}>
        <span className="text-lg leading-none">{icon}</span>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{title}</p>
          <p className="font-mono text-[0.67rem] tracking-[0.1em] uppercase mt-0.5" style={{ color: 'var(--text-3)' }}>
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ label, hi }) => (
          <span key={label} className={`comp-tag ${hi ? 'hi' : ''}`}>{label}</span>
        ))}
      </div>
    </div>
  )
}

function CertCard({ cert, size = 'lg' }) {
  const inner = (
    <div className="cert-card" style={{ cursor: cert.link ? 'pointer' : 'default' }}>
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-xl border text-xl"
        style={{ width: size === 'lg' ? 44 : 36, height: size === 'lg' ? 44 : 36, background: 'var(--bg-3)', borderColor: 'var(--border)' }}
      >
        {size === 'sm' ? 'in' : cert.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>{cert.name}</p>
        <p className="font-mono text-[0.68rem] tracking-[0.08em] mt-0.5" style={{ color: 'var(--accent)' }}>{cert.issuer}</p>
        <div className="flex items-center gap-3 flex-wrap mt-1">
          <span className="font-mono text-[0.67rem]" style={{ color: 'var(--text-3)' }}>{cert.date}</span>
          {cert.link && <span className="font-mono text-[0.67rem]" style={{ color: 'var(--text-3)' }}>↗ Verify</span>}
        </div>
        {cert.courses && (
          <p className="text-xs mt-1.5" style={{ color: 'var(--text-3)' }}>{cert.courses}</p>
        )}
      </div>
    </div>
  )

  if (cert.link) {
    return <a href={cert.link} target="_blank" rel="noreferrer" className="no-underline block">{inner}</a>
  }
  return inner
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Capabilities</p>
        <h2 className="font-serif mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text)', lineHeight: 1.1 }}>
          Competencies
        </h2>
        <p className="text-base leading-[1.75] mb-14 max-w-xl" style={{ color: 'var(--text-2)' }}>
          A hybrid profile spanning software engineering, systems thinking, UX, and IT management — grounded in real project delivery.
        </p>

        {/* Competency grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {competencies.map(c => <CompGroup key={c.title} {...c} />)}
        </div>

        {/* Tools */}
        <div className="p-7 rounded-2xl border mb-14" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <p className="font-mono text-[0.68rem] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--text-3)' }}>
            Tools & Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map(t => <span key={t} className="comp-tag">{t}</span>)}
          </div>
        </div>

        {/* Certifications */}
        <p className="section-label mt-14">Verified credentials</p>
        <h3 className="font-serif text-[1.75rem] mb-2" style={{ color: 'var(--text)', lineHeight: 1.1 }}>
          Professional Certifications
        </h3>
        <p className="text-sm mb-6" style={{ color: 'var(--text-2)' }}>
          Industry-recognised certificates from Google, Meta, and Univelcity — spanning data analytics, project management, front-end development, and backend engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.professional.map(c => <CertCard key={c.name} cert={c} />)}
        </div>

        {/* Azure pending */}
        <div
          className="flex items-center gap-4 p-5 rounded-xl mt-5 border"
          style={{ background: 'rgba(74,222,128,0.05)', borderColor: 'rgba(74,222,128,0.3)', borderStyle: 'dashed' }}
        >
          <span className="text-2xl">{certifications.pending.icon}</span>
          <div className="flex-1">
            <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{certifications.pending.name}</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{certifications.pending.date} · {certifications.pending.issuer}</p>
          </div>
          <span
            className="font-mono text-[0.67rem] px-3 py-1 rounded-full border whitespace-nowrap"
            style={{ background: 'rgba(74,222,128,0.1)', borderColor: 'rgba(74,222,128,0.25)', color: 'var(--accent)' }}
          >
            Awaiting Exam
          </span>
        </div>

        {/* LinkedIn Learning */}
        <p className="font-mono text-[0.68rem] tracking-[0.15em] uppercase mt-10 mb-4" style={{ color: 'var(--text-3)' }}>
          LinkedIn Learning · Continuous Development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.linkedin.map(c => <CertCard key={c.name} cert={c} size="sm" />)}
        </div>
      </div>
    </section>
  )
}
