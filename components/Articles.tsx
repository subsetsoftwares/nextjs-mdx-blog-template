import { Article } from "@/types/article";
import Link from "next/link";
import "./Articles.scss";

interface ArticlesProps {
  articles: Article[];
  title: string;
  subtitle?: string;
  pageNumber: number;
}

export default function Articles({
  articles,
  title,
  subtitle,
  pageNumber,
}: ArticlesProps) {
  return (
    <div className="articles">
      <h2 className="section-title">{title}</h2>
      {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
      <p className="page-count">Page {pageNumber}</p>
      <div className="list">
        {articles.map((article) => (
          <div key={article.slug} className="article">
            <div className="date-column">{article.meta.publishedDate}</div>
            <div className="details-column">
              <h3 className="title">{article.meta.title}</h3>
              <p className="summary">{article.meta.summary}</p>
              <Link className="read-more" href={`/article/${article.slug}`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
