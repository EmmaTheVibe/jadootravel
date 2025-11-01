"use client";

import useContexts from "@/app/_utils/useContexts";
import { useMediaQuery } from "@mui/material";
import styles from "./Hamburger.module.css";

export default function Hamburger() {
  const lg = useMediaQuery("(min-width: 768px)");
  const { openDrawer, setOpenDrawer } = useContexts();
  const toggleDrawer = (event) => {
    if (
      lg ||
      (event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift"))
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
    console.log(openDrawer);
  };

  return (
    <div className={styles.hamburger}>
      <svg
        width="24"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleDrawer}
      >
        <g fill="#000000" fillRule="evenodd">
          <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
        </g>
      </svg>
    </div>
  );
}
