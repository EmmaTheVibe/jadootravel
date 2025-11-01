/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const heroVariants = {
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

const underlineVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: 0.5,
    },
  },
};

const plane1Variants = {
  initial: {
    x: -110, // Starts off-screen left
    y: 150, // And up
    opacity: 0,
    rotate: -15, // Slight tilt while flying in
  },
  animate: {
    x: 0, // Moves to CSS position
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.8, // After hero text
    },
  },
};

const plane2Variants = {
  initial: {
    x: -300, // Starts off-screen right
    y: 150, // And down
    opacity: 0,
    rotate: 15, // Slight tilt opposite direction
  },
  animate: {
    x: 0, // Moves to CSS position
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 1, // Slightly after plane1
    },
  },
};

const bannerVariants = {
  initial: {
    opacity: 0,
    y: -50,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 140,
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="./images/hero-bg.webp" alt="bg" className={styles.bg} />
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          variants={heroVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.intro}
        >
          <p className={styles.motto}>Best Destinations around the world</p>
          <div className={styles.heroMain}>
            <motion.img
              variants={underlineVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              src="./images/hero-underline.svg"
              alt="underline"
            />
            <h1>Travel, enjoy and live a new and full life</h1>
          </div>
          <p className={styles.txt}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className={styles.btnGroup}>
            <button className={styles.btnFilled}>
              <p>Find out more</p>
            </button>
            <div className={styles.playbox}>
              <div className={styles.playBtn}>
                <img src="./images/play.svg" alt="play" />
              </div>
              <p>Play Demo</p>
            </div>
          </div>
        </motion.div>
        <div className={styles.bannerBox}>
          <motion.img
            src="./images/plane.svg"
            alt="plane"
            className={styles.plane1}
            variants={plane1Variants}
            initial="initial"
            whileInView="animate"
          />
          <motion.img
            src="./images/plane.svg"
            alt="plane"
            className={styles.plane2}
            variants={plane2Variants}
            initial="initial"
            whileInView="animate"
          />
          <div className={styles.bannerWrap}>
            <motion.img
              variants={bannerVariants}
              initial="initial"
              whileInView="animate"
              src="./images/traveller.webp"
              alt="banner"
              className={styles.banner}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
