import { getArticles } from "@/helpers/getArticles";
import { ArticlesPageResult } from "@/types/article";
import { ARTICLES_DIRECTORY } from "@/utility/constants";

export async function getTagPageData(
  tag: string,
  page: number,
  limit: number
): Promise<ArticlesPageResult> {
  const startIndex = (page - 1) * limit;
  const allArticles = await getArticles(ARTICLES_DIRECTORY);
  const list = allArticles.filter((article) => {
    if (!article.meta.tags || !tag) return true;
    return article.meta.tags.includes(tag);
  });
  const articles = list.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(list.length / limit);
  return { articles, page, limit, totalPages };
}
