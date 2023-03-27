import "@/styles.css";

import { Header } from "@/components/header";

import { Rubik } from "next/font/google";

const BodyFont = Rubik({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={BodyFont.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
