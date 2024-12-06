import React from "react";
import { SideBarItem } from "./SideBarItem";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Sidebar: React.FC<Props> = ({ className, children }) => {
  return (
    <nav className={className}>
      <ul>
        <SideBarItem name="Home" />
      </ul>
    </nav>
  );
};
