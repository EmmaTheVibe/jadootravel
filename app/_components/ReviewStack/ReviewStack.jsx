/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./ReviewStack.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARD_OFFSET_Y = 60;
const CARD_OFFSET_X = 18;
const SCALE_FACTOR = 0.05;

export default function ReviewStack({ items, onIndexChange }) {
  const [cards, setCards] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const handleNext = () => {
    setCards((prev) => {
      const newArray = [...prev];
      newArray.push(newArray.shift());
      return newArray;
    });
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, isInView, currentIndex]);

  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange]);

  const handlePrev = () => {
    setCards((prev) => {
      const newArray = [...prev];
      newArray.unshift(newArray.pop());
      return newArray;
    });
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={styles.container}>
      <div
        ref={ref}
        className={styles.reviewStack}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {cards.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className={`${styles.reviewCard} ${
              index === 0 ? styles.activeCard : ""
            }`}
            initial={false}
            animate={{
              top: index * CARD_OFFSET_Y,
              left: index * CARD_OFFSET_X,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              opacity: index < 3 ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
            style={{
              position: "absolute",
              transformOrigin: "center center",
            }}
          >
            <img src={testimonial.img} alt="pfp" />
            <div className={styles.infoBox}>
              <p className={styles.comment}>{testimonial.comment}</p>
              <p className={styles.name}>{testimonial.name}</p>
              <p className={styles.tag}>{testimonial.tag}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className={styles.controlBox}>
        <div className={styles.controls}>
          <button
            onClick={handlePrev}
            className={styles.controlBtn}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className={styles.controlBtn}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
