import { getArticles } from "@/helpers/getArticles";
import { ARTICLES_DIRECTORY } from "@/utility/constants";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10");

  const startIndex = (page - 1) * limit;
  const allArticles = await getArticles(ARTICLES_DIRECTORY);
  const articles = allArticles.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(allArticles.length / limit);

  return Response.json({ articles, page, limit, totalPages });
}
