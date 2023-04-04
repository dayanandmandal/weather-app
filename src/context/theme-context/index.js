import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark");
}

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const color = theme === "light" ? "white" : "rgba(0, 0, 0, 0.78)";
    document.body.style.background = color;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
