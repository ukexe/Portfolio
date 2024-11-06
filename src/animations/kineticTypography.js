// Typewriter Effect using GSAP
import { gsap } from 'gsap';

export function typewriterEffect(textSelector, text, delay = 0.1) {
  const el = document.querySelector(textSelector);
  let index = 0;

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay * 1000);
    }
  }

  type();
}

// Moving Text Animation
export function moveTextEffect(textSelector) {
  gsap.fromTo(textSelector, 
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: 'power2.out' }
  );
}

// Vanilla JavaScript alternative for typewriter effect
export function typewriterEffectVanilla(textSelector, text, delay = 100) {
  const el = document.querySelector(textSelector);
  let index = 0;

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }

  type();
}
