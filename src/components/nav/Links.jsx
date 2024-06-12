import React, { useEffect } from "react";
import styles from "./links.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { motion, stagger, useAnimate } from "framer-motion";

const Links = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      { y: [-30, 0], opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.1) }
    );
  }, []);

  return (
    <div ref={scope} className={styles.links}>
      <span>
        <a href="https://www.linkedin.com/in/anujpunjani/">
          <AiFillLinkedin size="2.4rem" />
        </a>
      </span>
      <span>
        <a href="https://github.com/anujpunjani/">
          <AiFillGithub size="2.4rem" />
        </a>
      </span>
      <span>
        <a href="https://www.twitter.com/PunjaniAnuj">
          <AiFillTwitterSquare size="2.4rem" />
        </a>
      </span>
    </div>
  );
};

export default Links;
