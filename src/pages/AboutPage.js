// src/pages/AboutPage.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AboutPage = () => {
    useEffect(() => {
        // GSAP animation for sections
        gsap.fromTo('.section', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 1 });

        // Canvas setup for line animation
        const canvas = document.getElementById('animationCanvas');
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Create lines
        const lines = Array.from({ length: 15 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            length: Math.random() * 60 + 20,
            angle: Math.random() * Math.PI * 2,
        }));

        // Update and draw lines
        function animate() {
            ctx.clearRect(0, 0, width, height);

            lines.forEach((line) => {
                // Move line ends based on angle and velocity
                line.x += line.dx;
                line.y += line.dy;

                const endX = line.x + Math.cos(line.angle) * line.length;
                const endY = line.y + Math.sin(line.angle) * line.length;

                // Bounce lines off edges
                if (line.x <= 0 || line.x >= width) line.dx *= -1;
                if (line.y <= 0 || line.y >= height) line.dy *= -1;

                // Draw line
                ctx.beginPath();
                ctx.moveTo(line.x, line.y);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.closePath();

                // Check for collisions and bounce lines off each other
                lines.forEach((otherLine) => {
                    if (otherLine !== line) {
                        const distX = otherLine.x - line.x;
                        const distY = otherLine.y - line.y;
                        const distance = Math.sqrt(distX * distX + distY * distY);

                        if (distance < 50) {
                            line.dx *= -1;
                            line.dy *= -1;
                        }
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Resize canvas on window resize
        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        });

        return () => {
            window.removeEventListener('resize', () => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            });
        };
    }, []);

    return (
        <div className="about-page">
            <canvas id="animationCanvas"></canvas>
            <h1>About Me</h1>
            
            <section className="section">
                <p className="text">
                    I'm Udhaya Kumar A, a Computer Science Engineering student passionate about 
                    technology and innovation. My journey in tech is driven by curiosity and 
                    a desire to create meaningful solutions.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-list">
                    <span className="skill-item">Python</span>
                    <span className="skill-item">JavaScript</span>
                    <span className="skill-item">React</span>
                    <span className="skill-item">Machine Learning</span>
                    <span className="skill-item">AI Development</span>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="date">2023</div>
                        <h3>Campus Ambassador - TCS</h3>
                        <p className="text">
                            Led tech outreach initiatives and promoted leadership within 
                            the academic community.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <div className="date">2022</div>
                        <h3>Research Project - Saveetha Medical College</h3>
                        <p className="text">
                            Conducted research on brain plasticity simulation in adaptive AI models.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <div className="date">2024</div>
                        <h3>Software Development and Data Science Intern - NIHON EDUTECH PRIVATE LIMITED</h3>
                        <p className="text">
                        Contributed to AI-driven tools using machine learning models like TfidfVectorizer and MultiOutputClassifiers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section values-section">
                <h2 className="section-title">Values & Principles</h2>
                <p className="text">
                    I believe in continuous learning, innovation, and using technology 
                    to create positive impact. My approach combines technical expertise 
                    with creative problem-solving to deliver meaningful solutions.
                </p>
            </section>

            {/* Inline CSS for advanced styles */}
            <style jsx>{`
                :root {
                    --text-color: #f1f1f1;
                    --accent-color: #007bff;
                    --background-color: rgba(255, 255, 255, 0.1);
                    --shadow-color: rgba(0, 0, 0, 0.2);
                }

                body {
                    margin: 0;
                    font-family: 'Arial', sans-serif;
                }

                .about-page {
                    padding: 2rem;
                    color: var(--text-color);
                    text-align: center;
                }

                canvas {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }

                h1 {
                    font-size: 3rem;
                    color: var(--accent-color);
                    margin-bottom: 1.5rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .section {
                    background: var(--background-color);
                    padding: 2rem;
                    border-radius: 10px;
                    backdrop-filter: blur(8px);
                    margin-bottom: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 4px 6px var(--shadow-color);
                }

                .section-title {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    color: var(--accent-color);
                }

                .text {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1rem;
                    margin: 2rem 0;
                }

                .skill-item {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 0.75rem 1.5rem;
                    border-radius: 25px;
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: transform 0.3s, box-shadow 0.3s; /* Smooth transitions */
                }

                .skill-item:hover {
                   transform: translateY(-5px); /* Lift effect on hover */
                   box-shadow: 0px 4px 12px rgba(255,255,255,0.3); /* Shadow effect on hover */
                }

                .timeline {
                   max-width: 800px;
                   margin: auto; /* Centering the timeline */
                   position: relative;
                   text-align: left; /* Align text to left */
                   padding-left: calc(20% + 20px); /* Space for timeline markers */
                   padding-right: calc(20% + 20px); /* Space for timeline markers */
                   overflow-x:hidden; /* Hide horizontal overflow */
               }

               .timeline-item {
                   background: rgba(255,255,255,0.1);
                   padding: 1.5rem;
                   border-radius: 8px;
                   margin-bottom: 1.5rem;
                   position: relative; /* For positioning pseudo-elements */
                   border-left :5px solid var(--accent-color); /* Left border for timeline marker */
                   border-right :5px solid var(--accent-color); /* Right border for timeline marker */
                   box-shadow :0px4px8px var(--shadow-color); /* Shadow for depth */
               }

               .date {
                   color :var(--accent-color);
                   font-weight:bold; /* Bold date text */
                   margin-bottom :0.5rem; /* Space below date */
               }
            `}</style>
        </div>
    );
};

export default AboutPage;
