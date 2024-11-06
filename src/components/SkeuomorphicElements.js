// src/components/SkeuomorphicElements.js
import React from 'react';

const SkeuomorphicElements = () => {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            backgroundColor: '#f0f0f5'
        }}>
            <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: '#333'
            }}>Skeuomorphic Design Example</h2>
            <button style={{
                padding: '0.8rem 1.5rem',
                fontSize: '1rem',
                color: '#333',
                backgroundColor: '#e0e0e0',
                border: '2px solid #bbb',
                borderRadius: '8px',
                boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.7)',
                cursor: 'pointer'
            }}>Click Me!</button>
        </section>
    );
};

export default SkeuomorphicElements;
