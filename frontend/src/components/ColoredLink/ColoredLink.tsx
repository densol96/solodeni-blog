import React from "react";
import Link from "next/link";

import styles from "./ColoredLink.module.scss";
import clsx from "clsx";
const { link } = styles;

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export const ColoredLink: React.FC<Props> = ({ className, children, href }) => {
  return (
    <Link href={href} className={clsx(className, link)}>
      {children}
    </Link>
  );
};
