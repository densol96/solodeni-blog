import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Posts: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>Posts baby</div>;
};
