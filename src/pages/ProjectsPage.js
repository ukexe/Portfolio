// src/pages/ProjectsPage.js
import React from 'react';
import ProjectList from '../components/ProjectList';
import ScrollAnimations from '../components/ScrollAnimations';
import { gsap } from 'gsap';

const ProjectsPage = () => {
    React.useEffect(() => {
        // Page animations using gsap
        gsap.fromTo('.title', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' });
        gsap.fromTo('.page-container', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.3, ease: 'power2.out' });

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
        <div className="page-container">
            <canvas id="animationCanvas"></canvas>
            <h1 className="title">Let's Explore My Projects</h1>
            <ScrollAnimations />
            <ProjectList />

            {/* Inline CSS for advanced animations and styling */}
            <style jsx>{`
                :root {
                    --text-color: #e0e0e3;
                    --accent-color: #ff9f1c;
                    --background-color: #1e1e2e;
                    --shadow-color: rgba(0, 0, 0, 0.3);
                }

                .page-container {
                    padding: 3rem 2rem;
                    background-color: var(--background-color);
                    font-family: 'Arial', sans-serif;
                    color: var(--text-color);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                    perspective: 1200px;
                    animation: fadeInBackground 1.5s ease-out;
                    position: relative; /* Add relative positioning */
                }

                canvas {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }

                .title {
                    font-size: 3.5rem;
                    text-align: center;
                    color: var(--accent-color);
                    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.4);
                    margin-bottom: 2.5rem;
                    letter-spacing: 2px;
                    transform: rotateX(10deg);
                    animation: slideDown 1.5s ease-out;
                }

                /* Additional animations */
                @keyframes slideDown {
                    0% {
                        opacity: 0;
                        transform: translateY(-50px) rotateX(15deg);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) rotateX(0deg);
                    }
                }

                @keyframes fadeInBackground {
                    0% {
                        background-color: rgba(30, 30, 46, 0);
                    }
                    100% {
                        background-color: var(--background-color);
                    }
                }

                /* Dynamic hover effect */
                .project-card {
                    background: rgba(255, 255, 255, 0.07);
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 8px 20px var(--shadow-color);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    transform-style: preserve-3d;
                }

                .project-card:hover {
                    transform: translateY(-10px) scale(1.05) rotateX(5deg);
                    box-shadow: 0 10px 25px rgba(255, 159, 28, 0.3);
                }

                .project-card:hover::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 12px;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0));
                    animation: glow 1s infinite alternate ease-in-out;
                }

                /* Glow animation */
                @keyframes glow {
                    from {
                        box-shadow: 0 0 20px rgba(255, 159, 28, 0.4);
                    }
                    to {
                        box-shadow: 0 0 30px rgba(255, 159, 28, 0.6);
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectsPage;
