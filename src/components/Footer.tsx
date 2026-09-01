import { Facebook, Instagram, Music2 } from 'lucide-react'
import logo from '../assets/logo.png'
import { SOCIAL_LINKS } from './Contact'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Teach', href: '#teach' },
  { label: 'Courses', href: '#courses' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: SOCIAL_LINKS.FACEBOOK_LINK },
  { icon: Music2, label: 'TikTok', href: SOCIAL_LINKS.TIKTOK_LINK },
  { icon: Instagram, label: 'Instagram', href: SOCIAL_LINKS.INSTAGRAM_LINK },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-panel/60 py-14">
      <div className="container-lab flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img src={logo} alt="CreatorLab AI" className="h-8 w-auto" />
          <p className="text-sm text-white/50">Learn. Create. Grow.</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-brand-glow/30 hover:text-white"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="container-lab mt-10 border-t border-white/5 pt-6 text-center">
        <p className="text-xs text-white/35">© 2026 CreatorLab AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
