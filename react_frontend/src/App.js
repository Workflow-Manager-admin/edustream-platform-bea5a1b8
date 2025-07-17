import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Theme context for light/dark toggle (expandable)
export const ThemeContext = React.createContext();

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <button
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-md text-sm font-semibold bg-primary text-white hover:bg-accent transition"
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Tailwind dark mode implementation (if desired, else just apply body classes)
    document.documentElement.className = theme === "dark" ? "dark" : "";
    document.body.style.background = theme === "dark" ? "#17294d" : "#fff";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className={theme === "dark" ? "dark bg-secondary min-h-screen" : "bg-white min-h-screen"}>
        <Router>
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
