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

let heroEntranceTimeline = null;

export function playHeroEntrance() {
  if (heroEntranceTimeline) {
    heroEntranceTimeline.play();
  }

  // If the page reloads while the user is already scrolled down, replay in-view elements smoothly as curtain lifts
  requestAnimationFrame(() => {
    document.querySelectorAll('[data-word-reveal]').forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        heading.classList.remove('is-visible');
        void heading.offsetWidth; // trigger reflow
        heading.classList.add('is-visible');
      }
    });

    // 1. Refresh all ScrollTriggers FIRST on clean DOM layout
    ScrollTrigger.refresh();

    // 2. Safely restart in-view entrance animations for elements currently in the viewport
    ScrollTrigger.getAll().forEach((st) => {
      // Exclude scrubbed timelines so the progress line strictly matches current scroll position
      if (st.trigger && st.animation && !st.vars.scrub) {
        const rect = st.trigger.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          st.animation.restart();
        }
      }
    });
  });
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
      '#about .timeline-track-base',
      '#about .timeline-track-progress',
      '#about .about-card-item',
      '#about .about-card-item .ps-14',
      '#contact .contact-reveal-box > *',
      '#contact .social-card-item'
    ], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      scaleY: 1
    });

    document.querySelectorAll('[data-word-reveal]').forEach((el) => {
      el.classList.add('is-visible');
    });
    document.querySelectorAll('.timeline-milestone-dot').forEach((dot) => {
      dot.classList.add('is-active');
    });
    return;
  }

  // --- FEATURE 1: EDITORIAL STAGGERED WORD REVEAL (Bidirectional Reversible) ---
  document.querySelectorAll('[data-word-reveal]').forEach((heading) => {
    const rawText = heading.textContent.trim();
    const words = rawText.split(/\s+/);
    heading.innerHTML = words.map((word, idx) => 
      `<span class="word-reveal-word" style="--word-index: ${idx}">${word}</span>`
    ).join(' ');

    ScrollTrigger.create({
      trigger: heading,
      start: 'top 88%',
      onEnter: () => heading.classList.add('is-visible'),
      onLeaveBack: () => heading.classList.remove('is-visible')
    });
  });

  // --- SECTION 1: MASTER HERO ENTRANCE (Dynamic Split Side Entrance) ---
  heroEntranceTimeline = gsap.timeline({
    paused: true,
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

  heroEntranceTimeline
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

  // --- FEATURE 2: HOLOGRAPHIC PSEUDO-3D PARALLAX (Desktop Mouse Reaction) ---
  if (window.innerWidth >= 1024) {
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(img, {
        x: mouseX * -14,
        y: mouseY * -9,
        rotationY: mouseX * 3.8,
        rotationX: -mouseY * 2.8,
        transformPerspective: 950,
        duration: 0.85,
        ease: 'power2.out',
        overwrite: 'auto',
        force3D: true
      });
    }, { passive: true });
  }

  // --- SECTION 2: SCROLL-SCRUBBED ACADEMIC JOURNEY (#about) ---
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    // Section header subtitle reveal (Bidirectional reversible)
    gsap.fromTo('#about .about-header-item:not([data-word-reveal])',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 78%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Continuous Scroll-Scrubbed Progress Line & Unified Dot Illumination
    const baseLine = aboutSection.querySelector('.timeline-track-base');
    const progressLine = aboutSection.querySelector('.timeline-track-progress');
    const milestones = aboutSection.querySelectorAll('.about-card-item');

    let dotFractions = [0.0, 0.438, 0.875];
    const updateDotFractions = () => {
      if (!baseLine) return;
      const baseRect = baseLine.getBoundingClientRect();
      if (baseRect.height > 0) {
        dotFractions = Array.from(milestones).map((item) => {
          const dot = item.querySelector('.timeline-milestone-dot');
          if (!dot) return 0;
          const dotRect = dot.getBoundingClientRect();
          // Calculate fraction to the top edge of the dot where the line tip first touches it
          const dotTopY = dotRect.top - baseRect.top;
          return Math.max(0, dotTopY / baseRect.height);
        });
      }
    };

    const updateDots = (currentProgress) => {
      milestones.forEach((item, idx) => {
        const dot = item.querySelector('.timeline-milestone-dot');
        if (!dot) return;
        const targetFraction = dotFractions[idx] ?? 0;
        // As soon as the golden line tip reaches the dot (and line has actually started):
        if (currentProgress > 0.01 && currentProgress >= targetFraction - 0.005) {
          dot.classList.add('is-active');
        } else {
          dot.classList.remove('is-active');
        }
      });
    };

    if (progressLine) {
      gsap.to(progressLine, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 65%',
          end: 'bottom 80%',
          scrub: 0.4,
          onRefresh: (self) => {
            updateDotFractions();
            updateDots(self.progress);
          }
        },
        onUpdate: function () {
          // this.progress() is the exact visual scaleY of the golden line on screen
          updateDots(this.progress());
        }
      });
    }

    // Progressive milestone card content arrival (Bidirectional reversible)
    // Animate the text content rather than the whole item so the milestone dot remains statically anchored to the track
    milestones.forEach((item) => {
      const content = item.querySelector('.ps-14') || item;
      gsap.fromTo(content,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }

  // --- SECTION 3: CONTACT & SOCIAL HUB (#contact) ---
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    // 1. Contact Subtitle Reveal (Header title is animated via data-word-reveal)
    const subtitle = contactSection.querySelector('.contact-reveal-box p');
    if (subtitle) {
      gsap.fromTo(subtitle,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitle,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // 2. Direct Phone & Booking Cards (Triggered comfortably when cards enter viewport)
    const phoneGrid = contactSection.querySelector('.contact-reveal-box > .grid');
    if (phoneGrid) {
      const cards = phoneGrid.querySelectorAll('.solid-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.14,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: phoneGrid,
            start: 'top 84%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // 3. Official Channels & Social Media Hub (Cascades smoothly as user reaches the bottom)
    const socialContainer = contactSection.querySelector('.space-y-4.pt-4');
    if (socialContainer) {
      const socialTitle = socialContainer.querySelector('h4');
      const socialCards = socialContainer.querySelectorAll('.social-card-item');

      const socialTl = gsap.timeline({
        scrollTrigger: {
          trigger: socialContainer,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        },
        defaults: { ease: 'power2.out', force3D: true }
      });

      if (socialTitle) {
        socialTl.fromTo(socialTitle,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4 }
        );
      }

      if (socialCards.length) {
        socialTl.fromTo(socialCards,
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 },
          '-=0.2'
        );
      }
    }

    // 4. Availability Footer Note
    const availabilityNote = contactSection.querySelector('.contact-reveal-box > div:last-child');
    if (availabilityNote) {
      gsap.fromTo(availabilityNote,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: availabilityNote,
            start: 'top 92%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }

  // Refresh ScrollTrigger calculations after all resources are loaded
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
