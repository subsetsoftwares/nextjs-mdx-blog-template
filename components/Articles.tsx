import { Article } from "@/types/article";
import Link from "next/link";
import "./Articles.scss";

interface ArticlesProps {
  articles: Article[];
  title: string;
  pageNumber: number;
}

export default function Articles({
  articles,
  title,
  pageNumber,
}: ArticlesProps) {
  return (
    <div className="articles">
      <h2 className="section-title">{title}</h2>
      <p className="page-count">Page {pageNumber}</p>
      <div className="list">
        {articles.map((article) => (
          <div key={article.slug} className="article">
            <div className="date-column">{article.meta.publishedDate}</div>
            <div className="details-column">
              <h2 className="title">{article.meta.title}</h2>
              <p className="description">{article.meta.description}</p>
              <Link className="read-more" href={`/articles/${article.slug}`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}