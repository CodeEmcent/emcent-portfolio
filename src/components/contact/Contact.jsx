import { useState } from 'react'
import { personal } from '../../data'

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

const contactLinks = [
  {
    href: personal.linkedin,
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'Chukwuemeka Innocent Emekwue',
  },
  {
    href: personal.github,
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'github.com/CodeEmcent',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(personal.formspree, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-10" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Get in touch</p>
        <h2 className="font-serif mb-14" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text)', lineHeight: 1.1 }}>
          Let's work together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-base leading-[1.8] mb-8 max-w-sm" style={{ color: 'var(--text-2)' }}>
              Whether you're looking for a systems thinker, a developer, or someone who bridges both — I'd like to hear from you. Open to graduate roles, consulting opportunities, and project collaborations.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ href, icon, label, value }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border no-underline transition-all duration-200"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <span style={{ color: 'var(--text-2)' }}>{icon}</span>
                  <div>
                    <p className="font-mono text-[0.68rem] tracking-[0.08em] uppercase" style={{ color: 'var(--text-3)' }}>
                      {label}
                    </p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--text)' }}>{value}</p>
                  </div>
                  <span className="ml-auto text-sm" style={{ color: 'var(--text-3)' }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
              { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
              { id: 'subject', label: 'Subject', type: 'text',  placeholder: 'Role opportunity / Collaboration / Project' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-2">
                <label htmlFor={id} className="font-mono text-[0.68rem] tracking-[0.1em] uppercase" style={{ color: 'var(--text-3)' }}>
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={placeholder}
                  required={id !== 'subject'}
                  className="form-input"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[0.68rem] tracking-[0.1em] uppercase" style={{ color: 'var(--text-3)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about the opportunity or project..."
                required
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="flex items-center justify-center gap-2 py-3.5 px-8 rounded-lg text-sm font-semibold tracking-wide transition-opacity duration-200 hover:opacity-85 disabled:opacity-60"
              style={{ background: 'var(--accent)', color: 'var(--bg)' }}
            >
              {status === 'sending' ? 'Sending…'
               : status === 'success' ? 'Sent ✓'
               : 'Send Message →'}
            </button>

            {status === 'success' && (
              <p className="text-sm" style={{ color: 'var(--accent)' }}>
                ✓ Message sent — Thank you very much. I'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm" style={{ color: '#f87171' }}>
                Something went wrong. Please reach out via LinkedIn instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
