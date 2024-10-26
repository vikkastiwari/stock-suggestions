import React from 'react';

interface NewsArticle {
  title: string;
  source: string;
  link: string;
}

const NewsFeed: React.FC = () => {
  // Example news data (replace with real data later)
  const newsArticles: NewsArticle[] = [
    { title: 'Apple hits all-time high', source: 'MarketWatch', link: '#' },
    { title: 'Microsoft announces new AI model', source: 'Forbes', link: '#' },
    { title: 'Amazon Q3 earnings exceed expectations', source: 'Yahoo Finance', link: '#' },
  ];

  return (
    <section className="mt-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Trending News</h2>
      <ul className="mt-4">
        {newsArticles.map((article, index) => (
          <li key={index} className="py-2 border-b last:border-none">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {article.title}
            </a>
            <p className="text-sm text-gray-500">Source: {article.source}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsFeed;
