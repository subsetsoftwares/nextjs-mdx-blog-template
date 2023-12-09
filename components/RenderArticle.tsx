import { Article } from "@/types/article";
import Markdown from "react-markdown";
import styles from "./RenderArticle.module.scss";
import SyntaxHighlighter from "./SyntaxHighlighter";

export default function RenderArticle({ article }: { article: Article }) {
  return (
    <article className={styles["rendered-article"]}>
      <h1 className={styles["section-title"]}>{article.meta.title}</h1>
      <SyntaxHighlighter>
        <Markdown className={styles["markdown-preview"]}>
          {article.content}
        </Markdown>
      </SyntaxHighlighter>
    </article>
  );
}
