import React from "react";
import { ColoredLink, Title } from "@/components";

import styles from "./SearchBar.module.scss";
const { searchBar, form, button, searchResults, resultItem, resultItemTitle, resultItemDate, searchOverlay } = styles;

type Props = {
  className?: string;
  article: { title: string; date: string };
};

export const SearchItem: React.FC<Props> = ({ className, article }) => {
  return (
    <ColoredLink isDark={true} href="/">
      <li className={resultItem}>
        <Title size="xsplus"> {article.title}</Title>
        {/* <p className={resultItemTitle}> {article.title}</p> */}
        <p className={resultItemDate}> {article.date}</p>
      </li>
    </ColoredLink>
  );
};
