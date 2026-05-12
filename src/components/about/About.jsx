import { about } from '../../data'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Who I am</p>
        <h2 className="font-serif mb-12" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text)', lineHeight: 1.1 }}>
          A systems thinker<br />who ships code.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text */}
          <div className="flex flex-col gap-5 text-base leading-[1.85]" style={{ color: 'var(--text-2)' }}>
            {about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          {/* Detail cards */}
          <div className="flex flex-col gap-4">
            {about.details.map(({ icon, label, value, sub, link }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl border"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <span className="text-xl leading-none mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-mono text-[0.68rem] tracking-[0.1em] uppercase mb-1" style={{ color: 'var(--text-3)' }}>
                    {label}
                  </p>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium no-underline"
                      style={{ color: 'var(--accent)' }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{value}</p>
                  )}
                  {sub && <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
