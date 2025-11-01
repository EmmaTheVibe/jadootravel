/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { testimonials } from "@/app/_utils/data";
import styles from "./Testimonials.module.css";
import ReviewStack from "../ReviewStack/ReviewStack";
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

const logos = [
  { src: "./images/axon.png", alt: "Axon" },
  { src: "./images/jetstar.png", alt: "Jetstar" },
  { src: "./images/expedia.png", alt: "Expedia", isExpedia: true },
  { src: "./images/qantas.png", alt: "Qantas" },
  { src: "./images/alitalia.png", alt: "Alitalia" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={styles.testimonials}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.box}>
          <motion.div
            className={styles.top}
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className={styles.tip}>TESTIMONIALS</p>
            <h1>What People Say About Us.</h1>

            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.activeDot : ""
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <ReviewStack items={testimonials} onIndexChange={setCurrentIndex} />
        </div>

        {/* Infinite Logo Carousel */}

        <div className={styles.logosWrapper}>
          <div className={`${styles.showbox} ${styles.slider}`}>
            <div className={styles.list}>
              {logos.map((logo, i) => (
                <div
                  className={styles.item}
                  key={i}
                  style={{ "--position": `${i + 1}` }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={styles.logoImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
