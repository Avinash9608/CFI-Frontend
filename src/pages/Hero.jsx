import { useState, useEffect } from "react";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [heroData, setHeroData] = useState({
    heading: "",
    paragraph: "",
    buttons: [
      {
        text: "Learn More",
        link: "#",
        bgColor: "var(--primary-color)",
        textColor: "#ffffff",
      },
      {
        text: "Latest Updates",
        link: "#",
        bgColor: "rgba(255 255 255 / 0.12)",
        textColor: "#ffffff",
      },
    ],
    backgroundImage: "",
    textColor: "#ffffff",
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}/api/hero`);
        const data = await response.json();
        setHeroData((prev) => ({
          ...prev,
          heading: data.heading || prev.heading,
          paragraph: data.paragraph || prev.paragraph,
          buttons: data.buttons?.length ? data.buttons : prev.buttons,
          backgroundImage: data.backgroundImage || prev.backgroundImage,
          textColor: data.textColor || prev.textColor,
        }));
      } catch (error) {
        console.error("Failed to fetch hero data", error);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <div
      className={`bg-slate-50 dark:bg-gray-900 transition-colors duration-500 min-h-screen ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1">
            <div
              className="relative flex items-center justify-center min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat p-4"
              style={{
                backgroundImage: heroData.backgroundImage
                  ? `linear-gradient(rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url("${heroData.backgroundImage}")`
                  : "none",
              }}
            >
              <div className="max-w-4xl text-center text-white p-8 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm">
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-4">
                  {heroData.heading || "Welcome to Our Village Panchayat"}
                </h1>
                <p
                  className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto"
                  style={{ color: heroData.textColor }}
                >
                  {heroData.paragraph ||
                    "Our village panchayat is committed to fostering a vibrant and sustainable community through transparent governance, inclusive development, and active citizen participation."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {(heroData.buttons || []).map((button, index) => {
                    const isPrimary = button.bgColor === "var(--primary-color)";

                    return (
                      <button
                        key={index}
                        type="button"
                        className="flex min-w-[140px] items-center justify-center rounded-xl h-14 px-8 text-base font-bold leading-normal tracking-wide transition-all duration-300 cursor-pointer"
                        style={{
                          backgroundColor: button.bgColor, // dynamic bg from DB
                          color: button.textColor, // dynamic text color from DB
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = 0.8; // simple hover effect
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = 1;
                        }}
                        onClick={() => {
                          if (button.link && button.link !== "#") {
                            window.location.href = button.link;
                          }
                        }}
                      >
                        {button.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;
