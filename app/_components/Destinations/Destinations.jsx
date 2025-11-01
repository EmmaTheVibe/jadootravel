/* eslint-disable @next/next/no-img-element */
"use client";
import { destinations } from "@/app/_utils/data";
import styles from "./Destinations.module.css";
import LocationStack from "../LocationStack/LocationStack";
import Grid from "./Grid";
import { useMediaQuery } from "@mui/material";
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

export default function Destinations() {
  const lg = useMediaQuery("(min-width: 768px)");
  return (
    <section className={styles.destinations}>
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className={styles.tip}>Top Selling</p>
          <h1>Top Destinations</h1>
        </motion.div>

        {lg ? (
          <Grid />
        ) : (
          <div className={styles.carouselContainer}>
            <img
              src="./images/spring.svg"
              alt="spring"
              className={styles.spring}
            />
            <LocationStack items={destinations} />
          </div>
        )}
      </div>
    </section>
  );
}
