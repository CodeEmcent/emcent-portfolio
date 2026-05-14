import { useState } from 'react'
import { personal } from '../../data'

const L = {
  bg:      '#f5f7f2',
  surface: '#ffffff',
  border:  '#dde0d9',
  text:    '#141a13',
  text2:   '#4a5548',
  text3:   '#8a9488',
  accent:  '#16a34a',
}

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const contactLinks = [
  { href: personal.linkedin,           icon: <LinkedInIcon />, label: 'LinkedIn', value: 'Chukwuemeka Innocent Emekwue' },
  { href: personal.github,             icon: <GithubIcon />,   label: 'GitHub',   value: 'github.com/CodeEmcent' },
  { href: `mailto:${personal.email}`,  icon: <EmailIcon />,    label: 'Email',    value: personal.email },
]

const inputStyle = {
  background: L.surface,
  border: `1px solid ${L.border}`,
  borderRadius: '12px',
  padding: '0.875rem 1rem',
  color: L.text,
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.9rem',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(personal.formspree, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); e.target.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" style={{ background: L.bg, padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ display: 'block', width: 24, height: 1, background: L.accent, flexShrink: 0 }} />
          <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: L.accent }}>
            Get in touch
          </span>
        </div>

        <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(2rem,3.5vw,3rem)', color: L.text, lineHeight: 1.1, marginBottom: '3.5rem' }}>
          Let's work together
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: L.text2, marginBottom: '2rem', maxWidth: '400px' }}>
              Whether you're looking for a systems thinker, a developer, or someone who bridges both — I'd like to hear from you. Open to graduate roles, consulting opportunities, and project collaborations.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contactLinks.map(({ href, icon, label, value }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', borderRadius: '12px', border: `1px solid ${L.border}`, background: L.surface, textDecoration: 'none', color: L.text, transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = L.accent}
                  onMouseLeave={e => e.currentTarget.style.borderColor = L.border}
                >
                  <span style={{ color: L.text3 }}>{icon}</span>
                  <div>
                    <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: L.text3 }}>{label}</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500, color: L.text, marginTop: '0.15rem' }}>{value}</p>
                  </div>
                  <span style={{ marginLeft: 'auto', color: L.text3 }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { id: 'name',    label: 'Name',    type: 'text',  ph: 'Your name',    req: true },
              { id: 'email',   label: 'Email',   type: 'email', ph: 'your@email.com', req: true },
              { id: 'subject', label: 'Subject', type: 'text',  ph: 'Role opportunity / Collaboration / Project', req: false },
            ].map(({ id, label, type, ph, req }) => (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor={id} style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: L.text3 }}>
                  {label}
                </label>
                <input id={id} name={id} type={type} placeholder={ph} required={req}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = L.accent}
                  onBlur={e => e.target.style.borderColor = L.border}
                />
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: L.text3 }}>
                Message
              </label>
              <textarea id="message" name="message" placeholder="Tell me about the opportunity or project..." required
                style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                onFocus={e => e.target.style.borderColor = L.accent}
                onBlur={e => e.target.style.borderColor = L.border}
              />
            </div>
            <button type="submit" disabled={status === 'sending' || status === 'success'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: L.accent, color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', opacity: (status === 'sending' || status === 'success') ? 0.6 : 1 }}
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send Message →'}
            </button>
            {status === 'success' && <p style={{ fontSize: '0.85rem', color: L.accent }}>✓ Message sent — I'll be in touch soon.</p>}
            {status === 'error'   && <p style={{ fontSize: '0.85rem', color: '#dc2626' }}>Something went wrong. Please reach out via LinkedIn instead.</p>}
          </form>

        </div>
      </div>
    </section>
  )
}
