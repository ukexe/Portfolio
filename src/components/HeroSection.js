// src/components/HeroSection.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
    const styles = {
        hero: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 2rem',
            color: 'white',
            textAlign: 'center',
            overflow: 'hidden' // Ensure content doesn't overflow
        },
        video: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Cover the entire section
            zIndex: 0, // Behind other content
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
            zIndex: 1
        },
        content: {
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px'
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '0.5rem'
        },
        tagline: {
            fontSize: '1.2rem',
            color: '#ffd700'
        },
        description: {
            margin: '1rem 0 2rem',
            fontSize: '1rem',
            lineHeight: 1.6
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
        },
        primaryButton: {
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            backgroundColor: '#ffd700',
            color: '#333',
            transition: 'transform 0.3s, box-shadow 0.3s',
        },
        secondaryButton: {
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            backgroundColor: '#333',
            color: '#ffd700',
            border: '1px solid #ffd700',
            transition: 'transform 0.3s, box-shadow 0.3s'
        }
    };

    useEffect(() => {
        gsap.fromTo('.hero-title', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo('.hero-button', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.3 });
    }, []);

    return (
        <section style={styles.hero}>
            <video style={styles.video} autoPlay loop muted>
                <source src="./public/assets/hey.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={styles.overlay}></div>
            <div style={styles.content}>
                <h1 className="hero-title" style={styles.title}>Hello, I'm Udhaya Kumar A</h1>
                <p style={styles.tagline}>Aspiring Public Speaker, AI Enthusiast, and Technology Innovator</p>
                <p style={styles.description}>
                    A Computer Science Engineering student passionate about harnessing the power of AI and technology to solve real-world challenges.
                </p>
                <div style={styles.buttonContainer}>
                    <a href="#projects" className="hero-button" style={styles.primaryButton}>View Projects</a>
                    <a href="/path/to/resume.pdf" target="_blank" className="hero-button" style={styles.secondaryButton}>Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
