import React from "react";
import { AsideBlock } from "./AsideBlock";
import { AsideItem } from "./AsideItem";

const items = [
  { title: "The Memes Of The Day1", commentsTotal: 3, href: "jkefnlk4" },
  { title: "The Memes Of The Day2", commentsTotal: 3, href: "jkefnlk6" },
  {
    title: "TIn my projects, I aim to push the boundaries of conventional web design",
    commentsTotal: 3,
    href: "jkefnlk1",
  },
  { title: "The Memes Of The Da3", commentsTotal: 3, href: "jkefnlk8" },
  {
    title: "In my projects, I aim to push the boundaries of conventional web design",
    commentsTotal: 3,
    href: "jkefnlk2",
  },
  { title: "The Memes Of The Day4", commentsTotal: 3, href: "jkefnlk7" },
];

export const Watercooler: React.FC = () => {
  return (
    <AsideBlock
      title="#watercooler"
      description="Light, and off-topic conversation."
      items={items}
      render={(item) => (
        <AsideItem key={item.href} title={item.title} commentsTotal={item.commentsTotal} href={item.href} />
      )}
      href="/example"
    />
  );
};
