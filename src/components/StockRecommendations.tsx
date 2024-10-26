// src/components/StockRecommendations.tsx

import React, { useEffect, useState } from 'react';
import { getStockRecommendations } from '../utils/recommendationApi';

const StockRecommendations: React.FC<{ query: string }> = ({ query }) => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null); // Reset any previous error state

      try {
        const data = await getStockRecommendations(query);
        setRecommendations(data);
      } catch (err) {
        setError('Failed to fetch recommendations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [query]);

  if (loading) return <p>Loading recommendations...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="mt-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Top Stock Recommendations</h2>
      <ul className="mt-4">
        {recommendations.map((rec, index) => (
          <li key={index} className="flex justify-between items-center py-2 border-b last:border-none">
            <span className="font-medium text-gray-700">{rec.symbol}</span>
            <span className="text-blue-600 font-semibold">Combined Score: {rec.combinedScore.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StockRecommendations;
