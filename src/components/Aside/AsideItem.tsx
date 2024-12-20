import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { Title, ColoredLink } from "@/components";

import styles from "./Aside.module.scss";
const { titleText, comments, item } = styles;

type Props = {
  className?: string;
  title: string;
  commentsTotal: number;
  href: string;
};

export const AsideItem: React.FC<Props> = ({ className, title, commentsTotal, href }) => {
  return (
    <ColoredLink href={href}>
      <li className={clsx(className, item)}>
        <p className={titleText}>{title}</p> <p className={comments}>{commentsTotal} comments</p>
      </li>
    </ColoredLink>
  );
};
