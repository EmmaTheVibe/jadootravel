"use client";
import { useContext } from "react";
import { ContextCreator } from "./Contexts";

function useContexts() {
  const context = useContext(ContextCreator);

  if (!context) {
    return {
      openDrawer: false,
      setOpenDrawer: () => {},
    };
  }

  return context;
}

export default useContexts;
