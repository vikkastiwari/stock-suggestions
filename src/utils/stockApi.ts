// src/utils/stockApi.ts

import axios from 'axios';

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

const getLastAvailableDate = (): string => {
  const today = new Date();
  let day = today.getDay();
  console.log(day)
  // If today is Saturday (6), go back one day; if Sunday (0), go back two days to Friday
  if (day === 6) { // Saturday
    today.setDate(today.getDate() - 1);
  } else if (day === 0) { // Sunday
    today.setDate(today.getDate() - 2);
  }

  return today.toISOString().split('T')[0]; // Return date in 'YYYY-MM-DD' format
};

export const fetchStockData = async (symbol: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: API_KEY,
      },
    });

    const timeSeries = response.data['Time Series (Daily)'];
    console.log(timeSeries, response)
    // if (!timeSeries) {
    //   throw new Error('No time series data found');
    // }

    // Get the latest available date (today or the most recent weekday if today is a weekend)
    // let latestDate = getLastAvailableDate();
    // let latestData = timeSeries[latestDate];

    // if (!latestData) {
    //   throw new Error(`No data available for the latest date (${latestDate})`);
    // }

    let latestDate = "26/10/24"
    let latestData = {
      open:"598",
      high:"600",
      low:"580",
      close:"582",
      predictedScore: "0.90",
      volume:"836356",
    }
    console.log(latestData)

    return { date: latestDate, data: latestData }; // Return data for the latest available date
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};


// src/utils/stockApi.ts

// import axios from 'axios';

// const API_KEY = process.env.NEXT_PUBLIC_POLYGON_API_KEY; // Set the Polygon API key in your environment variables
// const BASE_URL = 'https://api.polygon.io/v1/open-close';

// const getLastAvailableDate = (): string => {
//   const today = new Date();
//   let day = today.getDay();

//   // Adjust date to get the last trading day if today is a weekend
//   if (day === 6) { // Saturday
//     today.setDate(today.getDate() - 1);
//   } else if (day === 0) { // Sunday
//     today.setDate(today.getDate() - 2);
//   }

//   return today.toISOString().split('T')[0]; // Return date in 'YYYY-MM-DD' format
// };

// export const fetchStockData = async (symbol: string) => {
//   try {
//     const latestDate = getLastAvailableDate();
//     const response = await axios.get(`${BASE_URL}/${symbol}/${latestDate}`, {
//       params: {
//         apiKey: API_KEY,
//       },
//     });

//     const stockData = response.data;
//     console.log(stockData,"stockData")
//     if (!stockData || stockData.status !== 'OK') {
//       throw new Error(`No data available for the latest date (${latestDate})`);
//     }

//     return {
//       date: latestDate,
//       data: {
//         open: stockData.open,
//         close: stockData.close,
//         high: stockData.high,
//         low: stockData.low,
//         volume: stockData.volume,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching stock data:', error);
//     throw error;
//   }
// };
