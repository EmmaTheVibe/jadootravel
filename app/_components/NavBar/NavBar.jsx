/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.css";
import { useMediaQuery } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import NavLinks from "../NavLinks/NavLinks";

export default function NavBar() {
  const lg = useMediaQuery("(min-width: 768px)");
  const [active, setActive] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const handleClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = window.scrollY;
      setScrollHeight(currentScrollHeight);
      if (currentScrollHeight > 20) {
        setBackgroundColor("var(--neutral-0)");
      } else {
        setBackgroundColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar} style={{ backgroundColor: backgroundColor }}>
      <div className={`container ${styles.wrapper}`}>
        <SideBar />
        <div className={styles.navItems}>
          <img src="./images/logo.svg" alt="logo" />
          {lg ? (
            <div className={styles.navTabs}>
              <NavLinks />
            </div>
          ) : (
            <Hamburger />
          )}
        </div>
      </div>
    </nav>
  );
}
