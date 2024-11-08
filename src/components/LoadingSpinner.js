// src/components/LoadingSpinner.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the neon glow effect
const neonGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 5px #00e6e6) drop-shadow(0 0 10px #00e6e6);
  }
  50% {
    filter: drop-shadow(0 0 20px #00e6e6) drop-shadow(0 0 30px #00e6e6);
  }
`;

// Keyframes for the EKG line dash animation
const dash = keyframes`
  0% {
    stroke-dashoffset: 600;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

// Container for the loading spinner
const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1a1a1a;
  text-align: center;
`;

// Styled SVG for the EKG line animation
const EKGLineSVG = styled.svg`
  width: 300px;
  height: 120px;
  overflow: visible;
  animation: ${neonGlow} 3s infinite;
  path {
    fill: none;
    stroke: #00e6e6;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    animation: ${dash} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

// Loading text with neon glow effect
const LoadingText = styled.p`
  color: #00e6e6;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  margin-left: -80px;
  text-shadow: 0 0 5px #00e6e6, 0 0 10px #00e6e6;
  animation: ${neonGlow} 3s infinite alternate;
`;

// LoadingSpinner component
const LoadingSpinner = () => (
  <SpinnerContainer>
    <EKGLineSVG viewBox="0 0 300 120">
      <path d="M0,60 L50,60 L60,20 L80,60 L120,60 L140,100 L160,60 L200,60" />
    </EKGLineSVG>
    <LoadingText>Loading...</LoadingText>
  </SpinnerContainer>
);

export default LoadingSpinner;
