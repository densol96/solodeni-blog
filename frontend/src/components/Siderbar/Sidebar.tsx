"use client";

import React from "react";
import { SideBarItem } from "./SideBarItem";

import styles from "./Sidebar.module.scss";
import { TagBar } from "../TagBar/TagBar";
import { FindMe } from "../Footer/FindMe";

import { IoMdClose } from "react-icons/io";

import clsx from "clsx";
const { ul, container, sidebarWrapper, btn, closedSidebar } = styles;

import { useSidebarState } from "@/context/SidebarContext";
import { Logo } from "../Logo/Logo";
import { Title } from "../Title/Title";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Sidebar: React.FC<Props> = ({ className, children }) => {
  const { sidebarIsOpen, closeSidebar } = useSidebarState();

  return (
    <>
      <div className={clsx(sidebarWrapper, !sidebarIsOpen && closedSidebar)}></div>
      <nav className={clsx(className, container, !sidebarIsOpen && closedSidebar)}>
        <button className={clsx("toggle-btn", btn)} onClick={closeSidebar}>
          <IoMdClose />
        </button>
        <ul className={ul}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
            <Title>Solodeni Blog</Title>
          </div>
          <SideBarItem href="/home" name="Home" />
          <SideBarItem href="/about" name="About" />
          <SideBarItem href="/tags" name="Tags" />
          <SideBarItem href="/advertise" name="Advertise" />
          <SideBarItem href="/contact" name="Contact" />
          <SideBarItem className="mt-md" href="/conduct" name="Code of Conduct" />
          <SideBarItem href="/terms" name="Terms of use" />
        </ul>

        <FindMe titleMarginBottom="mb-xs" titleSize="xsplus" />
        <TagBar />
      </nav>
    </>
  );
};
