// src/components/AboutMe.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AboutMe = () => {
    const styles = {
        about: {
            padding: '4rem 2rem',
            backgroundColor: '#1a1a2e',
            color: '#f1f1f1',
            textAlign: 'center',
            borderRadius: '15px',
            boxShadow: '0 0 15px #00ffff',
            margin: '2rem 0',
        },
        title: {
            fontSize: '2.5rem',
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff',
            marginBottom: '1.5rem',
        },
        achievementsList: {
            listStyle: 'none',
            padding: 0,
            maxWidth: '800px',
            margin: '2.5rem auto',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        achievementItem: {
            padding: '1.2rem',
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid #00ffff',
            boxShadow: '0 4px 8px rgba(0, 255, 255, 0.2)',
            fontSize: '1.1rem',
            color: '#b3ffff',
            transform: 'scale(1)',
            transition: 'transform 0.2s ease, box-shadow 0.3s ease',
        },
    };

    useEffect(() => {
        gsap.fromTo('.achievementItem', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 });
    }, []);

    return (
        <section style={styles.about}>
            <h2 style={styles.title}>About Me</h2>
            <ul style={styles.achievementsList}>
                <li style={styles.achievementItem} className="achievementItem">Lead Researcher on AI models mimicking brain functions at Saveetha Medical College.</li>
                <li style={styles.achievementItem} className="achievementItem">Developed an AR disaster simulation using Dijkstra's and A* algorithms.</li>
                <li style={styles.achievementItem} className="achievementItem">Built a quantum-resilient authentication solution using blockchain and ZKPs.</li>
                <li style={styles.achievementItem} className="achievementItem">Certified in Advanced LLMOps and MongoDB Node.js Development.</li>
                <li style={styles.achievementItem} className="achievementItem">Designed an AI-powered energy management system for smart homes.</li>
            </ul>
        </section>
    );
};

export default AboutMe;
