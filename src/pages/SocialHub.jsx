import { useState, useEffect } from "react";

const SocialHub = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from the backend
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const endpoint =
        activeTab === "all"
          ? `${process.env.BASE_URL}/api/social-posts`
          : `${process.env.BASE_URL}/api/social-posts/platform/${activeTab}`;

      const response = await fetch(endpoint);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [activeTab]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="bg-secondary-50 text-gray-900 dark:text-white dark:bg-secondary-950 dark:text-secondary-50 min-h-screen"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Main Content */}
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="max-w-5xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white dark:text-secondary-50">
                  Social Media Hub
                </h1>
                <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                  Stay connected with our community. Follow us on social media
                  for the latest updates, news, and events.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white dark:text-secondary-50 mb-6 text-center">
                  Our Official Accounts
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    className="flex items-center gap-3 py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    href="#"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.494v-9.294H9.688v-3.621h3.129V8.41c0-3.1 1.894-4.785 4.660-4.785 1.336 0 2.49.1 2.824.143v3.24h-1.92c-1.5 0-1.793.714-1.793 1.762v2.31h3.584l-.465 3.621H16.5v9.294h4.852c.73 0 1.323-.593 1.323-1.324V1.324C24 .593 23.407 0 22.676 0Z"></path>
                    </svg>
                    <span>Follow on Facebook</span>
                  </a>
                  <a
                    className="flex items-center gap-3 py-3 px-6 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    href="#"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.170-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.213 0-.425-.015-.636.961-.69 1.799-1.377 2.491-2.261Z"></path>
                    </svg>
                    <span>Follow on Twitter</span>
                  </a>
                  <a
                    className="flex items-center gap-3 py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    href="#"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm4.965-10.405a1.44 1.44 0 1 1 2.88 0 1.44 1.44 0 0 1-2.88 0Z"></path>
                    </svg>
                    <span>Follow on Instagram</span>
                  </a>
                </div>
              </div>

              {/* Content Tabs */}
              <div>
                <div className="flex border-b border-secondary-200 dark:border-secondary-800 justify-center mb-8">
                  <button
                    className={`px-4 py-3 text-base font-semibold border-b-2 ${
                      activeTab === "all"
                        ? "border-primary-500 text-primary-500"
                        : "border-transparent text-secondary-500 hover:text-primary-500 hover:border-primary-500"
                    } transition-colors`}
                    onClick={() => setActiveTab("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-4 py-3 text-base font-semibold border-b-2 ${
                      activeTab === "facebook"
                        ? "border-primary-500 text-primary-500"
                        : "border-transparent text-secondary-500 hover:text-primary-500 hover:border-primary-500"
                    } transition-colors`}
                    onClick={() => setActiveTab("facebook")}
                  >
                    Facebook
                  </button>
                  <button
                    className={`px-4 py-3 text-base font-semibold border-b-2 ${
                      activeTab === "twitter"
                        ? "border-primary-500 text-primary-500"
                        : "border-transparent text-secondary-500 hover:text-primary-500 hover:border-primary-500"
                    } transition-colors`}
                    onClick={() => setActiveTab("twitter")}
                  >
                    Twitter
                  </button>
                  <button
                    className={`px-4 py-3 text-base font-semibold border-b-2 ${
                      activeTab === "instagram"
                        ? "border-primary-500 text-primary-500"
                        : "border-transparent text-secondary-500 hover:text-primary-500 hover:border-primary-500"
                    } transition-colors`}
                    onClick={() => setActiveTab("instagram")}
                  >
                    Instagram
                  </button>
                </div>

                {/* Social Media Posts Grid */}
                {posts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-secondary-500 dark:text-secondary-400">
                      No posts found for this platform.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <div
                        key={post._id}
                        className="bg-secondary-100 dark:bg-secondary-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                      >
                        <img
                          alt={post.title}
                          className="w-full h-48 object-cover"
                          src={post.imageUrl}
                        />
                        <div className="p-6">
                          <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-1 capitalize">
                            {post.platform}
                          </p>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white dark:text-secondary-50">
                            {post.title}
                          </h3>
                          <p className="text-secondary-600 dark:text-secondary-300">
                            {post.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Analytics Section */}
              <div className="mt-16 pt-12 border-t border-secondary-200 dark:border-secondary-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white dark:text-secondary-50 mb-6 text-center">
                  Engagement Analytics
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Engagement Card */}
                  <div className="bg-secondary-100 dark:bg-secondary-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white dark:text-secondary-50">
                      Social Media Engagement
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white dark:text-secondary-50">
                      {posts.reduce(
                        (acc, post) =>
                          acc + (post.content.length > 100 ? 3 : 1),
                        0
                      )}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">
                        Last 30 Days
                      </p>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        +15%
                      </p>
                    </div>
                    <div className="h-48 mt-4">
                      <div className="grid h-full grid-flow-col gap-4 items-end justify-items-center px-3">
                        <div
                          className="bg-primary-300 dark:bg-primary-700 w-full rounded-t-md"
                          style={{ height: "90%" }}
                        ></div>
                        <div
                          className="bg-primary-300 dark:bg-primary-700 w-full rounded-t-md"
                          style={{ height: "50%" }}
                        ></div>
                        <div
                          className="bg-primary-300 dark:bg-primary-700 w-full rounded-t-md"
                          style={{ height: "70%" }}
                        ></div>
                        <div
                          className="bg-primary-300 dark:bg-primary-700 w-full rounded-t-md"
                          style={{ height: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Follower Growth Card */}
                  <div className="bg-secondary-100 dark:bg-secondary-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white dark:text-secondary-50">
                      Follower Growth
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white dark:text-secondary-50">
                      {posts.length * 142}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">
                        Last 30 Days
                      </p>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        +8%
                      </p>
                    </div>
                    <div className="h-48 mt-4">
                      <svg
                        fill="none"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 472 150"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z"
                          fill="url(#paint0_linear_1)"
                        ></path>
                        <path
                          d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                          stroke="var(--primary-500)"
                          strokeLinecap="round"
                          strokeWidth="3"
                        ></path>
                        <defs>
                          <linearGradient
                            gradientUnits="userSpaceOnUse"
                            id="paint0_linear_1"
                            x1="236"
                            x2="236"
                            y1="1"
                            y2="149"
                          >
                            <stop
                              stopColor="var(--primary-400)"
                              stopOpacity="0.4"
                            ></stop>
                            <stop
                              offset="1"
                              stopColor="var(--primary-500)"
                              stopOpacity="0"
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;
