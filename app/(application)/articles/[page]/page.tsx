import Articles from "@/components/Articles";
import Head from "@/components/Head";
import Pagination from "@/components/Pagination";
import { ArticlesPageResult } from "@/types/article";
import { DEFAULT_PAGE_LIMIT } from "@/utility/constants";
import { API_ARTICLES_ALL } from "@/utility/urls";

export async function generateStaticParams() {
  const response = await fetch(API_ARTICLES_ALL);
  const { totalPages } = await response.json();
  const paths = Array.from({ length: totalPages }, (_, index) => ({
    page: (index + 1).toString(),
  }));

  return paths;
}

export async function getData(params: any) {
  const { page } = params;
  const apiUrl = `${API_ARTICLES_ALL}?page=${page}&limit=${DEFAULT_PAGE_LIMIT}`;
  const response = await fetch(apiUrl);
  const articlesPageResult: ArticlesPageResult = await response.json();
  return articlesPageResult;
}

export default async function ArticlesPage({ params }: any) {
  const articlesPageResult = await getData(params);
  const getNavigationLink = (page: number) => {
    return `/articles/${page}`;
  };

  return (
    <>
      <Head />
      <Articles
        articles={articlesPageResult.articles}
        title="All Articles"
        pageNumber={articlesPageResult.page}
      />
      <Pagination
        pageNumber={parseInt(params.page)}
        totalPages={articlesPageResult.totalPages}
        getNavigationLink={getNavigationLink}
      />
    </>
  );
}
