/* eslint-disable @next/next/no-img-element */
import { navLinks } from "@/app/_utils/data";
import styles from "./NavLinks.module.css";
export default function NavLinks() {
  return (
    <div className={styles.navLinks}>
      {navLinks.map((link, i) => (
        <p key={i}>{link}</p>
      ))}
      <button>
        <p>Sign Up</p>
      </button>
      <div className={styles.lang}>
        <p>EN</p>
        <img src="./images/arrow.svg" alt="arrow" />
      </div>
    </div>
  );
}
