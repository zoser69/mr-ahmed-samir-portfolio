# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: CSS/GSAP Animation Conflicts Resolved & Animations Butter Smooth.
- **Root Cause & Fixes**:
  1. **Fixed End-State Snapping & Animation Lag**: Elements like the hero portrait, about cards, and contact numbers had Tailwind `transition-all` or `transition-transform` classes. Because GSAP animates `transform` and `opacity` directly via JS (60fps), the CSS transition engine was fighting GSAP on every frame, causing horrible stuttering (lag). When GSAP finished, the CSS transition would "snap" the element to a different place. Replaced all `transition-all` with `transition-colors` so CSS only handles hover states, leaving GSAP in full control of motion.
  2. **Fixed Sub-pixel Shift on Animation End**: When a GSAP animation finishes, it sometimes drops `force3D` and converts a 3D matrix into a 2D matrix or standard layout, causing images (like the portrait) to slightly shift or snap left/right by a sub-pixel amount. Explicitly added `force3D: true` to all GSAP `.fromTo()` and `.to()` timelines so the hardware-accelerated 3D transform is maintained permanently, preventing any post-animation jitter.
  3. **Fixed Early Animation Trigger**: The animation was starting at `top 92%`. Changed `start` to `top 60%` so the animation waits until the user is actually looking at the center of the section before it plays.
  4. **Staggered Contact Reveal**: Instead of fading in the entire massive `#contact` box at once, staggered its children (`.contact-reveal-box > *`).
  5. **Fixed Portrait Shadow Pop**: Removed the `filter: blur(...)` GSAP animation on the portrait image entirely (using just transform and opacity) to prevent the drop-shadow from popping at the end and to reduce heavy GPU load on the 4K image.
  6. **Fixed Out-of-Order Animation**: Removed CSS `content-visibility: auto` which was deferring layout calculation.
- **Local Dev Server**: `http://localhost:5173/` and `http://127.0.0.1:5173/` (0.0.0.0:5173).
- **Live Online URL**: `https://zoser69.github.io/mr-ahmed-samir-portfolio/`
