import { getArticles } from "@/helpers/getArticles";
import { getTagsWithCounts } from "@/helpers/getTagsWithCount";
import { ARTICLES_DIRECTORY, TOP_TAGS_LIMIT } from "@/utility/constants";

export async function GET() {
  const articles = await getArticles(ARTICLES_DIRECTORY);
  const popular = getTagsWithCounts(articles, TOP_TAGS_LIMIT);
  return Response.json({ popular });
}
