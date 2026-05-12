import Monogram from '../ui/Monogram'

export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 md:px-10 py-6 border-t text-center sm:text-left"
      style={{ borderColor: 'var(--border)', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div className="flex items-center gap-2" style={{ color: 'var(--accent)' }}>
        <Monogram size={20} />
        <p className="text-sm" style={{ color: 'var(--text-3)' }}>
          <span style={{ color: 'var(--accent)' }}>Emcent</span> — Emekwue Innocent Chukwuemeka
        </p>
      </div>
      <p className="text-xs" style={{ color: 'var(--text-3)' }}>Built with React · London, 2026.</p>
    </footer>
  )
}
