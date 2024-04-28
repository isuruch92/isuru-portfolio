"use client";

import React, { createContext, useState, useContext } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionProvider = {
  children: React.ReactNode;
};

/* If you dont know the type to setActiveSection
just hover setActiveSection in vscode to check the type*/
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

/* In .ts, we need to give an default vlaue to the context when declaring 
and also we need to give a type for the context*/
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

function ActiveSectionProvider({ children }: ActiveSectionProvider) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  //we need to keep track of this to disable the intersection observer temporarily when user click on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "ActiveSectionContext must be used within ActiveSectionProvider"
    );
  }
  return context;
}

export { ActiveSectionProvider, useActiveSection };
