import clsx from "clsx";
import React, { Suspense } from "react";
import { AsideBlock } from "./AsideBlock";

import styles from "./Aside.module.scss";
import { Watercooler } from "./Watercooler";
const {} = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Aside: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx(className)}>
      <Suspense fallback={"LOADING"}>
        <Watercooler />
      </Suspense>
    </div>
  );
};
