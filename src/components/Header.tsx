"use client"
import { fetchStockNews } from '@/utils/newsApi';
import { analyzeSentiment } from '@/utils/sentimentAnalysis';
import { fetchStockData } from '@/utils/stockApi';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Top Stock Suggestions</h1>
        <div className="flex flex-col items-end">
          <input
            type="date"
            className="bg-white text-gray-700 px-4 py-2 rounded focus:outline-none focus:ring"
            aria-label="Select Date"
            value={currentDate} // Set the current date as the value
            disabled
          />
          <p className="mt-1 text-gray-300 text-sm">Stock Market Opens at: 9:30 AM EST</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
