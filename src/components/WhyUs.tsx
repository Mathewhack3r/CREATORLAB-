import { Check, Layers } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const REASONS = [
  'Practical Tutorials',
  'Beginner Friendly',
  'Mobile Friendly',
  'AI-Powered Workflows',
  'Step-by-Step Learning',
  'Modern Content Strategies',
]

export default function WhyUs() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="container-lab grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="reveal">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why Learn With Us?</h2>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-glow">
                  <Check size={15} />
                </span>
                <span className="text-[15px] font-medium text-white/85">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative flex justify-center" data-reveal-delay="150">
          <div className="relative h-[320px] w-full max-w-md">
            <div
              className="absolute inset-0 rounded-[2rem] bg-radial-glow blur-2xl"
              aria-hidden="true"
            />
            <div className="glass-panel relative flex h-full flex-col justify-center gap-5 rounded-[2rem] p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand-glow">
                  <Layers size={18} />
                </div>
                <span className="text-sm font-semibold text-white/70">
                  Your learning stack
                </span>
              </div>

              {['Scripting', 'AI Visuals', 'Editing', 'Publishing'].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-brand-glow animate-gradient-shift bg-[length:200%_100%]"
                      style={{ width: `${70 - i * 10}%` }}
                    />
                  </div>
                  <span className="text-[13px] font-medium text-white/60">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
