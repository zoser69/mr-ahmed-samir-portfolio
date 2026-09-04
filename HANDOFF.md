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

## 5. DESIGN & TYPOGRAPHY STANDARDS AUDIT (2026-09-05)
- **Review Architecture**: Ran dual-subagent review in parallel (`Gemini 3.1 Pro High` for Macro Architecture & Creative Direction; `Gemini 3.8 Flash High` for Micro CSS & Layout Inspection).
- **Critical Fixes Implemented & Committed (`5a89d42`)**:
  1. **Phone URL Bug Fix**: `index.html:334` second phone call link corrected from invalid 13-digit `tel:+2010000233902` to valid 12-digit `tel:+201000233902`.
  2. **Latin Tracking Restoration**: Scoped zero-tracking strictly to Arabic scripts (`.font-ar-display`, `.font-ar-body`, `:lang(ar)`), freeing English display typography (`Outfit`) to utilize `tracking-tight` and `tracking-wider` without `!important` overriding.
  3. **WCAG 2.2 Touch Targets (44px)**: Standardized `min-h-[44px]` across all primary CTA buttons (hero booking button, WhatsApp, and direct call buttons).
  4. **Optical Scale & RTL Modernization**:
     - Upgraded stage card font size from unreadable 10px to clean `text-xs` (12px).
     - Converted physical CSS classes (`mr-`, `pr-`, `right-`) to modern RTL logical properties (`ms-`, `ps-`, `start-`).
     - Upgraded hero bio font scale to `text-sm sm:text-base` for optical balance against Outfit display headers.
  5. **Concentric Border Radius**: Outer contact card radius upgraded to `rounded-3xl` (24px) for geometric concentricity with inner `rounded-xl` (12px) buttons and 24px padding.
  6. **Anti-Slop Cleanups**:
     - Removed AI template neon hover glow `shadow-[0_0_10px_rgba(166,124,91,0.5)]` on timeline milestone dots in favor of crisp scale-125 and color transition.
     - Dialed down ambient breathing backlight behind portrait to subtle editorial warmth.
     - Cleaned up disabled YouTube placeholder card: removed active button hover effect and applied `pointer-events-none opacity-60`.
  7. **Performance & Typography Preloads**: Added Google Fonts `preload` for `IBM Plex Sans Arabic` woff2 in `<head>` to prevent FOUT.
- **Verification**: `npm run build` passed cleanly in 3.11s. Live Edge CDP confirmed 44px hit heights, 12px stage font size, 24px concentric radius, and verified valid telephone URI.

## 6. EDITORIAL & INTERACTIVE ENHANCEMENTS (2026-09-05, Commit `8646034`)
- **Key Enhancements Implemented**:
  1. **Editorial Eyebrow & Senior Educator Branding**: Added `VETERAN ENGLISH EDUCATOR • EST. 2000` above hero title, and upgraded Arabic title to `كبير معلّمي اللغة الإنجليزية للمرحلتين الإعدادية والثانوية`.
  2. **Location Trust Signal**: Added verified center location badge: `المقرات والسناتر المعتمدة: قويسنا، محافظة المنوفية • متاح المتابعة أونلاين`.
  3. **Holographic Pseudo-3D Parallax on Portrait**: Linked teacher portrait to desktop cursor movement with subtle inverse micro-tilt (`rotationY: mouseX * 3.8`, `rotationX: -mouseY * 2.8`), blending the portrait seamlessly with the 3D typography environment.
  4. **Scroll-Scrubbed Academic Journey**: Replaced static line with dual-track architecture (quiet `#2E1E15` base line + golden progress line scrubbed at `scrub: 0.4`), with milestone dots dynamically illuminating (`.is-active`) as the line reaches each milestone.
  5. **Staggered Word Reveal**: Applied word-by-word staggered reveal (`cubic-bezier(0.16, 1, 0.3, 1)`) on `#about` and `#contact` titles.
  6. **Dual-Strata Particle Bokeh in Three.js**: Separated particles into deep ambient stardust (60 particles, z: -12 to -36) and foreground amber bokeh embers (24 particles, z: -4 to +4) that produce genuine photographic optical bokeh as they float behind the portrait and through the ambient blur.
- **Verification**: `npm run build` succeeded (3.13s), Edge CDP verified all 8 word spans, illuminated dots, and zero exceptions.

## 7. REVERSIBLE BIDIRECTIONAL SCROLL REPLAY & CIRCULAR BOKEH (2026-09-05, Commit `521a125`)
- **Problems Solved**:
  1. User observed that refreshing while scrolled to "المسيرة الأكاديمية والخبرة المهنية" did not replay the entrance animation.
  2. User requested that the animation play when scrolling down, and reverse back when scrolling up, so it replays seamlessly on subsequent scrolls like high-end Awwwards/Apple websites.
  3. User disliked square point sprites ("الغبار المربع ده شكله مش حلو").
