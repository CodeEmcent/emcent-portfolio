import { useEffect, useState } from 'react'

// ─────────────────────────────────────────────
//  TOAST COMPONENT
//  Usage: <Toast message="..." type="success|error" onClose={() => {}} />
//  Auto-dismisses after 4 seconds.
//  Slides in from top-right, fades out smoothly.
// ─────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const ErrorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

export default function Toast({ message, type = 'success', onClose }) {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  const isSuccess = type === 'success'

  useEffect(() => {
    // Slide in
    const enterTimer = setTimeout(() => setVisible(true), 10)

    // Start leave animation after 4 seconds
    const leaveTimer = setTimeout(() => {
      setLeaving(true)
      setTimeout(() => onClose(), 400)
    }, 4000)

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(leaveTimer)
    }
  }, [onClose])

  const handleClose = () => {
    setLeaving(true)
    setTimeout(() => onClose(), 400)
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '80px',
        right: '1.5rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 1.25rem',
        borderRadius: '12px',
        background: isSuccess ? '#0d0f0e' : '#1a0a0a',
        border: `1px solid ${isSuccess ? '#4ade80' : '#ef4444'}`,
        boxShadow: `0 8px 32px ${isSuccess ? 'rgba(74,222,128,0.15)' : 'rgba(239,68,68,0.15)'}`,
        minWidth: '280px',
        maxWidth: '380px',
        transform: visible && !leaving ? 'translateX(0)' : 'translateX(calc(100% + 2rem))',
        opacity: visible && !leaving ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease',
        pointerEvents: 'all',
      }}
      role="alert"
      aria-live="polite"
    >
      {/* Icon */}
      <div style={{
        flexShrink: 0,
        width: 32,
        height: 32,
        borderRadius: '8px',
        background: isSuccess ? 'rgba(74,222,128,0.15)' : 'rgba(239,68,68,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isSuccess ? '#4ade80' : '#ef4444',
      }}>
        {isSuccess ? <CheckIcon /> : <ErrorIcon />}
      </div>

      {/* Message */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#eef0ec',
          lineHeight: 1.2,
          marginBottom: '0.15rem',
        }}>
          {isSuccess ? 'Message sent!' : 'Something went wrong'}
        </p>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.78rem',
          color: '#9aa398',
          lineHeight: 1.4,
        }}>
          {message}
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '3px',
        borderRadius: '0 0 12px 12px',
        background: isSuccess ? '#4ade80' : '#ef4444',
        animation: 'toastProgress 4s linear forwards',
        opacity: 0.6,
      }} />

      {/* Close button */}
      <button
        onClick={handleClose}
        style={{
          flexShrink: 0,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#6b7069',
          padding: '4px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#eef0ec'}
        onMouseLeave={e => e.currentTarget.style.color = '#6b7069'}
        aria-label="Close notification"
      >
        <CloseIcon />
      </button>

      <style>{`
        @keyframes toastProgress {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  )
}
