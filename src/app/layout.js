import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blogify",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title.default}</title>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[584px] ">{children}</div>
      </body>
    </html>
  );
}
