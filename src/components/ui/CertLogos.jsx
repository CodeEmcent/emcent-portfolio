// ─────────────────────────────────────────────
//  CERTIFICATION ISSUER LOGOS
//  Accurate SVG brand marks for each issuer.
// ─────────────────────────────────────────────

export function GoogleLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  )
}

export function MetaLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="meta-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0064E1"/>
          <stop offset="100%" stopColor="#0080FF"/>
        </linearGradient>
        <linearGradient id="meta-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0080FF"/>
          <stop offset="100%" stopColor="#00C2FF"/>
        </linearGradient>
      </defs>
      {/* Meta infinity / M mark simplified */}
      <path fill="url(#meta-grad-1)" d="M6 24c0-4 2.2-7.5 5.5-7.5 2 0 3.8 1.2 5.5 4l7 11.5c1.2 2 2.8 3 4.5 3 3 0 5.5-3 5.5-7.5s-2.5-7.5-5.5-7.5c-1.5 0-2.8.6-4 1.8l-2.5-3.5C23.8 16.8 26 16 28.5 16 33.5 16 38 19.5 38 24s-4.5 8-9.5 8c-3 0-5.5-1.3-7.5-4.5L14 16.5C12 13.5 9.5 12 6.5 12 2.5 12 0 15.5 0 20"/>
      <path fill="url(#meta-grad-2)" d="M6 24c0 4.5 2.5 8 5.5 8 1.5 0 2.8-.6 4-1.8l2.5 3.5C16.2 35.2 14 36 11.5 36 6.5 36 2 31.5 2 24"/>
    </svg>
  )
}

export function MicrosoftLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3"  width="19" height="19" fill="#F25022"/>
      <rect x="26" y="3"  width="19" height="19" fill="#7FBA00"/>
      <rect x="3" y="26" width="19" height="19" fill="#00A4EF"/>
      <rect x="26" y="26" width="19" height="19" fill="#FFB900"/>
    </svg>
  )
}

export function LinkedInLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#0A66C2"/>
      <path fill="#fff" d="M12.5 19h5v17h-5V19zm2.5-8a2.9 2.9 0 1 1 0 5.8A2.9 2.9 0 0 1 15 11zM21 19h4.8v2.3h.1c.7-1.3 2.3-2.6 4.8-2.6 5.1 0 6 3.4 6 7.7V36h-5v-8.6c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V36H21V19z"/>
    </svg>
  )
}

export function UnivelcityLogo({ size = 32 }) {
  // Custom U mark for Univelcity
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#0f2744"/>
      <path
        d="M14 13v14c0 5.5 4.5 9 10 9s10-3.5 10-9V13"
        stroke="#00c2a8" strokeWidth="4" strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="37" r="2.5" fill="#00c2a8"/>
    </svg>
  )
}

// Map cert name keywords to logo components
export function CertLogo({ issuer, size = 40 }) {
  const lower = issuer.toLowerCase()

  if (lower.includes('meta'))       return <MetaLogo size={size} />
  if (lower.includes('google'))     return <GoogleLogo size={size} />
  if (lower.includes('microsoft') || lower.includes('azure')) return <MicrosoftLogo size={size} />
  if (lower.includes('linkedin'))   return <LinkedInLogo size={size} />
  if (lower.includes('univelcity')) return <UnivelcityLogo size={size} />

  // Fallback — styled initial
  const initial = issuer.charAt(0).toUpperCase()
  return (
    <div style={{
      width: size, height: size,
      borderRadius: 10,
      background: 'var(--bg-3)',
      border: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: size * 0.4,
      fontWeight: 700,
      color: 'var(--accent)',
    }}>
      {initial}
    </div>
  )
}
