import { getArticles } from "@/helpers/getArticles";
import { getTagsWithCounts } from "@/helpers/getTagsWithCount";
import { ARTICLES_DIRECTORY } from "@/utility/constants";

export async function GET() {
  const articles = await getArticles(ARTICLES_DIRECTORY);
  const tags = getTagsWithCounts(articles);
  return Response.json({ tags });
}
