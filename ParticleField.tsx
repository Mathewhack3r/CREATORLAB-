import { useMemo, type CSSProperties } from 'react'

/**
 * A small number of slow-drifting particles for ambience.
 * Purely decorative, respects prefers-reduced-motion via the
 * global CSS rule that freezes all animations.
 */
export default function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 14 + Math.random() * 12,
        delay: Math.random() * 10,
        drift: (Math.random() - 0.5) * 80,
      })),
    [],
  )

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-brand-glow animate-particle"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift-x': `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
