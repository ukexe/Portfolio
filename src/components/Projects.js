// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Key Projects</h2>
            <ul>
                <li>
                    <h3>Possibility Simulation for Territorial Disasters Using Augmented Reality</h3>
                    <p>Developed an AR-based simulation for guiding users through disasters using algorithms like Dijkstra's and A*. Built with Vuforia Engine.</p>
                </li>
                <li>
                    <h3>Quantum-Resilient Authentication using Blockchain</h3>
                    <p>Created a blockchain authentication solution with Zero-Knowledge Proofs to secure data against quantum threats.</p>
                </li>
                <li>
                    <h3>AI-powered Energy Management for Smart Homes</h3>
                    <p>Developed an AI platform optimizing energy use by integrating weather data, promoting sustainability.</p>
                </li>
                <li>
                    <h3>Intelligent Chatbot for Customer Support</h3>
                    <p>Built an NLP-based chatbot using machine learning, enhancing customer support with conversational AI.</p>
                </li>
            </ul>

            <style jsx>{`
                .projects {
                    background: #1a1a2e;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 0 15px #0ff;
                    color: #fff;
                    margin: 2rem 0;
                }

                .projects h2 {
                    font-size: 2.5rem;
                    color: #00e6e6;
                    text-shadow: 0 0 10px #00e6e6;
                }

                .projects ul {
                    list-style: none;
                    padding: 0;
                }

                .projects li {
                    margin-bottom: 1.5rem;
                    padding: 1rem;
                    border-left: 4px solid #00e6e6;
                    background: rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }

                .projects li:hover {
                    background: rgba(0, 0, 0, 0.5);
                    transform: scale(1.02);
                    box-shadow: 0 0 10px #00e6e6;
                }

                .projects h3 {
                    font-size: 1.5rem;
                    color: #00ffff;
                }

                .projects p {
                    color: #b3ffff;
                }
            `}</style>
        </section>
    );
};

export default Projects;
