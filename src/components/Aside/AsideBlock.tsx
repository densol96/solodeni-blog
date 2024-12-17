import React from "react";
import { Title } from "../Title/Title";

import styles from "./Aside.module.scss";
import { ColoredLink } from "../ColoredLink/ColoredLink";
import clsx from "clsx";
const { description, list } = styles;

type Props<T> = {
  className?: string;
  title: string;
  description?: string;
  items: T[];
  render: (item: T) => React.ReactNode;
  href: string;
};

export const AsideBlock = <T,>({ className, title, items, render, href }: Props<T>) => {
  return (
    <div className={className}>
      <ColoredLink isDark={true} href={href}>
        <Title size="sm">{title}</Title>
      </ColoredLink>
      <p className={clsx(description, "mb-sm")}>Discussion threads targeting the whole community</p>
      <ul className={list}>{items.map(render)}</ul>
    </div>
  );
};
