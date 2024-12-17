import React from "react";
import { Container, Description, FindMe, Creds, FooterNav } from "@/components";

import styles from "./Footer.module.scss";
const { footer, footerGrid } = styles;

export const Footer = () => {
  return (
    <footer className={footer}>
      <Container>
        <div className={footerGrid}>
          <Description />
          <FindMe />
          <Creds />
          <FooterNav />
        </div>
      </Container>
    </footer>
  );
};
