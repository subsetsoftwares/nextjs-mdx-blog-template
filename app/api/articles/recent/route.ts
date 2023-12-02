import { getArticles } from "@/helpers/getArticles";
import { getRecentArticles } from "@/helpers/getRecentArticles";
import { ARTICLES_DIRECTORY, RECENT_ARTICLES_COUNT } from "@/utility/constants";

export async function GET() {
  const articles = await getArticles(ARTICLES_DIRECTORY);
  return Response.json({
    articles: getRecentArticles(articles, RECENT_ARTICLES_COUNT),
  });
}
