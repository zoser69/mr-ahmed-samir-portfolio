# Mr. Ahmed Samir 3D Portfolio — Session Handoff (WHITE SCREEN BUG RESOLVED)

## 1. Project Summary
- **Live Production URL**: https://zoser69.github.io/mr-ahmed-samir-portfolio/
- **Local Dev Server**: `http://localhost:5173/` (vite dev binds IPv6 `::1` — use `localhost`, not `127.0.0.1`)
- **Tech Stack**: Vanilla JS (ES Modules) + Vite v6 + Three.js r174 + GSAP v3 (ScrollTrigger) + Tailwind CSS v4 + Lucide Icons.
- **Visual Theme**: Luxury Dark Truffle & Burnt Umber (`#060402`, `#4E2E1B`, `#FAF6F0`, `#A67C5B`, `#2E1E15`).

## 2. CRITICAL BUG — RESOLVED (2026-09-03)
- **Problem (was)**: Intermittent white background under the top bar upon page reload, on localhost and GitHub Pages, desktop Edge/Chrome.
- **Root cause (confirmed by code trace + CDP diagnostics)**:
  1. **Primary — drawing-buffer clear-order bug** in `src/threeScene.js`: `renderer.clear()` was called BEFORE `setSize()` + `setPixelRatio()`. Both of those reallocate the WebGL drawing buffer, so the only explicit clear hit a discarded 300×150 buffer and the final full-size buffer stayed **uninitialized** until the first rAF render (~16ms later). On Windows D3D/ANGLE, freshly allocated GPU memory is intermittently `0xFFFFFFFF` (opaque white) — exactly matching "sometimes white, sometimes not".
  2. **Amplifier — `powerPreference: 'high-performance'`**: routes context creation to the discrete GPU on hybrid-GPU Windows machines, a known source of failed presents that composite uninitialized swapchain memory. Removed.
  3. **Amplifier — `backdrop-blur-md` on the sticky header**: `backdrop-filter` snapshot layers are another Chromium path that can composite uninitialized white. Replaced with solid `bg-[#060402]/95` (visually identical on this theme).
  4. **Systemic weakness — the page's only dark guarantee over the canvas region was "the canvas is transparent"**. If the compositor ever published garbage, nothing DOM-side could stop it from being visible.
- **Fix (defense-in-depth, all in place)**:
  1. `renderer.setClearColor(0x000000, 0)` + `renderer.clear()` now run AFTER `setSize`/`setPixelRatio` (the final buffer is cleared before it can ever composite).
  2. `#three-canvas-container` starts at `opacity: 0` (inline critical CSS) and is revealed by `main.js` only after the scene reports **3 verified rendered frames** (`READY_FRAME_COUNT`); a 1.2s safety reveal covers pathological delays. A hidden canvas cannot composite garbage, whatever the driver does.
  3. The canvas container itself has a solid `background-color: #060402`, so the WebGL layer now sits on a dark DOM surface instead of being the page background.
  4. Context-loss lifecycle hardened: generation tokens prevent stale listeners from acting; the restore path re-inits WITHOUT `forceContextLoss()` (the old code fired a synthetic `webglcontextlost` that the fresh listeners misattributed, hiding healthy canvases and looping context churn); container is re-gated (opacity 0) before rebuild.
  5. Curtain logic unchanged (`#site-curtain` z-999999, lifts on ready or 800ms) and now coordinated with the canvas reveal.

## 3. Verification (2026-09-03)
- Tooling added under `.work/`: `cdp-diagnose.mjs` (DOM/computed-state dump + console/exception capture + screenshot), `reload-test.mjs` (headless stress), `gpu-reload-test.mjs` (attaches to a visible Edge on `--remote-debugging-port=9222`), `ghpages-sim.mjs` (serves `dist/` under the `/mr-ahmed-samir-portfolio/` prefix like GitHub Pages).
- Results: 15/15 headless reloads (mixed normal + `ignoreCache` hard) and 12/12 real-GPU visible-Edge reloads — curtain always lifted, canvas always revealed and sized, **0 runtime exceptions**, screenshot pixel analysis shows only the cream typography (≈1.2% white pixels), never a white background. Dev server parity confirmed.
- **Testing gotcha**: `vite preview` does NOT apply `base` routing in this setup — it serves `dist/` at `/` while the built HTML references `/mr-ahmed-samir-portfolio/assets/*`, so asset requests silently fall back to `index.html` (text/html) and the page black-screens with the curtain stuck. That was a false alarm during verification, not a site bug. Use `.work/ghpages-sim.mjs` (port 4180) for production-parity local testing.

## 4. Failed Attempts From Previous Sessions (superseded context)
1. Inline `!important` styles on html/body — correctly rejected: body was never the white source.
2. Font `display=block` + preloads — fixed font flicker only.
3. Canvas `visibility:hidden` gate (pre-curtain era) — the era's white came from `alpha:false` + CSS `filter: blur(1.8px)` on the canvas (since removed); the gate idea itself is now correctly implemented via container opacity.
4. `color-scheme: dark` meta — kept, harmless, not the fix.
5. Hiding `#app-wrapper` until rAF — replaced by curtain + canvas gate.
6. Mobile Force Dark Mode — misdiagnosis; bug was desktop.
7. Transparent WebGL + `#site-curtain` — reduced frequency (removed the opaque-canvas/blur white sources) but left the clear-order and present-path holes; now closed.
