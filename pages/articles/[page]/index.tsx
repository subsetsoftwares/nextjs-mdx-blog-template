import Articles from "@/components/Articles";
import Head from "@/components/Head";
import Pagination from "@/components/Pagination";
import { ArticlesPageResult } from "@/types/article";
import { ARTICLES_PAGE_LIMIT } from "@/utility/constants";
import { API_ARTICLES_ALL } from "@/utility/urls";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React from "react";

export async function getStaticPaths() {
  const response = await fetch(API_ARTICLES_ALL);
  const { totalPages } = await response.json();
  const paths = Array.from({ length: totalPages }, (_, index) => ({
    params: { page: (index + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || typeof params.page !== "string") {
    return {
      notFound: true,
    };
  }

  const { page } = params;
  const apiUrl = `${API_ARTICLES_ALL}?page=${page}&limit=${ARTICLES_PAGE_LIMIT}`;
  const response = await fetch(apiUrl);
  const articlesPageResult: ArticlesPageResult = await response.json();

  return {
    props: {
      articlesPageResult,
    },
  };
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articlesPageResult,
}) => {
  return (
    <>
      <Head />
      <Articles
        articles={articlesPageResult.articles}
        title="All Articles"
        pageNumber={articlesPageResult.page}
      />
      <Pagination totalPages={articlesPageResult.totalPages} />
    </>
  );
};

export default Home;
