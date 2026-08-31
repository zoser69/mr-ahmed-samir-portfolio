# Mr. Ahmed Samir 3D Portfolio — Session Handoff (Finalized)

## 1. Project Summary
- **Live Production URL**: https://zoser69.github.io/mr-ahmed-samir-portfolio/
- **Tech Stack**: Vanilla JS (ES Modules) + Vite v6 + Three.js r128 + GSAP v3 (ScrollTrigger) + Tailwind CSS v4 + Lucide Icons.
- **Visual Theme**: Luxury Dark Truffle & Burnt Umber (`#060402`, `#4E2E1B`, `#FAF6F0`, `#A67C5B`, `#2E1E15`).

## 2. Key Architecture & Features Completed
1. **Adaptive 3-Tier WebGL Engine (`src/threeScene.js`)**:
   - Hardware-aware tier detection (`High`, `Mid`, `Low`) based on CPU cores and RAM.
   - Dynamic real-time FPS watchdog downscales quality on-the-fly if frame rate drops below 40 FPS, preventing any lag or stutter.
   - Wide 16:9 4-quadrant slot coordinate system ensuring zero clumping and zero overlap with the teacher's portrait.
   - Time-delta frame-rate independent rotation (`t * rotSpeed * 60`).
2. **Deterministic GSAP Scroll Motion (`src/portraitHero.js`)**:
   - Independent element ScrollTriggers (`top 75%`) so animations never trigger offscreen or rush past the user.
   - Complete removal of `fastScrollEnd` and addition of `force3D: true` for buttery 60fps motion without subpixel shifts.
   - Mobile URL bar resize stabilization (`ScrollTrigger.config({ ignoreMobileResize: true })` and width-only listener).
3. **Anti-Slop Editorial Design & Arabic Typography (`index.html`, `src/style.css`)**:
   - Removed fake hover motion and nested cards from Hero stages in favor of a clean, prestigious editorial list.
   - De-nested Matryoshka cards in Contact section into a clean direct grid.
   - Replaced redundant badge pills in About timeline with large numbers leading the visual hierarchy.
   - Enforced zero letter-spacing (`letter-spacing: 0 !important`) for Arabic text.
   - Loaded `IBM Plex Sans Arabic` for crisp, native Arabic body typography.
   - Elevated text contrast to WCAG AAA (`#CDB19B` 9.72:1, `#FAF6F0` 18:1, `#A67C5B` 5.25:1).

## 3. High-Rated Design & Arabic Skills Suite
- `arabic-typography-and-design`: Master rules for Arabic typography, Arabic font pairing, zero-tracking rule, optical scale compensation (+15%–25%), line-height rules (1.65–1.85), culturally resonant luxury palettes, and CSS logical properties.
- `color-expert`: David Aerne's (meodai) color science and harmony skill (OKLCH, APCA, WCAG, palette generation, pigment mixing, color naming).
- `better-colors`, `better-typography`, `better-ui`, `better-layout`: Jakub Krehel's design system and UI polish suite.
- `impeccable`, `no-ai-design-slop`, `audit-ai-design-slop`: Anti-slop quality gates.

## 4. Production Build & Deployment Pipeline
- Build: `npm run build`
- Deploy: `npx --yes gh-pages -d dist`
- Repository: `https://github.com/zoser69/mr-ahmed-samir-portfolio.git` (branch `main`).
