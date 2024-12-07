import { Container } from "@/components";
import style from "./layout.module.scss";
import { Sidebar } from "@/components/Siderbar/Sidebar";
import { cloneElement } from "react";
import { Aside } from "@/components/Aside/Aside";
const { layout, sidebar, content, news } = style;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <Container className={layout}>
      <Sidebar className={sidebar} />
      {cloneElement(children, { className: content })}
      <Aside className={news} />
    </Container>
  );
}
