import Articles from "@/components/Articles";
import Head from "@/components/Head";
import Pagination from "@/components/Pagination";
import { ArticlesPageResult } from "@/types/article";
import { TagCount } from "@/types/tag";
import { DEFAULT_PAGE_LIMIT } from "@/utility/constants";
import { API_TAG, API_TAGS_ALL } from "@/utility/urls";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

type Path = { params: { tag: string; page: string } };

export async function getStaticPaths() {
  const response = await fetch(API_TAGS_ALL);
  const data = await response.json();
  const tags: TagCount[] = data.tags;
  let paths: Path[] = [];

  // get all pages for a tag
  for (const { tag } of tags) {
    const apiUrl = `${API_TAG}/${tag}?page=1&limit=${DEFAULT_PAGE_LIMIT}`;
    const response = await fetch(apiUrl);
    const articlesPageResult: ArticlesPageResult = await response.json();
    const totalPages = articlesPageResult.totalPages;
    const tagPaths = Array.from({ length: totalPages }, (_, index) => ({
      params: { tag, page: (index + 1).toString() },
    }));
    paths = paths.concat(tagPaths);
  }

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || typeof params.page !== "string") {
    return {
      notFound: true,
    };
  }

  const { page, tag } = params;
  const apiUrl = `${API_TAG}/${tag}?page=${page}&limit=${DEFAULT_PAGE_LIMIT}`;
  const response = await fetch(apiUrl);
  const articlesPageResult: ArticlesPageResult = await response.json();

  return {
    props: {
      articlesPageResult,
    },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function TagPage({ articlesPageResult }: Props) {
  const router = useRouter();
  const tag = router.query.tag;

  const getNavigationLink = (page: number) => {
    return `/tags/${tag}/${page}`;
  };

  if (!articlesPageResult) return null;

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
