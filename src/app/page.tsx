// src/pages/index.tsx

"use client";
import React, { useState } from 'react';
import StockSelector from '../components/StockSelector';
import { fetchStockData } from '../utils/stockApi';
import { fetchStockNews } from '../utils/newsApi';

const StockDashboard: React.FC = () => {
  const [stockData, setStockData] = useState<any>(null);
  const [newsArticles, setNewsArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showStockDetails, setShowStockDetails] = useState(false);

  const handleStockSelection = async (symbol: string, query: string) => {
    setLoading(true);
    setShowStockDetails(true); 
    try {
      const [data, news] = await Promise.all([
        fetchStockData(symbol),
        fetchStockNews(query),
      ]);
      setStockData(data as any);
      setNewsArticles(news);
    } catch (error) {
      console.error('Error fetching stock data or news:', error);
    }
    setLoading(false);
  };

  const handleBackButtonClick = () => {
    setShowStockDetails(false);
    setStockData(null);
    setNewsArticles(null);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Top Stocks To Analyse - Picked for You!</h1>

      {!showStockDetails ? (
        <StockSelector onSelect={handleStockSelection} />
      ) : (
        <button
          onClick={handleBackButtonClick}
          className="text-blue-600 font-medium hover:underline mb-4"
        >
          &larr; Back to Stock List
        </button>
      )}

      {loading ? (
        <p className="text-blue-600 font-medium">Loading...</p>
      ) : (
        showStockDetails && (
          <>
            {stockData && (
              <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Stock Data</h2>
                <p className="text-gray-800">Date: {stockData.date}</p>
                <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
                  {Object.entries(stockData.data).map(([key, value], index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-semibold capitalize">{key.replace(/_/g, ' ')}:</span>
                      <span>{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {newsArticles && (
              <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Latest News</h2>
                <ul className="space-y-2 list-disc list-inside">
                  {(newsArticles as any).map((article: any, index: number) => (
                    <li key={index}>
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default StockDashboard;
