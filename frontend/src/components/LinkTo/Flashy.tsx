"use client";

import React, { useEffect, useState } from "react";
import { LinkTo } from "./LinkTo";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Flashy: React.FC<Props> = ({ className, children }) => {
  const [isFlash, setIsFlash] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlash((state) => !state);
    }, 750);
    return () => clearInterval(intervalId);
  }, []);

  const style = isFlash ? { color: "var(--color-secondary)" } : {};

  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
};
