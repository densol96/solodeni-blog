import React from "react";
import { Title } from "@/components";

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

      <p className={`${footerText} mt-sm`}>
        This design was inspired by{" "}
        <a className="link" href="https://dev.to/" target="_blank">
          dev.to
        </a>
      </p>
    </div>
  );
};
