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

  // 1. Master Hero Entrance (Smooth & Silky)
  const masterTl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  gsap.set(img, {
    opacity: 0,
    x: -60,
    scale: 0.97,
    filter: 'blur(6px)',
  });

  gsap.set('.hero-text-item', {
    opacity: 0,
    x: 25,
  });

  masterTl.to(img, {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 1.2,
    clearProps: 'filter',
  })
  .to(
    '.hero-text-item',
    {
      opacity: 1,
      x: 0,
      duration: 0.75,
      stagger: 0.07,
    },
    '-=0.9'
  );

  // 2. Silky Editorial Header Reveal (#about)
  const aboutHeader = document.querySelector('#about .about-header-item');
  if (aboutHeader) {
    gsap.fromTo(
      '#about .about-header-item',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 88%',
          once: true
        }
      }
    );
  }

  // 3. Individual Silky Row Glide for Academic Milestones
  const milestoneRows = document.querySelectorAll('#about .about-card-item');
  milestoneRows.forEach((row, idx) => {
    gsap.fromTo(
      row,
      {
        opacity: 0,
        y: 24
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 92%',
          once: true
        }
      }
    );
  });

  // 4. Silky Reveal for Contact Box & Social Grid (#contact)
  const contactBox = document.querySelector('#contact .contact-reveal-box');
  if (contactBox) {
    gsap.fromTo(
      contactBox,
      {
        opacity: 0,
        y: 25
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 88%',
          once: true
        }
      }
    );

    const socialItems = document.querySelectorAll('#contact .social-card-item');
    if (socialItems.length > 0) {
      gsap.fromTo(
        socialItems,
        {
          opacity: 0,
          y: 15
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#contact .social-card-item',
            start: 'top 94%',
            once: true
          }
        }
      );
    }
  }

  // Refresh ScrollTrigger calculations
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
