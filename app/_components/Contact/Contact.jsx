/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

const formVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const sendVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 180,
      duration: 0.3,
      delay: 0.3,
    },
  },
};

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          variants={formVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.formWrapper}
        >
          <img
            src="./images/ripples1.svg"
            alt="ripple"
            className={styles.ripples1}
          />
          <img
            src="./images/ripples2.svg"
            alt="ripple"
            className={styles.ripples2}
          />
          <div className={styles.formBox}>
            <motion.div
              variants={sendVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className={styles.send}
            >
              <img src="./images/send2.svg" alt="send" />
            </motion.div>

            <p className={styles.formTitle}>
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </p>
            <div className={styles.box}>
              <div className={styles.inputLine}>
                <img src="./images/mail.svg" alt="mail" />
                <input type="text" placeholder="Your email" />
              </div>
              <button>
                <p>Subscribe</p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
