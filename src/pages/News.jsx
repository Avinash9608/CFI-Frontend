import React, { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.BASE_URL}/api/news`);
        const data = await response.json();
        setNews(data.news || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        // Fallback to local data if API fails
        setNews([
          {
            _id: 1,
            title: "Village Development Project Commences",
            date: "October 26, 2023",
            description:
              "The much-awaited village development project has officially started, focusing on infrastructure improvements and community facilities.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBWFakaw9qc4NKrzBAVXOlpgsykTSGGh050BJxu-YUAETOAvp极3NhHLgiRV2d_JNM6bTKPMZ1bOeyxRGnA6DjmjTJo8wmx6BBeI54qMWGxRPat34PIYFlystys1ikF6m-wUffSCRm82H1Qym9l1qjsfvVS240Tz5-DhBT1vZVIcamvPlGSyX6FEzF0AYc93-DM3HNbXeSltCwmiVtbYC-MfwP3RO9FkeYT8gq9T3l3K-IQ8qFd8bvd9UDS7CmBzt8zr0t3WUsKJaW2w",
            isNew: true,
          },
          // ... other fallback items
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 font-sans">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-gray-100">
              News & Updates
            </h2>
            <p className="mt-4 text-slate-600 dark:text-gray-300">
              Stay informed about the latest happenings and initiatives in our
              village.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item) => (
              <div
                key={item._id}
                className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    alt={item.title}
                    src={item.image}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  {item.isNew && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-2">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {news.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400">No news items available</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default News;
