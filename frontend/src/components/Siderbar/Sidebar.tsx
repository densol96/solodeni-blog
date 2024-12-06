import React from "react";
import { SideBarItem } from "./SideBarItem";

import styles from "./Sidebar.module.scss";
const { ul } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Sidebar: React.FC<Props> = ({ className, children }) => {
  return (
    <nav className={className}>
      <ul className={ul}>
        <SideBarItem href="/home" name="Home" />
        <SideBarItem href="/about" name="About" />
        <SideBarItem href="/tags" name="Tags" />
        <SideBarItem href="/advertise" name="Advertise" />
        <SideBarItem href="/contact" name="Contact" />
        <SideBarItem className="mt-md" href="/conduct" name="Code of Conduct" />
        <SideBarItem href="/terms" name="Terms of use" />
      </ul>
    </nav>
  );
};
