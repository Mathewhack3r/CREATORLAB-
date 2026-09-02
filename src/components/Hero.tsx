import { Video, Captions, TrendingUp, Play } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0 grid-texture" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-radial-glow blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-[-15%] h-[420px] w-[420px] rounded-full bg-radial-glow blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="container-lab relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4rem]">
            Learn. Create.
            <br />
            <span className="bg-gradient-to-r from-brand-glow via-brand-light to-brand bg-clip-text text-transparent">
              Grow.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg font-medium text-white/85 lg:mx-0">
            Turn your ideas into content with AI.
          </p>

          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/60 lg:mx-0">
            CreatorLab AI helps aspiring creators learn AI video creation, video
            clipping, content marketing and modern digital content strategies —
            all through practical, beginner-friendly tutorials.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#courses" className="btn-primary w-full sm:w-auto">
              Explore Our Courses
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Join the Community
            </a>
          </div>
        </div>

        {/* Right: orbital visual — the signature animated moment */}
        <div className="relative z-10 mx-auto hidden h-[420px] w-[420px] items-center justify-center sm:flex lg:h-[460px] lg:w-[460px]">
          {/* Core glow */}
          <div
            className="absolute h-40 w-40 rounded-full bg-brand-light/40 blur-2xl animate-pulse-glow"
            aria-hidden="true"
          />

          {/* Center logo mark */}
          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/15 bg-panel/80 shadow-[0_0_60px_rgba(61,107,255,0.45)] backdrop-blur-sm">
            <img src={logo} alt="" className="h-14 w-14" aria-hidden="true" />
          </div>

          {/* Orbit ring 1 */}
          <div className="absolute inset-0 animate-orbit-slow">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 animate-counter-spin-slow">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-panel2 shadow-lg">
                <Video size={22} className="text-brand-glow" />
              </div>
            </div>
          </div>

          {/* Orbit ring 2 (reverse, different radius) */}
          <div className="absolute inset-6 animate-orbit-reverse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-counter-spin-reverse">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-panel2 shadow-lg">
                <Captions size={18} className="text-brand-glow" />
              </div>
            </div>
          </div>

          {/* Orbit ring 3 */}
          <div className="absolute inset-16 animate-orbit">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 animate-counter-spin">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-panel2 shadow-lg">
                <TrendingUp size={18} className="text-brand-glow" />
              </div>
            </div>
          </div>

          {/* Static orbit rings for visual structure */}
          <div className="absolute inset-0 rounded-full border border-white/[0.06]" aria-hidden="true" />
          <div className="absolute inset-6 rounded-full border border-white/[0.05]" aria-hidden="true" />
          <div className="absolute inset-16 rounded-full border border-white/[0.05]" aria-hidden="true" />

          {/* Floating play button accent */}
          <div className="absolute -bottom-2 -left-4 flex h-16 w-16 animate-float items-center justify-center rounded-full bg-brand shadow-[0_0_40px_rgba(19,57,224,0.6)]">
            <Play size={22} className="ml-0.5 fill-white text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
