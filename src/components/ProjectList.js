// src/components/ProjectList.js
import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
    {
        id: 1,
        title: 'AI-Based Atmospheric Model',
        description: 'Developed an atmospheric model that integrates real-time satellite and ground data for tracking and predicting pollutant dispersion.',
        technologies: ['Python', 'Machine Learning', 'Satellite Data'],
        link: '#',
    },
    {
        id: 2,
        title: 'Multi-Modal Gunshot Detection System',
        description: 'Created an advanced gunshot detection system using AI technologies, recognized at the Smart India Hackathon.',
        technologies: ['AI', 'Audio Processing', 'Python'],
        link: '#',
    },
    {
        id: 3,
        title: 'Data Science Projects',
        description: 'Completed hands-on projects involving machine learning models such as TfidfVectorizer and MultiOutputClassifier in a professional setting.',
        technologies: ['Machine Learning', 'NLP', 'Data Analysis'],
        link: '#',
    },
    {
        id: 4,
        title: 'Cognitive Function Simulation',
        description: 'Led a research project mimicking cognitive functions using neural networks for adaptive AI models at Saveetha Medical College.',
        technologies: ['Neural Networks', 'Research', 'Python'],
        link: '#',
    },
];

const ProjectList = () => {
    return (
        <section id="projects" style={styles.projectList}>
            <h2 style={styles.projectListTitle}>My Projects</h2>
            <div style={styles.projectGrid}>
                {projects.map((project) => (
                    <div key={project.id} style={styles.projectItem}>
                        <h3 style={styles.projectItemTitle}>{project.title}</h3>
                        <p style={styles.projectItemDescription}>{project.description}</p>
                        <div style={styles.projectItemTechnologies}>
                            {project.technologies.map((tech, index) => (
                                <span key={index} style={styles.projectItemTechnology}>{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} style={styles.projectItemLink}>
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

const styles = {
    projectList: {
        padding: '3rem 0',
        background: 'linear-gradient(135deg, #0d0d0d, #1c1c1e)',
        color: '#e0e0e3',
        textAlign: 'center',
        overflow: 'hidden',
    },
    projectListTitle: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: '#f5f5fa',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        animation: 'fadeIn 1s ease-in-out',
    },
    projectGrid: {
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        padding: '0 1.5rem',
        perspective: '1000px',
        animation: 'fadeInUp 1.5s ease-in-out',
    },
    projectItem: {
        background: 'rgba(34, 34, 40, 0.85)',
        borderRadius: '15px',
        padding: '1.5rem',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
        transform: 'rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.5s ease, box-shadow 0.5s ease',
    },
    projectItemTitle: {
        fontSize: '1.5rem',
        color: '#ffffff',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #6c63ff, #9a74f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    projectItemDescription: {
        color: '#ccccd1',
        marginBottom: '1rem',
    },
    projectItemTechnologies: {
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginTop: '0.5rem',
    },
    projectItemTechnology: {
        padding: '0.3rem 0.8rem',
        backgroundColor: 'rgba(108, 99, 255, 0.1)',
        color: '#6c63ff',
        borderRadius: '8px',
        fontSize: '0.85rem',
        transition: 'background-color 0.3s ease',
    },
    projectItemLink: {
        display: 'inline-block',
        marginTop: '1rem',
        color: '#6c63ff',
        fontWeight: 'bold',
        transition: 'color 0.3s ease, transform 0.3s ease',
        position: 'relative',
    },
};

// Additional CSS animations injected as inline styles
const animationStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .projectItem:hover {
        transform: rotateX(10deg) rotateY(-10deg) scale(1.05);
        box-shadow: 0px 8px 25px rgba(100, 100, 255, 0.5);
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default ProjectList;
