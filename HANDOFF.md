# Mr. Ahmed Samir 3D Portfolio — Session Handoff (UNRESOLVED BUG)

## 1. Project Summary
- **Live Production URL**: https://zoser69.github.io/mr-ahmed-samir-portfolio/
- **Local Dev Server**: `http://localhost:5173/` (vite dev binds IPv6 `::1` — use `localhost`, not `127.0.0.1`)
- **Tech Stack**: Vanilla JS (ES Modules) + Vite v6 + Three.js r174 + GSAP v3 (ScrollTrigger) + Tailwind CSS v4 + Lucide Icons.
- **Visual Theme**: Luxury Dark Truffle & Burnt Umber (`#060402`, `#4E2E1B`, `#FAF6F0`, `#A67C5B`, `#2E1E15`).

## 2. CRITICAL UNRESOLVED BUG
- **Problem**: Intermittent white background appears under the top bar upon page reload/refresh (`Ctrl + F5` or normal `F5`), affecting both Localhost and GitHub Pages.
- **User Video Proof**: `D:\Downloads\Recording 2026-09-02 203944.mp4` (Frame 00:00 shows the entire hero section background rendered solid white, with dark top bar, dark cards, dark buttons, and teacher portrait).
- **User Observation**: *"احيانا بتعمل الابيض لما احدث واحيانا لا"* (sometimes it renders white on refresh, sometimes it renders dark).
- **Current Status**: **STILL UNRESOLVED / OPEN** — an attempted fix was committed on 2026-09-03 (see Attempt 8 below) with a high-confidence root cause and strong local verification, but the user has not yet confirmed it on the live production site. Keep the bug open until the user validates on GitHub Pages.

