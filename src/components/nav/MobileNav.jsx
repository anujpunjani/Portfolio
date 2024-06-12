import React, { useState, useEffect } from "react";
import { FaUser, FaSuitcase } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import styles from "./mobilenav.module.scss";

const MobileNav = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <nav className={styles.mobileNav}>
      <a
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={selected === "about" ? styles.selected : ""}
      >
        <FaUser />
      </a>
      <a
        href="#projects"
        onClick={() => {
          setSelected("projects");
        }}
        className={selected === "projects" ? styles.selected : ""}
      >
        <FaTools />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setSelected("experience");
        }}
        className={selected === "experience" ? styles.selected : ""}
      >
        <FaSuitcase />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setSelected("contact");
        }}
        className={selected === "contact" ? styles.selected : ""}
      >
        <MdChat />
      </a>
    </nav>
  );
};

export default MobileNav;
