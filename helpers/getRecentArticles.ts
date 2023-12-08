import { Article } from "@/types/article";

const sortByPublishedDate = (a: Article, b: Article) => {
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    // Convert to YYYY-MM-DD format
    return `${year}-${month}-${day}`;
  };

  const dateA = new Date(parseDate(a.meta.publishedDate)).getTime();
  const dateB = new Date(parseDate(b.meta.publishedDate)).getTime();

  return dateB - dateA;
};

export function getRecentArticles(articles: Article[], n: number) {
  const sortedArticles = articles.sort(sortByPublishedDate);
  const recent = sortedArticles.slice(0, n);
  return recent;
}
