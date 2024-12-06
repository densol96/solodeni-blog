import React from "react";
import styles from "./Container.module.scss";

const { container } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Container: React.FC<Props> = ({ className, children }) => {
  return <div className={`${container} ${className ? className : ""}`}>{children}</div>;
};
