import { ArticlesPageResult } from "@/types/article";
import { TagCount } from "@/types/tag";
import { DEFAULT_PAGE_LIMIT } from "@/utility/constants";
import { API_TAG, API_TAGS_ALL } from "@/utility/urls";

type Path = { tag: string; page: string };

export async function generateStaticParams() {
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
      tag,
      page: (index + 1).toString(),
    }));
    paths = paths.concat(tagPaths);
  }

  return paths;
}
