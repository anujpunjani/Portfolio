import React from "react";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <h4 className={styles.contactTitle}>
          Contact<span>.</span>
        </h4>

        <p className={styles.contactCopy}>
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/anujpunjani/"
            target="_blank"
            rel="nofollow"
          >
            Linkedin
          </a>{" "}
          or{" "}
          <a
            href="https://www.twitter.com/PunjaniAnuj"
            target="_blank"
            rel="nofollow"
          >
            Twitter/X
          </a>{" "}
          if that&apos;s more your speed.
        </p>

        <a href="mailto:appunjani@gmail.com">
          <div className={styles.contactEmail}>
            <AiFillMail size="2.4rem" />
            <span>appunjani@gmail.com</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
