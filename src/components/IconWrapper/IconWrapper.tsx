import React, { JSXElementConstructor, ReactNode } from "react";
import Link from "next/link";

import styles from "./IconWrapper.module.scss";
const { smallIcon, linkIcon, linkContainer } = styles;

type IconType = "link" | "default";
type SizeType = "default" | "sm";

type Props = {
  className?: string;
  children: React.ReactElement<any, string | JSXElementConstructor<any>>;
  href?: string;
  size?: SizeType;
  isLocal?: boolean;
};

export const IconWrapper: React.FC<Props> = ({ className, children, href, size = "default", isLocal = true }) => {
  let iconWrapper: ReactNode;

  if (size == "default") {
    iconWrapper = children;
  } else if (size == "sm") {
    iconWrapper = React.cloneElement(children, { className: smallIcon });
  }

  if (href) {
    return (
      <div className={linkContainer}>
        {isLocal ? (
          <Link href={href} className={linkIcon}>
            {iconWrapper}
          </Link>
        ) : (
          <a href={href} className={linkIcon} target="_blank">
            {iconWrapper}
          </a>
        )}
      </div>
    );
  }
  return iconWrapper;
};
