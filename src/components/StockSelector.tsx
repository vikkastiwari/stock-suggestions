// src/components/StockSelector.tsx

import React from 'react';
import { predefinedStocks } from '../utils/stockConfig';

interface StockSelectorProps {
  onSelect: (symbol: string, query: string) => void;
}

const StockSelector: React.FC<StockSelectorProps> = ({ onSelect }) => {
  // Sort stocks by score in descending order
  const sortedStocks = [...predefinedStocks].sort((a, b) => (b.score || 0) - (a.score || 0));

  return (
    <div className="my-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Choose a Stock for More Info</h2>
      <div className="grid grid-cols-2 gap-4">
        {sortedStocks.map((stock: any) => (
          <button
            key={stock.symbol}
            onClick={() => onSelect(stock.symbol, stock.query)}
            className="w-full py-3 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 transition duration-200 flex flex-col items-center"
          >
            <span className="font-bold">{stock.name}</span>
            {stock.score && <span className="text-gray-600">Score: {stock.score}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockSelector;
