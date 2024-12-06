import React from "react";
import Link from "next/link";

import { Logo, LinkTo, SearchBar, Container } from "@/components";

import styles from "./Header.module.scss";
const { header, header__content, header__nav, header__left } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ className, children }) => {
  return (
    <header className={header}>
      <Container className={header__content}>
        <div className={header__left}>
          <Logo>SoloDeni</Logo>
          <SearchBar style={{ width: "60rem" }} />
        </div>

        <nav className={header__nav}>
          <LinkTo href="login" isBtn={false}>
            Log in
          </LinkTo>
          <LinkTo href="create-account">Create account</LinkTo>
        </nav>
      </Container>
    </header>
  );
};
