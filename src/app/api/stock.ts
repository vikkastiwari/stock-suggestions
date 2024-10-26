// src/pages/api/stock.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchStockData } from '../../utils/stockApi';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { symbol } = req.query;

  if (typeof symbol !== 'string') {
    return res.status(400).json({ error: 'Stock symbol is required' });
  }

  try {
    const stockData = await fetchStockData(symbol);
    return res.status(200).json(stockData);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch stock data' });
  }
};

export default handler;
