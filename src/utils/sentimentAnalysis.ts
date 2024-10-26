// src/utils/sentimentAnalysis.ts

import axios from 'axios';

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY; 
const GEMINI_API_URL = 'https://api.gemini.com/sentiment'; 
const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "YOUR API KEY";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const promptString = "Tell me whether the following sentence's sentiment is positive or negative or something in between.\nSentence I would love to walk along the beach.\nSentiment Somewhat positive\nSentence I love my new record player\nSentiment Positive\nSentence I really hate it when my brother steals my things\nSentiment Negative\nSentence I really don't know how to feel about Pokemon\nSentiment";

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
