# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: CRITICAL BUG UNRESOLVED (OPEN) — Intermittent white background appears under top bar on page refresh. An attempted fix was committed 2026-09-03 (clear-order correction + canvas reveal gate + present-path hardening) with strong local verification, but the bug remains OPEN pending user confirmation on the live production site.
- **Active Blocker**:
  - **Description**: On both localhost and production, upon page reload (`Ctrl + F5` or `F5`), the background behind the hero section intermittently turns solid white while the top bar, teacher portrait, and cards render correctly.
  - **Video Proof**: `D:\Downloads\Recording 2026-09-02 203944.mp4` (shows white background on frame 00:00, dark on subsequent refreshes, but recurring intermittently).
  - **User Verdict**: "احيانا بتعمل الابيض لما احدث واحيانا لا - اعرف فين المشكلة وحلها".
  - **Investigation Status**: 7 failed hypotheses documented in `.work/MEMORY.md`; Attempt 8 (2026-09-03) — see HANDOFF.md §3.8 — implemented, committed, and locally verified (27 reloads, 0 exceptions) but NOT yet confirmed on production. Bug stays open until the user validates on GitHub Pages.
- **Architectural State (includes Attempt 8 + Blur Restoration)**:
  1. **Three.js Canvas**: `alpha: true`, `setClearColor` + `clear()` AFTER `setSize`/`setPixelRatio` and on `onResize` (final buffer never left uninitialized), `scene.background = null`, no `powerPreference`, container gated `opacity: 0` → revealed after `READY_FRAME_COUNT = 3` verified frames (1.2s safety), solid `#060402` DOM backing, generation-token context-loss resilience (restore path no longer calls `forceContextLoss()`).
  2. **Cinematic 3D Bokeh (Restored)**: `.canvas-ambient-blur` with `--canvas-blur: 1.2px` and `transform: scale(1.015) translateZ(0)` for hardware-accelerated Depth of Field background separation.
  3. **Curtain Shield**: `#site-curtain` at `z-index: 999999` lifts via `onReady` (3 verified frames) or 800ms safety; canvas reveal safety at 1.2s.
  4. **Header**: `backdrop-blur-md` removed → solid `bg-[#060402]/95` (Chromium backdrop-filter uninitialized-white path eliminated).
  5. **Typography & UI**: Outfit + Tajawal + IBM Plex Sans Arabic, 3-column academic stages, minimalist experience vertical stepper, all functioning properly.
- **Live Local Server**: `http://localhost:5173/` (vite dev binds `::1` — use `localhost`)
- **Live Production URL**: `https://zoser69.github.io/mr-ahmed-samir-portfolio/`
- **Regression Tooling**: `.work/cdp-diagnose.mjs`, `.work/reload-test.mjs` (headless), `.work/gpu-reload-test.mjs` (visible Edge via `--remote-debugging-port=9222`), `.work/ghpages-sim.mjs` (serves `dist/` under the GitHub Pages base — `vite preview` does NOT apply `base` routing and black-screens the local test).
- **Next Priority**: Push `main` to GitHub and deploy `dist/` to GitHub Pages (`npx --yes gh-pages -d dist`). Have user hard-refresh repeatedly and confirm fix and blur.
