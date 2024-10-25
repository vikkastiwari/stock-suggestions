import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Top Stock Suggestions</title>
      </Head>
      <div className="text-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Top Stock Suggestions</h1>
        <p className="mt-4 text-gray-600">Get daily stock recommendations based on recent news and trends.</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Discover Today’s Top Picks
        </button>
      </div>
    </div>
  );
}
