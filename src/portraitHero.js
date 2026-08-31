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

  // 1. Master Hero Entrance (Immediate & Crisp)
  const masterTl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  gsap.set(img, {
    opacity: 0,
    x: -50,
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
    duration: 1.0,
    clearProps: 'filter',
  })
  .to(
    '.hero-text-item',
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.05,
    },
    '-=0.8'
  );

  // Helper for Zero-Lag ScrollTrigger configuration
  const makeZeroLagTrigger = (triggerEl, startPos = 'top 92%') => ({
    trigger: triggerEl,
    start: startPos,
    once: true,
    fastScrollEnd: 1000,
    onEnter: (self) => {
      // If user scrolls quickly (> 1000px/s), snap to completed state immediately with 0ms lag
      if (Math.abs(self.getVelocity()) > 1000 && self.animation) {
        self.animation.progress(1);
      }
    }
  });

  // 2. Silky Editorial Header Reveal (#about)
  const aboutHeader = document.querySelector('#about .about-header-item');
  if (aboutHeader) {
    gsap.fromTo(
      '#about .about-header-item',
      {
        opacity: 0,
        y: 16
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: makeZeroLagTrigger('#about', 'top 92%')
      }
    );
  }

  // 3. Individual Milestone Rows (Zero-Lag Silk Glide)
  const milestoneRows = document.querySelectorAll('#about .about-card-item');
  milestoneRows.forEach((row) => {
    gsap.fromTo(
      row,
      {
        opacity: 0,
        y: 18
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: makeZeroLagTrigger(row, 'top 94%')
      }
    );
  });

  // 4. Contact Box & Social Grid (Zero-Lag Silk Glide)
  const contactBox = document.querySelector('#contact .contact-reveal-box');
  if (contactBox) {
    gsap.fromTo(
      contactBox,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: makeZeroLagTrigger('#contact', 'top 94%')
      }
    );

    const socialItems = document.querySelectorAll('#contact .social-card-item');
    if (socialItems.length > 0) {
      gsap.fromTo(
        socialItems,
        {
          opacity: 0,
          y: 12
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: makeZeroLagTrigger('#contact .social-card-item', 'top 96%')
        }
      );
    }
  }

  // Refresh ScrollTrigger coordinates
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
