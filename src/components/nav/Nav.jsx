import { useState, useEffect } from 'react'
import Monogram from '../ui/Monogram'
import { personal } from '../../data'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
        {/* Brand — onClick closes drawer if open, href scrolls to hero */}
        <a
          href="#hero"
          onClick={close}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <span style={{ color: 'var(--accent)', display: 'flex' }}><Monogram size={26} /></span>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.78rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>Emcent</span>
        </a>

        {/* Desktop links */}
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

          {isMobile && (
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'none',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                color: '#9aa398',
                transition: 'color 0.2s',
              }}
            >
              {open ? (
                <span style={{ lineHeight: 1, fontSize: '1.3rem' }}>✕</span>
              ) : (
                <span style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{
                      display: 'block',
                      width: '22px',
                      height: '2px',
                      borderRadius: '2px',
                      background: '#9aa398',
                    }} />
                  ))}
                </span>
              )}
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
              background: 'rgba(0,0,0,0.75)',
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
              width: '82vw',
              maxWidth: '340px',
              zIndex: 51,
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
              padding: '0 1.25rem',
              height: '64px',
              borderBottom: '1px solid #2a2e2b',
              flexShrink: 0,
            }}>
              {/* Brand — clicking closes drawer and scrolls to hero */}
              <a
                href="#hero"
                onClick={close}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(74,222,128,0.12)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Monogram size={22} />
                </div>
                <div>
                  <p style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.82rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#4ade80',
                    lineHeight: 1,
                    margin: 0,
                  }}>Emcent</p>
                  <p style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.58rem',
                    letterSpacing: '0.08em',
                    color: '#6b7069',
                    margin: '0.25rem 0 0',
                  }}>Emekwue Innocent Chukwuemeka</p>
                </div>
              </a>

              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close menu"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  color: '#9aa398',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >✕</button>
            </div>

            {/* Drawer links */}
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0.5rem 0',
              flexShrink: 0,
            }}>
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
                    color: '#9aa398',
                    borderBottom: '1px solid #1a1d1b',
                    transition: 'color 0.2s, background 0.2s',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#4ade80'
                    e.currentTarget.style.background = '#131614'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#9aa398'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >{l}</a>
              ))}
            </nav>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Drawer footer */}
            <div style={{
              padding: '1.5rem',
              borderTop: '1px solid #1a1d1b',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <p style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4ade80',
                textAlign: 'center',
                margin: 0,
              }}>● Available for opportunities</p>
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
                  padding: '0.875rem',
                  borderRadius: '8px',
                  background: '#4ade80',
                  color: '#0d0f0e',
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
