import { useEffect, useState } from 'react'

// ─────────────────────────────────────────────
//  SUCCESS MODAL
//  Full-screen overlay modal for contact form
//  confirmation. Backdrop darkens the page,
//  modal centres with animated entrance.
// ─────────────────────────────────────────────

const CheckCircle = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="rgba(74,222,128,0.12)"/>
    <circle cx="28" cy="28" r="20" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <polyline
      points="18,28 24,34 38,20"
      stroke="#4ade80"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

export default function SuccessModal({ onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Trigger entrance animation
    const t = setTimeout(() => setVisible(true), 10)
    // Close on Escape key
    const handleKey = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 350)
  }

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: visible ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0)',
        backdropFilter: visible ? 'blur(6px)' : 'blur(0px)',
        WebkitBackdropFilter: visible ? 'blur(6px)' : 'blur(0px)',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      {/* Modal panel */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0d0f0e',
          border: '1px solid #2a2e2b',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          maxWidth: '460px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,222,128,0.1)',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.96)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#6b7069',
            fontSize: '1.2rem',
            lineHeight: 1,
            padding: '6px',
            borderRadius: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#eef0ec'}
          onMouseLeave={e => e.currentTarget.style.color = '#6b7069'}
        >✕</button>

        {/* Icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
          <CheckCircle />
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: '1.75rem',
          color: '#ffffff',
          lineHeight: 1.15,
          marginBottom: '0.75rem',
        }}>
          Message sent!
        </h2>

        {/* Subtext */}
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.95rem',
          color: '#9aa398',
          lineHeight: 1.75,
          marginBottom: '0.5rem',
        }}>
          Thank you for reaching out. I'll review your message and get back to you — usually in less than 24 hours.
        </p>

        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: '#4ade80',
          marginBottom: '2.25rem',
        }}>
          innocent@emcent.dev
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: '#1a1d1b', marginBottom: '2rem' }} />

        {/* CTA */}
        <button
          onClick={handleClose}
          style={{
            width: '100%',
            padding: '0.9rem',
            borderRadius: '10px',
            background: '#4ade80',
            color: '#0d0f0e',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Back to portfolio
        </button>

        {/* Footer note */}
        <p style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#6b7069',
          marginTop: '1.25rem',
        }}>
          Press Esc or click anywhere to close
        </p>
      </div>
    </div>
  )
}
