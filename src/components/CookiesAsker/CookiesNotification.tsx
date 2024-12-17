"use client";

import React, { useState } from "react";

import { Button, Title } from "@/components";

import styles from "./CookiesNotification.module.scss";
import clsx from "clsx";
import { useLocalStorage } from "@/hooks";
const { container } = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const LOCAL_STORAGE_KEY = "cookies_agreed_to_by_user";
const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
const ACCEPT_ANSWER_FOR = sevenDaysInMs;

export const CookiesNotification: React.FC<Props> = ({ className, children }) => {
  // "2024-06-10T12:00:00"
  const { value, updateLocalStorage } = useLocalStorage(LOCAL_STORAGE_KEY);

  function checkIfNeedsToAgree() {
    if (value === null) return true;
    if (new Date().getTime() - new Date(value).getTime() >= ACCEPT_ANSWER_FOR) {
      return true;
    }
    return false;
  }

  if (checkIfNeedsToAgree()) {
    return (
      <div className={clsx(className, container)}>
        <div style={{ textAlign: "center" }}>
          <Title className="mb-xs">Cookies on Solodeni Blog</Title>
        </div>

        <p className="mb-xs">
          My website uses only necessary cookies for authentication and related services to ensure a secure and
          functional user experience. By continuing to use this site, you agree to our use of cookies.
        </p>
        <Button variant="btn" onClick={() => updateLocalStorage(new Date().toISOString())}>
          OK, I understand
        </Button>
      </div>
    );
  }
  return null;
};
