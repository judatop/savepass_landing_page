"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  attribute = "class",
  enableSystem = false,
  disableTransitionOnChange = false,
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme as Theme);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleThemeChange = () => {
      const root = window.document.documentElement;
      const isDark = theme === "dark";

      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(theme);

      localStorage.setItem("theme", theme);
    };

    handleThemeChange();
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
