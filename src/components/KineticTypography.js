// src/components/KineticTypography.js
import React, { useEffect, useRef } from 'react';

const KineticTypography = () => {
    const textRef = useRef(null);

    const handleMouseOver = () => {
        if (textRef.current) {
            textRef.current.style.transition = 'transform 0.3s ease';
            textRef.current.style.transform = 'scale(1.1)';
            textRef.current.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff';
        }
    };

    const handleMouseOut = () => {
        if (textRef.current) {
            textRef.current.style.transform = 'scale(1)';
            textRef.current.style.textShadow = 'none';
        }
    };

    useEffect(() => {
        const textElement = textRef.current;
        textElement.addEventListener('mouseover', handleMouseOver);
        textElement.addEventListener('mouseout', handleMouseOut);

        return () => {
            textElement.removeEventListener('mouseover', handleMouseOver);
            textElement.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            backgroundColor: '#1a1a2e',
            color: '#00ffff',
            textAlign: 'center',
            padding: '1rem',
            boxShadow: '0 0 20px #00ffff',
            borderRadius: '10px'
        }}>
            <h1 ref={textRef} style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                color: '#00ffff',
                textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff',
                transition: 'transform 0.3s ease, text-shadow 0.3s ease'
            }}>
                "The best way to predict the future is to invent it."
            </h1>
            <p style={{
                marginTop: '1rem',
                fontSize: '1.2rem',
                color: '#b3ffff',
                fontStyle: 'italic'
            }}>
                – Alan Kay
            </p>
        </section>
    );
};

export default KineticTypography;
