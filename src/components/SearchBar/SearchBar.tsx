"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { IoIosSearch } from "react-icons/io";

import { Button, ColoredLink, Overlay } from "@/components";

import styles from "./SearchBar.module.scss";
const { searchBar, form, button, searchResults, info, list } = styles;

import { formatDate } from "@/lib/helpers";
import { SearchItem } from "./SearchItem";

type StyleOptions = {
  width?: string;
  height?: string;
  outlineColor?: string;
  fontSize?: string;
};

type SearchBarProps = {
  style?: StyleOptions;
  className?: string;
};

const mockBackEnd = [
  { title: "event", date: formatDate(new Date()) },
  { title: "java", date: formatDate(new Date()) },
  { title: "python", date: formatDate(new Date()) },
  { title: "machine learning", date: formatDate(new Date()) },
  { title: "javascript", date: formatDate(new Date()) },
];

export function SearchBar({ style, className }: SearchBarProps) {
  const [isSearching, setIsSearching] = useState<boolean>(false); // about focus
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<{ title: string; date: string }[]>([]);

  useEffect(() => {
    // MOCK API CALL (for now)
    if (keyword === "") {
      setResults([]);
      return;
    }
    setResults(mockBackEnd.filter((article) => article.title.toLowerCase().includes(keyword.toLowerCase())));
  }, [keyword]);

  const showResults = isSearching && results.length > 0;

  return (
    <>
      <Overlay isActive={showResults} />
      <form className={clsx(className, form)}>
        <button className={button}>
          <IoIosSearch />
        </button>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={style || {}}
          className={searchBar}
          type="text"
          placeholder="Search.."
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
        />
        {showResults && (
          <div className={searchResults}>
            <ul className={list}>
              {results.map((article, i) => (
                <SearchItem article={article} key={article.title + "--" + article.date} />
              ))}
            </ul>
            <Button variant="simple" className={info}>
              Submit search for advanced filtering
            </Button>
          </div>
        )}
      </form>
    </>
  );
}
