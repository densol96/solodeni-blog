import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Page: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>TESTING SEARCH PAGE</div>;
};

export default Page;
