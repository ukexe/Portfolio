// src/utils/helpers.js

// Debounce function to limit API calls during fast events like scrolling or resizing
export const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

// Capitalize each word in a string (useful for formatting text on the website)
export const capitalizeWords = (string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Function to format dates in a user-friendly way
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// Utility to generate a random color (for elements requiring unique colors, e.g., skill badges)
export const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default {
    debounce,
    capitalizeWords,
    formatDate,
    generateRandomColor
};
