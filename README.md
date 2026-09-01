# CreatorLab AI — Website

**Learn. Create. Grow.**

A modern, animated, fully static front-end website for the CreatorLab AI brand — built with React, TypeScript, Vite and Tailwind CSS. No backend, no database, no authentication, no server required.

---

## 1. Installing dependencies

Make sure you have [Node.js](https://nodejs.org/) 18 or newer installed. Then, from the project folder, run:

```bash
npm install
```

## 2. Running the project locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`). Open that address in your browser. The page will hot-reload as you edit files.

## 3. Building the project

```bash
npm run build
```

This creates a production-ready `dist/` folder containing static HTML, CSS and JS — ready to be uploaded to any static host.

You can preview the production build locally with:

```bash
npm run preview
```

## 4. Deploying to Netlify

**Option A — drag and drop:**
1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the generated `dist/` folder into the browser window.

**Option B — connect your GitHub repo:**
1. Push this project to a GitHub repository.
2. On Netlify, click "Add new site" → "Import an existing project" and connect the repo.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Deploy.

**Deploying to GitHub Pages:**
1. Run `npm run build`.
2. Push the contents of the `dist/` folder to a `gh-pages` branch (or use a tool like [`gh-pages`](https://www.npmjs.com/package/gh-pages)), or configure GitHub Pages to serve from a `/docs` folder and copy `dist/` contents there.
3. The site uses relative paths (`base: './'` in `vite.config.ts`), so it works from any subfolder or repository name without extra configuration.

## 5. Replacing the social media links

All social and contact links live in **one place**: `src/components/Contact.tsx`, at the top of the file:

```ts
export const SOCIAL_LINKS = {
  WHATSAPP_LINK: 'https://wa.me/2340000000000',
  FACEBOOK_LINK: 'https://facebook.com/creatorlabai',
  TIKTOK_LINK: 'https://tiktok.com/@creatorlabai',
  INSTAGRAM_LINK: 'https://instagram.com/creatorlabai',
}
```

Replace each placeholder URL with your real link. The footer automatically imports and reuses the same values, so you only need to edit them once.

For the WhatsApp link specifically, use the format `https://wa.me/<countrycode><number>` with no `+`, spaces or leading zero (e.g. `https://wa.me/2348012345678`).

## 6. Replacing or updating the logo

The logo file lives at `src/assets/logo.png`. To update it:

1. Replace `src/assets/logo.png` with your new logo file (keep the same filename, or update the `import logo from '../assets/logo.png'` lines in `src/components/Navbar.tsx`, `src/components/Hero.tsx` and `src/components/Footer.tsx` if you rename it).
2. The logo is also used as the browser favicon — see the `<link rel="icon">` tag in `index.html`.

---

## Project structure

```
├── index.html                # HTML entry point, page metadata
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Assembles all sections
│   ├── index.css              # Tailwind + global styles/animations
│   ├── assets/
│   │   └── logo.png           # Brand logo (used as-is, unmodified)
│   ├── hooks/
│   │   └── useReveal.ts       # Scroll-reveal animation hook
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── BrandIntro.tsx     # "Welcome to CreatorLab AI"
│       ├── WhatWeTeach.tsx
│       ├── Courses.tsx
│       ├── WhyUs.tsx
│       ├── ComingSoon.tsx
│       ├── About.tsx
│       ├── Contact.tsx        # Social links defined here
│       ├── Footer.tsx
│       └── ParticleField.tsx  # Ambient background particles
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## Notes

- **Accessibility:** All animations respect `prefers-reduced-motion`. Focus states are visible for keyboard navigation.
- **Performance:** Animations use CSS transforms/opacity (GPU-accelerated) rather than layout-triggering properties. The scroll-reveal effect uses a lightweight `IntersectionObserver`, not a scroll-event listener.
- **No backend:** This project is 100% static front-end. There is nothing to configure, no `.env` file, and no server process required.
- **Icons:** Provided by [Lucide React](https://lucide.dev/), a lightweight icon library.
