"use client";

import React, { useState } from "react";
import styles from "./Posts.module.scss";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { ColoredLink } from "../ColoredLink/ColoredLink";

const { toggler, options, variations, active } = styles;

export type FilterType = "relevant" | "latest" | "top" | undefined;
export type DurationType = "week" | "month" | "year" | "all" | undefined;

type Props = {
  className?: string;
  children?: React.ReactNode;
  type: FilterType;
  duration: DurationType;
};

export const LineToggler: React.FC<Props> = ({ className, children, type, duration }) => {
  return (
    <div className={clsx(className, toggler)}>
      <ul className={options}>
        <li>
          <ColoredLink className={clsx((type === undefined || type === "relevant") && active)} href="?type=relevant">
            Relevant
          </ColoredLink>
        </li>
        <li>
          <ColoredLink className={clsx(type === "latest" && active)} href="?type=latest">
            Latest
          </ColoredLink>
        </li>
        <li>
          <ColoredLink className={clsx(type === "top" && active)} href="?type=top">
            Top
          </ColoredLink>
        </li>
      </ul>
      {type === "top" && (
        <ul className={variations}>
          <li>
            <ColoredLink
              className={clsx((duration === undefined || duration === "week") && active)}
              href="?type=top&duration=week"
            >
              Week
            </ColoredLink>
          </li>
          <li>
            <ColoredLink className={clsx(duration === "month" && active)} href="?type=top&duration=month">
              Month
            </ColoredLink>
          </li>
          <li>
            <ColoredLink className={clsx(duration === "year" && active)} href="?type=top&duration=year">
              Year
            </ColoredLink>
          </li>
          <li>
            <ColoredLink className={clsx(duration === "all" && active)} href="?type=top&duration=all">
              All Time
            </ColoredLink>
          </li>
        </ul>
      )}
    </div>
  );
};
