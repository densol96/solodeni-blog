import React from "react";
import { Post } from "./Post";
import clsx from "clsx";

import styles from "./Posts.module.scss";
const { posts } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Posts: React.FC<Props> = ({ className, children }) => {
  return (
    <ul className={clsx(className, posts)}>
      <Post
        post={{
          reactions: 459,
          commentsTotal: 34,
          minRead: 6,
        }}
      />
      <Post
        post={{
          reactions: 459,
          commentsTotal: 34,
          minRead: 6,
        }}
      />
      <Post
        post={{
          reactions: 459,
          commentsTotal: 34,
          minRead: 6,
        }}
      />
      <Post
        post={{
          reactions: 459,
          commentsTotal: 34,
          minRead: 6,
        }}
      />
    </ul>
  );
};
