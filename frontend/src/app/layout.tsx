import type { Metadata } from "next";
import "./globals.scss";

import { roboto } from "@/lib/fonts";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { SideBarStateProvider } from "@/context/SidebarContext";

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
    <SideBarStateProvider>
      <html lang="en">
        <body className={`${roboto.className}`}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </body>
      </html>
    </SideBarStateProvider>
  );
}
