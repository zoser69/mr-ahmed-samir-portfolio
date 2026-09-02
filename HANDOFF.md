# Mr. Ahmed Samir 3D Portfolio — Session Handoff (Finalized)

## 1. Project Summary
- **Live Production URL**: https://zoser69.github.io/mr-ahmed-samir-portfolio/
- **Local Dev Server**: `http://localhost:5173/`
- **Tech Stack**: Vanilla JS (ES Modules) + Vite v6 + Three.js r128 + GSAP v3 (ScrollTrigger) + Tailwind CSS v4 + Lucide Icons.
- **Visual Theme**: Luxury Dark Truffle & Burnt Umber (`#060402`, `#4E2E1B`, `#FAF6F0`, `#A67C5B`, `#2E1E15`).

## 2. Key Architecture & Polish Completed
1. **Continuous 3D Ambient Atmosphere (`src/threeScene.js`)**:
   - Hardware-aware tier detection (`High`, `Mid`, `Low`) based on CPU cores and RAM with dynamic real-time FPS watchdog.
   - Continuous 60fps full-page tumbling 3D letters across all sections without pausing on scroll.
   - Preserved automated dormancy via `document.addEventListener('visibilitychange')` when tab is hidden.
2. **Cinematic Depth of Field Bokeh (`src/style.css`, `index.html`)**:
   - Tuned to the golden `1.8px` blur (`.canvas-ambient-blur`) with `transform: scale(1.015) translateZ(0)` on `#three-canvas`.
   - Softens background letters into an ambient particle cloud while foreground text and portrait remain 100% crystal-sharp.
3. **Calibrated Typography Hierarchy (System 3)**:
   - English Master H1: `Outfit` (Bold, natural 1:1 circular geometric proportions, -0.02em tracking, zero squash/stretch distortion).
   - Arabic Display & Navigation: `Tajawal` (Bold, 26px/1.35, crisp modern authority).
   - Arabic Body & Bio: `IBM Plex Sans Arabic` (Calibrated to `14px-15px`, `leading-[1.8]`, comfortable secondary hierarchy).
   - Strict Zero-Tracking Law: `letter-spacing: 0 !important;` on all Arabic text.
4. **Stepped Academic Journey Component (Shape 4)**:
   - Unified horizontal track showing pedagogical progression (`1: شهادة إعدادية` ➔ `2: شهادة ثانوية` ➔ `3: بكالوريا عامة`).
   - Numbered badges, RTL directional flow (`←`), and unified luxury dark truffle card styling.
5. **Right-Aligned Minimalist Experience Timeline (`index.html`)**:
   - Replaced heavy cards and noisy label badges with a clean, right-aligned vertical editorial stepper in RTL.
   - Removed pinging animations for quiet dignity; integrated duration into primary semantic typography.
6. **Harmonized Master Animation System (`src/portraitHero.js`)**:
   - Signature dynamic split side-entrance preserved for Hero (portrait `x: -40 -> 0`, text `x: 20 -> 0`).
   - Unified Master Timelines on `#about` and `#contact` with vertical track expansion (`scaleY: 0 -> 1`) and chronological cascading.
   - Forced `history.scrollRestoration = 'manual'` so every page refresh begins at the top for an uncorrupted sequence.

## 3. High-Rated Design & Arabic Skills Suite (Local Scoped)
- `arabic-typography-and-design`: Master rules for Arabic typography, Arabic font pairing, zero-tracking rule, optical size compensation (+15%–25%), line-height rules (1.65–1.85), culturally resonant luxury palettes, and CSS logical properties.
- `color-expert`: David Aerne's (meodai) color science and harmony skill (OKLCH, APCA, WCAG, palette generation, pigment mixing, color naming).
- `better-colors`, `better-typography`, `better-ui`, `better-layout`: Jakub Krehel's design system and UI polish suite.
- `impeccable`, `no-ai-design-slop`, `audit-ai-design-slop`: Anti-slop quality gates.

## 4. Production Build & Deployment Pipeline
- Build: `npm run build`
- Deploy: Pushed directly to `gh-pages` branch via git worktree.
- Repository: `https://github.com/zoser69/mr-ahmed-samir-portfolio.git` (main: `8122e7d`, gh-pages: `8bbe386`).
- Git Commit Log: All features committed atomically with clean conventional commits and pushed.
