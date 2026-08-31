import gsap from 'gsap';

export function initPortraitHero() {
  const container = document.getElementById('hero-portrait-container');
  const img = document.getElementById('hero-portrait-img');
  if (!img) return;

  // 1. Create a Master Timeline for Cinematic Page Load Choreography
  const tl = gsap.timeline({
    defaults: { ease: 'expo.out' }
  });

  // Initial State Setup
  gsap.set(img, {
    opacity: 0,
    x: -90, // Slide in from side
    scale: 0.95,
    filter: 'blur(8px)',
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 40, // Slide in from opposite side
  });

  // Step 1: Smooth luxury entrance for the portrait from the side
  tl.to(img, {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 1.6,
    clearProps: 'filter', // Clear blur for crisp 4K rendering
  })
  // Step 2: Harmonic text reveal slightly overlapping
  .to(
    '.hero-text-item',
    {
      opacity: 1,
      x: 0,
      duration: 1.1,
      stagger: 0.12,
    },
    '-=1.1' // Overlap smoothly with the portrait slide
  );
}
