import Articles from "@/components/Articles";
import Head from "@/components/Head";
import Pagination from "@/components/Pagination";
import { ArticlesPageResult } from "@/types/article";
import { DEFAULT_PAGE_LIMIT } from "@/utility/constants";
import { API_TAG } from "@/utility/urls";
import { generateStaticParams } from "./generate";

export { generateStaticParams };

export async function getData(params: any) {
  const { page, tag } = params;
  const apiUrl = `${API_TAG}/${tag}?page=${page}&limit=${DEFAULT_PAGE_LIMIT}`;
  const response = await fetch(apiUrl);
  const articlesPageResult: ArticlesPageResult = await response.json();
  return articlesPageResult;
}

export default async function ArticlesPage(props: {
  params: { tag: string; page: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(props);
  const { params, searchParams } = props;
  const articlesPageResult = await getData(params);
  // TODO fix this
  const tag = "";

  const getNavigationLink = (page: number) => {
    return `/tags/${tag}/${page}`;
  };

  return (
    <>
      <Head />
      <Articles
        articles={articlesPageResult.articles}
        title="articles with tag"
        subtitle={`${tag}`}
        pageNumber={articlesPageResult.page}
      />
      <Pagination
        totalPages={articlesPageResult.totalPages}
        getNavigationLink={getNavigationLink}
      />
    </>
  );
}
