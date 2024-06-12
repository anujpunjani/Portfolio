import React from "react";
import Links from "./Links";
import { OutlineButton } from "../buttons/OutlineButton";
import styles from "./heading.module.scss";
import ThemeToggle from "./ThemeToggle";

const Heading = () => {
  return (
    <header className={styles.heading}>
      <Links />
      <div className={styles.buttons}>
        <ThemeToggle />
        <OutlineButton
          onClick={() => window.open("/Portfolio/Anuj_Punjani_Resume.pdf")}
        >
          My resume
        </OutlineButton>
      </div>
    </header>
  );
};

export default Heading;
