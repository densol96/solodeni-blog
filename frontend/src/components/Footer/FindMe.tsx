import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { IconWrapper, Title } from "@/components";

import styles from "./Footer.module.scss";
const { footerText, footerFlex, footerFind } = styles;

export const FindMe = () => {
  return (
    <div className={footerFind}>
      <Title className="mb-xs" size="sm">
        Get in touch with me!
      </Title>
      <div className={`${footerFlex}`}>
        <IconWrapper size="sm" href="https://www.linkedin.com/in/deniss-solovjovs-270631309/">
          <GrLinkedin />
        </IconWrapper>
        <IconWrapper size="sm" href="https://www.linkedin.com/in/deniss-solovjovs-270631309/">
          <GrLinkedin />
        </IconWrapper>
      </div>
      <p className={`${footerText} mt-sm`}>(Become the sponsor 😊)</p>
    </div>
  );
};
