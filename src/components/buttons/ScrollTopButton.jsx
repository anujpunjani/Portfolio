import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./scrolltopbutton.module.scss";

const ScrollTopButton = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 800;
    setIsScrollVisible(scrollY > showThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollWrapper}>
      {isScrollVisible && (
        <div className={styles.scrollButton}>
          <button onClick={goToTop}>
            <AiOutlineArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollTopButton;
