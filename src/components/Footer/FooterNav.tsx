import React from "react";
import { Navigation, Title } from "@/components";

import styles from "./Footer.module.scss";
const { footerText, footerNav } = styles;

type Props = {
  className?: string;
};

export const FooterNav: React.FC<Props> = ({ className }) => {
  return (
    <div className={footerNav}>
      <Title className="mb-xs" size="sm">
        Navigation
      </Title>
      <Navigation />
    </div>
  );
};
