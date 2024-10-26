// src/scheduler/dailyDataFetch.ts

import cron from 'node-cron';
import { fetchStockData } from '../utils/stockApi';
import { fetchStockNews } from '../utils/newsApi';

// Schedule a task to run every day at midnight
cron.schedule('0 0 * * *', async () => {
  const stocks = ['AAPL', 'MSFT', 'GOOGL']; // List of stock symbols

  for (const stock of stocks) {
    try {
      const stockData = await fetchStockData(stock);
      console.log(`Fetched data for ${stock}:`, stockData);
      
      const newsArticles = await fetchStockNews(stock);
      console.log(`Fetched news for ${stock}:`, newsArticles);
      
      // Here you can store the fetched data in a database or file as needed
    } catch (error) {
      console.error(`Error fetching data for ${stock}:`, error);
    }
  }
});

console.log('Daily data fetch scheduled at midnight.');
