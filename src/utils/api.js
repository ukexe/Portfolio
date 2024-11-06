// src/utils/api.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

export const fetchAIGeneratedImage = async (prompt) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/generate-image`, { prompt });
        return response.data.image_url;
    } catch (error) {
        console.error('Error fetching AI-generated image:', error);
        return null;
    }
};

export const fetchDynamicContent = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from endpoint ${endpoint}:`, error);
        return null;
    }
};

export default {
    fetchAIGeneratedImage,
    fetchDynamicContent
};
