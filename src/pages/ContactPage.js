// src/pages/ContactPage.js
import React, { useEffect } from 'react';

const ContactPage = () => {
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
        <div className="contact-page">
            <canvas id="animationCanvas"></canvas>
            <h1>Contact Me</h1>
            <form className="contact-form" action="https://formspree.io/f/xgedqnry" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            {/* Styles */}
            <style jsx>{`
                :root {
                    --primary-color: #00bcd4;
                    --background-color: #121212;
                    --form-background: rgba(30, 30, 30, 0.9);
                    --text-color: #f1f1f1;
                    --border-color: #555;
                    --accent-color: #ff5722;
                }

                .contact-page {
                    position: relative;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: var(--background-color);
                    min-height: 100vh;
                    color: var(--text-color);
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
                    font-size: 2.5rem;
                    text-align: center;
                    color: var(--primary-color);
                    margin-bottom: 2rem;
                }

                .contact-form {
                    background: var(--form-background);
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                    padding: 2rem;
                    width: 100%;
                    max-width: 500px;
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }

                label {
                    font-weight: bold;
                    color: var(--text-color);
                }

                input, textarea {
                    padding: 0.5rem;
                    border: 1px solid var(--border-color);
                    background: #222;
                    color: var(--text-color);
                    border-radius: 4px;
                    transition: border-color 0.3s, box-shadow 0.3s;
                }

                input:focus, textarea:focus {
                    border-color: var(--primary-color);
                    box-shadow: 0 0 8px rgba(0, 188, 212, 0.5);
                }

                button {
                    padding: 0.6rem 1.2rem;
                    background-color: var(--primary-color);
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s, transform 0.3s;
                    font-size: 1rem;
                }

                button:hover {
                    background-color: var(--accent-color);
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