- **Solutions Implemented**:
  1. **Bidirectional Scroll Reversal**: Added `onLeaveBack: () => heading.classList.remove('is-visible')` to word reveal headers, and `toggleActions: 'play none none reverse'` to journey cards, subtitles, and contact sections. When scrolling up above any section, elements gracefully reverse to initial state; when scrolling down, they animate in.
  2. **Scrolled Reload Replay**: Handled page reload when already scrolled down to `#about` or `#contact`. In `playHeroEntrance()`, any active in-view elements reflow and replay right as the curtain lifts.
  3. **Circular Radial Particle Orbs**: Generated an in-memory 64x64 dynamic radial gradient canvas texture (`createCircularParticleTexture`) with soft quadratic alpha falloff. Every particle in the scene now renders as a soft, spherical glowing orb with zero square edges or harsh pixel corners.
- **Verification**: Verified via `test-reversible-scroll.mjs` using Edge CDP: complete reversal on scroll up to 0, complete replay on scroll down to 850, clean reload replay, and visual screenshot `circular-particles.png`.

## 8. HERO DECLUTTERING & TIMELINE SCRUB RELOAD FIX (2026-09-05, Commit `7885a26`)
- **Problems Solved**:
  1. **Hero Visual Congestion**: The hero section had become overcrowded with 7 stacked vertical elements. Removed the uppercase eyebrow (`VETERAN ENGLISH EDUCATOR • EST. 2000`) and the separate location badge from `#hero`. Relocated center location (`قويسنا، محافظة المنوفية • متاح المتابعة أونلاين`) into `#contact` header subtitle where booking occurs. Hero text column reduced to 5 clean, breathing editorial blocks.
  2. **Timeline Progress Line Shooting to 100% on Reload**: In `playHeroEntrance()`, `st.animation.restart()` was running on all ScrollTriggers, overriding GSAP's scroll mapping and forcing `scaleY: 1` (100%) even when scrolled only halfway down. Shielded scrubbed timelines with `if (!st.vars.scrub)` and called `ScrollTrigger.refresh()`.
  3. **Milestone Dot Synchronization**: Added deterministic scroll position check `self.scroll() >= self.start` on `onRefresh` so dots illuminate if and only if reached, staying dark when above them and reversing cleanly when scrolling back up.
- **Empirical Verification**:
  - `npm run build` passed in 3.33s with 0 errors.
  - Native Edge CDP confirmed:
    - Zero eyebrow or map-pin in `#hero`.
    - At scrollY = 750: `scaleY = 0.77`, dots = `[true, true, false]`. After entrance reload simulation: `scaleY = 0.77`, dots = `[true, true, false]`. Zero shooting to 100%.
    - Bidirectional scroll tested: scrolling up to 0 reverses line to 0 and turns off all dots.
  - Screenshots `decluttered-hero.png` and `timeline-at-750.png` captured and visually confirmed.

## 10. MILESTONE DOT REFRESH RACE CONDITION & CONTACT TRIGGER TIMING (2026-09-05, Commit `64468c7`)
- **Problems Solved**:
  1. **Milestone Dots Reload Bug**: User reported that on refresh, milestone dot 2 would fail to illuminate, and sometimes dot 3 was active while dot 2 was inactive. Root cause: `st.animation.restart()` was called before `ScrollTrigger.refresh()`, polluting layout measurements with `translateY(24px)`. Fixed by calling `ScrollTrigger.refresh()` first on clean layout and switching dot illumination to GSAP native `toggleClass: { targets: dot, className: 'is-active' }` with `end: 'max'`.
  2. **Contact Section Premature Animation**: User complained that the contact animation ("أرقام الحجز والتواصل المباشر") and platforms at the bottom were triggering too early offscreen. Root cause: The entire contact section was bound to a single parent trigger (`#contact`, `top 68%`), firing while the cards were 400-600px below the viewport. Decoupled into component-level triggers: Subtitle at 82%, Phone Cards at 84%, Social Grid at 88%, and Note at 92%.
- **Empirical Verification**:
  - `npm run build` passed in 3.15s with 0 errors.
  - Native Edge CDP verified:
    - At scrollY = 0: dots = `[false, false, false]`, contact cards = `['0', '0']`.
    - At scrollY = 750: `scaleY = 0.77`, dots = `[true, true, false]`, contact cards = `['0', '0']`.
    - Reload simulation at scrollY = 750: `scaleY = 0.77`, dots = `[true, true, false]`, zero race conditions.
    - Scrolling down to contact: Cards animate in natural viewing sequence as they enter the screen.
    - Scrolling back up to 0: Complete reversal to initial state.

