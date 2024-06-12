import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./projectmodal.module.scss";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";

const ProjectModal = ({
  modalContent,
  title,
  image,
  setIsOpen,
  isOpen,
  techStackUsed,
  githubLink,
  deployedLink,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <img
          src={image}
          alt={`An image of the ${title} project.`}
          width={500}
          height={400}
          className={styles.modalImage}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTechStack}>
            {techStackUsed.join(" - ")}
          </div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              <a target="_blank" rel="nofollow" href={githubLink}>
                <AiFillGithub /> source code
              </a>
              {deployedLink && (
                <a target="_blank" rel="nofollow" href={deployedLink}>
                  <AiOutlineExport /> live project
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};

export default ProjectModal;
