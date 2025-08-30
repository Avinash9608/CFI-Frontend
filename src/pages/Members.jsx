import { useState, useEffect } from "react";

const Members = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isDarkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDarkMode]);

  // Fetch members from the backend
  const fetchMembers = async () => {
    try {
      setLoading(true);
      const url = `${process.env.BASE_URL}/api/members${
        searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""
      }`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }

      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
      setError("Failed to load members. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [searchQuery]);

  const handleContact = (member) => {
    alert(
      `Contacting ${member.name}\nPhone: ${member.phone}\nEmail: ${member.email}`
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl">Loading members...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-2">Panchayat Members</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Meet our dedicated village leaders
          </p>
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search members by name or designation"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
            />
          </div>
        </header>

        {members.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No members found. {searchQuery && "Try a different search term."}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {members.map((member) => (
              <div
                key={member._id}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden shadow-md border-4 border-primary-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {member.isSarpanch && (
                    <span className="absolute bottom-2 right-2 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      Sarpanch
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold mb-1">{member.name}</h2>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-wide mb-3">
                  {member.designation}
                </p>

                <div className="space-y-2 text-left w-full">
                  {member.phone && (
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.15 12.15 0 001.46 4.28 2 2 0 01-.45 2.11L9 11a16 16 0 006 6l1-1a2 2 0 012.11-.45 12.15 12.15 0 004.28 1.46A2 2 0 0122 16.92z"></path>
                      </svg>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sm underline hover:text-primary-700 dark:hover:text-primary-300"
                      >
                        {member.phone}
                      </a>
                    </div>
                  )}
                  {member.email && (
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v16H4z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm underline hover:text-primary-700 dark:hover:text-primary-300"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}

                  {member.social && (
                    <div className="flex space-x-4 mt-3 justify-center">
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition"
                          aria-label="Facebook"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.21c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.05 22 12.07z" />
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600 transition"
                          aria-label="Twitter"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 001.87-2.34 8.48 8.48 0 01-2.7 1.04 4.24 4.24 0 00-7.17 3.86A12.06 12.06 0 013 5.15a4.22 4.22 0 001.32 5.66 4.27 4.27 0 01-1.92-.53v.05a4.25 4.25 0 003.4 4.17 4.29 4.29 0 01-1.91.07 4.25 4.25 0 003.96 2.95A8.5 8.5 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.35-.02-.53A8.35 8.35 0 0022.46 6z" />
                          </svg>
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 transition"
                          aria-label="LinkedIn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2h-14a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 17V10.75H6V17h2.5zm-1.25-7.22a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88zM18 17v-3.75a1.88 1.88 0 00-3.75 0V17h-2.5V10.75h2.5v.81a3.78 3.78 0 013-1.63 3.75 3.75 0 013.75 3.75V17H18z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleContact(member)}
                  className="mt-6 w-full bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-white font-semibold py-2 rounded-lg shadow-md transition"
                >
                  Contact
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
