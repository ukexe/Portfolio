// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#282c34',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative'
        }}>
            <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold'
            }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>MyPortfolio</Link>
            </div>
            
            <button 
                onClick={toggleMenu} 
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'none' // Hide by default, show on mobile
                }}
                aria-label="Toggle Navigation"
            >
                ☰
            </button>

            <nav style={{ display: isOpen ? 'block' : 'flex', flexDirection: isOpen ? 'column' : 'row' }}>
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '1.5rem',
                    margin: 0,
                    padding: 0,
                }}>
                    <li><Link to="/" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffd700'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</Link></li>
                    <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffd700'} onMouseOut={(e) => e.target.style.color = 'white'}>About Me</Link></li>
                    <li><Link to="/projects" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffd700'} onMouseOut={(e) => e.target.style.color = 'white'}>Projects</Link></li>
                    <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#ffd700'} onMouseOut={(e) => e.target.style.color = 'white'}>Contact</Link></li>
                </ul>
            </nav>

            {/* Responsive styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    nav {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        background-color: #282c34;
                        width: 100%;
                        display: ${isOpen ? "block" : "none"};
                        z-index: 10;
                    }
                    button {
                        display: block; // Show hamburger menu on mobile
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;