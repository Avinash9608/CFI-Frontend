// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import SocialHub from "./pages/SocialHub";
import Footer from "./components/Footer";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main app component, which contains the navbar, all routes, and the footer.
 */
/*******  5b1a54fb-d526-43bf-b7b2-deaff6a8e83f  *******/ function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove the dark class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Pass toggle to Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socialhub" element={<SocialHub />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
