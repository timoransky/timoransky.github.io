import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const ThemeToggleButton: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = () => {
  const [darkMode, setDarkMode] = useState(false);

  // check and reset theme when `darkMode` changes
  useEffect(() => {
    themeCheck();
  }, [darkMode]);

  // check theme on component mount
  useEffect(() => {
    themeCheck();
  }, []);

  // check and reset theme
  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="absolute top-4 right-4 flex items-center rounded-full border border-transparent bg-transparent p-1.5 text-gray-400 ring-1 ring-gray-100  hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100 dark:text-gray-400 dark:ring-gray-200/10 dark:hover:bg-gray-100/10 sm:top-10 sm:right-10"
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};
