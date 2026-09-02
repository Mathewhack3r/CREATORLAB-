import {
  Clapperboard,
  Scissors,
  Smartphone,
  Megaphone,
  Camera,
  Cpu,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const TOPICS = [
  {
    icon: Clapperboard,
    title: 'AI Video Creation',
    text: 'Learn how to generate scripts, create characters, generate visuals, animate scenes and produce complete AI-powered videos.',
  },
  {
    icon: Scissors,
    title: 'Video Clipping',
    text: 'Learn how to identify valuable moments, create engaging short-form clips, add captions and edit content for social platforms.',
  },
  {
    icon: Smartphone,
    title: 'TikTok Content',
    text: 'Learn how to build a content workflow and create short-form videos designed for TikTok and other social platforms.',
  },
  {
    icon: Megaphone,
    title: 'Content Marketing',
    text: 'Learn how to package, promote and market your content using modern digital strategies.',
  },
  {
    icon: Camera,
    title: 'Mobile Creation',
    text: 'Learn practical content creation workflows that can be performed directly from your smartphone.',
  },
  {
    icon: Cpu,
    title: 'AI Tools',
    text: 'Discover useful AI tools and workflows that can make the creative process faster and more efficient.',
  },
]

export default function WhatWeTeach() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="teach" ref={ref} className="relative py-24 sm:py-32">
      <div className="container-lab">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What We Teach</h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t, i) => (
            <div
              key={t.title}
              data-reveal-delay={(i % 3) * 100}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/50 p-7 transition-all duration-300 hover:border-brand-glow/30 hover:bg-panel/80"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/0 blur-2xl transition-all duration-500 group-hover:bg-brand/30"
                aria-hidden="true"
              />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-glow transition-transform duration-300 group-hover:scale-110">
                <t.icon size={20} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold">{t.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-white/55">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
