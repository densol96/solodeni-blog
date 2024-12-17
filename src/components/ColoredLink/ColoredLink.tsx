import React from "react";
import Link from "next/link";

import styles from "./ColoredLink.module.scss";
import clsx from "clsx";
const { light, dark } = styles;

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
  isDark?: boolean;
};

export const ColoredLink: React.FC<Props> = ({ className, children, href, isDark = false }) => {
  return (
    <Link href={href} className={clsx(className, isDark ? dark : light)}>
      {children}
    </Link>
  );
};
