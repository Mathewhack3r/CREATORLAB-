import { Sparkles } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function ComingSoon() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl"
        aria-hidden="true"
      />
      <div className="container-lab relative">
        <div className="reveal glass-panel mx-auto max-w-3xl rounded-[2rem] px-8 py-16 text-center sm:px-16">
          <span className="eyebrow-pill">
            <Sparkles size={14} />
            The lab never stops
          </span>
          <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
            Something New Is Coming.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            CreatorLab AI is just getting started. More practical courses,
            tutorials, AI tools, creator resources and digital skills are coming
            soon.
          </p>
          <a href="#contact" className="btn-primary mt-9 inline-flex">
            Stay Connected
          </a>
        </div>
      </div>
    </section>
  )
}
