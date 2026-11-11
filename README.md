# 3D Portfolio

Welcome to my playground of pixels, keys, and scroll-triggered chaos. This portfolio mixes Spline 3D, GSAP motion, and a pile of React/Tailwind goodness to show off projects, experience, and tools—without feeling like a resume template. Dive in, poke the keyboard, spam the scroll wheel (gently), and enjoy the ride. Cookies not included, but good vibes are. If something looks broken, it might just be “experimental art.”

## 🔥 Features

Here are the loud highlights of this playground:

- 🎹 **3D Interactive Animations**: Custom Spline keyboard; every keycap maps to a skill and pops titles/descriptions on hover.
- ✨ **Slick Interactions & Animations**: GSAP + Framer Motion for buttery scroll pins, hover reveals, and scene transitions.
- 🚀 **Horizontal Project Reel**: Pinned-on-scroll carousel with tilt and glow; snaps nicely on touch for mobile.
- 🧊 **Stacking Experience Cards**: Layered timeline that sticks and stacks as you scroll—no jitter, just vibes.
- 🌙 **Theme + Fun Overlays**: Playful toggles, Lottie “coming soon” dialog for future drops.
- 📱 **Responsive Everywhere**: Safe-area friendly, `dvh` mindful layouts to avoid toolbar jump scares.

## 🛠️ Tech Stack

- **Framework:** Next.js, TypeScript, React
- **Styling:** Tailwind CSS, shadcn/ui
- **Animation:** GSAP (ScrollTrigger), Framer Motion, VanillaTilt
- **3D:** Spline (`@splinetool/runtime`, `@splinetool/react-spline`)
- **Extras:** Lottie for playful moments

## Getting Started

```bash
pnpm install
pnpm dev
# or
yarn
yarn dev
```

Then open `http://localhost:3000`.

## Configuration

- **Skills keyboard:** edit `src/data/constants.ts` (`SKILLS`) to change labels/blurbs. For new icons on the 3D keys, update the Spline scene (`public/assets/skills-keyboard.spline`) to match the skill names.
- **Projects data:** `src/data/projects.tsx`
- **Experience data:** `src/data/constants.ts` (`EXPERIENCE`)
- **Animated background states:** `src/components/animated-background-config.ts`
- **Footer links:** `src/components/footer/config.ts`

## Assets

- 3D scene: `public/assets/skills-keyboard.spline`
- Lottie animations: `public/assets/lottie/`
- Project screenshots: `public/assets/projects-screenshots/`
- Tech icons: `public/assets/tech/`

## Notes on Responsiveness & Motion

- Horizontal projects track only pins on desktop; mobile keeps native scrolling.
- Experience cards stack with controlled offsets to avoid jitter.
- Safe-area + `dvh` usage minimizes mobile browser toolbar jumps.

## Inspiration

This project is inspired by the amazing work of **Naresh Khatri**. His innovative approach to web design and attention to detail has been a huge influence. Thank you, Naresh! 🙏

## Contributing & Stars

If you fork this, remix it, or just vibe with it, toss a ⭐ on the repo—it keeps the electrons happy. PRs are welcome; bring snacks, tests, and well-formatted code.
