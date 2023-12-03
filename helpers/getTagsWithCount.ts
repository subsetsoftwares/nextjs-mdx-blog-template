import { Article } from "@/types/article";
import { TagCount } from "@/types/tag";

export function getTagsWithCounts(
  articles: Article[],
  limit?: number
): TagCount[] {
  const tagMap: Record<string, number> = {};

  // Count the occurrences of each tag
  articles.forEach((article) => {
    const tags = article.meta.tags.split(",").map((tag) => tag.trim());

    tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });

  // Convert the tagMap to an array of objects
  const tagCounts = Object.entries(tagMap).map(([tag, count]) => ({
    tag,
    count,
  }));

  // Sort the array by count in descending order
  tagCounts.sort((a, b) => b.count - a.count);

  // Return limited items if limit passed, otherwise return all
  return limit ? tagCounts.slice(0, limit) : tagCounts;
}
