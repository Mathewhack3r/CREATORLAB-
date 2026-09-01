import { Scissors, Bot, Bell } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const COURSES = [
  {
    icon: Scissors,
    name: 'Clip Mastery',
    subtitle: 'Master Short-Form Video Clipping',
    text: 'Learn how to find suitable source content, identify engaging moments, edit short-form clips, add captions and prepare your content for social media.',
  },
  {
    icon: Bot,
    name: 'AI Video Creator',
    subtitle: 'Create Videos With AI',
    text: 'Learn how to generate scripts, design characters, create AI visuals, animate scenes, generate voiceovers and edit everything into complete videos.',
  },
]

export default function Courses() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="courses" ref={ref} className="relative py-24 sm:py-32">
      <div className="container-lab">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Learn With CreatorLab AI</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {COURSES.map((c, i) => (
            <div
              key={c.name}
              data-reveal-delay={i * 130}
              className="reveal glass-panel group relative overflow-hidden rounded-3xl p-9 transition-all duration-300 hover:border-brand-glow/25"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/20 text-brand-glow">
                  <c.icon size={26} />
                </div>
                <span className="rounded-full border border-brand-glow/30 bg-brand-glow/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-glow">
                  Coming Soon
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-semibold">{c.name}</h3>
              <p className="relative mt-1.5 text-[15px] font-medium text-brand-glow/90">
                {c.subtitle}
              </p>
              <p className="relative mt-4 text-[14.5px] leading-relaxed text-white/60">
                {c.text}
              </p>

              <button
                type="button"
                className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:border-brand-glow/40 hover:bg-white/10"
              >
                <Bell size={15} />
                Notify Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
