"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { steps } from "@/app/_utils/data";
import styles from "./Booking.module.css";

const cardVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 140,
      duration: 0.3,
      delay: 0.1 * index,
    },
  }),
};

const greeceVariants = {
  initial: {
    opacity: 0,
    y: 100,
    // scale: 0.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    // scale: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 140,
      duration: 0.3,
    },
  },
};

const notifVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 140,
      duration: 0.3,
    },
  },
};

function AnimatedProgress({ targetPercent, isInView }) {
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const count = useTransform(spring, (value) => Math.round(value));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(targetPercent);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      spring.set(0);
    }
  }, [isInView, spring, targetPercent]);

  return { count, width: spring };
}

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // Changed to false
  const { count, width } = AnimatedProgress({ targetPercent: 40, isInView });

  return (
    <section className={styles.booking}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.box}>
          <p className={styles.tip}>Easy and Fast</p>
          <h1>Book your next trip in 3 easy steps</h1>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                custom={i}
                viewport={{ once: true }}
                key={i}
                className={styles.step}
              >
                <div
                  className={styles.iconBox}
                  style={{ backgroundColor: step.bg }}
                >
                  <img src={step.img} alt="icon" />
                </div>
                <div>
                  <p className={styles.title}>{step.title}</p>
                  <p className={styles.desc}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles.cardBox} ref={ref}>
          <motion.div
            variants={greeceVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={styles.wrap}
          >
            <div className={styles.blur}></div>
            <div className={styles.card}>
              <img
                src="./images/greece.webp"
                alt="greece"
                className={styles.greece}
              />
              <div className={styles.info}>
                <p className={styles.cardTitle}>Trip To Greece</p>
                <div className={styles.line}>
                  <p>14-29 June</p>
                  <div className={styles.divider}></div>
                  <p>by Robbin joseph</p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.icon}>
                    <img src="./images/leaf.svg" alt="icon" />
                  </div>
                  <div className={styles.icon}>
                    <img src="./images/map.svg" alt="icon" />
                  </div>
                  <div className={styles.icon}>
                    <img src="./images/send.svg" alt="icon" />
                  </div>
                </div>
                <div className={styles.bottomLine}>
                  <div className={styles.bottomBox}>
                    <img src="./images/building.svg" alt="icon" />
                    <p>24 people going</p>
                  </div>
                  <img
                    src="./images/heart.svg"
                    alt="icon"
                    className={styles.heart}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={notifVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={styles.notif}
          >
            <div className={styles.pfp}>
              <img src="./images/rome-pfp.svg" alt="icon" />
            </div>
            <div className={styles.notifInfo}>
              <p className={styles.notifTip}>Ongoing</p>
              <p className={styles.notifTitle}>Trip to rome</p>
              <p className={styles.percent}>
                <motion.span>{count}</motion.span>
                <span>%</span> completed
              </p>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progress}
                  style={{ width: useTransform(width, (v) => `${v}%`) }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
