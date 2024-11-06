import React, { useEffect, useState } from 'react';
import './SkillsSlideshow.css'; // Import the CSS for styling and animations

const SkillsSlideshow = () => {
    const skillsData = {
        'Technical Skills': [
            'Programming Languages: C++, Java, Python',
            'Web Development: HTML5, CSS, JavaScript, React.js, Node.js, Flask',
            'Data Science: Machine Learning, Natural Language Processing (NLP), Data Analysis',
            'Simulation and Modeling: Algorithms (Dijkstra’s, A*), Augmented Reality (AR), Computer Vision (CV)',
            'Blockchain and Cryptography: Quantum-Resilient Cryptography, Blockchain, Zero-Knowledge Proofs (ZKP)',
            'Energy Management: Predictive Analytics, Smart Home Technology, Internet of Things (IoT), Real-Time Data Processing',
            'AI and Machine Learning: Generative AI, Transformer Models, Vision Transformers (ViT), Generative Adversarial Networks (GANs)',
        ],
        'Tools and Technologies': [
            'Cloud Computing: AWS, Azure, GCP',
            'DevOps: Docker, Kubernetes, Git',
            'Databases: SQL, NoSQL (MongoDB)',
            'NLP Libraries: SpaCy, NLTK',
            'Data Preprocessing: TfidfVectorizer, MultiOutputClassifier',
        ],
        'Soft Skills': [
            'Analytical Thinking',
            'Communication',
            'Team Collaboration',
            'Problem Solving',
            'Time Management',
            'Adaptability',
            'Leadership'
        ]
    };

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const categories = Object.keys(skillsData);

    useEffect(() => {
        const totalSkills = categories.reduce((accum, category) => accum + skillsData[category].length, 0);
        
        const intervalId = setInterval(() => {
            if (currentSkillIndex < totalSkills - 1) {
                setCurrentSkillIndex(prev => prev + 1);
            } else {
                setCurrentSkillIndex(0); // Restart the slideshow
                setCurrentCategoryIndex(prev => (prev + 1) % categories.length); // Change category
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [currentSkillIndex]);

    const getCurrentSkill = () => {
        let cumulativeIndex = 0;
        for (const category of categories) {
            const items = skillsData[category];
            if (currentSkillIndex < cumulativeIndex + items.length) {
                return { skill: items[currentSkillIndex - cumulativeIndex], category };
            }
            cumulativeIndex += items.length;
        }
        return { skill: '', category: '' };
    };

    const { skill, category } = getCurrentSkill();

    return (
        <div className="slideshow-container">
            <h2 className="slideshow-title">Skills Showcase</h2>
            <div className="slideshow-content">
                <h3 className="category">{category}</h3>
                <p className="skill">{skill}</p>
            </div>
        </div>
    );
};

export default SkillsSlideshow;