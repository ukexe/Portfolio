// src/components/MicroInteractions.js
import React, { useState, useEffect } from 'react';

const SnakeGame = () => {
    const [snake, setSnake] = useState([[0, 0]]);
    const [food, setFood] = useState([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
    const [direction, setDirection] = useState([0, 1]); // Start moving right
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gridSize] = useState(10); // 10x10 grid

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction[0] !== 1) setDirection([-1, 0]);
                    break;
                case 'ArrowDown':
                    if (direction[0] !== -1) setDirection([1, 0]);
                    break;
                case 'ArrowLeft':
                    if (direction[1] !== 1) setDirection([0, -1]);
                    break;
                case 'ArrowRight':
                    if (direction[1] !== -1) setDirection([0, 1]);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [direction]);

    useEffect(() => {
        const interval = setInterval(() => {
            moveSnake();
        }, 200);

        return () => clearInterval(interval);
    }, [snake, direction]);

    const moveSnake = () => {
        const newSnake = [...snake];
        const head = newSnake[0];
        const newHead = [head[0] + direction[0], head[1] + direction[1]];

        // Check for wall collisions
        if (newHead[0] < 0 || newHead[0] >= gridSize || newHead[1] < 0 || newHead[1] >= gridSize || 
            newSnake.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])) {
            setGameOver(true);
            return;
        }

        // Check for food collision
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
            newSnake.unshift(newHead);
            setFood([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
            setScore(prevScore => prevScore + 1);
        } else {
            newSnake.unshift(newHead);
            newSnake.pop(); // Remove last segment
        }

        setSnake(newSnake);
    };

    const restartGame = () => {
        setSnake([[0, 0]]);
        setFood([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
        setDirection([0, 1]); // Reset direction to right
        setGameOver(false);
        setScore(0);
    };

    return (
        <section style={styles.container}>
            <h2 style={styles.title}>Snake Game</h2>
            <p style={styles.score}>Score: {score}</p>
            {gameOver ? (
                <>
                    <p style={styles.gameOver}>Game Over!</p>
                    <button style={styles.restartButton} onClick={restartGame}>Restart Game</button>
                </>
            ) : (
                <div style={styles.grid}>
                    {Array.from({ length: gridSize }).map((_, rowIndex) =>
                        <div key={rowIndex} style={styles.row}>
                            {Array.from({ length: gridSize }).map((_, colIndex) => {
                                const isSnakeSegment = snake.some(segment => segment[0] === rowIndex && segment[1] === colIndex);
                                const isFood = food[0] === rowIndex && food[1] === colIndex;
                                return (
                                    <div key={`${rowIndex}-${colIndex}`} style={{
                                        ...styles.cell,
                                        backgroundColor: isSnakeSegment ? '#00ffcc' : isFood ? '#ff007f' : '#333',
                                    }} />
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

const styles = {
    container: {
        padding: '1rem',
        textAlign: 'center',
        height: '80vh', // Reduced height for better fit
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '2rem',
        color: '#00ffcc',
    },
    score: {
        fontSize: '1.5rem',
        color: '#fff',
    },
    gameOver: {
        fontSize: '2rem',
        color: '#ff007f',
    },
    restartButton: {
        padding: '1rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#00ffcc',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
    },
    grid: {
        display: 'inline-grid',
        gridTemplateColumns: `repeat(${10}, 20px)`, // Adjusted for a smaller layout
    },
    row: {
        display: 'flex',
    },
    cell: {
        width: '20px', // Each cell's width
        height: '20px', // Each cell's height
    }
};

export default SnakeGame;