import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const ThemeToggleButton: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = () => {
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setUseDarkTheme(true);
    } else {
      setUseDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [useDarkTheme]);

  return (
    <button
      onClick={() => setUseDarkTheme(!useDarkTheme)}
      type="button"
      className="absolute top-10 right-10 flex items-center rounded-full border border-transparent bg-transparent p-1.5 text-zinc-400  ring-1 ring-zinc-100 hover:bg-zinc-100 focus:outline-none focus-visible:bg-zinc-100 dark:text-zinc-400 dark:ring-zinc-200/10 dark:hover:bg-zinc-100/10"
    >
      {useDarkTheme ? (
        <SunIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};
