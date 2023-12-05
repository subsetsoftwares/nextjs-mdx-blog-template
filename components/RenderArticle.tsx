import { Article } from "@/types/article";
import Markdown from "react-markdown";
import "./RenderArticle.scss";
import SyntaxHighlighter from "./SyntaxHighlighter";

export default function RenderArticle({ article }: { article: Article }) {
  return (
    <article>
      <h2 className="section-title">{article.meta.title}</h2>
      <SyntaxHighlighter>
        <Markdown className="markdown-preview">{article.content}</Markdown>
      </SyntaxHighlighter>
    </article>
  );
}
