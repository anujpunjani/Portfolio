import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../utils/SectionHeader";
import styles from "./about.module.scss";
import Stats from "./Stats";
import StandardButton from "../buttons/StandardButton";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "framer-motion";

const About = () => {
  const [enableAnimation, setEnableAnimation] = useState(false);

  const bracket1 = useRef(null);
  const bracket2 = useRef(null);
  const bracket1IsInView = useInView(bracket1);
  const bracket2IsInView = useInView(bracket2);

  useEffect(() => {
    if (bracket1IsInView && bracket2IsInView) {
      setEnableAnimation(true);
    } else {
      setEnableAnimation(false);
    }
  }, [bracket1IsInView, bracket2IsInView]);

  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" direction="left" />
      <div className={styles.about}>
        <div className={styles.aboutText}>
          <p className={styles.highlightFirstLetter}>
            Howdy! I'm Anuj Punjani, a dedicated software engineer with a
            Bachelor's degree in Information Technology.
          </p>
          <RoughNotation
            brackets="left"
            type="bracket"
            color="var(--brand)"
            strokeWidth={3}
            show={enableAnimation}
            animate={enableAnimation}
          >
            <p ref={bracket1}>
              Proficient in C++, Java, HTML, CSS, and JavaScript, I'm
              well-versed in React. Additionally, I possess experience with
              Node.js developing my own programming language.
            </p>
          </RoughNotation>
          <p>
            When I'm not coding, I enjoy graphic design, channeling my
            creativity into visually captivating projects.{" "}
          </p>
          <p>
            With a knack for quickly grasping new skills and knowledge. And
            known for my self-motivation, I excel in high-pressure environments
            and consistently meet deadlines with precision and efficiency.
          </p>
          <RoughNotation
            brackets="right"
            type="bracket"
            color="var(--brand)"
            strokeWidth={3}
            show={enableAnimation}
            animate={enableAnimation}
          >
            <p ref={bracket2}>
              I'm passively looking for new opportunities where I can
              effectively combine my expertise in coding with my passion for
              design. If you think you've got an opening that I might like,
              let's connect! 🔗
            </p>
          </RoughNotation>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact Me
          </StandardButton>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default About;
