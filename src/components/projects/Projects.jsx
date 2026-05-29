import React, { useState, useEffect } from 'react'
import { projects } from '../../data'
import { useInView } from '../../hooks/useInView'
import AnimateIn from '../ui/AnimateIn'

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
      fontSize: '0.67rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '0.3rem 0.7rem',
      borderRadius: '100px',
      border: '1px solid',
      whiteSpace: 'nowrap',
      background: neutral ? L.bg : 'rgba(22,163,74,0.1)',
      borderColor: neutral ? L.border : 'rgba(22,163,74,0.3)',
      color: neutral ? L.text3 : L.accent,
    }}>
      {label}
    </span>
  )
}

function ProjectCard({ project, isMobile, animDelay = 0 }) {
  const { featured, wide, tags, year, title, description, stack, link, linkLabel } = project
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView()

  const cardStyle = {
    background: L.surface,
    border: `1px solid ${hovered ? L.accent : L.border}`,
    borderRadius: '20px',
    padding: isMobile ? '1.5rem' : '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    overflow: 'hidden',
    opacity: inView ? 1 : 0,
    transform: hovered
      ? 'translateY(-3px)'
      : inView ? 'translateY(0)' : 'translateY(40px)',
    transition: hovered
      ? 'border-color 0.3s ease, transform 0.2s ease'
      : `opacity 800ms cubic-bezier(0.4,0,0.2,1) ${animDelay}ms, transform 800ms cubic-bezier(0.4,0,0.2,1) ${animDelay}ms, border-color 0.3s ease`,
    gridColumn: (featured || wide) && !isMobile ? 'span 2' : 'span 1',
  }

  return (
    <div
      ref={ref}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: L.accent,
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      }} />

      {featured ? (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {tags.map((t, i) => <ProjectTag key={t} label={t} neutral={i > 0} />)}
              <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.7rem', color: L.text3, marginLeft: 'auto' }}>{year}</span>
            </div>
            <h3 style={{ fontFamily: '"DM Serif Display",serif', fontSize: isMobile ? '1.6rem' : '2rem', lineHeight: 1.15, color: L.text, marginBottom: '1rem' }}>
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
          {!isMobile && (
            <p style={{ fontFamily: '"DM Serif Display",serif', fontSize: '7rem', color: L.border, lineHeight: 1, fontStyle: 'italic', userSelect: 'none', flexShrink: 0 }}>01</p>
          )}
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

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="projects" style={{ background: L.bg, padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <AnimateIn>
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
        </AnimateIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1.25rem',
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} isMobile={isMobile} animDelay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  )
}
