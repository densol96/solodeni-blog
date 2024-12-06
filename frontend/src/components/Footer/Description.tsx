import React from "react";

import { Title } from "@/components";

import styles from "./Footer.module.scss";
const { footerText, footerColumn, footerDescription } = styles;

export const Description = () => {
  const year = new Date().getFullYear();

  return (
    <div className={footerDescription}>
      <Title className="mb-xs" size="sm">
        Welcome to my blog!
      </Title>
      <div className={`${footerColumn} ${footerText}`}>
        <p>
          SoloDeni is a personal blog dedicated to sharing insights, tutorials, and tips about programming and
          technology.
        </p>
        <p>Join me as I explore the world of coding, software development, and my journey as a passionate developer.</p>
        <p className="mt-sm">&copy; 2024 {year > 2024 && `- ${year}`} Deniss Solovjovs. All rights reserved.</p>
      </div>
    </div>
  );
};
