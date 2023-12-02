import Cards from "@/components/Cards";
import Head from "@/components/Head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import { InferGetStaticPropsType } from "next";
import React from "react";

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/articles/recent`);
  const recentApiResponse = await res.json();
  const recentArticles = recentApiResponse.articles;
  return { props: { articles: { recent: recentArticles } } };
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <>
      <Head />
      <main>
        <Header />
        <HeroBanner />
        <Cards title="Recent Articles" cards={articles.recent} />
      </main>
    </>
  );
};

export default Home;
