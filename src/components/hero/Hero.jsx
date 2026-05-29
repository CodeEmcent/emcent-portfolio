import { analytics } from '../../analytics'
import Monogram from '../ui/Monogram'
import { personal, heroStack, certifications, projects } from '../../data'

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

// ─── Dynamic stats — derived from live data arrays ───────────────
// Adding a new cert or project to data/index.js updates these automatically.
const dynamicStats = [
  {
    num: projects.length,
    suffix: '+',
    label: 'Live Projects',
  },
  {
    num: 3,
    suffix: '',
    label: 'Degrees',
  },
  {
    num: certifications.professional.length + certifications.linkedin.length,
    suffix: '+',
    label: 'Certifications',
  },
]

export default function Hero() {
  const [first, ...rest] = personal.name.split(' ')
  const middle = rest[0]
  const last = rest.slice(1).join(' ')

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-6 md:px-10 pt-28 pb-16 max-w-6xl mx-auto"
    >
      {/* LEFT */}
      <div>
        {/* Eyebrow */}
        <p className="section-label animate-fade-up delay-100">Available for opportunities</p>

        {/* Name */}
        <h1
          className="animate-fade-up delay-200 font-serif leading-[1.05] mb-2"
          style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text)' }}
        >
          {first}<br />
          <em style={{ color: 'var(--accent)' }}>{middle}</em><br />
          {last}
        </h1>

        {/* Brand lockup */}
        <div className="animate-fade-up delay-300 flex items-center gap-3 mb-7" style={{ color: 'var(--accent)' }}>
          <Monogram size={38} />
          <div>
            <p className="font-mono text-sm tracking-[0.22em] uppercase leading-none" style={{ color: 'var(--accent)' }}>
              EMCENT
            </p>
            <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase mt-1" style={{ color: 'var(--text-3)' }}>
              Emekwue Innocent Chukwuemeka
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up delay-400 text-lg leading-[1.7] mb-10 max-w-md"
          style={{ color: 'var(--text-2)' }}
        >
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>MSc Management of Business IT graduate</strong>
          {' '}— bridging strategy, systems, and software. Based in London, building at the intersection of business thinking and technical execution.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-500 flex flex-wrap gap-3 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
            style={{ background: 'var(--accent)', color: 'var(--bg)' }}
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide border transition-all duration-200"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div className="animate-fade-up delay-600 flex gap-3">
          {[
            { href: personal.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn', onClick: () => analytics.linkedInClick() },
            { href: personal.github,   icon: <GithubIcon />,   label: 'GitHub',  onClick: () => analytics.githubClick() },
          ].map(({ href, icon, label, onClick }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={onClick}
              className="flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200"
              style={{ borderColor: 'var(--border)', color: 'var(--text-3)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)' }}
              title={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — info cards */}
      <div className="flex flex-col gap-3">

        {/* Stats — dynamic from data arrays */}
        <div className="card p-6 animate-fade-up delay-300">
          <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase mb-4" style={{ color: 'var(--text-3)' }}>
            At a glance
          </p>
          <div className="flex gap-6">
            {dynamicStats.map(({ num, suffix, label }) => (
              <div key={label}>
                <p className="font-serif text-[2rem] leading-none" style={{ color: 'var(--text)' }}>
                  {num}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-3)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="card p-6 animate-fade-up delay-400">
          <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase mb-4" style={{ color: 'var(--text-3)' }}>
            Core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {heroStack.map(({ label, hi }) => (
              <span
                key={label}
                className="font-mono text-[0.67rem] tracking-[0.06em] px-3 py-1.5 rounded-full border"
                style={hi
                  ? { background: 'rgba(74,222,128,0.1)', borderColor: 'rgba(74,222,128,0.3)', color: 'var(--accent)' }
                  : { background: 'var(--bg-3)', borderColor: 'var(--border)', color: 'var(--text-2)' }
                }
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="card p-5 animate-fade-up delay-500">
          <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase mb-3" style={{ color: 'var(--text-3)' }}>
            Currently
          </p>
          <span
            className="font-mono text-[0.7rem] px-3 py-1.5 rounded-full border"
            style={{ background: 'rgba(74,222,128,0.1)', borderColor: 'rgba(74,222,128,0.3)', color: 'var(--accent)' }}
          >
            ● MSc MBIT — University of Greenwich
          </span>
        </div>

      </div>
    </section>
  )
}
