"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  sidebarIsOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const SidebarContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactElement;
};

function SideBarStateProvider({ children }: Props) {
  const [sidebarIsOpen, setIsOpen] = useState<boolean>(false);

  function openSidebar() {
    setIsOpen(true);
  }

  function closeSidebar() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (sidebarIsOpen) document.querySelector("body")?.classList.add("sidebarIsOpen");
    else document.querySelector("body")?.classList.remove("sidebarIsOpen");
  }, [sidebarIsOpen]);

  return (
    <SidebarContext.Provider value={{ sidebarIsOpen, openSidebar, closeSidebar }}>{children}</SidebarContext.Provider>
  );
}

function useSidebarState() {
  const context = useContext(SidebarContext);
  if (context === undefined) throw new Error("SidebarContext was used outside of SideBarStateProvider");

  return context;
}

export { useSidebarState, SideBarStateProvider };
