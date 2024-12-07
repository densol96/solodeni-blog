import React from "react";
import { SideBarItem } from "./SideBarItem";

import styles from "./Sidebar.module.scss";
import { TagBar } from "../TagBar/TagBar";
import { FindMe } from "../Footer/FindMe";
import clsx from "clsx";
const { ul, container, sidebarWrapper } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Sidebar: React.FC<Props> = ({ className, children }) => {
  return (
    <nav className={clsx(className, container)}>
      <ul className={ul}>
        <SideBarItem href="/home" name="Home" />
        <SideBarItem href="/about" name="About" />
        <SideBarItem href="/tags" name="Tags" />
        <SideBarItem href="/advertise" name="Advertise" />
        <SideBarItem href="/contact" name="Contact" />
        <SideBarItem className="mt-md" href="/conduct" name="Code of Conduct" />
        <SideBarItem href="/terms" name="Terms of use" />
      </ul>

      <FindMe className={sidebarWrapper} titleMarginBottom="mb-xs" titleSize="xsplus" />
      <TagBar className={sidebarWrapper} />
    </nav>
  );
};
