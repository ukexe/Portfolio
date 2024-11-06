// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import BackgroundWrapper from './components/BackgroundWrapper';
import LoadingSpinner from './components/LoadingSpinner';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 2 seconds
        const timer = setTimeout(() => setLoading(false), 2000);
        gsap.from('.app-container', { opacity: 0, y: 20, duration: 1.5, ease: 'power3.out', delay: 0.5 });

        ScrollTrigger.create({
            trigger: '.app-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        });

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <BackgroundWrapper>
                {loading ? <LoadingSpinner /> : (
                    <div className="app-container">
                        <Header />
                        <main className="app-content">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/projects" element={<ProjectsPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                )}
            </BackgroundWrapper>
        </Router>
    );
};

export default App;
