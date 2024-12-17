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
        <p>SoloDeni is a personal blog where I share insights, tutorials, and tips on programming and technology.</p>
        <p>
          Dive into my journey as a passionate developer, exploring coding, software development, and everything that
          sparks innovation in tech.
        </p>
        <p className="mt-sm">&copy; 2024 {year > 2024 && `- ${year}`} Deniss Solovjovs. All rights reserved.</p>
      </div>
    </div>
  );
};
