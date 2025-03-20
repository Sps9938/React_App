import React, { useState, useEffect } from "react";

function Toggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-body");
            document.body.style.color = "#ffffff"; // White text in dark mode
            document.body.style.backgroundColor = "#121212"; // Dark background
        } else {
            document.body.classList.remove("dark-body");
            document.body.style.color = "#000000"; // Black text in light mode
            document.body.style.backgroundColor = "#ffffff"; // Light background
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggle}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className={`ml-3 text-sm font-medium ${isDarkMode ? "text-white" : "text-black"}`}>
                Toggle Theme
            </span>
        </label>
    );
}

export default Toggle;
