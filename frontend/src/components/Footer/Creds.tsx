import React from "react";
import { Title } from "@/components";

import styles from "./Footer.module.scss";
const { footerText, footerCreds } = styles;

type Props = {
  className?: string;
};

export const Creds: React.FC<Props> = ({ className }) => {
  return (
    <div className={footerCreds}>
      <Title className="mb-xs" size="sm">
        Credentials
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
