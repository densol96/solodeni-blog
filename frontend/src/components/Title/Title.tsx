import React, { ReactNode } from "react";
import styles from "./Title.module.scss";
import clsx from "clsx";
// const { title } = styles;

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "super";

interface Props {
  size?: TitleSize;
  className?: string;
  children: ReactNode;
}

export const Title: React.FC<Props> = ({ size = "sm", className, children }) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
    super: "h1",
  } as const;

  const sizeStyle = styles[`title--${size}`];

  return React.createElement(mapTagBySize[size], { className: clsx(sizeStyle, className) }, children);
};