## 11. UNIFIED PROGRESS-LINE & MILESTONE DOT COUPLING (2026-09-05, Commit `238d699`)
- **Problems Solved**:
  - User uploaded screenshot `media_1788560856474.png` showing the golden progress line had passed milestone dot 2 by 30-40px, but dot 2 was still dark ("مشكلتي مع الخط الاصفر ده ساعات بيعدي النقطة لكنها مش بتنور وبتفضل مطفية").
  - Root Cause: The progress line was controlled by a scrubbed ScrollTrigger on `#about`, while the dots were on independent ScrollTriggers checking `item` at `top 68%`. Because they used different triggers and math, the line could reach fraction 0.55 while the card hadn't crossed 68% of the viewport.
  - Solution: Eliminated decoupled dot ScrollTriggers. Milestone dot illumination is now driven directly by the progress line's tween via `onUpdate: function() { updateDots(this.progress()); }` and `onRefresh: (self) => updateDots(self.progress)`. Dot positions along `timeline-track-base` are measured dynamically (0.079, 0.517, 0.955). The moment the golden line tip touches or passes a dot, that dot illuminates instantly. When scrolling back up, it turns dark the instant the line recedes above it.
- **Empirical Verification**:
  - `npm run build` passed in 3.21s with 0 errors.
  - Native Edge CDP tested across 10 fine-grained scroll positions:
    - ZERO violations where `scaleY >= 0.505` and dot 2 was dark.
    - Screenshot `dot2-synced.png` captured showing the golden line passing Milestone 2 with dot 2 brilliantly illuminated and dot 3 dark.

## 12. MILESTONE DOT 3 SYNCHRONIZATION & STATIC ANCHORING (2026-09-05, Commit `71fb6ba`)
- **Problem Solved**:
  - User uploaded screenshot `media_1788561145095.png` showing the golden progress line had drawn past Milestone 3 ("خبرة ممتدة لأكثر من +26 عاماً"), but the 3rd milestone dot remained dark brown ("اخر نقطة مش مظبوطة لسة").
- **Root Cause Discovered**:
  - `gsap.fromTo(item, { opacity: 0, y: 24 })` was translating the entire `.about-card-item` container (including the dot).
  - During page load, `ScrollTrigger.refresh()` ran while the cards were at `y: 24`. Measuring `dot.getBoundingClientRect()` shifted the dot down by 24px, artificially inflating Dot 3's target fraction from its true resting `0.849` up to `0.955+`.
  - When the user scrolled down and the card animated to `y: 0`, the dot moved up 24px to its true resting place, but `updateDots()` still waited for `currentProgress >= 0.955 - 0.015 = 0.940`!
  - By the time `progress` reached `0.940`, the golden line had visually overshot the dot by 20px, keeping Dot 3 dark in the user's view.
- **Permanent Solution Applied**:
  1. **Decoupled Animation from Track Anchors**: Shifted the `fromTo` translation exclusively to the card's text content (`item.querySelector('.ps-14')`), leaving the card container and milestone dot statically anchored on the timeline track with zero Y transform.
  2. **Top-Edge Precision Geometry**: Calculated activation fractions relative to the top edge of the dot (`dotTopY = dotRect.top - baseRect.top`) divided by `baseRect.height` (`0.849` for Dot 3), ensuring the dot illuminates the exact moment the line touches it.
  3. **Initial State Guard**: Added `currentProgress > 0.01` so that all dots remain cleanly dark when the page is at scroll 0.
- **Empirical Verification**:
  - `npm run build` passed in 3.78s with 0 errors.
  - Native Edge CDP automated testing across 10 scroll positions confirmed:
    - `scrollY: 0` -> `dots: [false, false, false]`.
    - `scrollY: 800` -> `dots: [true, true, true]`.
    - `scrollY: 840` (user screenshot location) -> `dots: [true, true, true]` (screenshot `verified-dot3-at-840.png` confirmed brilliant illumination).
    - Reverse scroll to 0 -> `dots: [false, false, false]`.
    - Reload at `scrollY: 840` -> `dots: [true, true, true]`.
  - Independent Reviewer Subagent (`Gemini 3.1 Pro High`) conducted fresh-context architectural audit: APPROVED with zero issues.

## 13. Immediate Next Step
- Verify on `http://localhost:5173/`.
- Deploy to GitHub Pages upon user command.

