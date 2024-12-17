import React from "react";
import { IoBookmarkOutline, IoBookmark, IoChatbubbleOutline } from "react-icons/io5";
import styles from "./Posts.module.scss";

import { Title } from "../Title/Title";
import { Tag } from "./Tag";
import clsx from "clsx";
import { ColoredLink } from "../ColoredLink/ColoredLink";
import Link from "next/link";
import { formatDate } from "@/lib/helpers";

const {
  article,
  tags,
  footer,
  footerLeft,
  footerRight,
  bookmarkIcon,
  icon,
  comments,
  reactions,
  reactionIcons,
  reactionIcon,
  dateTitle,
} = styles;

type Props = {
  className?: string;
  children?: React.ReactNode;
  post: any;
};

const tagList = [
  { name: "react", color: "blue" },
  { name: "webdev", color: "green" },
  { name: "javascript", color: "yellow" },
  { name: "api", color: "red" },
];

export const Post: React.FC<Props> = ({ className, children, post }) => {
  const date = new Date("2024-12-06");

  return (
    <li>
      <article className={article}>
        <p className={dateTitle}>{formatDate(date)}</p>
        <ColoredLink isDark={true} href="/test">
          <Title className="mb-sm" size="md">
            Event-Driven Architecture for Clean React Component Communication
          </Title>
        </ColoredLink>
        <ul className={clsx(tags, "md-md-sm")}>
          {tagList.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </ul>
        <footer className={footer}>
          <div className={footerLeft}>
            <Link href="article_id">
              <div className={reactions}>
                <p className={reactionIcons}>
                  <img className={reactionIcon} src="/icons/good.png" alt="Good icon" />
                  <img className={reactionIcon} src="/icons/bad.png" alt="Bad icon" />
                </p>
                {post.reactions} reactions
              </div>
            </Link>
            <Link className="center" href="article_id">
              <p className={comments}>
                <IoChatbubbleOutline className={icon} />
                {post.commentsTotal} comments
              </p>
            </Link>
          </div>
          <div className={footerRight}>
            <p>{post.minRead} min read</p>
            <button className={bookmarkIcon}>
              <IoBookmarkOutline className={clsx(icon, bookmarkIcon)} />
              {/* <IoBookmark classname={icon} /> */}
            </button>
          </div>
        </footer>
      </article>
    </li>
  );
};
