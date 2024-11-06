// src/pages/ContactPage.js
import React, { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        // Any necessary effect logic
    }, []);

    return (
        <div className="contact-page">
            <canvas id="animationCanvas"></canvas>
            <h1>Contact Me</h1>
            <form className="contact-form" action="https://formspree.io/f/myzyweqr" method="POST">
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
