import React from "react";
import clsx from "clsx";

import { Title, Tag } from "@/components";

import styles from "./TagBar.module.scss";

const { tagsContainer, container } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const tagList = [
  { name: "react", color: "blue" },
  { name: "webdev", color: "green" },
  { name: "javascript", color: "yellow" },
  { name: "api", color: "red" },
  { name: "react", color: "blue" },
  { name: "webdev", color: "green" },
  { name: "javascript", color: "yellow" },
  { name: "api", color: "red" },
  { name: "react", color: "blue" },
  { name: "webdev", color: "green" },
  { name: "javascript", color: "yellow" },
  { name: "api", color: "red" },
  { name: "react", color: "blue" },
  { name: "webdev", color: "green" },
  { name: "javascript", color: "yellow" },
  { name: "api", color: "red" },
  { name: "react", color: "blue" },
  { name: "webdev", color: "green" },
  { name: "javascript", color: "yellow" },
  { name: "api", color: "red" },
  { name: "react", color: "blue" },
  { name: "webdev", color: "green" },
  { name: "javascript", color: "yellow" },
  { name: "api", color: "red" },
];

export const TagBar: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx(className, container)}>
      <Title className="mb-xs" size="xsplus">
        Popular Tags
      </Title>
      <ul className={clsx(tagsContainer, "scroll-container")}>
        {tagList.map((tag) => (
          <Tag tag={tag} />
        ))}
      </ul>
    </div>
  );
};
