import React from "react";
import styles from "./Overlay.module.scss";
import clsx from "clsx";
const { overlay } = styles;

type Props = {
  isActive: boolean;
  zIndex?: number;
  className?: string;
};

export const Overlay: React.FC<Props> = ({ className, isActive }) => {
  return isActive ? <div className={clsx(overlay, className)} /> : null;
};
