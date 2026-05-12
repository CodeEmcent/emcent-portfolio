export default function Monogram({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Emcent monogram"
    >
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.35" />
      <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.2" />
      <rect x="8.5" y="9"    width="11" height="2.2" rx="1.1" fill="currentColor" />
      <rect x="8.5" y="12.9" width="8"  height="2.2" rx="1.1" fill="currentColor" />
      <rect x="8.5" y="16.8" width="11" height="2.2" rx="1.1" fill="currentColor" />
    </svg>
  )
}
