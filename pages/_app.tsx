import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import "highlight.js/styles/atom-one-dark.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
