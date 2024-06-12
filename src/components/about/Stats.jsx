import React from "react";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import styles from "./stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.statColumn}>
        <h4>
          <AiFillCode size="2.4rem" color="var(--brand)" />
          <span>Use at work</span>
        </h4>
        <div className={styles.statGrid}>
          <span>C</span>
          <span>C++</span>
          <span>XML</span>
          <span>Linux</span>
          <span>GDB</span>
          <span>Git</span>
          <span>OOPs</span>
          <span>Data Structures</span>
          <span>Networking Protocols</span>
          <span>Algorithms</span>
        </div>
      </div>
      <div className={styles.statColumn}>
        <h4>
          <AiFillSmile size="2.4rem" color="var(--brand)" />
          <span>Use for fun</span>
        </h4>
        <div className={styles.statGrid}>
          <span>ReactJS</span>
          <span>NodeJS</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Tailwind</span>
          <span>SQL</span>
          <span>Git</span>
          <span>Postman</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
