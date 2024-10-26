// src/utils/recommendationApi.ts

import axios from 'axios';

export const getStockRecommendations = async (query: string) => {
  try {
    const response = await axios.post('/api/getRecommendations', { query });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock recommendations:', error);
    throw error;
  }
};
