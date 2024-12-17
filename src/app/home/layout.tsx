import { cloneElement } from "react";
import { Container, Sidebar, Aside } from "@/components";

import style from "./layout.module.scss";
const { layout, sidebar, content, news } = style;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <Container className={layout}>
      <Sidebar />
      {cloneElement(children, { className: content })}
      <Aside className={news} />
    </Container>
  );
}
