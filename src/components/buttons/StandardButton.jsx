import React from "react";
import styles from "./standardbutton.module.scss";

const StandardButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.standardButton}>
      {children}
    </button>
  );
};

export default StandardButton;
