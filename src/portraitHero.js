import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initPortraitHero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const img = document.getElementById('hero-portrait-img');
  if (!img) return;

  if (prefersReducedMotion) {
    // Graceful immediate visibility for reduced-motion users
    gsap.set(['#hero-portrait-img', '.hero-text-item', '#about .about-header-item', '#about .about-card-item', '#contact .contact-reveal-box', '#contact .social-card-item'], {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'none'
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
    filter: 'blur(5px)',
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 20,
  });

  masterTl.to(img, {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.9,
    clearProps: 'filter',
  })
  .to(
    '.hero-text-item',
    {
      opacity: 1,
      x: 0,
      duration: 0.55,
      stagger: 0.05,
    },
    '-=0.7'
  );

  // 2. Deterministic Master Timeline for Academic Milestones (#about)
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 92%',
        once: true,
        fastScrollEnd: 1000,
        onEnter: (self) => {
          if (Math.abs(self.getVelocity()) > 800 && self.animation) {
            self.animation.progress(1);
          }
        }
      }
    });

    aboutTl
      .fromTo(
        '#about .about-header-item',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
      )
      .fromTo(
        '#about .about-card-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' }, // Strict sequential reveal 1 -> 2 -> 3
        '-=0.25'
      );
  }

  // 3. Deterministic Master Timeline for Contact & Social Hub (#contact)
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 92%',
        once: true,
        fastScrollEnd: 1000,
        onEnter: (self) => {
          if (Math.abs(self.getVelocity()) > 800 && self.animation) {
            self.animation.progress(1);
          }
        }
      }
    });

    contactTl
      .fromTo(
        '#contact .contact-reveal-box',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
      )
      .fromTo(
        '#contact .social-card-item',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out' },
        '-=0.2'
      );
  }

  // Refresh ScrollTrigger calculations
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
