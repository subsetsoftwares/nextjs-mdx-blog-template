import Cards from "@/components/Cards";
import Center from "@/components/Center";
import Description from "@/components/Description";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
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
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <Description />
        <Center />
        <Cards cards={articles} />
      </main>
    </>
  );
};

export default Home;
