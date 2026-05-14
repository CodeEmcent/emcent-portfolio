import { projects } from '../../data'

const L = {
  bg:      '#f5f7f2',
  surface: '#ffffff',
  border:  '#dde0d9',
  text:    '#141a13',
  text2:   '#4a5548',
  text3:   '#8a9488',
  accent:  '#16a34a',
}

function ProjectTag({ label, neutral }) {
  return (
    <span style={{
      fontFamily: '"JetBrains Mono",monospace',
      fontSize: '0.67rem', letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '0.3rem 0.7rem', borderRadius: '100px', border: '1px solid',
      background: neutral ? L.bg : 'rgba(22,163,74,0.1)',
      borderColor: neutral ? L.border : 'rgba(22,163,74,0.3)',
      color: neutral ? L.text3 : L.accent,
    }}>
      {label}
    </span>
  )
}

const cardStyle = {
  background: L.surface,
  border: `1px solid ${L.border}`,
  borderRadius: '20px',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  position: 'relative',
  overflow: 'hidden',
  transition: 'border-color 0.3s ease, transform 0.3s ease',
}

function ProjectCard({ project }) {
  const { featured, wide, tags, year, title, description, stack, link, linkLabel } = project
  const [hovered, setHovered] = React.useState(false)

  const hoverStyle = hovered
    ? { ...cardStyle, borderColor: L.accent, transform: 'translateY(-3px)' }
    : cardStyle

  const colSpan = (featured || wide) ? { gridColumn: 'span 2' } : {}

  return (
    <div
      style={{ ...hoverStyle, ...colSpan, flexDirection: featured ? undefined : 'column' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: L.accent,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      }} />

      {featured ? (
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {tags.map((t, i) => <ProjectTag key={t} label={t} neutral={i > 0} />)}
              <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.7rem', color: L.text3, marginLeft: 'auto' }}>{year}</span>
            </div>
            <h3 style={{ fontFamily: '"DM Serif Display",serif', fontSize: '2rem', lineHeight: 1.15, color: L.text, marginBottom: '1rem' }}>
              Emcent Facilities<br />Management System
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: L.text2, marginBottom: '1.25rem' }}>{description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {stack.map(s => (
                <span key={s} style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.67rem', padding: '0.25rem 0.6rem', borderRadius: '4px', background: L.bg, border: `1px solid ${L.border}`, color: L.text3 }}>{s}</span>
              ))}
            </div>
            {link && (
              <a href={link} target="_blank" rel="noreferrer" style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.78rem', color: L.accent, textDecoration: 'none' }}>
                {linkLabel}
              </a>
            )}
          </div>
          <p style={{ fontFamily: '"DM Serif Display",serif', fontSize: '7rem', color: L.border, lineHeight: 1, fontStyle: 'italic', userSelect: 'none', flexShrink: 0 }}>01</p>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map((t, i) => <ProjectTag key={t} label={t} neutral={i > 0} />)}
            <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.7rem', color: L.text3, marginLeft: 'auto' }}>{year}</span>
          </div>
          <h3 style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.5rem', lineHeight: 1.2, color: L.text }}>{title}</h3>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.8, flex: 1, color: L.text2 }}>{description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {stack.map(s => (
              <span key={s} style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.67rem', padding: '0.25rem 0.6rem', borderRadius: '4px', background: L.bg, border: `1px solid ${L.border}`, color: L.text3 }}>{s}</span>
            ))}
          </div>
          <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.78rem', color: L.text3 }}>{linkLabel}</p>
        </>
      )}
    </div>
  )
}

import React from 'react'

export default function Projects() {
  return (
    <section id="projects" style={{ background: L.bg, padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ display: 'block', width: 24, height: 1, background: L.accent, flexShrink: 0 }} />
          <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: L.accent }}>
            Selected work
          </span>
        </div>

        <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(2rem,3.5vw,3rem)', color: L.text, lineHeight: 1.1, marginBottom: '1rem' }}>
          Projects
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.75, color: L.text2, marginBottom: '3.5rem', maxWidth: '560px' }}>
          Academic and independent projects — each built end-to-end, from problem framing through to deployed product.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
