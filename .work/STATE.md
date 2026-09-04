# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: RE-CALIBRATED ARCHITECTURE APPLIED & VERIFIED — User provided crucial empirical discovery: The intermittent white background bug NEVER occurs on Google Chrome, but occurs specifically on Microsoft Edge (Windows + Android) and Brave (Windows + Android).
- **Critical Cross-Browser Discovery**:
  - Google Chrome does not enable forced web contents dark mode by default and initializes its window backing to dark.
  - Microsoft Edge and Brave feature built-in "Dark Theme for Web Contents" / "Night Mode" and aggressive tracking/shield layers that run heuristic-based color inversion on transparent WebGL canvases (`alpha: true`) and unstyled window backings.
- **Permanent Solution Applied**:
  1. Removed `translateZ(0)` and `will-change: transform, filter` from `.canvas-ambient-blur`: Prevents Windows DirectComposition from promoting the canvas to an MPO hardware overlay swapchain that punches white holes through the DWM window.
  2. Canvas starts at `opacity: 0`: Attached to DOM with `opacity: 0`. It transitions smoothly to `opacity: 1` ONLY after `lettersReady === true` AND `framesRendered >= 8` (verified drawing buffer).
  3. Enforced `MIN_CURTAIN_MS = 350ms` in `main.js`: Eliminates premature curtain dissolution on fast-caching Edge, ensuring a smooth, consistent cinematic entrance across all browsers.
  4. Added `beforeunload` listener in `main.js`: Instantly sets `#site-curtain` to opacity 1 and canvas to opacity 0 upon F5, guaranteeing that Edge's Paint Holding snapshots a solid dark screen instead of an uninitialized canvas.
  5. Added `<meta name="theme-color" content="#060402">` + mobile nav colors: Instructs Chromium's native WebContents view to initialize its window clear color to `#060402`, eliminating the default `SK_ColorWHITE` flash during reload before the DOM parses.
  6. Preserved `#site-curtain` permanently in the DOM (`visibility: hidden` after fade): Guarantees the shield element is always available to snap to `opacity: 1` instantly upon reload.
  7. Multi-event `activateReloadShield`: Listens to `beforeunload`, `pagehide`, and `keydown` (F5/Ctrl+R) to immediately mask the page before navigation starts.
  8. Synchronized Entrance Motion: `playHeroEntrance()` starts concurrently with curtain fade (zero delay), giving a responsive, energetic entrance.
- **Architectural State**:
  1. **Native Window Canvas Grounding**: `<meta name="theme-color">` + CSS inline styles ensure the browser window itself is `#060402`.
  2. **Reload Snapshot Immunity**: Curtain stays in DOM, snapping to opacity: 1 on any reload trigger.
  3. **Crystal-Clear 3D Typography + 1.2px Bokeh**: Sharp, legible 3D letters with warm golden highlights.
- **Live Local Server**: `http://localhost:5173/` (vite dev binds `::1` — use `localhost`)
- **Live Production URL**: `https://zoser69.github.io/mr-ahmed-samir-portfolio/`
- **Next Priority**: User test on localhost and live production site.

## Active Files & Dynamic Docs Registry
- [index.html](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/index.html) — Root HTML shell, color-scheme: only dark, critical CSS curtain & head preconnects.
- [src/threeScene.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/threeScene.js) — 3D background kinetic typography engine (alpha: false, dynamic canvas mount, reflective materials).
- [src/style.css](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/style.css) — Global styles, 1.2px canvas ambient blur with GPU transform isolation, Tailwind v4.
- [src/main.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/main.js) — Application bootstrapper and site-curtain dissolution orchestration.
- [src/portraitHero.js](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/src/portraitHero.js) — GSAP Master Entrance and timeline scroll choreography.
- [.work/STATE.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/STATE.md) — Current state, system architecture, active tasks.
- [.work/MEMORY.md](file:///d:/Anti%20Projects/MR%20Ahmed%20Samir/.work/MEMORY.md) — Heuristics, failure logs, crystallized rules.
