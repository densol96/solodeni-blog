import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { IconWrapper } from "@/components";

import styles from "./Footer.module.scss";
import { TitleSize, Title } from "../Title/Title";
import clsx from "clsx";
const { footerText, footerFlex, footerFind } = styles;

type Props = {
  titleSize?: TitleSize;
  titleMarginBottom?: string;
  className?: string;
};

export const FindMe: React.FC<Props> = ({ titleSize = "sm", titleMarginBottom = "mb-xs", className }) => {
  return (
    <div className={clsx(footerFind, className)}>
      <Title className={titleMarginBottom} size={titleSize}>
        Get in touch with me!
      </Title>
      <div className={`${footerFlex}`}>
        <IconWrapper isLocal={false} size="sm" href="https://www.linkedin.com/in/deniss-solovjovs-270631309/">
          <GrLinkedin />
        </IconWrapper>
        <IconWrapper isLocal={false} size="sm" href="https://www.linkedin.com/in/deniss-solovjovs-270631309/">
          <GrLinkedin />
        </IconWrapper>
      </div>
      <p className={`${footerText} mt-sm`}>(Become the sponsor 😊)</p>
    </div>
  );
};
