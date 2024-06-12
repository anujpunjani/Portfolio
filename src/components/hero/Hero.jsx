import React, { useState, useEffect, useRef } from "react";
import StandardButton from "../buttons/StandardButton";
import styles from "./hero.module.scss";
import HeroImg from "../../assets/profile.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useInView } from "framer-motion";
import { AiOutlineExport } from "react-icons/ai";

const Hero = () => {
  const [enableAnimation, setEnableAnimation] = useState(false);

  const ref = useRef(null);
  const IsInView = useInView(ref);

  useEffect(() => {
    if (IsInView) {
      setEnableAnimation(true);
    } else {
      setEnableAnimation(false);
    }
  }, [IsInView]);

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.wrapper}>
          <h1 ref={ref} className={styles.title}>
            <RoughNotationGroup
              show={enableAnimation}
              animate={enableAnimation}
            >
              {" "}
              <RoughNotation
                order={1}
                type="highlight"
                color="var(--brand)"
                iterations={2}
                animationDuration={500}
              >
                Hi
              </RoughNotation>
              ,{" "}
              <RoughNotation
                type="underline"
                color="var(--brand)"
                iterations={4}
                strokeWidth={3}
                order={2}
              >
                I'm AP
                <span className={styles.titleDot}>.</span>
              </RoughNotation>
            </RoughNotationGroup>
          </h1>
          <h2 className={styles.subTitle}>I'm a Software Developer</h2>
          <p className={styles.about}>
            Spending my time in building and scaling software for some pretty
            cool companies. A constant learner and having ability to adapt to
            new technologies. A Minimalist Graphic Designer (incase you want to
            see my art{" "}
            <a
              href="https://www.instagram.com/disconnected.space/"
              target="_blank"
              rel="nofollow"
            >
              <AiOutlineExport size="2.2rem" className="inline-block" />
            </a>
            ) and A teacher by ❤️. <br />
            <RoughNotation
              type="circle"
              color="var(--brand)"
              strokeWidth={2}
              show={enableAnimation}
              animate={enableAnimation}
            >
              Let's connect!
            </RoughNotation>
          </p>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact Me
          </StandardButton>{" "}
          <StandardButton
            onClick={() =>
              window.open("https://anujpunjani.github.io/dev/", "_blank")
            }
          >
            CLI <AiOutlineExport size="2.2rem" className="inline-block" />
          </StandardButton>
        </div>
        <div>
          <img
            src={HeroImg}
            width={250}
            height={250}
            alt="Anuj Punjani"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
