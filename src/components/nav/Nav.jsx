import { useState, useEffect } from 'react'
import Monogram from '../ui/Monogram'
import { personal } from '../../data'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile — hamburger only shows below 768px
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2.5rem',
    height: '60px',
    background: 'rgba(13,15,14,0.92)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid #2a2e2b',
  }

  return (
    <>
      <nav style={navStyle}>
        {/* Brand */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <span style={{ color: 'var(--accent)', display: 'flex' }}><Monogram size={26} /></span>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.78rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>Emcent</span>
        </a>

        {/* Desktop links — only when not mobile */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: 'var(--text-2)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
                >{l}</a>
              </li>
            ))}
          </ul>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Connect — desktop only */}
          {!isMobile && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '0.45rem 1.25rem',
                borderRadius: '8px',
                background: 'var(--accent)',
                color: 'var(--bg)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Connect →</a>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '4px',
                background: 'none',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  borderRadius: '2px',
                  background: 'var(--text-2)',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform: open
                    ? i === 0 ? 'translateY(7px) rotate(45deg)'
                    : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* RIGHT-SIDE DRAWER — mobile only */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div
            onClick={close}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 48,
              background: 'rgba(0,0,0,0.6)',
              opacity: open ? 1 : 0,
              pointerEvents: open ? 'all' : 'none',
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Drawer panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '280px',
              zIndex: 49,
              background: '#0d0f0e',
              borderLeft: '1px solid #2a2e2b',
              transform: open ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Drawer header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 1.5rem',
              height: '60px',
              borderBottom: '1px solid #2a2e2b',
            }}>
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}>Menu</span>
              <button
                onClick={close}
                aria-label="Close menu"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-2)',
                  fontSize: '1.4rem',
                  lineHeight: 1,
                  padding: '4px',
                }}
              >✕</button>
            </div>

            {/* Drawer links */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
              {links.map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={close}
                  style={{
                    padding: '1rem 1.5rem',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: 'var(--text-2)',
                    borderBottom: '1px solid #1a1d1b',
                    transition: 'color 0.2s, background 0.2s',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.background = '#131614'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-2)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >{l}</a>
              ))}
            </nav>

            {/* Drawer footer */}
            <div style={{ padding: '1.5rem' }}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                }}
              >Connect on LinkedIn →</a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
