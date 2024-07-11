import { getTagPageData } from "@/app/api/tag/[tag]/helper";
import { ArticlesPageResult } from "@/types/article";
import { TagCount } from "@/types/tag";
import { DEFAULT_PAGE_LIMIT } from "@/utility/constants";
import { API_TAGS_ALL } from "@/utility/urls";

type Path = { tag: string; page: string };

export async function generateStaticParams() {
  const response = await fetch(API_TAGS_ALL);
  const data = await response.json();
  const tags: TagCount[] = data.tags;
  let paths: Path[] = [];

  // get all pages for a tag
  for (const { tag } of tags) {
    const data = await getTagPageData(tag, 1, DEFAULT_PAGE_LIMIT);
    const articlesPageResult: ArticlesPageResult = data;
    const totalPages = articlesPageResult.totalPages;
    const tagPaths = Array.from({ length: totalPages }, (_, index) => ({
      tag,
      page: (index + 1).toString(),
    }));
    paths = paths.concat(tagPaths);
  }

  return paths;
}
