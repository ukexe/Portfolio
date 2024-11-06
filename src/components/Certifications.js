// src/components/Certifications.js
import React from 'react';

const Certifications = () => {
    return (
        <section className="certifications">
            <h2>Certifications</h2>
            <ul>
                <li>Generative AI by Microsoft and LinkedIn</li>
                <li>MongoDB Node.js Developer Path for SmartBridge</li>
                <li>Advanced LLMOps: Deploying and Managing LLMs in Production</li>
                <li>Journey to Cloud: Envisioning Your Solution by IBM</li>
                <li>Business Analysis by Microsoft and LinkedIn</li>
            </ul>

            <style jsx>{`
                .certifications {
                    background: #1a1a2e;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 0 15px #7cfc00;
                    color: #fff;
                    margin: 2rem 0;
                }

                .certifications h2 {
                    font-size: 2.5rem;
                    color: #adff2f;
                    text-shadow: 0 0 10px #7cfc00;
                }

                .certifications ul {
                    list-style: none;
                    padding: 0;
                }

                .certifications li {
                    margin-bottom: 1rem;
                    padding: 0.5rem;
                    background: rgba(0, 0, 0, 0.3);
                    border-left: 4px solid #7cfc00;
                    transition: all 0.3s ease;
                    color: #bfff00;
                }

                .certifications li:hover {
                    transform: translateX(10px);
                    color: #adff2f;
                    box-shadow: 0 0 10px #7cfc00;
                }
            `}</style>
        </section>
    );
};

export default Certifications;
