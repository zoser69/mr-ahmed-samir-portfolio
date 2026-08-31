import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initPortraitHero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const container = document.getElementById('hero-portrait-container');
  const img = document.getElementById('hero-portrait-img');
  if (!img) return;

  if (prefersReducedMotion) {
    // Graceful immediate visibility for reduced-motion users
    gsap.set(['#hero-portrait-img', '.hero-text-item', '.about-header-item', '.about-card-item', '.contact-reveal-box', '.social-card-item'], {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'none'
    });
    return;
  }

  // 1. Master Page Load Timeline (Hero Section)
  const masterTl = gsap.timeline({
    defaults: { ease: 'expo.out' }
  });

  // Initial State Setup
  gsap.set(img, {
    opacity: 0,
    x: -70,
    scale: 0.96,
    filter: 'blur(8px)',
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 30,
  });

  // Hero Portrait Reveal
  masterTl.to(img, {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 1.3,
    clearProps: 'filter',
  })
  // Overlapping Hero Content Cascade
  .to(
    '.hero-text-item',
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.08,
    },
    '-=1.0'
  );

  // 2. Instantaneous Scroll-Triggered Reveal for Academic Credentials (#about)
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    gsap.set(['#about .about-header-item', '#about .about-card-item'], {
      opacity: 0,
      y: 20
    });

    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 95%', // Triggers the instant the top of the section enters the bottom of the viewport
      once: true,
      onEnter: () => {
        gsap.to('#about .about-header-item', {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: 'expo.out'
        });

        gsap.to('#about .about-card-item', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'expo.out',
          delay: 0.05
        });
      }
    });
  }

  // 3. Instantaneous Scroll-Triggered Reveal for Contact & Social Hub (#contact)
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    gsap.set(['#contact .contact-reveal-box', '#contact .social-card-item'], {
      opacity: 0,
      y: 25,
    });

    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 96%', // Fires immediately as soon as contact enters view
      once: true,
      onEnter: () => {
        gsap.to('#contact .contact-reveal-box', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'expo.out'
        });

        gsap.to('#contact .social-card-item', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'expo.out',
          delay: 0.1
        });
      }
    });
  }

  // Ensure ScrollTrigger recalculates all element triggers accurately
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
