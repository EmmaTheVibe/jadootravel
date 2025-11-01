"use client";

import { createContext, useState, useEffect } from "react";

const ContextCreator = createContext();

function ContextProvider({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <ContextCreator.Provider
      value={{
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
      }}
    >
      {children}
    </ContextCreator.Provider>
  );
}

export { ContextCreator, ContextProvider };
