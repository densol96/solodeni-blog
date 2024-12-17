"use client";

import React, { useEffect, useState } from "react";
import { LinkTo } from "./Button";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const INTERVAL_DELAY_MS = 750;

export const Flashy: React.FC<Props> = ({ className, children }) => {
  const [isFlash, setIsFlash] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlash((state) => !state);
    }, INTERVAL_DELAY_MS);
    return () => clearInterval(intervalId);
  }, []);

  const style = isFlash ? { color: "var(--color-secondary)" } : {};

  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
};
