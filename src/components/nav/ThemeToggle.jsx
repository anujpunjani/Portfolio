import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import styles from "./themetoggle.module.scss";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    document.body.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  return (
    <div
      onClick={() => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      }}
      className={styles.theme}
    >
      {theme === "dark" ? (
        <IoSunnySharp className={`text-yellow-400 ${styles.icon}`} />
      ) : (
        <FaRegMoon className={styles.icon} />
      )}
    </div>
  );
};

export default ThemeToggle;
