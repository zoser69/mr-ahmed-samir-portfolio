# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: PROGRESS-LINE & MILESTONE DOT COUPLING FIXED & VERIFIED (`238d699`) —
  1. **Root Cause Solved**: Previously, the scrubbed progress line was on `#about` (`start: 'top 65%'`), while the dots were on separate item triggers (`start: 'top 68%'`), causing the line to pass Milestone 2 by 30-40px before the dot's viewport trigger fired.
  2. **Unified Line-Driven Illumination**: Eliminated separate dot ScrollTriggers. Milestone dots are now directly driven by the progress line's tween via `onUpdate: function() { updateDots(this.progress()); }` and `onRefresh: (self) => updateDots(self.progress)`.
  3. **Mathematical Precision**: Dot center fractions are calculated dynamically along `timeline-track-base` (`dotCenterY / baseHeight` = 0.079, 0.517, 0.955). Whenever the golden line tip reaches or passes the dot's center (`this.progress() >= targetFraction - 0.015`), the dot illuminates instantly. When scrolling back up and the line recedes, the dot turns dark instantly.
- **Empirical Verification**:
  - `npm run build` passed in 3.21s with 0 errors.
  - Native Edge CDP automated tests across 10 fine-grained scroll positions verified:
    - `scaleY >= 0.505` had ZERO violations where dot 2 was dark.
    - Screenshot `dot2-synced.png` visually verified: line at Milestone 2 shows dot 2 fully illuminated, matching the golden line tip.
    - Full bidirectional reversal tested: all dots and lines return to 0 when scrolling back to top.

## Active Files & Dynamic Docs Registry
- [index.html](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/index.html) — Root HTML shell, color-scheme: only dark, critical CSS curtain & head preconnects.
- [src/threeScene.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/threeScene.js) — 3D background kinetic typography engine (alpha: false, dynamic canvas mount, reflective materials).
- [src/style.css](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/style.css) — Global styles, 1.2px canvas ambient blur with GPU transform isolation, Tailwind v4.
- [src/main.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/main.js) — Application bootstrapper and site-curtain dissolution orchestration.
- [src/portraitHero.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/portraitHero.js) — GSAP Master Entrance and timeline scroll choreography.
- [.work/STATE.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/STATE.md) — Current state, system architecture, active tasks.
- [.work/MEMORY.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/MEMORY.md) — Heuristics, failure logs, crystallized rules.
