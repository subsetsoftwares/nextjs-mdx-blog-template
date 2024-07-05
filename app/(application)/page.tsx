import AboutBanner from "@/components/AboutBanner";
import BigBlock from "@/components/BigBlock";
import Cards from "@/components/Cards";
import Head from "@/components/Head";
import Tags from "@/components/Tags";
import {
  QUOTE_SOLVE,
  QUOTE_SOLVE_SUBTITLE,
  ZEN_TEMPLE_LARGE_URL,
} from "@/utility/constants";
import { API_ARTICLES_RECENT, API_TAGS_POPULAR } from "@/utility/urls";

export async function getPageData() {
  const recentArticlesRes = await fetch(API_ARTICLES_RECENT);
  const recentArticles = await recentArticlesRes.json();

  const popularRes = await fetch(API_TAGS_POPULAR);
  const popularTags = await popularRes.json();

  return {
    articles: { recent: recentArticles.recent },
    tags: { popular: popularTags.popular },
  };
}

export default async function Page() {
  const { articles, tags } = await getPageData();
  return (
    <>
      <Head />
      <AboutBanner imageUrl={ZEN_TEMPLE_LARGE_URL} />
      <Cards title="Recent Articles" cards={articles.recent} />
      <Tags title="Popular Tags" tags={tags.popular} showCount={true} />
      <BigBlock quote={QUOTE_SOLVE} subtitle={QUOTE_SOLVE_SUBTITLE} />
    </>
  );
}
