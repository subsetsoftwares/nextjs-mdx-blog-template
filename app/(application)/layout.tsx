import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import "highlight.js/styles/atom-one-dark.css";
import { roboto, robotoSlab } from "../(root)/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
