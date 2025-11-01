/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./LocationStack.module.css";

const CARD_OFFSET = 40;
const SCALE_FACTOR = 0.06;
const ROTATION = 2;

export default function LocationStack({ items }) {
  const [cards, setCards] = useState(items);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCards((prev) => {
        const newArray = [...prev];
        newArray.push(newArray.shift());
        return newArray;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className={styles.cardStack}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {cards.map((destination, index) => (
        <motion.div
          key={destination.location}
          className={`${styles.card} ${index === 0 ? styles.activeCard : ""}`}
          initial={false}
          animate={{
            top: index * CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            rotate: index * ROTATION,
            zIndex: cards.length - index,
            opacity: index < 3 ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
          }}
          style={{
            position: "absolute",
            transformOrigin: "top center",
          }}
        >
          <img
            src={destination.img}
            alt="destination"
            className={styles.cardBg}
          />
          <div className={styles.info}>
            <div className={styles.line}>
              <p>{destination.location}</p>
              <p>{destination.price}</p>
            </div>
            <div className={styles.duration}>
              <img src="./images/navigation.svg" alt="navigation" />
              <p>{destination.duration} Days Trip</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
