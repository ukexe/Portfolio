// src/components/InteractiveStory.js
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const InteractiveStory = () => {
    const [storyPart, setStoryPart] = useState(1);

    useEffect(() => {
        // Animation for the story part transition
        gsap.fromTo(".storyPart", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
    }, [storyPart]);

    const handleButtonClick = (nextPart) => {
        gsap.to(".storyPart", { opacity: 0, y: -20, duration: 0.5, onComplete: () => setStoryPart(nextPart) });
    };

    const renderStory = () => {
        switch (storyPart) {
            case 1:
                return (
                    <div className="storyPart" style={styles.storyContent}>
                        <h2 style={styles.storyTitle}>Part 1: The Adventure Begins</h2>
                        <p>You find yourself in a mysterious forest. Do you:</p>
                        <button style={styles.button} onClick={() => handleButtonClick(2)}>Follow the path to the right</button>
                        <button style={styles.button} onClick={() => handleButtonClick(3)}>Explore the dark cave</button>
                    </div>
                );
            case 2:
                return (
                    <div className="storyPart" style={styles.storyContent}>
                        <h2 style={styles.storyTitle}>Part 2: The Path</h2>
                        <p>You follow the path and discover a hidden waterfall. It's beautiful! What do you do next?</p>
                        <button style={styles.button} onClick={() => handleButtonClick(4)}>Take a swim</button>
                        <button style={styles.button} onClick={() => handleButtonClick(5)}>Head back to the forest</button>
                    </div>
                );
            case 3:
                return (
                    <div className="storyPart" style={styles.storyContent}>
                        <h2 style={styles.storyTitle}>Part 3: The Cave</h2>
                        <p>You enter the cave and find ancient drawings on the walls. Suddenly, you hear a noise!</p>
                        <button style={styles.button} onClick={() => handleButtonClick(6)}>Investigate the noise</button>
                        <button style={styles.button} onClick={() => handleButtonClick(5)}>Exit the cave</button>
                    </div>
                );
            case 4:
                return (
                    <div className="storyPart" style={styles.storyContent}>
                        <h2 style={styles.storyTitle}>Part 4: The Swim</h2>
                        <p>You swim in the cool water and feel refreshed. A mystical creature appears!</p>
                        <button style={styles.button} onClick={() => handleButtonClick(7)}>Talk to the creature</button>
                        <button style={styles.button} onClick={() => handleButtonClick(8)}>Swim away</button>
                    </div>
                );
            case 5:
                return <h2 className="storyPart" style={styles.finalMessage}>You've chosen to leave the adventure for now!</h2>;
            case 6:
                return <h2 className="storyPart" style={styles.finalMessage}>You bravely face the unknown. The adventure continues!</h2>;
            case 7:
                return <h2 className="storyPart" style={styles.finalMessage}>The creature shares its wisdom with you!</h2>;
            case 8:
                return <h2 className="storyPart" style={styles.finalMessage}>You swim back to safety!</h2>;
            default:
                return null;
        }
    };

    const styles = {
        storyContainer: {
            padding: '2rem',
            backgroundColor: '#f4f4f9',
            borderRadius: '8px',
            textAlign: 'center'
        },
        storyContent: {
            marginBottom: '1.5rem',
            textAlign: 'center'
        },
        storyTitle: {
            fontSize: '1.8rem',
            color: '#333'
        },
        finalMessage: {
            textAlign: 'center',
            color: '#333',
            fontSize: '1.5rem',
            marginTop: '1.5rem'
        },
        button: {
            padding: '0.5rem 1rem',
            margin: '0.5rem',
            fontSize: '1rem',
            backgroundColor: '#ddd',
            border: '1px solid #bbb',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'transform 0.1s, background-color 0.3s',
        }
    };

    return (
        <div style={styles.storyContainer}>
            {renderStory()}
        </div>
    );
};

export default InteractiveStory;
