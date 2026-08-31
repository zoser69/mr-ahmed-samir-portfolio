import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Prevent mobile address bar show/hide from jittering ScrollTrigger calculations
ScrollTrigger.config({
  ignoreMobileResize: true
});

export function initPortraitHero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const img = document.getElementById('hero-portrait-img');
  if (!img) return;

  if (prefersReducedMotion) {
    // Graceful immediate visibility for reduced-motion users
    gsap.set(['#hero-portrait-img', '.hero-text-item', '#about .about-header-item', '#about .about-card-item', '#contact .contact-reveal-box', '#contact .social-card-item'], {
      opacity: 1,
      x: 0,
      y: 0
    });
    return;
  }

  // 1. Master Hero Entrance (Immediate & Crisp)
  const masterTl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  gsap.set(img, {
    opacity: 0,
    x: -40,
    scale: 0.98,
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 20,
  });

  masterTl.to(img, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 0.9,
    force3D: true
  })
  .to(
    '.hero-text-item',
    {
      opacity: 1,
      x: 0,
      duration: 0.55,
      stagger: 0.05,
      force3D: true
    },
    '-=0.7'
  );

  // Trigger position tuned for mobile & desktop visibility:
  // Starts when element reaches 75% of viewport (25% up from bottom)
  const triggerStart = 'top 75%';

  // 2. Deterministic Master Timeline for Academic Milestones (#about)
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    // Animate Header Items
    gsap.utils.toArray('#about .about-header-item').forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          force3D: true,
          scrollTrigger: {
            trigger: item,
            start: triggerStart,
            once: true
          }
        }
      );
    });

    // Animate Cards Independently 
    gsap.utils.toArray('#about .about-card-item').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: triggerStart,
            once: true
          }
        }
      );
    });
  }

  // 3. Deterministic Master Timeline for Contact & Social Hub (#contact)
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    // Contact Reveal Items
    gsap.utils.toArray('#contact .contact-reveal-box > *').forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          force3D: true,
          scrollTrigger: {
            trigger: item,
            start: triggerStart,
            once: true
          }
        }
      );
    });

    gsap.fromTo(
      '#contact .social-card-item',
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        force3D: true,
        scrollTrigger: {
          trigger: '#contact .space-y-4',
          start: triggerStart,
          once: true
        }
      }
    );
  }

  // Refresh ScrollTrigger calculations after all resources (images/fonts) are fully loaded
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
