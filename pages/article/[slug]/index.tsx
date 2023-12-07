import Head from "@/components/Head";
import RenderArticle from "@/components/RenderArticle";
import { Article, ArticlesPageResult } from "@/types/article";
import { DEFAULT_PAGE_LIMIT, MAX_PAGES } from "@/utility/constants";
import { API_ARTICLE, API_ARTICLES_ALL } from "@/utility/urls";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";

export async function getStaticPaths() {
  let page = 1;
  let hasMoreArticles = true;
  const paths = [];

  while (hasMoreArticles) {
    const pageResponse = await fetch(
      `${API_ARTICLES_ALL}?page=${page}&limit=${DEFAULT_PAGE_LIMIT}`
    );
    const articlesPageResult: ArticlesPageResult = await pageResponse.json();
    const { articles, totalPages } = articlesPageResult;

    paths.push(
      ...articles.map((article: Article) => ({
        params: { slug: article.slug },
      }))
    );

    // Check if there are more articles
    hasMoreArticles = !(page === totalPages);

    // limit the number of pages fetched to avoid infinite loop
    if (page >= MAX_PAGES) {
      hasMoreArticles = false;
    }

    page++;
  }

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || typeof params.slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { slug } = params;
  const apiUrl = API_ARTICLE(slug);

  const response = await fetch(apiUrl);
  const data = await response.json();
  const article: Article = data.article;

  return {
    props: {
      article,
    },
  };
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  return (
    <>
      <Head />
      <RenderArticle article={article} />
    </>
  );
};

export default Home;
