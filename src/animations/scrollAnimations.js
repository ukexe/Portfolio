// Import GSAP and ScrollTrigger (make sure GSAP is installed)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Fade in sections when scrolled into view
  gsap.utils.toArray('.fade-in').forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });
  });

  // Slide in from left
  gsap.utils.toArray('.slide-in-left').forEach((element) => {
    gsap.from(element, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 40%',
        scrub: true,
      },
    });
  });

  // Slide in from right
  gsap.utils.toArray('.slide-in-right').forEach((element) => {
    gsap.from(element, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 40%',
        scrub: true,
      },
    });
  });
}

// Vanilla JavaScript alternative
export function initScrollAnimationsVanilla() {
  const options = { threshold: 0.25 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((el) => {
    observer.observe(el);
  });
}
