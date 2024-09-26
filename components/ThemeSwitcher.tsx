"use client";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

const ThemeSwitcher = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme("light");
  const [mounted, setMounted] = useState(false);
  // Check if the component are loaded
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {children}
    </div>
  );
};

export default ThemeSwitcher;
