// src/components/ScrollAnimations.js
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (section) {
            gsap.fromTo(
                section.querySelectorAll('.animated-text'),
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            gsap.fromTo(
                section.querySelector('.background-effect'),
                {
                    scale: 1.2,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, [isVisible]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerPoint = window.innerHeight * 0.8;
            const section = document.querySelector('.scroll-animation');

            if (section && section.getBoundingClientRect().top < triggerPoint) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`scroll-animation ${isVisible ? 'visible' : ''}`}
            style={{
                position: 'relative',
                padding: '3rem',
                opacity: isVisible ? 1 : 0,
                textAlign: 'center',
                backgroundColor: 'rgba(240, 245, 255, 0.9)',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.25)',
            }}
        >
            <div className="background-effect" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #e0e7ff, #a5b4fc)',
                zIndex: -1,
                opacity: 0.5,
                transform: 'scale(1.2)',
                filter: 'blur(20px)',
            }}></div>
            
            <h2 className="animated-text" style={{
                fontSize: '2.2rem',
                color: '#222',
                marginBottom: '1.2rem',
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.15)',
            }}>
                "Projects are the footprints of our passions and the milestones of our growth."
            </h2>

            <p className="animated-text" style={{
                fontSize: '1.2rem',
                color: '#444',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto',
            }}>
                Projects are not just tasks—they are transformative experiences that sharpen skills, build resilience, and reveal our potential. Each project shapes who we become.
            </p>

            {/* Additional CSS for animations */}
            <style jsx>{`
                .scroll-animation {
                    overflow: hidden;
                }

                .animated-text {
                    opacity: 0;
                    transform: translateY(20px);
                }

                .background-effect {
                    transition: transform 0.7s ease, opacity 0.7s ease;
                }

                .scroll-animation.visible .animated-text {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </section>
    );
};

export default ScrollAnimations;
