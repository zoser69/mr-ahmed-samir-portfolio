# System State - Mr. Ahmed Samir 3D Portfolio

- **Current Status**: Scroll Animations Centered & Contact Elements Staggered Live & Deployed.
- **Root Cause & Fixes**:
  1. **Fixed Early Animation Trigger**: The animation was starting at `top 92%` (when the section barely enters from the bottom of the screen). By the time the user scrolled down, the 0.5s animation was already over. Changed `start` to `top 60%` so the animation waits until the user is actually looking at the center of the section before it plays.
  2. **Staggered Contact Reveal**: Instead of fading in the entire massive `#contact` box at once, staggered its children (`.contact-reveal-box > *`) so the title, the numbers block, and the social media icons pop up one after the other in a beautiful sequence as the user scrolls into them.
  3. **Fixed Portrait Shadow Pop & Lag**: The GSAP animation on the portrait image was animating `filter: blur(...)` and then calling `clearProps: 'filter'` at the end. This cleared the inline filter but suddenly applied Tailwind's `drop-shadow` class in a single frame, causing a visual "pop" and a slight lag due to heavy GPU pixel convolution on a 4K image. Removed the blur animation entirely (using just transform and opacity) for buttery smooth hardware-accelerated motion and persistent natural shadow.
  4. **Fixed Out-of-Order Animation**: Removed CSS `content-visibility: auto` which was deferring layout calculation and corrupting ScrollTrigger trigger coordinates. Replaced separate child triggers with a single **Master Timeline** that strictly sequences elements.
- **Local Dev Server**: `http://localhost:5173/` and `http://127.0.0.1:5173/` (0.0.0.0:5173).
- **Live Online URL**: `https://zoser69.github.io/mr-ahmed-samir-portfolio/`
