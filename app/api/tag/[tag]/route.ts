import { type NextRequest } from "next/server";
import { generateStaticParams } from "./generate";
import { getTagPageData } from "./helper";

export { generateStaticParams };

export async function GET(
  request: NextRequest,
  { params }: { params: { tag: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10");
  const tag = params.tag;

  const data = await getTagPageData(tag, page, limit);

  return Response.json(data);
}
