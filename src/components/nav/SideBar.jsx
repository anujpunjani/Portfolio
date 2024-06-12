import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.scss";
import { motion, useAnimate, stagger } from "framer-motion";

const SideBar = () => {
  const [selected, setSelected] = useState("");

  const [scope, animate] = useAnimate();

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

    animate(
      "a",
      { x: [-70, 0], opacity: 1 },
      { duration: 0.5, delay: stagger(0.1) }
    );
  }, []);

  return (
    <div
      className={styles.sideBarWrapper}
      style={{ background: "var(--background-dark)" }}
    >
      <motion.nav ref={scope} className={styles.sideBar}>
        <span
          className={styles.logo}
          onClick={() => {
            document.location.hash === ""
              ? document.getElementById("main")?.scrollIntoView()
              : (document.location.hash = "");
          }}
        >
          AP<span>.</span>
        </span>
        <a
          href="#about"
          onClick={() => {
            setSelected("about");
          }}
          className={selected === "about" ? styles.selected : ""}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => {
            setSelected("projects");
          }}
          className={selected === "projects" ? styles.selected : ""}
        >
          Projects
        </a>
        <a
          href="#experience"
          onClick={() => {
            setSelected("experience");
          }}
          className={selected === "experience" ? styles.selected : ""}
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={() => {
            setSelected("contact");
          }}
          className={selected === "contact" ? styles.selected : ""}
        >
          Contact
        </a>
      </motion.nav>
    </div>
  );
};

export default SideBar;
