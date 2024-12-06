import React from "react";
import Link from "next/link";

import { Logo, Button, SearchBar, Container } from "@/components";

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
