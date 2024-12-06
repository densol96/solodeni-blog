import React from "react";
import styles from "./Sidebar.module.scss";
import { Button } from "../Button/Button";
import clsx from "clsx";

const { li, icon } = styles;

type Props = {
  className?: string;
  name: string;
};

export const SideBarItem: React.FC<Props> = ({ className, name }) => {
  return (
    <li className={clsx(li, className)}>
      <img className={icon} src={`/icons/${name.toLowerCase()}.svg`} alt="Icon" />
      {name}
    </li>
  );
};
