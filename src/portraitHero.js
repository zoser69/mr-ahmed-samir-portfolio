import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. Prevent mobile address bar show/hide from jittering ScrollTrigger calculations
ScrollTrigger.config({
  ignoreMobileResize: true
});

// 2. Ensure every page reload starts cleanly from top for a consistent sequence
if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

export function initPortraitHero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const img = document.getElementById('hero-portrait-img');
  if (!img) return;

  if (prefersReducedMotion) {
    // Immediate full visibility for reduced-motion users
    gsap.set([
      '#hero-portrait-img',
      '.hero-text-item',
      '#about .about-header-item',
      '#about .timeline-track-line',
      '#about .about-card-item',
      '#contact .contact-reveal-box > *',
      '#contact .social-card-item'
    ], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      scaleY: 1
    });
    return;
  }

  // --- SECTION 1: MASTER HERO ENTRANCE (Dynamic Split Side Entrance) ---
  const heroTl = gsap.timeline({
    defaults: { ease: 'power3.out', force3D: true }
  });

  gsap.set(img, {
    opacity: 0,
    x: -40,
    scale: 0.98
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 20
  });

  heroTl
    .to(img, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.9
    })
    .to(
      '.hero-text-item',
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.05
      },
      '-=0.7'
    );

  // --- SECTION 2: ACADEMIC CREDENTIALS & EXPERIENCE TIMELINE (#about) ---
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    // Initial states for About
    gsap.set('#about .about-header-item', { opacity: 0, y: 20 });
    gsap.set('#about .timeline-track-line', { scaleY: 0, transformOrigin: 'top center' });
    gsap.set('#about .about-card-item', { opacity: 0, y: 24 });

    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 65%',
        once: true
      },
      defaults: { ease: 'power3.out', force3D: true }
    });

    aboutTl
      .to('#about .about-header-item', {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08
      })
      .to('#about .timeline-track-line', {
        scaleY: 1,
        duration: 0.7,
        ease: 'power2.inOut'
      }, '-=0.3')
      .to('#about .about-card-item', {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.14
      }, '-=0.5');
  }

  // --- SECTION 3: CONTACT & SOCIAL HUB (#contact) ---
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    // Initial states for Contact
    gsap.set('#contact .contact-reveal-box > *', { opacity: 0, y: 20 });
    gsap.set('#contact .social-card-item', { opacity: 0, y: 16, scale: 0.96 });

    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 65%',
        once: true
      },
      defaults: { ease: 'power3.out', force3D: true }
    });

    contactTl
      .to('#contact .contact-reveal-box > *', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1
      })
      .to('#contact .social-card-item', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.06
      }, '-=0.3');
  }

  // Refresh ScrollTrigger calculations after all resources are loaded
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
