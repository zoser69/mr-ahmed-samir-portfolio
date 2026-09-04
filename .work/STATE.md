# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: REVERSIBLE BIDIRECTIONAL SCROLL REPLAY & CIRCULAR BOKEH APPLIED & VERIFIED — Animations play on scroll down, smoothly reverse when scrolling up, replay on scrolling down, and particles upgraded from square sprites to soft circular radial glowing embers.
- **Key Polish Items Implemented (`521a125`)**:
  1. **Bidirectional Scroll Reversal & Replay**:
     - Word Reveal: Added `onLeaveBack: () => heading.classList.remove('is-visible')` so headings reset when scrolling back up above them, and re-animate when scrolling back down.
     - Journey Cards: Switched from static `once: true` to `toggleActions: 'play none none reverse'`, enabling cards to smoothly reverse to initial state when scrolling up, and cleanly replay when scrolling down.
     - Contact Section: Configured with `toggleActions: 'play none none reverse'` for seamless bidirectional replay.
     - Scrolled Reload Replay: On page reload while scrolled to `#about` or `#contact`, in-view animations smoothly replay as the curtain lifts rather than being swallowed during the initial load.
  2. **Soft Circular Glowing Embers (Zero Square Edges)**:
     - Replaced default Three.js square point sprites with an in-memory 64x64 dynamic radial gradient canvas texture (`createCircularParticleTexture`).
     - Applied soft circular falloff to both deep stardust (`size: 0.28`) and foreground amber bokeh embers (`size: 0.46`), eliminating all ugly square pixel artifacts and giving rich organic ambient light.
- **Empirical Verification**:
  - `npm run build` passed in 3.29s with zero errors.
  - Automated Edge CDP script verified: scroll down to 850 (active: 3, visible: true) -> scroll up to 0 (active: 0, visible: false) -> scroll down to 850 (active: 3, visible: true). Complete bidirectional reversal and replay confirmed!
  - Screenshot `circular-particles.png` verified zero square edges.

## Active Files & Dynamic Docs Registry
- [index.html](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/index.html) — Root HTML shell, color-scheme: only dark, critical CSS curtain & head preconnects.
- [src/threeScene.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/threeScene.js) — 3D background kinetic typography engine (alpha: false, dynamic canvas mount, reflective materials).
- [src/style.css](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/style.css) — Global styles, 1.2px canvas ambient blur with GPU transform isolation, Tailwind v4.
- [src/main.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/main.js) — Application bootstrapper and site-curtain dissolution orchestration.
- [src/portraitHero.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/portraitHero.js) — GSAP Master Entrance and timeline scroll choreography.
- [.work/STATE.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/STATE.md) — Current state, system architecture, active tasks.
- [.work/MEMORY.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/MEMORY.md) — Heuristics, failure logs, crystallized rules.
