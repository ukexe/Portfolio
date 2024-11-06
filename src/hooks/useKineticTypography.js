// src/hooks/useKineticTypography.js

import { useEffect } from 'react';
import { gsap } from 'gsap';

const useKineticTypography = (targetSelector, text, speed = 0.05) => {
    useEffect(() => {
        if (!targetSelector || !text) return;

        const target = document.querySelector(targetSelector);
        if (!target) return;

        let charIndex = 0;
        const animateText = () => {
            if (charIndex < text.length) {
                target.textContent += text[charIndex];
                charIndex++;
                setTimeout(animateText, speed * 1000);
            }
        };

        target.textContent = ''; // Clear text before animation
        animateText();

        return () => {
            charIndex = text.length;
            target.textContent = text; // Reset to full text when unmounting
        };
    }, [targetSelector, text, speed]);
};

export default useKineticTypography;
