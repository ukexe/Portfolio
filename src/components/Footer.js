// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1.5rem 0',
            backgroundColor: '#282c34',
            color: 'white',
            fontSize: '0.9rem',
            position: 'relative',
        }}>
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '0.5rem'
            }}>
                <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        color: 'white', 
                        textDecoration: 'none', 
                        transition: 'color 0.3s' 
                    }}
                    onMouseOver={(e) => e.target.style.color = '#ffd700'} // Hover effect
                    onMouseOut={(e) => e.target.style.color = 'white'}
                >
                    GitHub
                </a>
                <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        color: 'white', 
                        textDecoration: 'none', 
                        transition: 'color 0.3s' 
                    }}
                    onMouseOver={(e) => e.target.style.color = '#ffd700'} // Hover effect
                    onMouseOut={(e) => e.target.style.color = 'white'}
                >
                    LinkedIn
                </a>
                <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        color: 'white', 
                        textDecoration: 'none', 
                        transition: 'color 0.3s' 
                    }}
                    onMouseOver={(e) => e.target.style.color = '#ffd700'} // Hover effect
                    onMouseOut={(e) => e.target.style.color = 'white'}
                >
                    Twitter
                </a>
            </div>
            <div style={{ opacity: 0.8 }}>
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;