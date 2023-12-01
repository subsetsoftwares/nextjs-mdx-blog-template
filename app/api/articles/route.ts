import { getArticles } from "@/helpers/getArticles";
import { ARTICLES_DIRECTORY } from "@/utility/constants";

export async function GET() {
  const articles = await getArticles(ARTICLES_DIRECTORY);
  return Response.json({ articles });
}
