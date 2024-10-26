// src/app/api/getRecommendations/route.ts

import { NextResponse } from 'next/server';
import { analyzeSentiment } from '../../../utils/sentimentAnalysis'; // Ensure this path is correct
import { fetchStockData } from '../../../utils/stockApi'; // Ensure this path is correct

export async function POST(req: Request) {
  try {
    const { query } = await req.json(); // Expecting a JSON body with a "query" property
    const sentimentScore = await analyzeSentiment(query); // Replace with your sentiment analysis function
    const stockData = await fetchStockData(query); // Fetch stock data based on the query

    // const recommendations = stockData.map((stock: { symbol: any; score:any }) => ({
    //   symbol: stock.symbol,
    //   combinedScore: stock.score + sentimentScore, // Combine scores based on your logic
    // }));

    // Sort recommendations by score in descending order
    // recommendations.sort((a:any, b:any) => b.combinedScore - a.combinedScore);

    // Return the top 5 recommendations
    // return NextResponse.json(recommendations.slice(0, 5));
  } catch (error) {
    console.error('Error fetching stock recommendations:', error);
    return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 });
  }
}
