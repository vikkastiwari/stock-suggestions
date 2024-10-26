// src/utils/sentimentAnalysis.ts

import axios from 'axios';

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY; 
const GEMINI_API_URL = 'https://api.gemini.com/sentiment'; 
const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

export const analyzeSentiment = async (articles: string[]) => {
  const results = await Promise.all(
    articles.map(async (article) => {
      try {
        const response = await axios.post(
          GEMINI_API_URL,
          { text: article },
          {
            headers: {
              'Authorization': `Bearer ${GEMINI_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const sentimentScore = response.data.score;
        return { article, sentimentScore }; // Keep it as is
      } catch (error) {
        console.error('Error fetching sentiment:', error);
        return { article, sentimentScore: 0 }; // Return 0 or any default value on error
      }
    })
  );

  return results;
};
