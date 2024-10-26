// next.config.js
import type { NextConfig } from "next";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const nextConfig: NextConfig = {
  env: {
    ALPHA_VANTAGE_API_KEY: process.env.ALPHA_VANTAGE_API_KEY,
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
};

export default nextConfig;
