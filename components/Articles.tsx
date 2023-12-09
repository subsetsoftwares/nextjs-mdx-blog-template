import { Article } from "@/types/article";
import Link from "next/link";
import styles from "./Articles.module.scss";

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
    <div className={styles["articles"]}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <h3 className={"section-subtitle"}>{subtitle}</h3>}
      <p className={styles["page-count"]}>Page {pageNumber}</p>
      <div className={styles["list"]}>
        {articles.map((article) => (
          <div key={article.slug} className={styles["article"]}>
            <div className={styles["date-column"]}>
              {article.meta.publishedDate}
            </div>
            <div className={styles["details-column"]}>
              <h3 className={styles["title"]}>{article.meta.title}</h3>
              <p className={styles["summary"]}>{article.meta.summary}</p>
              <Link
                className={styles["read-more"]}
                href={`/article/${article.slug}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
