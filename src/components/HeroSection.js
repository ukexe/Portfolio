import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const styles = {
    hero: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(circle, #1a1a1a, #0f0f0f)',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      color: 'white',
      textAlign: 'center',
      maxWidth: '800px',
      padding: '2rem',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#00e6e6',
      textShadow: '0px 0px 20px rgba(0,230,230,0.5)',
      animation: 'fadeInUp 1s ease-out',
    },
    tagline: {
      fontSize: '1.8rem',
      color: '#00e6e6',
      marginBottom: '2rem',
      animation: 'fadeInUp 0.8s ease-out',
    },
    description: {
      fontSize: '1.2rem',
      marginBottom: '3rem',
      animation: 'fadeInUp 0.8s ease-out',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      animation: 'fadeInUp 0.4s ease-out 0.2s forwards',
      opacity: 0,
    },
    primaryButton: {
      backgroundColor: '#00e6e6',
      color: '#0f0f0f',
      padding: '1rem 2rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      boxShadow: '0px 0px 20px rgba(0,230,230,0.5)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#00e6e6',
      padding: '1rem 2rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: '2px solid #00e6e6',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    floatingObjects: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: -1,
    },
  };

  useEffect(() => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      shape.style.animation = `floatAnimation ${10 + index * 2}s linear infinite alternate`;
    });
  }, []);

  return (
    <section style={styles.hero}>
      <div style={styles.floatingObjects}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`shape shape-${i}`} style={{ width: `${Math.random() * 100 + 50}px`, height: `${Math.random() * 100 + 50}px`, backgroundColor: `#00e6e6` }} />
        ))}
      </div>

      <div style={styles.content}>
        <h1 className="hero-title" style={styles.title}>Hello, I'm Udhaya Kumar A</h1>
        <p className="hero-tagline" style={styles.tagline}>Aspiring Public Speaker, AI Enthusiast, and Technology Innovator</p>
        <p className="hero-description" style={styles.description}>
          A Computer Science Engineering student passionate about harnessing the power of AI and technology to solve real-world challenges.
        </p>
        <div style={styles.buttonContainer}>
          <Link to="/projects" className="hero-button" style={styles.primaryButton}>
            View Projects
          </Link>
          <Link to="/contact" className="hero-button" style={styles.secondaryButton}>
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;