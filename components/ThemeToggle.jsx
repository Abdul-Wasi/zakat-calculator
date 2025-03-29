import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") === "dark"
    );
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);
  
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    );
  };
  
  export default ThemeToggle;