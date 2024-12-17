"use client";

import React from "react";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";

import { useSidebarState } from "@/context";
import { Aside, SideBarItem, TagBar, FindMe, Logo, Title, Navigation } from "@/components";
import { useDetectOutsideClick } from "@/hooks";

import styles from "./Sidebar.module.scss";
const { container, bg, btn, closedSidebar, sidebarNews, title } = styles;

type Props = {
  className?: string;
};

export const Sidebar: React.FC<Props> = ({ className }) => {
  const { sidebarIsOpen, closeSidebar } = useSidebarState();
  const ref = useDetectOutsideClick(() => sidebarIsOpen && closeSidebar());
  return (
    <>
      <div className={clsx(bg, !sidebarIsOpen && closedSidebar)}></div>
      <nav ref={ref} className={clsx(className, container, !sidebarIsOpen && closedSidebar)}>
        <button className={clsx("toggle-btn", btn)} onClick={closeSidebar}>
          <IoMdClose />
        </button>
        <div>
          <Title className={title} size="md">
            SOLODENI BLOG
          </Title>
          <Navigation />
        </div>
        <FindMe titleMarginBottom="mb-xs" titleSize="xsplus" />
        <TagBar />
        {sidebarIsOpen && <Aside className={sidebarNews} />}
      </nav>
    </>
  );
};
