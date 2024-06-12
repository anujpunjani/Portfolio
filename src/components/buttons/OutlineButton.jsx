import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import styles from "./outlinebutton.module.scss";

export const OutlineButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      <AiFillFilePdf size="2.4rem" />
      {children}
    </button>
  );
};
