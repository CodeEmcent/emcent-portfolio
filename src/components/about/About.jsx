import { about } from '../../data'

const L = {
  bg:      '#f5f7f2',
  surface: '#ffffff',
  border:  '#dde0d9',
  text:    '#141a13',
  text2:   '#4a5548',
  text3:   '#8a9488',
  accent:  '#16a34a',
}

export default function About() {
  return (
    <section id="about" style={{ background: L.bg, padding: 'clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 2.5rem)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ display: 'block', width: 24, height: 1, background: L.accent, flexShrink: 0 }} />
          <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: L.accent }}>
            Who I am
          </span>
        </div>

        <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(2rem,3.5vw,3rem)', color: L.text, lineHeight: 1.1, marginBottom: '3rem' }}>
          A systems thinker<br />who ships code.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: 1.85 }}>
            {about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} style={{ color: L.text2 }} />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {about.details.map(({ icon, label, value, sub, link }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', borderRadius: '12px', background: L.surface, border: `1px solid ${L.border}` }}>
                <span style={{ fontSize: '1.25rem', lineHeight: 1, flexShrink: 0, marginTop: '0.1rem' }}>{icon}</span>
                <div>
                  <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: L.text3, marginBottom: '0.2rem' }}>
                    {label}
                  </p>
                  {link ? (
                    <a href={link} target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', fontWeight: 500, color: L.accent, textDecoration: 'none' }}>
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.9rem', fontWeight: 500, color: L.text }}>{value}</p>
                  )}
                  {sub && <p style={{ fontSize: '0.78rem', color: L.text3, marginTop: '0.15rem' }}>{sub}</p>}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
