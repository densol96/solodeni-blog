"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import Link from "next/link";

const { btn, simple, solid } = styles;

type BtnType = "simple" | "btn";

type Props = {
  children: ReactNode | ReactNode[];
  variant: BtnType;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: object;
};

export const Button: React.FC<Props> = ({ variant, children, href, onClick, className, style = {} }) => {
  const props = {
    ...{ className: clsx(btn, variant === "btn" && solid) },
    ...{ className: clsx(btn, variant === "simple" && simple) },
    ...(style && { style }),
  };

  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};
