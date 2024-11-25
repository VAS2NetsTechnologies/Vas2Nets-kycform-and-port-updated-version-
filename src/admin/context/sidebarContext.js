import { createContext, useContext, useState } from "react";

const sidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  const values = { expanded, setExpanded };
  return (
    <sidebarContext.Provider value={values}>{children}</sidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(sidebarContext);
