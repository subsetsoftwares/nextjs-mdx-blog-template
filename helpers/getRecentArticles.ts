import { Article } from "@/types/article";

export function getRecentArticles(articles: Article[], n: number) {
  return articles
    .sort(
      (a, b) =>
        new Date(b.meta.publishedDate).getTime() -
        new Date(a.meta.publishedDate).getTime()
    )
    .slice(0, n);
}
