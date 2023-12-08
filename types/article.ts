const article = {
  meta: {
    title: "Article One",
    summary: "Here is summary of article one",
    publishedDate: "03/03/2023",
    tags: "javascript, backend-for-frontend, storybook, micro-frontend, typescript",
  },
  content: "\n# Article One\n",
  slug: "article-one",
};

export type Article = typeof article;

export type MetaData = Article["meta"];

export type ArticlesPageResult = {
  articles: Article[];
  page: number;
  limit: number;
  totalPages: number;
};
