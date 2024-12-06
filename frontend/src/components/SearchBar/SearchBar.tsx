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
};

export function SearchBar({ style }: SearchBarProps) {
  return (
    <form className={form}>
      <button className={button}>
        <IoIosSearch />
      </button>
      <input style={style || {}} className={searchBar} type="text" placeholder="Search.." />
    </form>
  );
}
