import React from "react";
import styles from "./Footer.module.scss";
import { Container, Description, FindMe, Creds, FooterNav } from "@/components";

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
