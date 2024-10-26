// src/utils/newsApi.ts

import axios from 'axios';

const NEWS_API_KEY = process.env.NEWS_API_KEY; // Store your API key in an .env file
const NEWS_BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchStockNews = async (query: string) => {
  console.log(NEWS_API_KEY)
  try {
    const response = await axios.get(NEWS_BASE_URL, {
      params: {
        q: query,
        from: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(),
        sortBy: 'publishedAt',
        apiKey: NEWS_API_KEY,
      },
    });
    console.log(response,"stock news")
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
