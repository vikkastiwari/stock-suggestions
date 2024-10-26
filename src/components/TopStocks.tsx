import React from 'react';

interface Stock {
  name: string;
  symbol: string;
  score: string;
  roce: string; 
  peRatio: string; 
}

const TopStocks: React.FC = () => {
  const stocks: Stock[] = [
    { name: 'Apple', symbol: 'AAPL', score: '8.5', roce: '15%', peRatio: '28' },
    { name: 'Microsoft', symbol: 'MSFT', score: '8.3', roce: '17%', peRatio: '32' },
    { name: 'Amazon', symbol: 'AMZN', score: '8.2', roce: '10%', peRatio: '75' },
    { name: 'Tesla', symbol: 'TSLA', score: '8.1', roce: '12%', peRatio: '62' },
    { name: 'Google', symbol: 'GOOGL', score: '7.9', roce: '18%', peRatio: '25' },
  ];

  return (
    <section className="mt-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Top 5 Stock Recommendations</h2>
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-4 font-bold border-b pb-2">
          <span className="text-gray-700">Stock</span>
          <span className="text-gray-700">Score</span>
          <span className="text-gray-700">ROCE</span>
          <span className="text-gray-700">P/E</span>
        </div>
        {stocks.map((stock, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 py-2 border-b last:border-none">
            <span className="text-gray-700">
              {stock.name} ({stock.symbol})
            </span>
            <span className="text-blue-600 font-semibold">{stock.score}</span>
            <span className="text-gray-600">{stock.roce}</span>
            <span className="text-gray-600">{stock.peRatio}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopStocks;
