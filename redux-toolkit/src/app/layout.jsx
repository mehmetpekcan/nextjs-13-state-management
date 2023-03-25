import "@/styles.css";

import { Header } from "@/components/header";
import { StoreProvider } from "@/stores/store-provider";
import { store } from "@/stores";

import { Rubik } from "next/font/google";

const BodyFont = Rubik({
  subsets: ["latin"],
});

const fetchUser = async () => Promise.resolve({ id: 1, name: "John Doe" });

export default async function RootLayout({ children }) {
  const user = await fetchUser();

  return (
    <html>
      <body className={BodyFont.className}>
        <StoreProvider
          preloadedState={{
            user: {
              user,
            },
          }}
        >
          <Header />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
