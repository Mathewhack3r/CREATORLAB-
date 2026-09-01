import { MessageCircle, Facebook, Instagram, Music2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

// ---------------------------------------------------------------------------
// REPLACE THESE PLACEHOLDER LINKS WITH YOUR REAL SOCIAL / CONTACT LINKS.
// This is the ONLY place these links are defined in the whole project.
// ---------------------------------------------------------------------------
export const SOCIAL_LINKS = {
  WHATSAPP_LINK: 'https://wa.me/2340000000000',
  FACEBOOK_LINK: 'https://facebook.com/creatorlabai',
  TIKTOK_LINK: 'https://tiktok.com/@creatorlabai',
  INSTAGRAM_LINK: 'https://instagram.com/creatorlabai',
}

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: SOCIAL_LINKS.FACEBOOK_LINK },
  { icon: Music2, label: 'TikTok', href: SOCIAL_LINKS.TIKTOK_LINK },
  { icon: Instagram, label: 'Instagram', href: SOCIAL_LINKS.INSTAGRAM_LINK },
]

export default function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-deep/25 to-transparent"
        aria-hidden="true"
      />
      <div className="container-lab relative">
        <div className="reveal mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Start Creating?</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/60">
            Follow CreatorLab AI and stay updated on upcoming courses, tutorials,
            creator tips and new resources.
          </p>

          <a
            href={SOCIAL_LINKS.WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-9 inline-flex"
          >
            <MessageCircle size={18} />
            Chat With Us on WhatsApp
          </a>

          <div className="mt-10 flex items-center justify-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-brand-glow/40 hover:bg-brand/20 hover:text-white"
              >
                <s.icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
