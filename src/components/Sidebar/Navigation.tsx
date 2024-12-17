import React from "react";
import { Title, SideBarItem } from "@/components";
import clsx from "clsx";
type Props = {
  className?: string;
  children?: React.ReactNode;
};

import styles from "./Sidebar.module.scss";
const { title, ul } = styles;

export const Navigation: React.FC<Props> = ({ className, children }) => {
  return (
    <ul className={clsx(className, ul)}>
      <SideBarItem href="/home" name="Home" />
      <SideBarItem href="/about" name="About" />
      <SideBarItem href="/tags" name="Tags" />
      <SideBarItem href="/advertise" name="Advertise" />
      <SideBarItem href="/contact" name="Contact" />
      <SideBarItem className="mt-md" href="/conduct" name="Code of Conduct" />
      <SideBarItem href="/terms" name="Terms of use" />
    </ul>
  );
};
