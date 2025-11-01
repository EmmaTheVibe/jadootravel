/* eslint-disable @next/next/no-img-element */
"use client";
import { offers } from "@/app/_utils/data";
import styles from "./Offers.module.css";
import { motion } from "framer-motion";

const titleVariants = {
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

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 140,
      duration: 0.3,
      delay: 0.1 * index,
    },
  }),
};

const vectorVariants = {
  initial: {
    opacity: 0,
    x: 100,
    y: -100,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 140,
      duration: 0.3,
      delay: 1,
    },
  },
};

export default function Offers() {
  return (
    <section className={styles.offers}>
      <div className={`container ${styles.wrapper}`}>
        <img src="./images/offers-bg.svg" alt="bg" className={styles.bg} />
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className={styles.tip}>CATEGORY</p>
          <h1>We Offer Best Services</h1>
        </motion.div>
        <div className={styles.grid}>
          {offers.map((offer, i) => (
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              custom={i}
              viewport={{ once: true }}
              key={i}
              className={`${styles.offer} ${i === 1 ? styles.offerRaised : ""}`}
            >
              <div className={styles.picbox}>
                <img
                  src={offer.img}
                  alt="pic"
                  className={`${styles.img} ${styles.img}${i + 1}`}
                />
                <div
                  className={`${styles.square} ${styles.square}${i + 1}`}
                ></div>
              </div>
              <p className={styles.title}>{offer.name}</p>
              <p className={styles.desc}>{offer.desc}</p>
              {i === 1 && (
                <motion.div
                  variants={vectorVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: false }}
                  className={styles.bigSquare}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
