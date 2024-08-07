import { generateStaticParams } from "@/app/(application)/article/[slug]/page";
import { getArticles } from "@/helpers/getArticles";
import { ARTICLES_DIRECTORY } from "@/utility/constants";

export { generateStaticParams };

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const articles = await getArticles(ARTICLES_DIRECTORY);
  const article = articles.find((article) => article.slug === params.slug);
  return Response.json({ article });
}
