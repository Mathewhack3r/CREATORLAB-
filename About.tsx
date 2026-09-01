import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="relative py-20 sm:py-28">
      <div className="container-lab">
        <div className="reveal mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Building Better Creators With AI
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/60">
            CreatorLab AI exists to help creators understand technology, develop
            practical digital skills and turn their ideas into meaningful
            content.
          </p>
        </div>
      </div>
    </section>
  )
}
