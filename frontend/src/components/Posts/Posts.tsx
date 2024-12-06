import React from "react";
import { Post } from "./Post";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Posts: React.FC<Props> = ({ className, children }) => {
  return (
    <ul className={className}>
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
