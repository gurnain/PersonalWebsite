"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const flip = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      className={className}
      onClick={flip}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Icon name={dark ? "sun" : "moon"} size={18} />
    </button>
  );
}
