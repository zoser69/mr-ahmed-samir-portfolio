# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: RESOLVED (2026-09-03) — Intermittent white background on refresh fixed via clear-order correction + canvas reveal gate + present-path hardening. Full root-cause analysis and verification data in `HANDOFF.md` §2–§3.
- **Resolved Blocker**:
  - **Root cause**: `renderer.clear()` executed BEFORE `setSize()`/`setPixelRatio()` in `src/threeScene.js`. Both reallocate the drawing buffer, so the final full-size buffer stayed uninitialized until the first rAF render; Windows D3D/ANGLE intermittently fills fresh GPU memory with opaque white (`0xFFFFFFFF`). Amplified by `powerPreference: 'high-performance'` (hybrid-GPU present failures) and header `backdrop-blur-md` (Chromium backdrop-snapshot white).
  - **Fix**: clear after buffer allocation; no `powerPreference`; container `opacity: 0` gate revealed after 3 verified frames (1.2s safety); solid `#060402` DOM backing under the canvas; context-loss lifecycle rebuilt with generation tokens and no `forceContextLoss()` in the restore path.
- **Architectural State**:
  1. **Three.js Canvas**: `alpha: true`, clear AFTER sizing, `scene.background = null`, canvas container gated (`opacity: 0` → 1 after `READY_FRAME_COUNT = 3`), generation-token context-loss resilience.
  2. **Curtain Shield**: `#site-curtain` at `z-index: 999999` lifts via `onReady` (3 verified frames) or 800ms safety; canvas reveal safety at 1.2s.
  3. **Typography & UI**: Outfit + Tajawal + IBM Plex Sans Arabic, 3-column academic stages, minimalist experience vertical stepper, all functioning properly.
- **Live Local Server**: `http://localhost:5173/` (vite dev binds `::1` — use `localhost`)
- **Live Production URL**: `https://zoser69.github.io/mr-ahmed-samir-portfolio/`
- **Regression Tooling**: `.work/cdp-diagnose.mjs`, `.work/reload-test.mjs` (headless), `.work/gpu-reload-test.mjs` (visible Edge via `--remote-debugging-port=9222`), `.work/ghpages-sim.mjs` (serves `dist/` under the GitHub Pages base — `vite preview` does NOT apply `base` routing and black-screens the local test).
- **Next Priority**: Deploy `dist/` to GitHub Pages and confirm on the live URL; optional future hardening — code-split three.js out of the main bundle (637KB warning).
