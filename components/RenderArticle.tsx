import { Article } from "@/types/article";
import Markdown from "react-markdown";
import styles from "./RenderArticle.module.scss";
import SyntaxHighlighter from "./SyntaxHighlighter";

export default function RenderArticle({ article }: { article: Article }) {
  return (
    <article className={styles["rendered-article"]}>
      <h1 className={"section-title"}>{article.meta.title}</h1>
      <SyntaxHighlighter>
        <Markdown className={"markdown-preview"}>{article.content}</Markdown>
      </SyntaxHighlighter>
    </article>
  );
}
