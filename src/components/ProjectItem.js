// src/components/ProjectItem.js
import React from 'react';

const ProjectItem = ({ project }) => {
    return (
        <div style={{
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'left'
        }}>
            <h3 style={{
                fontSize: '1.5rem',
                color: '#333',
                marginBottom: '0.5rem'
            }}>{project.title}</h3>
            <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '1rem'
            }}>{project.description}</p>
            <p style={{
                fontSize: '0.9rem',
                color: '#777',
                marginBottom: '1rem'
            }}>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.9rem',
                color: '#1e90ff',
                textDecoration: 'none'
            }}>
                View Project
            </a>
        </div>
    );
};

export default ProjectItem;
