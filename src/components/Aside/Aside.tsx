import clsx from "clsx";
import React, { Suspense } from "react";
import { AsideBlock } from "./AsideBlock";

import styles from "./Aside.module.scss";
import { Watercooler } from "./Watercooler";
import { Ad } from "../Ad/Ad";
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
      <Ad
        className="mt-md"
        src="https://ih1.redbubble.net/image.4326721277.0235/raf,360x360,075,t,fafafa:ca443f4786.u1.jpg"
      />
    </div>
  );
};
