// Import GSAP for smooth micro-interactions
import { gsap } from 'gsap';

// Hover effect for buttons
export function buttonHoverEffect(buttonSelector) {
  document.querySelectorAll(buttonSelector).forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.1, duration: 0.2, ease: 'power1.out' });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.2, ease: 'power1.out' });
    });
  });
}

// Icon bounce effect on click
export function iconBounceEffect(iconSelector) {
  document.querySelectorAll(iconSelector).forEach((icon) => {
    icon.addEventListener('click', () => {
      gsap.fromTo(icon, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.3)' });
    });
  });
}

// Vanilla JavaScript alternative
export function buttonHoverEffectVanilla(buttonSelector) {
  document.querySelectorAll(buttonSelector).forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
}
