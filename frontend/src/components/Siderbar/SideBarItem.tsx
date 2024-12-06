import React from "react";
import styles from "./Sidebar.module.scss";
import { Button } from "../Button/Button";
import clsx from "clsx";
import Link from "next/link";

const { li, icon } = styles;

type Props = {
  className?: string;
  name: string;
  href: string;
};

export const SideBarItem: React.FC<Props> = ({ className, name, href }) => {
  return (
    <Link className={className} href={href}>
      <li className={li}>
        {/* design decision */}
        <img className={icon} src={`/icons${href}.png`} alt="Icon" />
        {name}
      </li>
    </Link>
  );
};
