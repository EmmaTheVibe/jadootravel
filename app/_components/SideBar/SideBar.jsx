"use client";

import { useMediaQuery } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import styles from "./SideBar.module.css";
import { navLinks } from "@/app/_utils/data";
import useContexts from "@/app/_utils/useContexts";
import { ArrowDown } from "lucide-react";
import NavLinks from "../NavLinks/NavLinks";

export default function SideBar() {
  const { openDrawer, setOpenDrawer } = useContexts();
  const lg = useMediaQuery("(min-width: 768px)");
  if (lg) return;
  return (
    <div className={styles.drawer}>
      <SwipeableDrawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        slotProps={{
          paper: {
            sx: {
              width: "200px",
              height: "100vh",
              padding: "34px 1.5rem 1.5rem 1.5rem",
              backgroundColor: "var(--neutral-0)",
              overflowY: "auto",
            },
          },
        }}
      >
        <div className={styles.sidebar} onKeyDown={() => setOpenDrawer(false)}>
          <NavLinks />
        </div>
      </SwipeableDrawer>
    </div>
  );
}
