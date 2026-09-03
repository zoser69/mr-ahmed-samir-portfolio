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
   - **Fixes applied**: (a) `setClearColor` + `clear()` moved AFTER sizing so the composited buffer is never uninitialized; (b) removed `powerPreference: 'high-performance'` (hybrid-GPU present failures composite uninitialized swapchain memory); (c) replaced header `backdrop-blur-md` with solid `bg-[#060402]/95` (Chromium backdrop-filter snapshot is another uninitialized-white path); (d) `#three-canvas-container` gated at `opacity: 0` in critical CSS and revealed only after **3 verified rendered frames** (1.2s safety) over a solid `#060402` DOM backing — a hidden canvas cannot composite garbage; (e) rebuilt context-loss lifecycle with generation tokens; restore path no longer calls `forceContextLoss()` (synthetic lost events were misattributed by fresh listeners, hiding healthy canvases and churning contexts); (f) fixed a `const`-assignment crash in the render-ready callback.
   - **Verification performed locally**: 15/15 headless reloads + 12/12 real-GPU visible-Edge reloads (mixed normal + hard reloads), 0 runtime exceptions, screenshot pixel analysis showed only cream typography (~1.2%), never a white background. Dev server + production-build parity confirmed.
   - **Status**: Implemented and committed, locally verified, but **NOT yet confirmed by the user on the live site** → bug stays OPEN. Next step: deploy `dist/` to GitHub Pages, hard-refresh repeatedly, and confirm.

## 4. Regression & Testing Tooling (added this session, under `.work/`)
- `cdp-diagnose.mjs` — DOM/computed-state dump + console/exception capture + screenshot via CDP.
- `reload-test.mjs` — headless reload stress test with screenshot capture.
- `gpu-reload-test.mjs` — attaches to a visible Edge launched with `--remote-debugging-port=9222` for real-GPU reload tests.
- `ghpages-sim.mjs` — serves `dist/` under the `/mr-ahmed-samir-portfolio/` prefix like GitHub Pages (port 4180).
- **Testing gotcha**: `vite preview` does NOT apply `base` routing in this setup — it serves `dist/` at `/` while the built HTML references `/mr-ahmed-samir-portfolio/assets/*`, so asset requests silently fall back to `index.html` (text/html) and the page black-screens with the curtain stuck. That was a false alarm during verification, not a site bug. Use `ghpages-sim.mjs` for production-parity local testing.

## 5. Immediate Starting Point for Next Session
- If the user still sees white after deploying Attempt 8: open DevTools layer inspector (`chrome://gpu` and Elements → Layers) during the white state and trace exactly which compositor surface has `#ffffff`. The remaining suspects after Attempt 8 are: GPU-process fallback / context loss on the user's specific driver (generation-token handler now hides the canvas — verify it fires), or a browser-level layer above the page.
- If the user confirms the white is gone: move this bug from OPEN to RESOLVED and update STATE.md/MEMORY.md accordingly.
