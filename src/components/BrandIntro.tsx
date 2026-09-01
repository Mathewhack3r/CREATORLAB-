import { BookOpen, Wand2, LineChart } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Learn',
    text: 'Understand the tools and techniques behind modern content creation.',
  },
  {
    icon: Wand2,
    title: 'Create',
    text: 'Turn ideas into engaging videos and digital content.',
  },
  {
    icon: LineChart,
    title: 'Grow',
    text: 'Learn how to market your content and build your online presence.',
  },
]

export default function BrandIntro() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32">
      <div className="container-lab">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Welcome to CreatorLab AI</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/60">
            CreatorLab AI is built for the next generation of digital creators. We
            make it easier to understand AI tools, create engaging content, and
            develop practical skills that can be applied in the real world.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="reveal glass-panel group rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
              data-reveal-delay={i * 120}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand-glow transition-colors duration-300 group-hover:bg-brand/25">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
