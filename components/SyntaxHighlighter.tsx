import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { PropsWithChildren, useEffect } from "react";

export default function SyntaxHighlighter({ children }: PropsWithChildren) {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.autoDetection("");
  }, [children]);

  return <>{children}</>;
}
