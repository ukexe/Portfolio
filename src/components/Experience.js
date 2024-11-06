// src/components/Experience.js
import React from 'react';

const Experience = () => {
    return (
        <section className="experience">
            <h2>Professional Experience</h2>
            <ul>
                <li>
                    <h3>Software Development and Data Science Intern</h3>
                    <p><strong>NIHON EDUTECH PRIVATE LIMITED, July - August 2024</strong></p>
                    <p>Gained experience in software development, working with NLP tools like SpaCy and NLTK, developing full-stack web applications, and designing RESTful APIs.</p>
                    <p>Developed full-stack web applications using HTML, CSS, JavaScript, Python, and Flask, and designed RESTful APIs for secure data exchange</p>
                    <p>Collaborated with senior developers to ensure data accuracy and resolve discrepancies between front-end and back-end systems</p>
                </li>
                <li>
                    <h3>Lead Researcher</h3>
                    <p><strong>Saveetha Medical College, May - June 2024</strong></p>
                    <p>Led research on AI mimicking brain functions, creating adaptive neural network models inspired by brain plasticity, with a focus on decision-making.</p>
                    <p>Developed a prototype of a brain-inspired AI system that can adapt to new situations and make decisions based on past experiences.</p>
                    <p>Collaborated with interdisciplinary teams to integrate bio-inspired algorithms into practical use cases, contributing to advancements in both AI andneuroscience.</p>
                </li>
                <li>
                    <h3>Campus Ambassador</h3>
                    <p><strong>Tata Consultancy Services (TCS), July 2024 – Present</strong></p>
                    <p>Organized workshops, webinars, and campus events to foster engagement with TCS's digital and innovation programs.</p>
                    <p>Collaborated with TCS representatives to provide guidance and mentorship for students interested in technology and professional development.</p>
                </li>
            </ul>

            <style jsx>{`
                .experience {
                    background: #1a1a2e;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 0 15px #ff1493;
                    color: #fff;
                    margin: 2rem 0;
                }

                .experience h2 {
                    font-size: 2.5rem;
                    color: #ff69b4;
                    text-shadow: 0 0 10px #ff69b4;
                }

                .experience ul {
                    list-style: none;
                    padding: 0;
                }

                .experience li {
                    margin-bottom: 1.5rem;
                    padding: 1rem;
                    border-left: 4px solid #ff69b4;
                    background: rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                }

                .experience li:hover {
                    background: rgba(0, 0, 0, 0.5);
                    transform: scale(1.02);
                    box-shadow: 0 0 10px #ff69b4;
                }

                .experience h3 {
                    font-size: 1.5rem;
                    color: #ff1493;
                }

                .experience p {
                    color: #ffb6c1;
                }
            `}</style>
        </section>
    );
};

export default Experience;
