# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: HERO DECLUTTER & TIMELINE SCRUB RELOAD BUG FIXED & VERIFIED (`7885a26`) —
  1. **Hero Section De-cluttered**: Removed redundant uppercase eyebrow (`VETERAN ENGLISH EDUCATOR`) and separate location row from `#hero`. Relocated verified center location (`قويسنا، محافظة المنوفية • متاح المتابعة أونلاين`) into `#contact` header subtitle where booking occurs. Hero text column reduced from 7 stacked items to 5 spacious, breathing editorial blocks.
  2. **Timeline Scrub Reload Bug Fixed**: Shielded scrubbed ScrollTriggers with `!st.vars.scrub` inside `playHeroEntrance()` and synchronized with `ScrollTrigger.refresh()`. The progress line now strictly tracks scroll position on reload (e.g. scaleY: 0.77 at scrollY: 750) and never shoots to 1.0.
  3. **Deterministic Milestone Illumination**: Added `self.scroll() >= self.start` check inside `onRefresh` and `onEnter`/`onLeaveBack`. Dots illuminate only when reached and turn off when scrolled above, with zero desync on reload.
- **Empirical Verification**:
  - `npm run build` passed in 3.33s with 0 errors.
  - Native Edge CDP verified:
    - Eyebrow and map-pin removed from `#hero`; location present in `#contact`.
    - At scrollY 750: `scaleY = 0.77`, dots = `[true, true, false]`. After entrance reload simulation: `scaleY = 0.77`, dots = `[true, true, false]`. Progress line stayed locked to scroll position.
    - Bidirectional scroll: scrolling down progresses line and illuminates dots, scrolling back up to 0 reverses line to 0 and turns off all dots.
  - Screenshots `decluttered-hero.png` and `timeline-at-750.png` verified visually.

## Active Files & Dynamic Docs Registry
- [index.html](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/index.html) — Root HTML shell, color-scheme: only dark, critical CSS curtain & head preconnects.
- [src/threeScene.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/threeScene.js) — 3D background kinetic typography engine (alpha: false, dynamic canvas mount, reflective materials).
- [src/style.css](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/style.css) — Global styles, 1.2px canvas ambient blur with GPU transform isolation, Tailwind v4.
- [src/main.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/main.js) — Application bootstrapper and site-curtain dissolution orchestration.
- [src/portraitHero.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/portraitHero.js) — GSAP Master Entrance and timeline scroll choreography.
- [.work/STATE.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/STATE.md) — Current state, system architecture, active tasks.
- [.work/MEMORY.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/MEMORY.md) — Heuristics, failure logs, crystallized rules.
