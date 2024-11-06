// src/components/BackgroundWrapper.js
import React, { useEffect } from 'react';

const BackgroundWrapper = ({ children }) => {
    const styles = {
        wrapper: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a1a1a, #2d3436)',
            zIndex: -1,
            transform: 'translateZ(0)', // Ensure proper rendering
        },
        content: {
            position: 'relative',
            zIndex: 1,
            padding: '2rem', // Optional: Adjust padding as needed
            color: '#ffffff' // Change text color for better visibility against dark background
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const wrapper = document.querySelector('.background-wrapper');
        if (wrapper) {
            // Adjust the background position based on scroll
            wrapper.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="background-wrapper" style={styles.wrapper} />
            <div style={styles.content}>
                {children}
            </div>
        </>
    );
};

export default BackgroundWrapper;