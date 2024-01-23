'use client';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";


const ModeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState<any>(theme); // Use theme directly as the initial value

  useEffect(() => {
    setTheme(selected);
  }, [selected]);

  return (
    <div className="relative">
      <input
        checked={theme === "dark"}
        onChange={(e) =>
          setSelected(e.target.checked ? "dark" : "light")
        }
        className="darkmode-input"
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="darkmode-label" htmlFor="darkmode-toggle">
        <MoonIcon className="theme-icon theme-moon" />
        <SunIcon className="theme-icon theme-sun" />
      </label>
    </div>
  );
}

export { ModeSelector }