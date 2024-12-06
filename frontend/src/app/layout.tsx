import type { Metadata } from "next";
import "./globals.scss";

import { roboto } from "@/lib/_fonts";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Tech with SoloDeni - Personal Blog",
  description:
    "Insights, tutorials, and tips on coding, programming, and software development, shared from the personal experiences of a " +
    "passionate developer. Dive into the world of tech, one line of code at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        <main style={{ border: "1px solid red" }} className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
