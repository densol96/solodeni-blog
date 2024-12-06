import React, { ReactNode } from "react";
import styles from "./LinkTo.module.scss";
import Link from "next/link";

const { btn } = styles;

type Props = {
  children: ReactNode | ReactNode[];
  href: string;
  isBtn?: boolean;
  className?: string;
};

export const LinkTo: React.FC<Props> = ({ className, children, href, isBtn = true }) => {
  return (
    <Link href={href} className={`${btn} ${isBtn ? styles["btn--solid"] : styles["btn--link"]}`}>
      {children}
    </Link>
  );
};
