import React from "react";
import clsx from "clsx";

import styles from "./Ad.module.scss";
const { add } = styles;

type Props = {
  src?: string;
  className?: string;
};

export const Ad: React.FC<Props> = ({ className, src }) => {
  return <img src={src} className={clsx(className, add)} />;
};
