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
    gsap.set(['#hero-portrait-img', '.hero-text-item', '.scroll-reveal-item'], {
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
    x: -80,
    scale: 0.96,
    filter: 'blur(10px)',
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 35,
  });

  // Hero Portrait Reveal
  masterTl.to(img, {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 1.5,
    clearProps: 'filter',
  })
  // Overlapping Hero Content Cascade
  .to(
    '.hero-text-item',
    {
      opacity: 1,
      x: 0,
      duration: 1.0,
      stagger: 0.1,
    },
    '-=1.1'
  );

  // 2. Scroll-Triggered Reveal for Academic Credentials (#about)
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    gsap.set('#about .about-header-item', {
      opacity: 0,
      y: 25
    });
    gsap.set('#about .about-card-item', {
      opacity: 0,
      y: 35
    });

    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to('#about .about-header-item', {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'expo.out'
        });

        gsap.to('#about .about-card-item', {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: 'expo.out',
          delay: 0.15
        });
      }
    });
  }

  // 3. Scroll-Triggered Reveal for Contact & Social Hub (#contact)
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    gsap.set('#contact .contact-reveal-box', {
      opacity: 0,
      y: 40,
      scale: 0.98
    });
    gsap.set('#contact .social-card-item', {
      opacity: 0,
      y: 20
    });

    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to('#contact .contact-reveal-box', {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'expo.out'
        });

        gsap.to('#contact .social-card-item', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'expo.out',
          delay: 0.3
        });
      }
    });
  }
}
