import { useInView } from '../../hooks/useInView'

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 800,
  className = '',
  style = {},
}) {
  const { ref, inView } = useInView()

  const transforms = {
    up:    `translateY(${distance}px)`,
    left:  `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate(0,0)' : transforms[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
