import AboutBanner from "@/components/AboutBanner";
import BigBlock from "@/components/BigBlock";
import Cards from "@/components/Cards";
import Head from "@/components/Head";
import Tags from "@/components/Tags";
import { QUOTE_SOLVE, ZEN_TEMPLE_LARGE_URL } from "@/utility/constants";
import { API_ARTICLES_RECENT, API_TAGS_POPULAR } from "@/utility/urls";
import { InferGetStaticPropsType } from "next";
import React from "react";

export async function getStaticProps() {
  const recentArticlesRes = await fetch(API_ARTICLES_RECENT);
  const recentArticles = await recentArticlesRes.json();

  const popularRes = await fetch(API_TAGS_POPULAR);
  const popularTags = await popularRes.json();

  return {
    props: {
      articles: { recent: recentArticles.recent },
      tags: { popular: popularTags.popular },
    },
  };
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
  tags,
}) => {
  return (
    <>
      <Head />
      <main>
        <AboutBanner imageUrl={ZEN_TEMPLE_LARGE_URL} />
        <Cards title="Recent Articles" cards={articles.recent} />
        <Tags title="Popular Tags" tags={tags.popular} />
        <BigBlock quote={QUOTE_SOLVE} />
      </main>
    </>
  );
};

export default Home;
