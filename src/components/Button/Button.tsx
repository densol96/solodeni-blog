"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

import styles from "./Button.module.scss";
const { btn, simple, solid, sizeDefault, sizeLarge } = styles;

type BtnType = "simple" | "btn";
type SizeType = "default" | "large";

type Props = {
  children: ReactNode | ReactNode[];
  variant: BtnType;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: object;
  size?: SizeType;
};

export const Button: React.FC<Props> = ({
  variant,
  children,
  href,
  onClick,
  className,
  style = {},
  size = "default",
}) => {
  const props = {
    ...{
      className: clsx(
        className,
        btn,
        variant === "simple" && simple,
        variant === "btn" && solid,
        size === "default" && sizeDefault,
        size === "large" && sizeLarge
      ),
    },
    ...(style && { style }),
  };

  console.log(props);

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
