import Cards from "@/components/Cards";
import Center from "@/components/Center";
import Head from "@/components/Head";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/articles`);
  const { articles } = await res.json();
  return { props: { articles } };
}

const Home: React.FC = ({ articles }: any) => {
  return (
    <>
      <Head />
      <main>
        <Header />
        <Center />
        <Cards cards={articles} />
      </main>
    </>
  );
};

export default Home;
