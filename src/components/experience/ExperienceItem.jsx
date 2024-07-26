import React from "react";
import styles from "./experience.module.scss";

const ExperienceItem = ({
  company,
  position,
  time,
  location,
  description,
  techStack,
}) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <span className={styles.company}>{company}</span>
        <span>{time}</span>
      </div>
      <div className={styles.heading}>
        <span className={styles.position}>{position}</span>
        <span>{location}</span>
      </div>
      <div>
        {description.map((item) => (
          <p key={item} className={styles.description}>
            – {item}
          </p>
        ))}
      </div>

      <div className={styles.techStack}>
        {techStack.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
