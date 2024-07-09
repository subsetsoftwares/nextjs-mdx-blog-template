import { generateStaticParams } from "@/app/(application)/tags/[tag]/[page]/generate";
import { getArticles } from "@/helpers/getArticles";
import { ArticlesPageResult } from "@/types/article";
import { ARTICLES_DIRECTORY } from "@/utility/constants";
import { type NextRequest } from "next/server";

export { generateStaticParams };

export async function GET(
  request: NextRequest,
  { params }: { params: { tag: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10");
  const tag = params.tag;

  const startIndex = (page - 1) * limit;
  const allArticles = await getArticles(ARTICLES_DIRECTORY);
  const list = allArticles.filter((article) => {
    if (!article.meta.tags || !tag) return true;
    return article.meta.tags.includes(tag);
  });
  const articles = list.slice(startIndex, startIndex + limit);
  const totalPages = Math.ceil(list.length / limit);
  const data: ArticlesPageResult = { articles, page, limit, totalPages };

  return Response.json(data);
}
