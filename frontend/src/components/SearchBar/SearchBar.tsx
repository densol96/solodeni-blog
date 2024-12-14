import clsx from "clsx";
import styles from "./SearchBar.module.scss";
const { searchBar, form, button } = styles;

import { IoIosSearch } from "react-icons/io";

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

export function SearchBar({ style, className }: SearchBarProps) {
  return (
    <form className={clsx(className, form)}>
      <button className={button}>
        <IoIosSearch />
      </button>
      <input style={style || {}} className={searchBar} type="text" placeholder="Search.." />
    </form>
  );
}
