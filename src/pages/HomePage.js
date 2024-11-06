// src/pages/HomePage.js
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import KineticTypography from '../components/KineticTypography';

const HomePage = () => {
    useEffect(() => {
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
        <div className="home-page">
            <canvas id="animationCanvas"></canvas>
            <HeroSection />
            <section className="introduction">
                <h2 className="title">Welcome to My Portfolio!</h2>
                <p className="description">
                    I'm Udhaya Kumar A, a Computer Science Engineer driven by innovation and a passion for AI, full-stack development, and data science.
                </p>
            </section>
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <KineticTypography />
            <AboutMe />

            {/* Styles */}
            <style jsx>{`
                :root {
                    --text-color: #f1f1f1;
                    --accent-color: #00ffff;
                    --background-gradient: linear-gradient(135deg, #1a1a1a, #333), url("/background.jpg") center/cover no-repeat;
                }

                body {
                    margin: 0;
                    font-family: 'Arial', sans-serif;
                }

                .home-page {
                    color: var(--text-color);
                    background: var(--background-gradient);
                    padding: 2rem;
                    position: relative;
                    overflow: hidden;
                }

                canvas {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }

                .introduction {
                    text-align: center;
                    margin: 4rem 0;
                    padding: 3rem 2rem;
                    background: rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 12px rgba(0, 255, 255, 0.3);
                    border-radius: 15px;
                    animation: fadeIn 1.5s ease-in-out;
                }

                .title {
                    font-size: 3rem;
                    color: var(--accent-color);
                    margin-bottom: 1rem;
                }

                .description {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    max-width: 800px;
                    margin: 0 auto;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                /* Media Queries for Responsiveness */
                @media (max-width: 768px) {
                    .title {
                        font-size: 2.5rem;
                    }

                    .description {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;
