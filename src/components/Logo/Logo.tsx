import React, { ReactNode } from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";

const { logo } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Logo: React.FC<Props> = ({ className, children }) => {
  return (
    <Link href="/" className={logo}>
      SoloDeni
    </Link>
  );
};
