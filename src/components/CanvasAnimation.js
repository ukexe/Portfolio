// src/components/CanvasAnimation.js
import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
    const canvasRef = useRef(null);

    const draw = (ctx, width, height) => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 30, 0, Math.PI * 2, true);
        ctx.fill();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        const animate = () => {
            draw(ctx, width, height);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            // Cleanup on unmount
            cancelAnimationFrame(animate);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        />
    );
};

export default CanvasAnimation;