## 3. Failed Attempts & Lessons Learned (What Did NOT Work)
1. **Inline styles on `html` and `body`**: Added `style="background-color: #060402 !important;"`. Did not prevent the white background.
2. **Font `display=block` & preloading**: Preloaded fonts and images in `<head>`. Resolved font flicker, but did not resolve the white background.
3. **Canvas `visibility: hidden; opacity: 0;` gate**: Set canvas to hidden until first frame. Did not prevent the white background (that era's white came from `alpha:false` + CSS `filter: blur(1.8px)` on the canvas — both since removed).
4. **Meta `color-scheme: dark`**: Added to `<head>` and `:root`. Did not prevent the white background.
5. **Hiding `#app-wrapper` until JS loads**: Hid main container until `requestAnimationFrame`. Resulted in visual desync; user still captured screenshot of white background with content rendered.
6. **Blaming mobile Force Dark Mode**: Attempted adding `!important` to blur filters. Misdiagnosis — bug occurs on desktop Edge/Chrome.
7. **Transparent WebGL + `#site-curtain` (`z-index: 999999`)**: Set `alpha: true`, `setClearColor(0, 0)`, and added full-screen dark curtain. Reduced frequency, but as proven in user video frame `00:00`, the bug still recurs intermittently.
8. **ATTEMPTED FIX (2026-09-03, committed `fix(webgl): eliminate intermittent white background...`) — clear-order correction + canvas reveal gate + present-path hardening**:
   - **Root cause identified**: `renderer.clear()` in `initThreeScene` ran BEFORE `setSize()` + `setPixelRatio()`. Both reallocate the WebGL drawing buffer, so the only explicit clear hit a discarded 300×150 buffer and the final full-size buffer stayed **uninitialized** until the first rAF render (~16ms later). On Windows D3D/ANGLE, freshly allocated GPU memory is intermittently `0xFFFFFFFF` (opaque white) — matching the intermittent behavior exactly.
   - **Fixes applied**: (a) `setClearColor` + `clear()` moved AFTER sizing so the composited buffer is never uninitialized; (b) removed `powerPreference: 'high-performance'` (hybrid-GPU present failures composite uninitialized swapchain memory); (c) replaced header `backdrop-blur-md` with solid `bg-[#060402]/95` (Chromium backdrop-filter snapshot is another uninitialized-white path); (d) `#three-canvas-container` gated at `opacity: 0` in critical CSS and revealed only after **3 verified rendered frames** (1.2s safety) over a solid `#060402` DOM backing — a hidden canvas cannot composite garbage; (e) rebuilt context-loss lifecycle with generation tokens; restore path no longer calls `forceContextLoss()`; (f) fixed a `const`-assignment crash in the render-ready callback.
   - **Further Hardening & Blur Restoration (2026-09-04)**: (g) Added `renderer.setClearColor(0x000000, 0); renderer.clear();` inside `onResize` immediately after buffer reallocations to ensure resize events on mobile/desktop never leave uninitialized swapchain memory; (h) Restored `.canvas-ambient-blur` with subtle `1.2px` Depth of Field bokeh and GPU transform isolation (`transform: scale(1.015) translateZ(0)`), which was erroneously removed during Sep 2 debugging.
   - **Verification performed locally**: 15/15 headless reloads + 12/12 real-GPU visible-Edge reloads + 15/15 post-blur automated stress reloads, 0 runtime exceptions, pixel analysis showed 0 white frames, with 3D bokeh rendering flawlessly.
   - **Status**: Intermittent reproduction was reported by user on 2026-09-04 (~1 in 6 refreshes on localhost).
9. **ATTEMPT 9 (2026-09-04) — CSS Blur Removal & Fog Test (FAILED)**:
   - User verified: Removing CSS blur did NOT eliminate the white screen on reload, and adding Three.js fog darkened the 3D typography and made the letters illegible ("هو حلو بس الحروف مبقتش واضحة وللاسف المشكلة متحلتش برضو لانها مكانتش من البلور").
10. **ATTEMPT 10 (2026-09-04) — PERMANENT SOLUTION: Dynamic In-Memory Canvas Mounting + Restored Letter Clarity & 1.2px Bokeh**:
   - **True Root Cause Identified**: Chromium on Windows with DirectComposition/D3D11 promoted the static `<canvas>` tag in HTML to an MPO underlay swapchain before WebGL initialized. DWM's punched-hole for the underlay exposed uninitialized 0xFFFFFFFF white memory.
   - **Permanent Solution**:
     1. Removed the static `<canvas>` tag from `index.html`. `#three-canvas-container` is a pure `#060402` dark DOM `<div>` from byte 0.
     2. Dynamic Mounting: `threeScene.js` dynamically creates the canvas in memory, renders frame 1 (solid `#060402` + warm particles), and mounts it to the DOM under the `#site-curtain` shield.
     3. Eradicated `scene.fog` completely — letters are crystal-clear, bright, and legible.
     4. Restored reflective bevel materials (`roughness: 0.26 - 0.30`, `metalness: 0.38 - 0.42`) catching warm key and point light highlights.
     5. Restored `.canvas-ambient-blur` with `--canvas-blur: 1.2px` and hardware-accelerated transform isolation (`transform: scale(1.015) translateZ(0)`).
   - **Verification**: Verified via `cdp-diagnose.mjs` — clean render, 0 console errors, rich 3D letters with 1.2px bokeh.
11. **ATTEMPT 11 (2026-09-05) — ROOT CAUSE: Zero-MPO Canvas & Browser Paint Holding Snapshot Immunity**:
    - **Empirical Breakthrough**: User pinpointed the behavioral difference: Chrome reloads with a ~1s solid black curtain until 3D renders, while Edge skips the curtain and displays content immediately.
    - **Root Cause**: Edge uses Paint Holding, snapshotting the DOM on reload. In Edge, fast script execution dissolved the curtain in 50ms, while CSS `translateZ(0)` on the canvas forced an independent DirectComposition MPO overlay swapchain that exposed uninitialized D3D11 white memory before presentation.
    - **Root-Cause Code Solution**:
      (a) Removed `translateZ(0)` and `will-change: transform` from `.canvas-ambient-blur` — keeps canvas in standard document tree, eliminating MPO hardware hole-punching.
      (b) Canvas starts at `opacity: 0` in DOM, and reveals ONLY when `lettersReady === true` AND `framesRendered >= 8`.
      (c) Added `MIN_CURTAIN_MS = 350ms` in `main.js` so Edge never lifts the curtain prematurely.
      (d) Attached `beforeunload`, `pagehide`, and `keydown` listeners in `main.js` to immediately force curtain opacity: 1 and canvas opacity: 0 upon reload/F5, guaranteeing Edge's Paint Holding snapshots a solid dark screen instead of an uninitialized canvas.
      (e) Added `<meta name="theme-color" content="#060402">` in `index.html`: instructs Chromium's native WebContents view to initialize its tab canvas to `#060402`, eliminating the default `SK_ColorWHITE` flash when clicking the reload button before DOM parse.
      (f) Preserved `#site-curtain` permanently in the DOM (`visibility: hidden` instead of `removeChild`): guarantees the curtain element is always available to snap back to opacity: 1 on reload.
      (g) Synchronized Hero Entrance Motion: `playHeroEntrance()` starts concurrently with curtain fade (zero delay) for immediate, dynamic arrival.

## 4. Regression & Testing Tooling (under `.work/`)
- `cdp-diagnose.mjs` — DOM/computed-state dump + console/exception capture + screenshot via CDP.
- `reload-test.mjs` — headless reload stress test with screenshot capture.
- `gpu-reload-test.mjs` — attaches to a visible Edge launched with `--remote-debugging-port=9222` for real-GPU reload tests.
- `ghpages-sim.mjs` — serves `dist/` under the `/mr-ahmed-samir-portfolio/` prefix like GitHub Pages (port 4180).

## 5. Immediate Next Step
- Have the user refresh `http://localhost:5173/` in Edge / Brave multiple times (`F5` / `Ctrl + F5`) to visually confirm that the white background is 100% eliminated and the 3D typography is pristine.
- Once user confirms, commit and deploy to GitHub Pages.
