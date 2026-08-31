# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: 3D Background Improved, Subagents Auditing, Animations Polished.
- **Root Cause & Fixes**:
  1. **Fixed End-State Snapping & Animation Lag**: Replaced all `transition-all` with `transition-colors` so CSS only handles hover states, leaving GSAP in full control of motion.
  2. **Fixed Sub-pixel Shift on Animation End**: Explicitly added `force3D: true` to all GSAP `.fromTo()` timelines to prevent snapping when GSAP drops hardware acceleration at the end of a tween.
  3. **Fixed Early Animation Trigger (Off-screen)**: Both `#contact` and `#about` were using a single `gsap.timeline` triggered by the top of their massive sections. Elements at the bottom were animating while still physically off-screen. Removed the single timeline and wrapped each individual card/block in its own `ScrollTrigger` (`top 85%`), ensuring they wait until they actually enter the viewport.
  4. **Fixed Early Animation Trigger (Global)**: Changed `start` to `top 60%`.
  5. **Fixed Fast Scrolling Skipping Animations**: Completely eradicated `fastScrollEnd: true` from all ScrollTriggers (including `#about` and `#contact`). This feature was forcing animations to instantly snap to 100% completion if the user scrolled down quickly, causing the "it finishes before I reach it" complaints.
  6. **Fixed Portrait Shadow Pop**: Removed the `filter: blur(...)` GSAP animation on the portrait image entirely to prevent the drop-shadow from popping at the end and to reduce heavy GPU load.
  7. **Enhanced 3D Background Typography**: Rewrote the mathematical distribution of the floating 3D English letters in `threeScene.js` to use polar coordinates (`Math.cos`, `Math.sin`). This scatters them beautifully in a wide "constellation" frame around the edges (with heavy Z-depth parallax), rather than bunching them linearly, leaving the center readable for the hero text.
  8. **Performance Audit (Flash Subagent)**: Reduced production JS bundle size by **~50%** (1.2MB to 634KB) by tree-shaking `lucide` icons. Removed 38MB of unused raw images from the build folder. Fixed a 404 redundant CSS link in `index.html`. Deleted 649 lines of dead code (`phoneticsLab.js`).
  9. **WebGL Frame-Rate Independence**: Fixed an issue where the 3D letters would rotate 2x faster on 120Hz/144Hz monitors than on 60Hz monitors. The rotation logic `mesh.rotation.x += u.rotSpeedX` was replaced with a time-based delta multiplier `mesh.rotation.x = u.baseRotX + t * (u.rotSpeedX * 60)`.
  10. **Clean Code Audit (Pro Subagent)**: Refactored a magic `setTimeout` in `portraitHero.js` to instead use a deterministic `window.addEventListener('load')` for `ScrollTrigger.refresh()`.
- **Local Dev Server**: `http://localhost:5173/` and `http://127.0.0.1:5173/` (0.0.0.0:5173).
- **Live Online URL**: `https://zoser69.github.io/mr-ahmed-samir-portfolio/`
