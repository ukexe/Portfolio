// src/components/LoadingSpinner.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Full height of the viewport */
    background-color: #f4f4f9; /* Background color while loading */
    color: #333; /* Text color */
`;

const Spinner = styled.div`
    border: 8px solid #ddd; /* Light grey */
    border-top: 8px solid #1e90ff; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite; /* Animation */
`;

const LoadingSpinner = () => {
    return (
        <SpinnerContainer>
            <Spinner />
            <p>Loading...</p>
        </SpinnerContainer>
    );
};

export default LoadingSpinner;
