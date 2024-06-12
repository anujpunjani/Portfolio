import React, { useEffect, useRef, useState } from "react";
import styles from "./project.module.scss";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { useAnimate, useInView, motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const Project = ({
  modalContent,
  title,
  image,
  description,
  techStackUsed,
  githubLink,
  deployedLink,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.75 });
    } else {
      animate(scope.current, { opacity: 0, y: 100 }, { duration: 0.75 });
    }
  }, [isInView]);

  return (
    <>
      <motion.div ref={scope}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <img
            src={image}
            alt={`Image of ${title} Project.`}
            style={{
              width: hovered ? "90% !important" : "85% !important",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectBody}>
          <div className={styles.projectTitle}>
            <h4>{title}</h4>
            <div className={styles.projectTitleLine} />
            <a href={githubLink} target="_blank" rel="nofollow">
              <AiFillGithub size="2.8rem" />
            </a>
            {deployedLink && (
              <a href={deployedLink} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
              </a>
            )}
          </div>
          <div className={styles.projectTechStack}>
            {techStackUsed.join(" - ")}
          </div>
          <p className={styles.projectDescription}>
            {description} <br />
            <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
          </p>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        deployedLink={deployedLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        image={image}
        title={title}
        githubLink={githubLink}
        techStackUsed={techStackUsed}
      />
    </>
  );
};

export default Project;
