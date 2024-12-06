import React from "react";
import styles from "./Posts.module.scss";
import { clsx } from "clsx";
import Link from "next/link";
import { IoChatboxOutline } from "react-icons/io5";

const { item, hash } = styles;

type Props = {
  className?: string;
  tag: { name: string; color: string };
};

type Color = "purple" | "yellow" | "green" | "grey" | "red" | "brown" | "blue";

function returnTagClassname(color: Color): string {
  const classTitle = color.slice(0, 1).toUpperCase() + color.slice(1);
  return clsx(item, styles[`item${classTitle}`]);
}

export const Tag: React.FC<Props> = ({ className, tag }) => {
  return (
    <Link href={`/tag/${tag.name}`}>
      <li className={returnTagClassname(tag.color as Color)}>
        <span className={hash}>#</span>
        {tag.name}
      </li>
    </Link>
  );
};
