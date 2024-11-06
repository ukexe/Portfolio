// src/components/StyledButton.js
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #1e90ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #1c86e5; /* Darker shade on hover */
        transform: scale(1.05); /* Slightly enlarge on hover */
    }

    &:active {
        background-color: #1a74b7; /* Even darker shade when active */
    }
`;

const StyledButton = ({ label, onClick }) => {
    return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
};

export default StyledButton;
