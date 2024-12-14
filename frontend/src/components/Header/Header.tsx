"use client";

import React from "react";
import Link from "next/link";

import { Logo, Button, SearchBar, Container } from "@/components";
import { IoMenu } from "react-icons/io5";

import styles from "./Header.module.scss";
const { header, header__content, header__nav, header__left, searchInput } = styles;

import { useSidebarState } from "@/context/SidebarContext";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ className, children }) => {
  const { openSidebar } = useSidebarState();
  return (
    <header className={header}>
      <Container className={header__content}>
        <div className={header__left}>
          <button className="toggle-btn" onClick={openSidebar}>
            <IoMenu />
          </button>

          <Logo>SoloDeni</Logo>
          <SearchBar />
        </div>

        <nav className={header__nav}>
          <Button href="login" variant="simple">
            Log in
          </Button>
          <Button href="create-account" variant="btn">
            Create account
          </Button>
        </nav>
      </Container>
    </header>
  );
};
