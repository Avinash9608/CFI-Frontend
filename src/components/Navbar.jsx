import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarItems, setNavbarItems] = useState([]);
  const [navbarConfig, setNavbarConfig] = useState({
    logoLight:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLDXSOzrGD7xytQ8X4RKclxexFtdJV9EViA&s",
    logoDark:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLDXSOzrGD7xytQ8X4RKclxexFtdJV9EViA&s",
    headerTitle: "Gram Panchayat",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    if (saved) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    fetchNavbarData();
  }, []);

  const fetchNavbarData = async () => {
    try {
      // Fetch navbar items
      const itemsResponse = await fetch(
        `${process.env.BASE_URL}/api/navbar/items`
      );
      const itemsData = await itemsResponse.json();
      setNavbarItems(itemsData);

      // Fetch navbar config
      const configResponse = await fetch(
        `${process.env.BASE_URL}/api/navbar/config`
      );
      const configData = await configResponse.json();
      setNavbarConfig(configData);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching navbar data:", error);
      // Fallback to default items if API fails
      setNavbarItems([
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "News", path: "/news" },
        { title: "Members", path: "/members" },
        { title: "Contact", path: "/contact" },
        { title: "SocialHub", path: "/socialhub" },
      ]);
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newMode);
  };

  if (loading) {
    return (
      <nav className="bg-gradient-to-r from-purple-700 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-white">Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold tracking-wide hover:text-yellow-400 transition-colors"
        >
          <img
            src={darkMode ? navbarConfig.logoDark : navbarConfig.logoLight}
            alt="Logo"
            className={`inline h-8 w-8 mr-2 ${
              darkMode ? "" : "bg-pink rounded-full p-1"
            }`}
          />
          {navbarConfig.headerTitle}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navbarItems
            .filter((item) => item.isActive !== false)
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((item) => (
              <Link
                key={item._id || item.title}
                to={item.path}
                className="hover:text-yellow-400 transition-colors"
              >
                {item.title}
              </Link>
            ))}

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1 rounded-full 
               bg-white dark:bg-gray-700
               text-gray-900 dark:text-white 
               placeholder-gray-500 dark:placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white dark:bg-gray-200"></span>
              <span className="block w-6 h-0.5 bg-white dark:bg-gray-200"></span>
              <span className="block w-6 h-0.5 bg-white dark:bg-gray-200"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-700 to-indigo-600 dark:from-gray-900 dark:to-gray-800 p-4 space-y-2">
          {navbarItems
            .filter((item) => item.isActive !== false)
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((item) => (
              <Link
                key={item._id || item.title}
                to={item.path}
                className="block hover:text-yellow-400 transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
