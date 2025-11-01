/* eslint-disable @next/next/no-img-element */
import { destinations } from "@/app/_utils/data";
import styles from "./Destinations.module.css";
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    opacity: 0,
    y: -100,
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
export default function Grid() {
  return (
    <div className={styles.grid}>
      <img src="./images/spring.svg" alt="spring" className={styles.spring} />
      {destinations.map((destination, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          custom={i}
          viewport={{ once: true }}
          className={styles.card}
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
